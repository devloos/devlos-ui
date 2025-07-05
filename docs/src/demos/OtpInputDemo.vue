<script setup>
import { OtpInput } from "devlos-ui";
</script>

<template>
  <div>
    <OtpInput
      wrapper-class="flex justify-center gap-2"
      input-class="border border-primary rounded focus:outline-primary focus:outline-offset-4 size-10 text-center"
      invalid-class="border-error focus:outline-error"
    />
  </div>
</template>
