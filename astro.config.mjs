// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Boldonse',
      cssVariable: '--font-boldonse',
    },
    {
      provider: fontProviders.local(),
      name: 'AktivGrotesk',
      cssVariable: '--font-aktiv-grotesk',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/AktivGroteskCorp-Regular.woff2'],
            weight: 'normal',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/AktivGroteskCorp-Bold.woff2'],
            weight: 'bold',
            style: 'normal',
          },
        ],
      },
    },
  ],
})
