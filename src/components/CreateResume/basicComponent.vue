<template>
  <div>
      <h1>Basic Information</h1>
      <div class="outer mt-5">
          <input type="text" class="inner" placeholder="First Name" required><sup>*</sup>
          <input type="text" class="inner" placeholder="Middle Name">
          <input type="text" class="inner" placeholder="Last Name" required><sup>*</sup>
      </div>
      <div class="outer mt-5">
          <input type="text" class="inner" style="margin-left:80px;" placeholder="Gender" required><sup>*</sup>
          <input type="text" class="inner" style="margin-left:80px;" placeholder="DOB" required><sup>*</sup>
      </div>
      <div class="outer mt-5">
          <input type="text" class="inner" style="width: 560px;" placeholder="Address Line 1" required><sup>*</sup>
      </div>
      <div class="outer">
          <button type="button" class="btn btn-success mt-5" style="margin-left: 265px;">Continue</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
    padding-left: 20px;
    padding-top: 10px;
    font-size: 1.5em;
    color: aqua;
}
input{
    font-size: 15px;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: aqua;
    color: white;
}

input:focus{
    outline: none !important;
}

.outer{
    width: 100%;
    margin-top: 40px;
    margin-left: 200px;
}

.inner{
    margin-left: 20px;
}

</style>