<template>
  <div class="flex flex-col h-screen items-center justify-center">
    <div class="setup-text">{{ setup }}</div>
    <div v-if="showPunchlineClicked" class="punchline-text">{{ punchline }}</div>
    <button class="punchline-button" @click="showPunchlineOrReset">{{ showPunchlineClicked ? 'Another' : 'Tell Me!' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const setup = ref(null);
const punchline = ref(null);
const showPunchlineClicked = ref(false)

function doSetup() {
  fetch('https://v2.jokeapi.dev/joke/christmas').then((response) => { 
  response.json().then((res) => 
  {
    setup.value = res.setup;
    punchline.value = res.delivery;
  });
})
}

function showPunchlineOrReset() {
  if(!showPunchlineClicked.value)
    showPunchlineClicked.value = true;
  else {
    doSetup();
    showPunchlineClicked.value = false;
  }
}

doSetup();

</script>

<style>
.setup-text {
  background-color: green;
  color: white;
  border-width: 10px;
  border-color: green;
}

.punchline-text {
  background-color: red;
  color: white;
  border-width: 10px;
  border-color: red;
}

.punchline-button {
  color:white;
  border-width: 10px;
  background-color: lightgray;
  border-color: lightgray;
}

</style>
