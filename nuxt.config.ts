// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/theme.css',
    '~/assets/css/icones.css',
    '~/assets/css/bootstrap.css',
    '~/assets/css/spacing.css',
  ],
  plugins: [
    '~/plugins/script',
  ],
  modules:[
    '@pinia/nuxt',
  ]
})
