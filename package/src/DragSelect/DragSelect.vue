<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
export interface DragSelectProps {
  /**
   * Items to be used by Drag Select
   */
  items: any[];

  /**
   * Disable selected item styles
   * @default false
   */
  disableSelectedStyles?: boolean;

  /**
   * Remove all selected items
   * @default false
   */
  enableEscapeReset?: boolean;
}

export interface DragSelectSlots {
  /**
   * Above but within the selected area
   */
  header(): any;

  /**
   * Allows the slot for every item in the selectable area
   */
  item(props: { item: any; index: number; isSelected: boolean }): any;

  /**
   * Below but within the selected area
   */
  footer(): any;
}
</script>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from 'vue';

defineOptions({
  inheritAttrs: false,
});

defineSlots<DragSelectSlots>();

class DOMVector {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly magnitudeX: number,
    readonly magnitudeY: number,
  ) {
    this.x = x;
    this.y = y;
    this.magnitudeX = magnitudeX;
    this.magnitudeY = magnitudeY;
  }

  toDOMRect(): DOMRect {
    // this allows us to store a negative magnitude
    // but gives us the option to transform it to a positive
    // width and height
    return new DOMRect(
      Math.min(this.x, this.x + this.magnitudeX),
      Math.min(this.y, this.y + this.magnitudeY),
      Math.abs(this.magnitudeX),
      Math.abs(this.magnitudeY),
    );
  }

  getDiagonalLength(): number {
    // pythagorean theorem
    return Math.sqrt(Math.pow(this.magnitudeX, 2) + Math.pow(this.magnitudeY, 2));
  }
}

const props = withDefaults(defineProps<DragSelectProps>(), {
  disableSelectedStyles: false,
  enableEscapeReset: false,
});

const selectedItems = defineModel<any[]>({ required: true });

const selectorVector = ref<DOMVector | null>(null);
const isMetaKeyDown = ref<boolean>(false);

const isDragging = computed(() => {
  if (!selectorVector.value) {
    return false;
  }

  return selectorVector.value.getDiagonalLength() > 10;
});

function initSelectorVector(e: any) {
  // only start pointer events from left mouse click
  if (e.button !== 0 || e.pointerType === 'touch') {
    return;
  }

  const containerRect = e.currentTarget?.getBoundingClientRect();

  const relativeX = e.clientX - containerRect?.x;
  const relativeY = e.clientY - containerRect?.y;

  selectorVector.value = new DOMVector(relativeX, relativeY, 0, 0);

  // until this pointer cycle is complete only trigger pointer events from this element.
  e.currentTarget.setPointerCapture(e.pointerId);
}

function setSelectorVector(e: any) {
  // shouldnt happen
  if (!selectorVector.value) {
    return;
  }

  const containerRect = e.currentTarget.getBoundingClientRect();

  // starting point
  const originX = selectorVector.value.x;
  const originY = selectorVector.value.y;

  // new point
  const relativeX = e.clientX - containerRect.x;
  const relativeY = e.clientY - containerRect.y;

  selectorVector.value = new DOMVector(originX, originY, relativeX - originX, relativeY - originY);
}

const refItems = useTemplateRef('ref-items');
const refSelection = useTemplateRef('ref-selection');

function collides(a: Element, b: Element) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  if (aRect.right < bRect.left || bRect.right < aRect.left) {
    return false;
  }

  if (aRect.bottom < bRect.top || bRect.bottom < aRect.top) {
    return false;
  }

  return true;
}

watch(selectorVector, () => {
  if (!selectorVector.value || !refItems.value) {
    return;
  }

  const tempSelectedItems: any[] = [];

  refItems.value.forEach((refItem) => {
    if (!refSelection.value) {
      return;
    }

    if (!collides(refSelection.value, refItem)) {
      return;
    }

    const itemIndex = Number(refItem.id);
    const item = props.items[itemIndex];

    // only allow single add when meta key is pressed
    if (!selectedItems.value.includes(item) && isMetaKeyDown.value) {
      selectedItems.value.push(item);
    }

    tempSelectedItems.push(item);
  });

  // if meta key is not pressed then replace selectedItems
  if (!isMetaKeyDown.value) {
    selectedItems.value = tempSelectedItems;
  }
});

function addSelectedItem(index: number) {
  if (!isMetaKeyDown.value) {
    return;
  }

  selectedItems.value.push(props.items[index]);
}

const selectorStyle = computed(() => {
  const selectionRect = selectorVector.value?.toDOMRect();

  if (!selectionRect) {
    return;
  }

  return {
    top: selectionRect.y + 'px',
    left: selectionRect.x + 'px',
    width: selectionRect.width + 'px',
    height: selectionRect.height + 'px',
  };
});
</script>

<template>
  <div
    class="dui:relative dui:select-none"
    @pointerdown="initSelectorVector"
    @pointermove="setSelectorVector"
    @pointerup="selectorVector = null"
    @keydown="
      (e) => {
        if (e.key === 'Escape' && enableEscapeReset) {
          selectorVector = null;
          selectedItems = [];
        } else if (e.key === 'Meta') {
          isMetaKeyDown = true;
        }
      }
    "
    @keyup="
      (e) => {
        if (e.key === 'Meta') {
          isMetaKeyDown = false;
        }
      }
    "
  >
    <slot name="header" />

    <div :class="$attrs.class" tabindex="-1" @pointerdown="(e: any) => e.currentTarget.focus()">
      <div
        ref="ref-items"
        v-for="(item, index) in items"
        :key="index"
        :id="String(index)"
        class="item"
        :class="{
          'dui:relative dui:after:absolute dui:after:inset-0 dui:after:content-[\'\']':
            selectedItems.includes(item) && !disableSelectedStyles,
        }"
        @pointerdown="addSelectedItem(index)"
      >
        <slot name="item" :item :index :isSelected="selectedItems.includes(item)">
          {{ index }}
        </slot>
      </div>

      <div
        ref="ref-selection"
        v-if="isDragging"
        class="selector dui:absolute dui:border-2"
        :style="selectorStyle"
      />
    </div>

    <slot name="footer" />
  </div>
</template>

<style scoped>
.item::after {
  background-color: var(--dui-drag-select-item-bg-color);
  opacity: 25%;
}

.selector {
  background-color: var(--dui-drag-selector-color);
  border-color: var(--dui-drag-selector-color);
}
</style>
