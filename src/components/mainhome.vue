<template>
  <div class="container-fluid">
    <logo />
    <Nav v-on:ChangeComponent="updateVal"/>
    <component :is="SelectedComponent" v-on:ChangeComponent="updateVal"></component>
    <Footer />
  </div>
</template> 

<script>
import home from "./Home/home";
import Navbar_custom from "./Home/Navbar_custom";
import Logo from "./Logo";
import getStarted from "./Home/getStarted";
import About from "./Home/aboutus.vue";
import Contact from "./Home/contact.vue";
import Login from "./Home/login.vue";
import Signup from "./Home/signup.vue";
import Footer_custom from "./Home/Footer_custom";

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
