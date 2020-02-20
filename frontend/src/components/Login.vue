/* eslint-disable 

<template lang="html">
    <div class="container">
        <div class = "row">
            <div class= "col text-left">
                <h2>Login</h2>
                <h1>{{msg}}</h1>


                <form @submit = "onSubmit">
               
                        <div class="form-group">
                            <input v-model='usuarioX.usuario' type="text" id= "usuario" placeholder="Nombre del usuario"
                            class= "form-control">
                        </div>
                        <div class="form-group">
                            <input v-model='usuarioX.clave' type="text"  id="clave"
                            placeholder="Digite contraseña" class="form-control">
                        </div>  
                        <button v-on:click.prevent= "entrar"> Entrar</button>
                       
                </form> 

                     
            

  
                
               
    


</div>
</div>
</div>

    
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
   
    data(){

        return{


            fields:[
                {key: 'nombre_Razonsocial', label: 'nombre'},
                {key: 'nitCedula', label: 'nit'}
                
                
            ],
            msg: 'Prueba ',
            contador: 0,
            nombre:'',
            
            publi:'',

            usuarioX:{
                usuario:'',
                clave:''
            }
            

        }
    },

    
    methods:{


        entrar:function(){
            const path ='http://localhost:8000/api/v1.0/Publi/'
            axios.get(path,this.usuarioX).then((response) =>{
                this.publi = response.data
                console.log("respuesta"+response.data)
            })

            .catch((error)=>{
                console.log("error"+error)
            })
            console.log(this.publi)
        },

       onSubmit(evt){
           
            console.log("hola")

           // const path =`http://localhost:8000/api/v1.0/Publi/${this.publicadorId}/`
           /* const path =`http://localhost:8000/api/v1.0/Publi/`
            axios.get(path).then((response) =>{
                this.publi = response.data 
                let razon = response.data.nombre_Razonsocial
                let cedula = response.data.nitCedula*/
                console.log('el valor de razon social es: ' );
            
            }

/*
            
                axios.get(path).then((response) =>{
                let razon = response.data.nombre_Razonsocial
                let cedula = response.data.nitCedula

            })*/
       
    }

    


} 
</script>

<style lang = "css" scoped>
</style>

*/