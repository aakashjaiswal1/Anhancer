<template>
    <div>
        <h2>
            Choose a template to get started
        </h2>
        <!-- carousel -->
        <center>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="boxes mt-5">
                    <img src="#" alt="resume goes here">
                    1
                </div>
                </div>
                <div class="carousel-item" v-for="item in 9" v-bind:key="item">
                <div class="boxes mt-5">
                    <img src="#" alt="resume goes here">
                    {{ item+1 }}
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        </center>
        <!-- carousel ends -->
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.boxes{
    color: white;
    margin-top: 20px;
    height: 385px;
    width: 20%;
    background-color:rgba(70, 70, 77, 0.315);
}

h2{
    margin: 10px 0px;
    color: 	#51dbc9;
    font-size: 2em;
    text-align: center;
}
</style>