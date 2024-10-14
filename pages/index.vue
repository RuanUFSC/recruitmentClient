<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <div class="text-center">
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2021/03/24/Job-search-icon-Graphics-9935352-1-580x386.jpg"
        alt="Landing Page" class="img-fluid" />
    </div>
    <p class="lead mb-4">Conecte-se a oportunidades e encontre os melhores talentos.</p>
    <div class="d-flex flex-column gap-3">
      <button class="btn btn-primary" @click="goToLogin">
        Login
      </button>
      <button class="btn btn-secondary" @click="goToRecruiterRegister">
        Registro como Recrutador
      </button>
      <button class="btn btn-info" @click="goToCandidateRegister">
        Registro como Candidato
      </button>
    </div>
  </div>
</template>

<script setup>

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};

const goToRecruiterRegister = () => {
  router.push('/registro/recrutador');
};

const goToCandidateRegister = () => {
  router.push('/registro/candidato');
};
</script>