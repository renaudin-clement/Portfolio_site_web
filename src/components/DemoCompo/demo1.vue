<script setup lang="ts">
import Threejs from '../utils/threejs.vue';

</script>

<template>
      <section class="ContainerDemo">
            <h2>Projets Threejs</h2>
            <section>
                  <p>
                     Initiation à Three.js et utilisation de Blender pour la réalisation de scènes 3D.
                  </p>
            </section>
            <section class="renderThreejs">
                  <Threejs />
            </section>
      </section>

</template>

<style scoped>

.ContainerDemo{
      padding: 2em;
      padding-top: 0;
      padding-bottom: 2em;
      background-color: var(--noirBalise);
}

h2{
      margin-bottom: 0;
      color: #ffffff;
}

p{
      color: #ffffff;
}

.renderThreejs{
}


</style>
