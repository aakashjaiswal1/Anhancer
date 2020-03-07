<template>
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button class="btn btn-outline-success">Click to know more..</button>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style>
.card{
    background-color: rgba(107, 105, 105, 0.281);
    color: white;
}
</style>