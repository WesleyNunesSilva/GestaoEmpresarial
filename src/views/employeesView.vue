<template>
    <TheHeader/>    
    <div class="table-responsive p-3">
        <table class="table table table-striped table-hover ">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Número</th>
                    <th>Cpf</th>
                    <th>Cidade</th>
                </tr>
            </thead>
            <tbody>
                <CardList
                    v-for=" employee in employees"
                    :key="employee.identify"  
                    :name="employee.name"
                    :email="employee.email"
                    :phone="employee.phone"
                    :cpfOCnpj="employee.cpf"
                    :city="employee.city"
                />
    
            </tbody>
        </table>
    
        <div> 
            <router-link  v-if="companyId" :to="{ name: 'create', params: { id: companyId } }" >
                <button class="btn btn-primary"> Cadastrar novo Funcionario</button>
            </router-link>
        </div>

    </div>
    
</template>

<script>
    import api from '../axios'
    import TheHeader from '../components/TheHeader.vue';
    
    import CardList from '../components/cardList.vue';

    export default {
        components:{
            CardList,
            TheHeader
    },
    data() {
        return {
            employees: null,
            companyId: this.$route.params.id
            };
    },
    methods: {
         async getEmployees() {
             try {
                const response = await api.get(`/companies/${this.companyId}/employees`);
                this.employees = response.data.data;
                console.log(response);
            } catch (error) {
                 // Manipule os erros aqui
                console.error('Erro na requisição:', error);
                console.log(error);
            }
        },
    },
    beforeRouteEnter(to, from, next) {
        // Chame o método getCompanies antes de entrar no componente
        next(vm => {
        vm.getEmployees();
        });
    },
};

    
</script>