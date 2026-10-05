<script setup lang="ts">
import baliseA from './baliseA.vue';
import baliseB from './baliseB.vue';
import baliseC from './baliseC.vue';

</script>

<template>
    <section class="Base_Part0">

        <baliseA />
        <baliseB />
        <baliseC />
        
    </section>
</template>

<style scoped>
.Base_Part0{
    width: 100%;
    background-image: url('reposit/fond/abstract-wireframe-grid-line-room-perspective-dark-background/grid.jpg');
    background-size: cover;
    height: 45em;
    background-position: center;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;

    padding-bottom: 1em;
    margin-bottom: 4em;

}
</style>