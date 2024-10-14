<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <p class="h1 mb-4">Recruta+</p>
        <div class="text-center mb-4">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/03/24/Job-search-icon-Graphics-9935352-1-580x386.jpg"
                alt="Landing Page" class="img-fluid" />
        </div>

        <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const logout = async () => {
    try {
        await authStore.logout()
    } catch (error) {
        const { $toast } = useToast()
        $toast.error('Erro ao fazer logout')
    }
}

</script>