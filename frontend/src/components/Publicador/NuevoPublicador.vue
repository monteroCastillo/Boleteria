

<template lang= "html">
    <div class = "container" >
        <div class= "row">
            <div class = "col text-left">
                <h2> Re Nuevo Publicador</h2>
            </div>
        </div>
 
        <div class= "row">
            <div class = "col">
                <div class= "card">
                    <div class = "card-body">
                        <form @submit = "onSubmit">

                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Nombre </label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Nombre o razón social" name="Title" class ="form-control" v-model.trim = "form.nombre_Razonsocial">
                                    </div>
                            </div>

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Nit o Cédula</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Nit o Cédula" name="Nit o Cedula" class ="form-control" v-model.trim = "form.nitCedula">
                                    </div>
                            </div>
                            

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">usuario</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Usuario" name="usuario" class ="form-control" v-model.trim = "form.usuario">
                                    </div>
                            </div>

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">clave</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Clave" name="clave" class ="form-control" v-model.trim = "form.clave">
                                    </div>
                            </div>
                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Email" name="CorreoElectronico" class ="form-control" v-model.trim = "form.correoElectronico">
                                    </div>
                            </div>

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Telefono</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Telefono" name="Telefono" class ="form-control" v-model.trim = "form.numeroTelefonico">
                                    </div>
                            </div>


                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Id</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Id" name="id" class ="form-control" v-model.trim = "form.id">
                                    </div>
                            </div>

                            <div class="rows">
                                <div class = "col text-left">
                                    <b-button type= "submit" variant="primary">Crear</b-button>
                                    <b-button type= "submit" class="btn-large-space":to="{name: 'publicadores'}">Cancelar</b-button>
                                </div>
                            </div>

                        </form>
                    </div>
                
                </div>
            </div>
        </div>


    </div>    
</template>>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data(){
        return{
            
            form: {
                nombre_Razonsocial: '',
 
                nitCedula: '',
 
                usuario: '',

                clave: '',
 
                correoElectronico: '',
 
                numeroTelefonico: '',
 
                id: ''
            }
        }
    },
    methods:{

        onSubmit(evt){
            evt.preventDefault()

            const path ='http://localhost:8000/api/v1.0/Publi/'
            

            axios.post(path, this.form).then((response) =>{

                this.form.nombre_Razonsocial = response.data.nombre_Razonsocial
                this.form.nitCedula = response.data.nitCedula
                this.form.usuario = response.data.usuario 
                this.form.clave = response.data.clave
                this.form.correoElectronico = response.data.correoElectronico
                this.form.numeroTelefonico = response.data.numeroTelefonico
                this.form.id = response.data.id

               
                swal("Publicador creado exitosamente!!", "", "success")

                
            })
            .catch((error) => {
                swal("El publicador no ha sido creado", "", "error")
            })
        },

        

    },
    created(){
        
    }
}
</script>

<style lang = "css" scoped>
</style>
