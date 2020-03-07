<template>
  <div class="container-fluid">
    <logo />
    <Nav v-on:ChangeComponent="updateVal"/>
    <component :is="SelectedComponent" v-on:ChangeComponent="updateVal"></component>
    <Footer />
  </div>
</template> 

<script>
import home from "./components/home";
import Navbar_custom from "./components/Navbar_custom";
import Logo from "./components/Logo";
import getStarted from "./components/getStarted";
import About from "./components/aboutus.vue";
import Contact from "./components/contact.vue";
import Login from "./components/login.vue";
import Signup from "./components/signup.vue";
import Footer_custom from "./components/Footer_custom";

export default {
  data: function() {
    return{
      SelectedComponent: 'HomePage'
    }
  },
  components: {
    'HomePage': home,
    'Nav': Navbar_custom,
    'logo': Logo,
    'Footer': Footer_custom,
    'GetStarted': getStarted,
    'AboutUs': About,
    'ContactUs': Contact,
    'Login': Login,
    'Signup': Signup
  },
  methods: {
    updateVal: function(value){
      console.log(value);
      this.SelectedComponent = value;
    }
  }
}
</script>

<style>
body{
  background-color: black;
}
</style>
