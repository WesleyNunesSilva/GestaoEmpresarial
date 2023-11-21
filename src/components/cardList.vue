<template>
    <tr class="">
        <td >{{ name }}</td>
        <td>{{ email }}</td>
        <td>{{ phone }}</td>
        <td>{{ cpfOCnpj }}</td>
        <td>{{ city }}</td>
        <td >
            <router-link  v-if="companyId" :to="{ name: 'employees', params: { id: companyId } }" >
                 <button @click="" class="btn btn-primary">Ver mais</button>
            </router-link>
        </td>
        
        </tr>
</template>

<script>
    export default {
        data() {
            return {    
            }
        },
        props: {
            name: String,
            email: String,
            phone: String,
            cpfOCnpj: String,
            city: String,
            companyId: Number
        },
        methods() {

        } 
    }
  
</script>