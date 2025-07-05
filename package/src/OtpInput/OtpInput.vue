<script lang="ts">
export interface OtpInputProps {
  /**
   * Number of OTP inputs
   * @default 6
   */
  otpLength?: number;

  /**
   * Wrapper class for the container
   */
  wrapperClass?: string;

  /**
   * Class applied to each input
   */
  inputClass?: string;

  /**
   * Whether to auto-focus the first input on mount
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Whether input is marked invalid (adds aria-invalid and styling)
   * @default false
   */
  invalid?: boolean;

  /**
   * Class applied when input is marked invalid
   */
  invalidClass?: string;

  /**
   * Whether to disable inputs
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether inputs should be read-only
   * @default false
   */
  readonly?: boolean;
}

export interface OtpInputEmits {
  /**
   * As each box input gets populated this emits the new value
   */
  (e: 'input', otp: string): void;
}
</script>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from 'vue';

const emit = defineEmits<OtpInputEmits>();

const {
  otpLength = 6,
  wrapperClass = '',
  inputClass = '',
  autoFocus = true,
  invalid = false,
  invalidClass = '',
  disabled = false,
  readonly = false,
} = defineProps<OtpInputProps>();

const inputRefs = useTemplateRef('inputs');
const inputValues = ref<string[]>(Array(otpLength).fill(''));

onMounted(() => {
  if (autoFocus) {
    inputRefs.value?.[0]?.focus();
  }
});

watch(
  inputValues,
  () => {
    emit('input', inputValues.value.join(''));
  },
  { deep: true },
);

const handleOtpInput = (i: number) => {
  const val = inputRefs.value?.[i].value;

  if (val && !isNaN(parseInt(val)) && val.length === 1) {
    inputValues.value[i] = val;

    const next = inputRefs.value?.[i + 1];
    if (next) {
      next.focus();
    }
  } else {
    inputValues.value[i] = '';
  }
};

const handleOtpBackspace = (i: number) => {
  const val = inputRefs.value?.[i].value;

  if (val === '' && i > 0) {
    const prev = inputRefs.value?.[i - 1];

    if (prev) {
      prev.focus();
    }
  }
};

const handlePaste = (e: ClipboardEvent) => {
  e.preventDefault();

  const data = e.clipboardData?.getData('text') ?? '';

  const regex = new RegExp(`^\\d{${otpLength}}$`);

  if (!regex.test(data)) {
    return;
  }

  inputValues.value = data.split('');
};
</script>

<template>
  <div :class="wrapperClass">
    <input
      v-for="(_, index) in inputValues"
      :key="index"
      ref="inputs"
      v-model="inputValues[index]"
      type="text"
      maxlength="1"
      inputmode="numeric"
      :class="[
        inputClass,
        {
          [invalidClass]: invalid,
        },
      ]"
      :disabled="disabled"
      :readonly="readonly"
      :aria-label="`Digit ${index + 1}`"
      :aria-invalid="invalid"
      @keydown.delete="handleOtpBackspace(index)"
      @input="handleOtpInput(index)"
      @paste="handlePaste"
    />
  </div>
</template>
