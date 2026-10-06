<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import list from './listeDefilement.json' with { type: 'json' }

const technos = ref(list)
const NB_LISTES = 3
const vitesse = 60

const listes = ref<HTMLUListElement[]>([])
const enPause = ref(false)

let positions: number[] = []
let largeur = 0
let rafId = 0
let dernierTemps = 0

function placer() {
  listes.value.forEach((ul, i) => {
    ul.style.transform = `translateX(${positions[i] ?? 0}px)`
  })
}

function defilement(temps: number) {
  const dt = dernierTemps ? (temps - dernierTemps) / 1000 : 0
  dernierTemps = temps

  if (!enPause.value) {
    listes.value.forEach((_, i) => {
      let x = (positions[i] ?? 0) - vitesse * dt
      // hors champ : on le remet après le dernier
      if (x <= -largeur) x += largeur * NB_LISTES
      positions[i] = x
    })
    placer()
  }
  rafId = requestAnimationFrame(defilement)
}

onMounted(() => {
  largeur = listes.value[0]?.getBoundingClientRect().width ?? 0
  // chaque ul est placé à la suite du précédent
  positions = listes.value.map((_, i) => i * largeur)
  placer()
  rafId = requestAnimationFrame(defilement)
})

onUnmounted(() => cancelAnimationFrame(rafId))
</script>

<template>
  <section class="ContainerEvent">
    <section
      class="ContainerInfo"
      @mouseenter="enPause = true"
      @mouseleave="enPause = false"
    >
      <ul v-for="n in NB_LISTES" :key="n" ref="listes" class="defiler">
        <li v-for="techno in technos" :key="techno.id" class="ContainerImage">
          <img :src="techno.url" :alt="techno.nom" />
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>
.ContainerEvent {
  display: flex;
  flex-wrap: nowrap;
  padding: 1em;
}

.ContainerInfo {
  position: relative;
  width: 100%;
  height: 9em;
  background-color: var(--GrisClaire);
  overflow: hidden;
}

.defiler {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  will-change: transform;
}

.ContainerImage {
  flex-shrink: 0;
  padding-left: 1em;
  padding-right: 1em;
  list-style-type: none;
}

img {
  display: block;
  width: 12em;
  height: 9em;
}
</style>