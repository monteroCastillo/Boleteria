/* eslint-disable 

<template lang="html">
    <div class="container">
        <div class = "row">
            <div class= "col text-left">
                <h2>Listado Publicadores</h2>

                    <b-button size= "sm" :to="{name: 'NuevoPublicador'}" variant="Primary">
                    
                    </b-button>
                    <div class = "col-md-12">
                    <b-table striped hover :items="publi" :fields="fields">
                     <template v-slot:cell(action)="row"> 
                      <!--      <template slot="action" slot-scope = "row"> -->
        <!--<b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button> -->                                                 <!-- en el name Debe colocarse el nombre que se coloco en el index.js alli existen
                                                                        path, name, component  -->
                            <b-button size = "sm" variant="primary" :to="{ name: 'EditarPublicador', params: {publicadorId:row.item.id}}">
                                Editar
                            </b-button>
                            <b-button size = "sm" variant="danger" :to="{ name: 'EliminarPublicador', params: {publicadorId:row.item.id}}">
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
                {key: 'nombre_Razonsocial', label: 'nombre'},
                {key: 'nitCedula', label: 'Nit'},
                {key: 'action', label: 'Accion'}
                
            ],
            publi: [],
            nitCedula: ''
        }

    },

    methods: {

        getPubli() {

            const path ='http://localhost:8000/api/v1.0/Publi/'
            axios.get(path).then((response) =>{
                this.publi = response.data 
                console.log(this.publi.nombre_Razonsocial)
                this.nitCedula = response.data.nitCedula
                console.log(this.nitCedula)
            })

            .catch((error)=>{
                console.log(error)
            })
            
        }    

},

created(){
    this.getPubli()
}
}
</script>

<style lang = "css" scoped>
</style>

*/