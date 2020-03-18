<template>
  <div>
    <div class="container mycontainer"> 
        <form>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword2">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
            <small id="emailHelp" class="form-text text-muted">Already have an account? Go to login page.</small>
        </div>
        <!-- <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1" style="color: #51dbc9;">remember me?</label>
        </div> -->
        <button type="submit" class="btn btn-outline-success mt-3">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mycontainer{
    margin-top: 20px;
    margin-bottom: 45px;
    border-radius: 15px;
    background-color: rgba(98, 93, 93, 0.205);
    color: white;
    padding: 50px;
    width: 50%;
}
</style>