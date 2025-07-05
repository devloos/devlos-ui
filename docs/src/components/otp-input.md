# Otp Input

A customizable OTP (One-Time Password) input component. Supports keyboard input, paste, validation styles, accessibility, and full keyboard navigation.

## Setup

Import the component into your Vue app:

```ts
import { OtpInput } from "devlos-ui";
```

Use the component with two-way binding:

```html
<OtpInput @input="(otp) => setOtp(otp)" />
```

## Demo

Enter one digit per input field. Paste support is included.

<script setup>
import OtpInputDemo from "../demos/OtpInputDemo.vue";
</script>

::: raw
<OtpInputDemo />
:::

## Props

```ts
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
```

## Emits

```ts
interface OtpInputEmits {
  /**
   * Emits the full OTP string on input
   */
  (e: "input", otp: string): void;
}
```

## Features

- Auto-focus and keyboard navigation
- Auto-advances on valid input
- Backspace navigation
- Full paste support
- Accessibility-ready (`aria-label`, `aria-invalid`)
- Fully customizable styles via `inputClass` and `wrapperClass`

## Notes

- Clipboard paste auto-fills the OTP
- Recommended input mode: `numeric` for mobile-friendly UX

## Source

[Source](https://github.com/devloos/devlos-ui/blob/main/package/src/OtpInput/OtpInput.vue) • [Demo](https://github.com/devloos/devlos-ui/blob/main/docs/src/demos/OtpInput.vue)

## Credits

- [Connor Darling](https://github.com/connor-darling)
