<template>
  <div>
    <h1>Entre na sua conta</h1>
    <AuthForm @submit="login" submit-text="Entrar" :validation-schema="loginSchema">
      <div class="form-floating mb-3">
        <Field id="email" name="email" type="email" class="form-control" placeholder/>
        <label for="email" class="form-label">Email</label>
        <ErrorMessage name="email" class="text-danger small"/>
      </div>
      <div class="form-floating mb-3">
        <Field id="password" name="password" type="password" class="form-control" placeholder />
        <label for="password" class="form-label">Senha</label>
        <ErrorMessage name="password" class="text-danger small"/>
      </div>

    </AuthForm>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const { $toast } = useNuxtApp()

definePageMeta({
  layout: 'auth'
});

const loginSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

const authStore = useAuthStore()

const login = async (values) => {
  try {
    const { email, password } = values;
    await authStore.login(email, password)
  } catch (error) {
    $toast.error(error)
  }
}


</script>