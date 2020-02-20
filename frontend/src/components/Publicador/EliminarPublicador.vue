/* eslint-disable 

<template>
    <div class="container">
        <div class = "row">
            <div class= "col">
                
                <h3> ¿Estas seguro que deseas eliminar este Publicador?  </h3>
                <p>nombre_Razonsocial : {{this.element.nombre_Razonsocial}}</p>
                <p>nitCedula : {{this.element.nitCedula}}</p>
                <p>usuario : {{this.element.usuario}}</p>
                <p>correoElectronico : {{this.element.correoElectronico}}</p>
                <p>numeroTelefonico : {{this.element.numeroTelefonico}}</p>
                <p>id : {{this.element.id}}</p>



            </div>
        </div>

        <div class = "row">
            <div class = "col">

                <b-button v-on:click="EliminarPublicador" variant = "danger">Eliminar</b-button>

            </div>

        </div>


    </div>
   

    
   
    

</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'

export default {
    data(){
        return{
            publicadorId: this.$route.params.publicadorId,
            element:{
                nombre_Razonsocial: '',
 
                nitCedula: '',
 
                usuario: '',
 
                correoElectronico: '',
 
                numeroTelefonico: '',
 
                id: ''
            }
        }

    },
    methods: {
        getPublicador(){
            const path =`http://localhost:8000/api/v1.0/Publi/${this.publicadorId}/`
            

            axios.get(path).then((response) =>{

                this.element.nombre_Razonsocial = response.data.nombre_Razonsocial
                this.element.nitCedula = response.data.nitCedula
                this.element.usuario = response.data.usuario 
                this.element.correoElectronico = response.data.correoElectronico
                this.element.numeroTelefonico = response.data.numeroTelefonico
                this.element.id = response.data.id
                
            })
            .catch((error) => {
                console.log(error)
            })
        
        },

        EliminarPublicador(){
            const path =`http://localhost:8000/api/v1.0/Publi/${this.publicadorId}/`
            

            axios.delete(path).then((response) =>{
                location.href = '/publi'
                
                
            })
            .catch((error) => {
                swal("No es posible eliminar el libro", "", "error")
            })



        }
        },



    

    
    created(){
        this.getPublicador()
    }
    
}
</script>

<style lang="css" scoped>
</style>

*/