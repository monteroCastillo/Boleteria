<template>
    <div class="container">
        <div class = "row">
            <div class= "col">                
                
                <h3> ¿Estas seguro que deseas eliminar este Evento?  </h3>
                <p>serialEvento : {{this.element.idEvento}}</p>
                <p>nombreEvento : {{this.element.nombreEvento}}</p>
                <p>precioEvento : {{this.element.precioEvento}}</p>
                <p>ubicacionEvento : {{this.element.ubicacionEvento}}</p>
                <p>horaEvento : {{this.element.horaEvento}}</p>
                <p>fechaEvento : {{this.element.fechaEvento}}</p>
                <p>restriccion : {{this.element.restriccion}}</p>
                <p>categoria : {{this.element.categoria}}</p>
                <p>descripcion : {{this.element.descripcion}}</p>             

            </div>
        </div>

        <div class = "row">
            <div class = "col">

                <b-button v-on:click="eliminarEvento" variant = "danger">Eliminar</b-button>

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
            eventoId: this.$route.params.eventoId,
            element:{
                idEvento: '',
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
    methods: {
        getEvento(){
            const path =`http://localhost:8000/api/v1.0/evento/${this.eventoId}/`
            

            axios.get(path).then((response) =>{

                this.element.idEvento = response.data.idEvento
                this.element.nombreEvento = response.data.nombreEvento
                this.element.precioEvento = response.data.precioEvento
                this.element.ubicacionEvento = response.data.ubicacionEvento
                this.element.horaEvento = response.data.horaEvento
                this.element.fechaEvento = response.data.fechaEvento
                this.element.restriccion = response.data.restriccion
                this.element.categoria = response.data.categoria
                this.element.descripcion = response.data.descripcion
                
            })
            .catch((error) => {
                console.log(error)
            })
        
        },

        eliminarEvento(){
            const path =`http://localhost:8000/api/v1.0/evento/${this.eventoId}/`
            

            axios.delete(path).then((response) =>{
                location.href = '/listaEventos'  
                swal("Evento Eliminado exitosamente!!", "", "success")           
                
            })
            .catch((error) => {
                swal("No es posible eliminar el Evento", "", "error")
            })
        }
    },  
    
    created(){
        this.getEvento()
    }    
}
</script>

<style lang="css" scoped>
</style>