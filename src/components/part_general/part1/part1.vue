<script setup lang="ts">
import bull_info from './bull_info.vue';
import ecole from './ecole.vue';
</script>

<template>
    <section class="Base_Part1" id="Info_perso">
        <h2> Information </h2>
        <bull_info />
        <ecole/>


        
    </section>
</template>

<style scoped>

h2{
    text-align: center;
    width: 100%;
    justify-content: center;
    text-align: center;
    color: white;
}


.Base_Part1{
    width: 100%;
    padding-right: 1em;
    padding-left: 1em;
    padding-bottom: 2em;

    background-image: url('/reposit/fond/abstract-textured-backgound.jpg');
    background-size: cover;
}
</style>