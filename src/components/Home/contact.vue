<template>
  <div class="container-fluid marginb">
      <h3 class="mt-5" style="color: white;">Contact Us</h3>

      <!-- Grid with form and map location -->
        <div class="container-fuid">
            <div class="row">
                <div class="col-lg-6">
                    <h6 style="color:white;">Find us here!</h6>
                    <img :src="image" class="mt-2 mb-4" />
                </div>
                <div class="col-lg-6">
                    <form class="mt-3">
                        <div class="form-group">
                            <label for="Name">Name</label>
                            <input type="text" class="form-control" id="Name" placeholder="Enter your name" required/>
                        </div>
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email" id="Email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Enter your query here.</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="Query goes here..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-success mb-2">Submit query</button>
                    </form>
                </div>
            </div>
        </div>
      <!--  -->
  </div>
</template>

<script>
import image from "../../assets/map.jpg";
export default {
    data: function(){
        return {
            'image': image
        }
    }
}
</script>

<style scoped>
form{
    color: #51dbc9;
}
.marginb{
    margin-bottom: 63px;
}
</style>