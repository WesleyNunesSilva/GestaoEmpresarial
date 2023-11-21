<script setup>

</script>

<template class="p-3">
    <header class="d-flex justify-content-between bg-dark text-light align-items-center">
        <div class="profile">
            <router-link to="/" class="text-decoration-none text-light">
                <strong>Início</strong>
            </router-link>
        </div>
        <button type="button" class="btn btn-danger" @click="logout">Sair</button>
    </header>
</template>

<script>
    import api from '../axios'; // Importa a instância do Axios configurada

    export default {
        methods: {
            async logout() {
                try {
                    const response = await api.post('/auth/logout');
                    // Faça uma chamada para o endpoint de logout na sua API, se necessário
                    // Por exemplo, se sua API for capaz de invalidar o token no lado do servidor
                    // await api.post('/auth/logout');

                    // Limpa o token do localStorage
                    localStorage.removeItem('token');

                    // Redireciona para a página de login
                    this.$router.push({ name: 'login' });
                } catch (error) {
                    console.error('Erro ao fazer logout:', error);
                }
            },
        },
    };
</script>

<style scoped>
 header{
    padding: 1rem 3rem;
 }

</style>
