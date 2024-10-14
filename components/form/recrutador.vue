<template>
  <div>
    <h2 class="text-center h4">Cadastrar Recrutador</h2>
    <form>
      <div class="form-floating mb-3">
        <Field id="company" v-model="company" name="company" type="text" class="form-control" placeholder />
        <label for="company">Empresa</label>
        <ErrorMessage name="company" class="text-danger small" />
      </div>

      <div class="form-floating mb-3">
        <Field id="position" v-model="position" name="position" type="text" class="form-control" placeholder />
        <label for="position">Cargo</label>
        <ErrorMessage name="position" class="text-danger small" />
      </div>

      <div class="form-floating mb-3">
        <Field id="phone" v-model="phone" name="phone" type="text" class="form-control" placeholder />
        <label for="phone">Telefone</label>
        <ErrorMessage name="phone" class="text-danger small" />
      </div>
      <button :disabled="isSubmitting" @click.prevent="registerRecruiter" class="btn btn-primary form-control">{{ isSubmitting ? 'Enviando...' : 'Enviar' }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { Field, ErrorMessage } from 'vee-validate';

const company = ref('');
const position = ref('');
const phone = ref('');
const isSubmitting = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const registerRecruiter = async (values) => {
  try {
    isSubmitting.value = true;
    const response = await fetch('http://localhost:8000/api/recruiters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authStore.getToken,
      },
      body: JSON.stringify({
        company: company.value,
        position: position.value,
        phone: phone.value,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao cadastrar recrutador');
    }

    alert('Recrutador cadastrado com sucesso!');
    router.push('/recrutador');
  } catch (error) {
    alert(`Erro: ${error.message}`);
    isSubmitting.value = false;
  }
};
</script>
