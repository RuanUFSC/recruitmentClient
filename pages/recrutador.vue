<template>
    <div>
      <h1 class="text-center">Minhas Vagas</h1>
      <div v-if="jobs.length === 0">
        <p>Você ainda não cadastrou vagas.</p>
        <router-link to="/create-job" class="btn btn-primary">Cadastrar Nova Vaga</router-link>
      </div>
      <div v-else>
        <ul>
          <li v-for="job in jobs" :key="job.id">
            <h2>{{ job.title }}</h2>
            <p>{{ job.description }}</p>
            <p><strong>Localização:</strong> {{ job.location }}</p>
            <p><strong>Salário:</strong> {{ job.salary_range }}</p>
            <p><strong>Data de Abertura:</strong> {{ job.open_date }}</p>
            <p><strong>Data de Fechamento:</strong> {{ job.close_date }}</p>
            <router-link :to="`/edit-job/${job.id}`" class="btn btn-secondary">Editar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  
  const jobs = ref([]);
  const authStore = useAuthStore();
  
  const fetchJobs = async () => {
    try {
      const response = await fetch('https://recruitmentapi.onrender.com/api/jobs', {
        headers: {
          'Authorization': 'Bearer ' + authStore.getToken,
        },
      });
      if (!response.ok) {
        throw new Error('Erro ao buscar suas vagas');
      }
      jobs.value = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(fetchJobs);
  </script>
  
  <style scoped>
  </style>
  
