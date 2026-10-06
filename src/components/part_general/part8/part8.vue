<script setup lang="ts">

import baliseA from './baliseA.vue';
import baliseB from './baliseB.vue';
import baliseC from './baliseC.vue';
</script>

<template>
    <section class="Base_Part8">
        <section class="Fin">
            <div class="topblock">
                <baliseA />
                <baliseB />
                <baliseC />
            </div>
        </section>

    </section>
</template>

<style scoped>

.topblock{
    width: 100%;
    background-image: url('reposit/fond/abstract-wireframe-grid-line-room-perspective-dark-background/grid.jpg');
    background-size: cover;
    height: 30em;
    background-position: center;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
}

.Fin{
padding-top: 2em;
  padding-bottom: 2em;
}

.Base_Part8 {
    width: 100%;
    background-color: var(--noirBalise);
}
</style>