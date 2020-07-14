<template>
  <div id="container">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Astroly</a>
      <button
        class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#Home">Home<span class="sr-only">(current)</span></a>
          </li>&nbsp;
          <li class="nav-item">
            <a class="nav-link" href="#About">About</a>
          </li>&nbsp;
          <li class="nav-item">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
    
    <div id="Home">
      <Homepage />
    </div>
    <div id="About">
      <Aboutpage />
    </div>
    <div id="Contact">
      <Contactpage />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import Contactpage from "./components/Contactpage";
export default {
  name: "app",
  components: {
    Homepage,
    Aboutpage,
    Contactpage
  }
};
</script>
<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}
html{
  scroll-behavior: smooth;
  
}

#Home,#About,#Contact{
   padding-top: 20vh;
}

</style>
