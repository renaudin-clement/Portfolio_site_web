<script setup lang="ts">
//import Scene3D from './components/utils/threejs.vue/index.js'
import Header from './components/main/Header.vue'
import pillierDroit from './components/utils/pillierDroit.vue';
import pillierGauche from './components/utils/pillierGauche.vue';

</script>

<template>
  <Header />

  <section class="container">
    <pillierDroit class="pillier"/>
    <main>
      
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
  height: 100%;
  width: 100%;
}

main{
  width: 70%;
  height: 100%;
  box-shadow: 0px 0px 7px 7px #000000;
  z-index: 1;
  background-color: var(--GrisFoncer);
  
}

Header{
  position: sticky;
  top: 0px;
  z-index: 2;
}
</style>
