<template>
  <div>
      <nav class="navbar navbar-expand-lg">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link mr-4" href="#" v-on:click="changeval('HomePage')">Home</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link mr-4" href="#" v-on:click="changeval('AboutUs')">About Us</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link mr-4" href="#" v-on:click="changeval('ContactUs')">Contact Us</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link mr-4" href="#" v-on:click="changeval('Login')">Login</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link mr-4" href="#" v-on:click="changeval('Signup')">Sign Up</a>
            </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    methods: {
        changeval: function(name) {
            this.$emit('ChangeComponent', name);
        }
    }
}
</script>

<style scoped>
a{
    color: 	#c3ebff;
}
</style>