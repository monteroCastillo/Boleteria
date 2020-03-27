<template lang="html">
    <div class="container">
        <div class = "row">
            <div class= "col text-left">
                <h2>Listado Eventos</h2>

                    <b-button size= "sm" :to="{name: 'crearEvento'}" variant="Primary">
                    Nuevo Evento
                    </b-button>
                    <div class = "col-md-12">
                    <b-table striped hover :items="eventos" :fields="fields">
                    <template v-slot:cell(action)="row"> 
                      <!--      <template slot="action" slot-scope = "row"> -->
        <!--<b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button> -->                                                 <!-- en el name Debe colocarse el nombre que se coloco en el index.js alli existen
                                                                        path, name, component  -->
                            <b-button size = "sm" variant="primary" :to="{ name:'editarEVENTO', params: {eventoId:row.item.id}}">
                                Editar
                            </b-button>
                            <b-button size = "sm" variant="danger" :to="{ name:'eliminarEVENTO', params: {eventoId:row.item.id}}">
                                Eliminar    
                            </b-button>
                    </template>  
                    </b-table>  
                    <p>
   <!--   <b-button size="sm" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" @click="clearSelected">Clear selected</b-button>
      <b-button size="sm" @click="selectThirdRow">Select 3rd row</b-button>
      <b-button size="sm" @click="unselectThirdRow">Unselect 3rd row</b-button>  -->
    </p>  
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            fields:[
                {key: 'idEvento', label: 'idEvento'},
                {key: 'nombreEvento', label: 'Evento'},
                {key: 'precioEvento', label: 'precio'},
                {key: 'action', label: 'Accion'}
                
            ],
            eventos: [],           
        }
    },

    methods: {

        geteventos() {     

            const path ='http://localhost:8000/api/v1.0/evento/'
            axios.get(path).then((response) =>{
                this.eventos = response.data 
                this.idEvento = response.data.idEvento
                this.nombreEvento = response.data.nombreEvento
                this.precioEvento = response.data.precioEvento
                
            })

            .catch((error)=>{
                console.log(error)
            })            
        } 
    },

created(){
    this.geteventos()
}
}
</script>

<style lang = "css" scoped>
</style>

*/