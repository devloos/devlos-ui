<script setup>
import { onMounted, useTemplateRef } from 'vue';

const modal = useTemplateRef('modal');

onMounted(() => {
  if (modal.value) {
    modal.value.showModal();
  }
});
</script>

<template>
  <div>
    <dialog ref="modal" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        <slot name="header">
          <h3 class="text-lg font-bold">Hello!</h3>
        </slot>
        <hr />
        <slot name="body">
          <p class="py-4">Press ESC key or click on ✕ button to close</p>
        </slot>
      </div>
    </dialog>
  </div>
</template>
