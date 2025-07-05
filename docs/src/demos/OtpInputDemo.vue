<script setup lang="ts">
import { OtpInput } from "devlos-ui";
import { ref, watch } from "vue";

const isInvalid = ref(false);
</script>

<template>
  <div>
    <OtpInput
      wrapper-class="flex justify-center gap-2"
      input-class="border border-primary rounded focus:outline-primary focus:outline-offset-4 size-10 text-center"
      invalid-class="border-error! focus:outline-error!"
      :invalid="isInvalid"
    />

    <input id="invalid-check" v-model="isInvalid" type="checkbox" />
    <label for="invalid-check">Check for invalid</label>
  </div>
</template>
