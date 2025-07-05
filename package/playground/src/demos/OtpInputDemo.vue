<script setup lang="ts">
import OtpInput from '@/OtpInput/OtpInput.vue';
</script>

<template>
  <div>
    <OtpInput
      wrapper-class="dui:flex dui:justify-center dui:gap-2"
      input-class="dui:border dui:border-cyan-700 dui:rounded dui:focus:outline-cyan-700 dui:focus:outline-offset-4 dui:size-10 dui:text-center"
      invalid-class="dui:border-red-700 dui:focus:outline-red-700"
    />
  </div>
</template>
