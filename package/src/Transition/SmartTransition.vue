<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: 'fade',
  },
  mode: {
    type: String,
    default: '',
  },
  duration: {
    type: [String, Number],
    default: 300,
  },
});

const durationMS = computed(() => `${props.duration}ms`);
</script>

<template>
  <Transition :name="name" :mode="mode">
    <!-- eslint-disable-next-line vue/require-toggle-inside-transition -->
    <slot />
  </Transition>
</template>

<style lang="scss">
.fade {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all v-bind(durationMS) ease-in-out;
  }
}

.slide-from-right {
  &-enter-from {
    translate: 100%;
  }

  &-enter-active {
    transition: all v-bind(durationMS) ease-in-out;
  }

  &-leave-active {
    transition: all v-bind(durationMS) ease-in-out;
  }

  &-leave-to {
    translate: 100%;
  }
}
</style>
