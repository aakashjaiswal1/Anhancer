<template>
  <div>
      <h1>Education</h1>
      
      <div v-for="item in i" :key="item">
      <div class="outer mt-5">
          <input type="text" class="inner" style="width: 560px;" placeholder="Name of the University/School" required>
          <br>
          <input type="text" class="inner" style="width: 560px;" placeholder="Percentage/GPA ex. 4.5/5 or 86/100" required>
          <br>
          <input type="text" class="inner" style="width: 560px;" placeholder="Month/Year of passing ex. June/2020" required>
      </div>
      </div>
      <div class="outer">
        <button class="btn btn-outline-danger mt-5" style="margin-left: 160px; margin-bottom:100px" v-if="show" v-on:click="delSec">Delete Section</button>
        <button class="btn btn-outline-primary mt-5" style="margin-left: 10px; margin-bottom:100px" v-on:click="addSec">Add Another Section</button>
      </div>
      <div>
        <button type="button" class="btn btn-success mt-5 custom-button">Save & Continue</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
      i: 1
    }
  },
  methods: {
    addSec: function() {
      if (this.i == 1){
        this.show = !this.show;
      }
      this.i = this.i + 1;
    },
    delSec: function() {
      if(this.i == 2) {
        this.show = !this.show;
      }
      this.i = this.i - 1;
    }
  },
}
</script>

<style scoped>
h1{
    padding-left: 20px;
    padding-top: 10px;
    font-size: 1.5em;
    color: aqua;
}
input, select{
    font-size: 15px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: aqua;
    color: white;
    overflow:hidden;
}

input:focus{
    outline: none !important;
}

input::placeholder{
    text-align: center;
}

select:focus{
    outline: none;
}

select option{
background-color: rgb(36, 35, 35);
color: white;
}

.outer{
    width: 100%;
    margin-top: 40px;
    margin-left: 200px;
}

.inner{
    margin-left: 20px;
}

.custom-button{
    position: fixed;
    right: 0;
    bottom: 0;
    width: 150px;
    margin-right: 30px;
    margin-bottom: 20px;
}


</style>