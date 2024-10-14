import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

export const useApiStore = defineStore('api', {
  state: () => ({
    user: null,
    jobs: [],
    applications: []
  }),
  actions: {
    async teste() {
      if(!useAuthStore().getToken){
        return alert('Sem token')
      }
      
      console.log(useAuthStore().getToken)
      const dados = await $fetch('http://recruitmentapi.onrender.com/api/applications', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + useAuthStore().getToken
        }
      })
      console.log('---- dados ----', dados)
      return dados
    }
    // async login(credentials) {
    //   try {
    //     const response = await axios.post('http://recruitmentapi.onrender.com/api/auth', credentials);
    //     this.user = response.data.user;
    //   } catch (error) {
    //     console.error('Login failed:', error);
    //   }
    // },
    // async fetchJobs() {
    //   try {
    //     const response = await axios.get('http://recruitmentapi.onrender.com/api/jobs');
    //     this.jobs = response.data;
    //   } catch (error) {
    //     console.error('Failed to fetch jobs:', error);
    //   }
    // },
    // async applyToJob(applicationData) {
    //   try {
    //     await axios.post('http://recruitmentapi.onrender.com/api/applications', applicationData);
    //   } catch (error) {
    //     console.error('Application failed:', error);
    //   }
    // }
  }
});
