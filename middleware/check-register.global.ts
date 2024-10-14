import { defineNuxtRouteMiddleware, useRouter } from 'nuxt/app';
import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, _) => {
    const authStore = useAuthStore();
    const cadastroCompleto = authStore.cadastroCompleto    
    const usuario = authStore.usuario  
    console.log('usuario', usuario)
    if (to.path.includes('/dashboard') && !cadastroCompleto) {
        return navigateTo(`/registro/detalhes/candidato`); 
    }
  }
)