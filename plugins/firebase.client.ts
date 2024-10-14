import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { defineNuxtPlugin } from '#app'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.firebase.apiKey,
    authDomain: config.public.firebase.authDomain,
    projectId: config.public.firebase.projectId,
    storageBucket: config.public.firebase.storageBucket,
    messagingSenderId: config.public.firebase.messagingSenderId,
    appId: config.public.firebase.appId,
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)

  const authStore = useAuthStore()
  authStore.initAuth()
})
