import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: { stylistic: false },
}).append(
  { ignores: ['.nuxt/**', '.output/**', '.playground/.nuxt/**', '.playground/.output/**'] },
  { files: ['**/pages/**/*.vue', '**/layouts/**/*.vue'], rules: { 'vue/multi-word-component-names': 'off' } },
)
