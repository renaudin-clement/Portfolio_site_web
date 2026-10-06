<script setup lang="ts">
import { ref } from 'vue'
import list from './listeDefilement.json' with { type: 'json' };

const technos = ref(list)
</script>


<template>
    <section class="ContainerEvent">
        <section class="ContainerInfo">
           <ul>
                <li v-for="techno in technos" :key="techno.id">
                    <img :src="techno.url" :alt="techno.nom">
                </li>
            </ul>
        </section>
    </section>
</template>

<style scoped>
.ContainerEvent{
    display: flex;
    flex-wrap: nowrap;
    padding: 1em;

}

.ContainerImage{
    width: 25%;
    text-align: right;
}

.ContainerInfo{
    width: 75%;
    padding: 1em;
    background-color: var(--GrisClaire)
}

img{
    width: 12em;
    height: 9em;
}
</style>