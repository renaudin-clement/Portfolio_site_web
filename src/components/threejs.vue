<script setup lang="ts">
import * as THREE from 'three'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// Le canvas n'existe qu'après le montage du composant : on utilise une ref
const canvasRef = ref<HTMLCanvasElement | null>(null)

const MODEL_URLS = ['/models/sceneAndre.gltf']
const SPIN_DURATION = 10

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null
let cube: THREE.Mesh | null = null
let assetCount = 0
const clock = new THREE.Clock()
const onResize = () => resizeRenderer()

function init() {
  const canvas = canvasRef.value
  if (!canvas) return

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)

  // Cube de test
  cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  )

  cube.position.y = 7
  scene.add(cube)
  camera.position.set(0, 4, 12)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1

  resizeRenderer()
  window.addEventListener('resize', onResize)

  loadObjects()
  renderer.setAnimationLoop(animate)
}

function resizeRenderer() {
  if (!renderer) return
  const width = window.innerWidth
  const height = window.innerHeight
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function loadObjects() {
  const loader = new GLTFLoader()

  MODEL_URLS.forEach((url) => {
    loader.load(
      url,
      (gltf) => {
        scene.add(gltf.scene)
        checkProgress()
      },
      undefined,
      (error) => {
        console.error(`Erreur de chargement : ${url}`, error)
        checkProgress() // on compte aussi les échecs pour ne pas bloquer le préchargement
      }
    )
  })
}

function checkProgress() {
  assetCount++
  if (assetCount >= MODEL_URLS.length) loadingComplete()
}

// Appelée quand tous les assets sont chargés
function loadingComplete() {
  console.log('Tous les objets sont chargés !')
  // ... masquer la barre de chargement
}

function animate() {
  if (!renderer) return

  controls?.update()

  if (cube) {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
  }

  // Rotation de la scène pendant SPIN_DURATION secondes, sans async ni setTimeout
  if (clock.getElapsedTime() < SPIN_DURATION) {
    scene.rotation.y -= 0.01
  }

  renderer.render(scene, camera)
}

onMounted(init)

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  renderer?.setAnimationLoop(null)
  controls?.dispose()

  scene.traverse((obj) => {
    const mesh = obj as THREE.Mesh
    if (mesh.geometry) mesh.geometry.dispose()
    const material = mesh.material as THREE.Material | THREE.Material[] | undefined
    if (Array.isArray(material)) material.forEach((m) => m.dispose())
    else material?.dispose()
  })

  renderer?.dispose()
  renderer = null
})
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style scoped>
canvas {
  width: 50%;
  height: 50%;
  display: block;
}
</style>