<template>
    <div class="d-flex align-items-center justify-content-center vh-100 bg-body-color">
      <form @submit.prevent="login" class="col-md-3 mx-auto my-auto row g-3 form-container">
        <div class="mb-3">
          <label for="InputEmail1" class="form-label">Email:</label>
          <input type="email" class="form-control" id="InputEmail1" aria-describedby="email" v-model='email'>
        </div>
        <div class="mb-3">
          <label for="InputPassword1" class="form-label">Senha:</label>
          <input type="password" class="form-control" id="InputPassword1" v-model='password'>
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    </div>
  </template>
  
  <style scoped>
    
    .form-container {
      background-color: #fff; 
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    }

    .bg-body-color {
      background-color: #efe8e8;
    }

  </style>
  
  <script>
    import api from '../axios';
    export default {
      data() {
        return {
          email:'',
          password: ''
        };
      },
  
      methods: {
        async login() {
          try {
            const response = await api.post('/auth/login', {
              email: this.email,
              password: this.password,
            });
  
            const token = response.data.access_token;
  
            localStorage.setItem('token', token);
  
            await this.$router.push('/');
          } catch (error) {
            console.error('Erro ao fazer login:', error);
          }
        },
      },
    };
  </script>