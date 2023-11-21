<template>
    <div>
      <TheHeader />
  
      <div class="d-flex align-items-center justify-content-center vh-100 bg-body-color">
        <form @submit.prevent="createNewEmployee" class="col-md-6 mx-auto my-auto row g-3  form-container">
          <div class="col-md-6">
            <label for="inputName" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputName" v-model="name" required>
          </div>
  
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" v-model="email" required>
          </div>
  
          <div class="col-12">
            <label for="inputAddress" class="form-label">Endereço</label>
            <input type="text" class="form-control" id="inputAddress" v-model="address" required>
          </div>
  
          <div class="col-12">
            <label for="inputPhone" class="form-label">Número de Telefone</label>
            <input type="text" class="form-control" id="inputPhone" v-model="phone" required>
          </div>
  
          <div class="col-md-6">
            <label for="inputCpf" class="form-label">CPF</label>
            <input type="text" class="form-control" id="inputCpf" v-model="cpf" required>
          </div>
  
          <div class="col-md-6">
            <label for="inputPosition" class="form-label">Cargo</label>
            <input type="text" class="form-control" id="inputPosition" v-model="position" required>
          </div>
  
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Cadastrar Novo Usuário</button>
          </div>
        </form>
  
        <div>
          <div v-show="registeredSuccessfully" class="alert alert-success" role="alert">
            Cadastrado com sucesso
          </div>
        </div>
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
            address: "",
            cpf: "",
            position: "",
            companyId: this.$route.params.id
        };
    },
    components: {
        TheHeader
    },
    methods: {
        async createNewEmployee() {
            try {
            const response = await api.post("/employees/create", {
                name: this.name,
                phone: this.phone,
                email: this.email,
                city: this.address,
                cpf: this.cpf,
                position: this.position,
                company_id: this.companyId
            });

            console.log(response);
            this.registeredSuccessfully = true;
            setTimeout(() => {
                this.registeredSuccessfully = false;
            }, 2000);

            // Aguardar a conclusão da navegação antes de retornar
            await this.$router.push('/');
            } catch (error) {
            // Manipule os erros aqui
            console.error("Erro na requisição:", error);
            }
        }
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