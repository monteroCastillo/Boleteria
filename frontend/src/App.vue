<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">  -->
   
   <router-link to="/Navbar">Navbar</router-link>
   
    <router-view/>
   <!-- <Navbar/>
    <Carrusel/>
    <footer/>
  -->
  </div>
</template>

<script>
import Carrusel from '@/components/Carrusel/Carrusel';
import Navbar from '@/components/Navbar/Navbar';
import footer from '@/components/Footer/footer';
export default {
  name: 'App',
  components: {
    Carrusel,
    Navbar,
    footer
  },


}
</script>



 <style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

 

 #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }

 #nav a.router-link-exact-active {
   color: #878e91;
 }

</style>
