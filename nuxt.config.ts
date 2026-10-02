// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/styles"],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"]
  }
})
