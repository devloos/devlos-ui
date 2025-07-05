<script setup>
import { OtpInput } from "devlos-ui";
</script>

<template>
  <div>
    <OtpInput
      wrapper-class="flex justify-center gap-2"
      input-class="border border-cyan-700 rounded focus:outline-cyan-700 focus:outline-offset-4 size-10 text-center"
      invalid-class="border-red-700 focus:outline-red-700"
    />
  </div>
</template>
