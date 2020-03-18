<template>
  <div>
      <h1>Basic Information</h1>
      <div class="outer mt-5">
          <input type="text" class="inner" placeholder="First Name" required><sup>*</sup>
          <input type="text" class="inner" placeholder="Middle Name">
          <input type="text" class="inner" placeholder="Last Name" required><sup>*</sup>
      </div>
      <div class="outer mt-5">
          <select class="inner" style="margin-left:140px;">
            <option value="Other">Other</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
          <input type="date" class="inner" style="margin-left:80px;" placeholder="DOB" required><sup>*</sup>
      </div>
      <div class="outer mt-5">
          <input type="text" class="inner" style="width: 560px;" placeholder="Address Line" required><sup>*</sup>
      </div>
      <div class="outer">
          <button type="button" class="btn btn-success mt-5 custom-button">Save & Continue</button>
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
input, select{
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