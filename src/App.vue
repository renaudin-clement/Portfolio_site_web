<script setup lang="ts">
//import Scene3D from './components/utils/threejs.vue/index.js'
import Header from './components/main/Header.vue'
import pillierDroit from './components/utils/pillierDroit.vue';
import pillierGauche from './components/utils/pillierGauche.vue';
import Threejs from './components/utils/threejs.vue';

import part0 from './components/part_general/part0/part0.vue';
import Part1 from './components/part_general/part1/part1.vue';
import Part2 from './components/part_general/part2/part2.vue';
import part3 from './components/part_general/part3/part3.vue';
import part4 from './components/part_general/part4/part4.vue';
import part5 from './components/part_general/part5/part5.vue';

</script>

<template>
  <Header />

  <section class="container">
    <pillierDroit class="pillier"/>
    <main>
      <part0 />
      <Part1 />
      <Part2 />
      <part3 />
      <part4 />
      <part5 />

    </main>
    <pillierGauche class="pillier"/>
  </section>
</template>

<style scoped>


.pillier{
  width: 15%;
}

.container{
  display: flex;
  height: auto;
  width: 100%;
}

main{
  display: flex;
  flex-wrap: wrap;
  width: 70%;

  height: 100%;

  box-shadow: 0px 0px 7px 7px #000000;
  z-index: 1;
  background-color: var(--GrisFoncer);
  
}

Header{
  position: sticky;
  overflow-y: auto;
  top: 0px;
  z-index: 999;
}

canvas{
  padding:1em;
}



</style>
