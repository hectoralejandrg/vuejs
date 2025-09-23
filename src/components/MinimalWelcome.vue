<template>
    <div class="minimal-welcome">
        <h1>Bienvenido</h1>
        <p>¡Gracias por visitar nuestra aplicación!</p>
        <q-btn color="primary" label="Simular Login" @click="login" class="q-mt-md" />
        <p class="q-mt-sm">Para acceder a la página protegida <b>About</b>, primero debes iniciar sesión.</p>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const auth = useAuthStore()
const router = useRouter()

const login = () => {
    auth.login({ name: 'Usuario Demo' })
    router.push({ name: 'about' })
}

</script>

<style scoped>
.minimal-welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    padding: 2rem;
}

.minimal-welcome h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #222;
}

.minimal-welcome p {
    font-size: 1.1rem;
    color: #555;
    margin: 0;
}
</style>
