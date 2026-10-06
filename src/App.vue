<script setup lang="ts">
import Header from './components/main/Header.vue'
import pillierDroit from './components/utils/pillierDroit.vue';
import pillierGauche from './components/utils/pillierGauche.vue';

</script>

<template>
  <Header />

  <section class="container">
    <pillierDroit class="pillier"/>
    <main>
      <RouterView />
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
  min-height: 100%;
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


</style>
