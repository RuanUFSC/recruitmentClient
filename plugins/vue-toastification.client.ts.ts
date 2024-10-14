import { defineNuxtPlugin } from '#app'
import * as vt from 'vue-toastification'
import '@/node_modules/vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vt.default)
  return {
    provide: {
      toast: vt.useToast()
    }
  }
})