<template>
  <div v-if="isValidType">
    <h1 class="text-center h4">Registro de {{ tipo }}</h1>
    <AuthForm @submit="register" submit-text="Cadastrar">
      <div class="form-floating mb-3">
        <Field id="name" name="name" type="text" class="form-control" placeholder/>
        <label for="name">Nome</label>
        <ErrorMessage name="name" class="text-danger small" />
      </div>
      <div class="form-floating mb-3">
        <Field id="email" name="email" type="email" class="form-control" placeholder />
        <label for="email">Email</label>
        <ErrorMessage name="email" class="text-danger small" />
      </div>
      <div class="form-floating mb-3">
        <Field id="password" name="password" type="password" class="form-control" placeholder  />
        <label for="password" class="form-label">Senha</label>
        <ErrorMessage name="password" class="text-danger small" />
      </div>
      <div class="form-floating mb-3">
        <Field id="confirmPassword" name="confirmPassword" type="password" class="form-control"  placeholder/>
        <label for="confirmPassword" class="form-label">Confirme a Senha</label>
        <ErrorMessage name="confirmPassword" class="text-danger small" />
      </div>
    </AuthForm>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
import { Field, ErrorMessage } from 'vee-validate';
import checkUserType from '~/middleware/check-user-type';
const tipo = useRoute().params.tipo;
const isValidType = ref(tipo === 'recrutador' || tipo === 'candidato');

definePageMeta({
  layout: 'auth',
  middleware: checkUserType
});

const register = async (values) => {
  try {
    const { name, email, password } = values;
    await authStore.register({ name, email, password, role: tipo })
  } catch (error) {
    console.error(error);
  }
};
</script>