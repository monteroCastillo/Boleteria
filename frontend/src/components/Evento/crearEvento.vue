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
                                <label for="title" class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Nombre del evento" name="nombreEvento" class ="form-control" v-model.trim = "form.nombreEvento">
                                    </div>
                            </div>

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Precio del evento (COP)" name="Precio Evento" class ="form-control" v-model.trim = "form.precioEvento">
                                    </div>
                            </div>
                            

                            <!--    -->
                            <div class="form-group row">  
                                    <label for="title" class="col-sm-2 col-form-label"></label>                             
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Ubicacion del Evento" name="ubicacion" class ="form-control" v-model.trim = "form.ubicacionEvento">
                                    </div>
                            </div>

                            <!--    -->
                             <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-6"> 
                                <b-form-timepicker placeholder="Escoja la hora" v-model="horaEvento" locale="en" class ="form-control" v-model.trim = "form.horaEvento"></b-form-timepicker>
                                    <div class="col-sm-6"> {{ horaEvento }}</div>
                                </div>
                            </div>
                            <!--    -->
                            <div class="form-group row">
                                <label for="example-datepicker" class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-6"> 
                                    <b-form-datepicker placeholder="Escoja una fecha" v-model="fechaEvento" locale="en" class ="form-control" v-model.trim = "form.fechaEvento"></b-form-datepicker>
                                     <div class="col-sm-6"><p>{{ value }}</p></div>
                                </div>
                            </div>                            

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Restriccion de edades" name="restriccion" class ="form-control" v-model.trim = "form.restriccion">
                                    </div>
                            </div>

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Categoria del evento, Ej: Deportes, conciertos" name="categoria" class ="form-control" v-model.trim = "form.categoria">
                                    </div>
                            </div>

                            <!--    -->
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Descripcion del Evento" name="descripcion" class ="form-control" v-model.trim = "form.descripcion">
                                    </div>
                            </div>

                            <div class="rows">
                                <div class = "col text-left">
                                    <b-button type= "submit" variant="primary">Crear</b-button>
                                    <b-button type= "submit" class="btn-large-space":to="{name: 'listaEventos'}">Cancelar</b-button>
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
            
            value:'',
            
            form: {
                nombreEvento: '', 
                precioEvento: '', 
                ubicacionEvento: '',
                horaEvento: '', 
                fechaEvento: '', 
                restriccion: '', 
                categoria: '',
                descripcion: ''
            }
        }
    },
    methods:{

        onSubmit(evt){
            evt.preventDefault()

            const path ='http://localhost:8000/api/v1.0/evento/'
            

            axios.post(path, this.form).then((response) =>{

                this.form.nombreEvento = response.data.nombreEvento
                this.form.precioEvento = response.data.precioEvento
                this.form.ubicacionEvento = response.data.ubicacionEvento
                this.form.horaEvento = response.data.horaEvento
                this.form.fechaEvento = response.data.fechaEvento
                this.form.restriccion = response.data.restriccion
                this.form.categoria = response.data.categoria
                this.form.descripcion = response.data.descripcion

               
                swal("Evento creado exitosamente!!", "", "success")

                
            })
            .catch((error) => {
                swal("El Evento no ha sido creado", "", "error")
            })
        },

        

    },
    created(){
        
    }
}
</script>

<style lang = "css" scoped>
</style>