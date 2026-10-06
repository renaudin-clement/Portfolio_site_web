<script setup lang="ts">
import defilement from './defilement.vue';

</script>

<template>
    <section class="Base_Part5">
        <h2>Mes compétences</h2>

        <section class="GroupProjet">
            <defilement/>
        </section>

    </section>
</template>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
    justify-content: center;
    text-align: center;
    color: white;
}

.Base_Part5 {
    width: 100%;
    background-color: var(--noirBalise);
    margin-bottom: 7em;
    padding-bottom: 3em;
}
</style>