// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/theme.css',
    '~/assets/css/icones.css',
    '~/assets/css/bootstrap.css',
    '~/assets/css/spacing.css',
    '~/assets/css/main.css'
  ],
  plugins: [
    '~/plugins/script',
    '~/plugins/backgroundImage'
  ],
  modules:[
    '@pinia/nuxt',
    'nuxt-swiper',
    'nuxt-gtag',
    'nuxt-jsonld',
    'nuxt-meta-pixel'
  ],
  ssr: true,
  gtag: {
    id: 'G-R7WKZHKB4Q'
  },
  runtimeConfig: {
    public: {
      metapixel: {
        default: { id: '1108586520840585', autoconfig: true },

      }
    }}
})