<template>
    <div>
      <div v-show="registeredSuccessfully" class="alert alert-success" role="alert">
        Cadastrado com sucesso
      </div>
      <TheHeader />
  
      <div class="d-flex align-items-center justify-content-center vh-100 bg-body-color">
        <form @submit.prevent="createNewCompany" class="col-md-6 mx-auto my-auto row g-3 form-container">
          <div class="col-md-6">
            <label for="inputName" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputName" v-model="name" placeholder="Nome" required>
          </div>
  
          <div class="col-md-6">
            <label for="inputPhone" class="form-label">Número de Telefone</label>
            <input type="text" class="form-control" id="inputPhone" v-model="phone" placeholder="Número de telefone">
          </div>
  
          <div class="col-12">
            <label for="inputEmail" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="inputEmail" v-model="email" placeholder="E-mail">
          </div>
  
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Cidade</label>
            <input type="text" class="form-control" id="inputCity" v-model="city" placeholder="Cidade">
          </div>
  
          <div class="col-md-6">
            <label for="inputCnpj" class="form-label">CNPJ</label>
            <input type="text" class="form-control" id="inputCnpj" v-model="cnpj" placeholder="CNPJ">
          </div>
  
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Adicionar Empresa</button>
          </div>
        </form>
      </div>

      
    </div>
  </template>

<script>

    import api from '../axios'
    import TheHeader from '../components/TheHeader.vue';
    export default {
    data() {
        return {
            registeredSuccessfully: false,
            name: "",
            phone: "",
            email: "",
            city: "",
            cnpj: ""
        };
    },
    components:{
        TheHeader
    },
    methods: {
  async createNewCompany() {
    try {
      const response = await api.post("/companies/create", {
        name: this.name,
        phone: this.phone,
        email: this.email,
        city: this.city,
        cnpj: this.cnpj,
      });

      console.log(response);

      this.registeredSuccessfully = true;
      setTimeout(() => {
        this.registeredSuccessfully = false;
        this.$router.push('/');
      }, 2000);
      
    } catch (error) {
      // Manipule os erros aqui
      console.error("Erro na requisição:", error);
    }
  },
},
    components: { TheHeader }
}

</script>

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