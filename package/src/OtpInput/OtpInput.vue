<script lang="ts">
export interface OtpInputProps {
  /**
   * Number of inputs
   * @default 6
   */
  otpLength?: number;

  /**
   * Wrapper for all inputs class
   */
  wrapperClass?: string;

  /**
   * Class for each input
   */
  inputClass?: string;

  /**
   * Whether it should auto focus
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Whether otp input is invalid
   * @default false
   */
  invalid?: boolean;

  /**
   * Class for each invalid input
   */
  invalidClass?: string;

  /**
   * Whether each input should be disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether each input should be readonly
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
  wrapperClass = 'flex justify-center gap-2',
  inputClass = 'border border-cyan-700 rounded focus:outline-cyan-700 focus:outline-offset-4 size-10 text-center',
  autoFocus = true,
  invalid = false,
  invalidClass = 'border-red-700 focus:outline-red-700',
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
      :class="[inputClass, invalid ? invalidClass : '']"
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
