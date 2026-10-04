<script setup lang="ts">
//import Scene3D from './components/utils/threejs.vue/index.js'
import Header from './components/main/Header.vue'
import pillierDroit from './components/utils/pillierDroit.vue';
import pillierGauche from './components/utils/pillierGauche.vue';

</script>

<template>
  <Header />

  <section class="container">
    <pillierDroit/>
    <main>
      
    </main>
    <pillierGauche/>
  </section>
</template>

<style scoped>
.pillier{
  background-image: url();
  width: 25%;
}

</style>
