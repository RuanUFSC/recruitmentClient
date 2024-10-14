<template>
  <div>
    <h2 class="text-center h4">Cadastrar Candidato</h2>
    <form>
      <div class="form-floating mb-3">
        <Field v-model="experience" id="experience" name="experience" type="text" class="form-control" placeholder />
        <label for="experience">Experiência</label>
        <ErrorMessage name="experience" class="text-danger small" />
      </div>

      <div class="form-floating mb-3">
        <Field v-model="skills" id="skills" name="skills" type="text" class="form-control" placeholder />
        <label for="skills">Habilidades (opcional)</label>
        <ErrorMessage name="skills" class="text-danger small" />
      </div>

      <div class="form-floating mb-3">
        <Field v-model="experienceTime" id="experienceTime" name="experience_time" as="select" class="form-control" placeholder>
          <option value="">Selecione o tempo de experiência</option>
          <option value="Menos de 6 meses">Menos de 6 meses</option>
          <option value="6-12 meses">6-12 meses</option>
          <option value="12-24 meses">12-24 meses</option>
          <option value="+ 24 meses">+ 24 meses</option>
        </Field>
        <label for="experienceTime">Tempo de Experiência</label>
        <ErrorMessage name="experience_time" class="text-danger small" />
      </div>

      <div class="form-floating mb-3">
        <Field v-model="salaryMin" id="salaryMin" name="salary_min" type="number" class="form-control" placeholder />
        <label for="salaryMin">Salário Mínimo (opcional)</label>
        <ErrorMessage name="salary_min" class="text-danger small" />
      </div>

      <div class="form-floating mb-3">
        <Field v-model="salaryMax" id="salaryMax" name="salary_max" type="number" class="form-control" placeholder />
        <label for="salaryMax">Salário Máximo (opcional)</label>
        <ErrorMessage name="salary_max" class="text-danger small" />
      </div>

      <div class="form-floating mb-3">
        <Field v-model="phone" id="phone" name="phone" type="text" class="form-control" placeholder />
        <label for="phone">Telefone</label>
        <ErrorMessage name="phone" class="text-danger small" />
      </div>
      <button :disabled="isSubmitting" @click.prevent="registerCandidate" class="btn btn-primary form-control">{{ isSubmitting ? 'Enviando...' : 'Enviar' }}</button>
    
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { Field, ErrorMessage } from 'vee-validate';

const experience = ref('');
const skills = ref('');
const experienceTime = ref('');
const salaryMin = ref('');
const salaryMax = ref('');
const phone = ref('');
const isSubmitting = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const registerCandidate = async (values) => {
  try {
    isSubmitting.value = true;
    const response = await fetch('http://recruitmentapi.onrender.com/api/candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authStore.getToken,
      },
      body: JSON.stringify({
        experience: experience.value,
        skills: skills.value,
        experience_time: experienceTime.value,
        salary_min: salaryMin.value,
        salary_max: salaryMax.value,
        phone: phone.value,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erro ao cadastrar candidato');
    }

    alert('Candidato cadastrado com sucesso!');
    router.push('/vagas');
  } catch (error) {
    alert(`Erro: ${error.message}`);
    isSubmitting.value = false;
  }
};
</script>
