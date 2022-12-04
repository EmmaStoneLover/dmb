import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light': '#b3b3b3',
        'primary': '#c8d1c5',
        'primary-bg': '#efefef',
        'primary-dark': '#35423c',
        'primary-dark-bg': '#262a29'
      }
    }
  }
} as Options;
