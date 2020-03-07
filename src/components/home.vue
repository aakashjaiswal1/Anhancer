<template>
  <div class="container">
      <div class="main-head mt-5">
        <center>
            <h2>Make the most effective<br>resume in <span style="color: white;">minutes</span></h2>
            <button class="btn btn-success mt-4" v-on:click="changeval">Get Started</button>    
        </center>
      </div>
      <div class="container gridcards">
        <div class="row">
            <div class="col-lg">
                <GridCard title="Who we are?" />
            </div>
            <div class="col-lg">
            <GridCard title="What we do?" />
            </div>
            <div class="col-lg">
            <GridCard title="Why we do?" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import gridcard from "./gridcard";

export default{
    components: {
        'GridCard': gridcard ,
    },
    methods: {
        changeval: function() {
            this.$emit('ChangeComponent', 'GetStarted');
        }
    }
}
</script>

<style scoped>
h2{
    font-size: 3em;
}
button{
    padding: 10px 40px;
}
.gridcards{
    margin-top: 50px;
}
.main-head{
    color: 	#51dbc9;
}
</style>