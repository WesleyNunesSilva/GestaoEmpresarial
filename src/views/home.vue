<template>
    <div>
      <TheHeader />
  
      <div class="table-responsive p-3">
      <table class="table table-striped table-hover mt-2">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Número</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Cidade</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <CardList
            v-for="company in companies"
            :key="company.identify"
            :name="company.name"
            :email="company.email"
            :phone="company.phone"
            :cpfOCnpj="company.cnpj"
            :city="company.city"
            :companyId="company.identify"
          />
        </tbody>
      </table>
      <router-link to="/companies/create">
        <button class="btn btn-primary mt-3">Cadastrar nova empresa</button>
      </router-link>
    </div>

  </div>
  </template>

<script>
    import api from '../axios';
    import TheHeader from '../components/TheHeader.vue';
    import CardList from '../components/cardList.vue';


    export default {
      components:{
        CardList,
        TheHeader
      },
      data() {
        return {
          companies: null,
        }    
      },
      methods: {
        async getCompanies() {
          try {
            const response = await api.get('/companies');
            this.companies = response.data.data;
          } catch (error) {
            // Manipule os erros aqui
            console.error('Erro na requisição:', error);
          }
        },
      },
      
      beforeRouteEnter(to, from, next) {
        // Chame o método getCompanies antes de entrar no componente
        next(vm => {
          vm.getCompanies();
        });
      },
    }   
</script>

