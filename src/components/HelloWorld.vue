<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

const clickSound = new Audio('sound/sound-bell.wav')

function handleClick() {
  count.value++
  clickSound.currentTime = 0
  clickSound.play().catch((e) => {
    console.warn('Erreur lecture audio :', e)
  })
}

function shutUp() {
  clickSound.pause()
  clickSound.currentTime = 0
}
</script>

<template>
  <div class="card">
    <button type="button" @click="handleClick">count is {{ count }} 🔔</button>
  </div>
  <div>
    <button type="button" @click="shutUp">Sourdine 🔕</button>
  </div>
</template>
