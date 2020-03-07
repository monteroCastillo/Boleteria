import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Carrusel from '@/components/Carrusel/Carrusel'

import EditarPublicadores from '@/components/Publicador/EditarPublicadores'
import listaPublicadores from '@/components/Publicador/listaPublicadores'
import EliminarPublicador from '@/components/Publicador/EliminarPublicador'
import NuevoPublicador from '@/components/Publicador/NuevoPublicador'
import Login from '@/components/Login'
import login2 from '@/components/Login/login2'
import Counter from '@/components/Counter'
import Navbar from '@/components/Navbar/Navbar'

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
    {
      path: '/login2',
      name: 'login2',
      component: login2
    },

    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    },

    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path:'/fotos',
      name:'fotos',
      component: () => import(/*webpackChunkName:"fotos" */'@/views/Fotos.vue')
    },
   

  ],
  mode:'history'
})
