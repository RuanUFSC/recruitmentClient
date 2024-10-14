import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    usuario: null,
    token:  null,
    cadastroCompleto: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.usuario,
    userRole: (state) => state.usuario?.detalhes?.role,
    getToken: (state) => state.token,
  },
  actions: {
    async register({ email, password, name, role }) {
      const { $auth, $toast } = useNuxtApp()
      try {
        const { user } = await createUserWithEmailAndPassword($auth, email, password)
        this.usuario = { ...user, name, role }
        const roleTranslation = {
          candidato: 'candidate',
          recrutador: 'recruiter'
        };
        const translatedRole = roleTranslation[role] || role;

        await $fetch('http://localhost:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getToken,
          },
          body: JSON.stringify({ name, role: translatedRole }) 
        })
        $toast.success('Usuário cadastrado com sucesso')
        return navigateTo('/login')
      } catch (error) {
        $toast.error(`Erro ao cadastrar, verifique suas informações. ${error?.message || ''}`)
      }
    },
    async login(email, password) {
      const { $auth, $toast } = useNuxtApp()
      try {
        const { user } = await signInWithEmailAndPassword($auth, email, password)
        this.usuario = user
        const token = await user.getIdToken()
        this.token = token
        const situacao = await $fetch('http://localhost:8000/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.getToken,
          }
        })
        $toast.success('Logado com sucesso')
        if(situacao?.cadastroCompleto) {
          this.cadastroCompleto = true
          return navigateTo('/dashboard')
        }        
        if(situacao?.user?.role === 'recruiter') {
          return navigateTo('/registro/detalhes/recrutador')
        } else {
          return navigateTo('/registro/detalhes/candidato')
        }
      } catch (error) {
        $toast.error('Login inválido')
      }
    },
    async logout() {
      const { $auth, $toast } = useNuxtApp()
      await signOut($auth)
      this.$reset()
      $toast.success('Logout realizado com sucesso')
      useRouter().push('/login')
    },
    initAuth() {
      const { $auth } = useNuxtApp()
      onAuthStateChanged($auth, (user) => {
        this.setUser(user)
      })
    },
    setUser(usuario: User | null) {
      this.usuario = usuario
      if (usuario) {
        usuario.getIdToken().then((token) => {
          this.token = token
        })
      } else {
        this.token = null
      }
    },
  },
  persist: {
    enabled: true,
    paths: ['usuario', 'token', 'cadastroCompleto'],
  },
})