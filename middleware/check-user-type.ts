import { defineNuxtRouteMiddleware, useRouter } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, _) => {
  const tipo = to.params.tipo
  const { $toast } = useNuxtApp();

  if (tipo !== 'recrutador' && tipo !== 'candidato') {
    $toast?.error('Tipo de usuário inválido');
    useRouter().push('/'); 
  }
});