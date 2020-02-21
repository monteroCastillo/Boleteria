import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Carrusel from '@/components/Carrusel/Carrusel'

import EditarPublicadores from '@/components/Publicador/EditarPublicadores'
import listaPublicadores from '@/components/Publicador/listaPublicadores'
import EliminarPublicador from '@/components/Publicador/EliminarPublicador'
import NuevoPublicador from '@/components/Publicador/NuevoPublicador'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/carrusel',
      name: 'Carrusel',
      component: Carrusel
    },
    {
      path: '/:publicadorId/editarPublicador',
      name: 'EditarPublicador',
      component: EditarPublicadores
    },
    {
      path: '/publi',
      name: 'publicadores',
      component: listaPublicadores
    },  

    {
      path: '/:publicadorId/delete',
      name: 'EliminarPublicador',
      component: EliminarPublicador
    },
    {
      path: '/nuevo',
      name: 'NuevoPublicador',
      component: NuevoPublicador
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
   

  ],
  mode:'history'
})
