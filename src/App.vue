<template>
  <div v-show="!resetFinished" class="flex flex-col h-screen items-center justify-center">
    <div class="w-[240px] mr-[80px] setup-text p-4 rounded-2xl bg-teal-800 text-white">{{ setup }}</div>
    <div v-if="showPunchlineClicked" class="animate-fade-in w-[240px] ml-[80px] mt-2 p-4 rounded-2xl bg-red-800 text-white">{{ punchline }}</div>
    <button class="w-[320px] shrink-0 bg-green rounded-lg py-2 hover:opacity-90 mt-4" @click="showPunchlineOrReset">{{ showPunchlineClicked ? 'Another' : 'Tell Me!' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const setup = ref(null);
const punchline = ref(null);
const showPunchlineClicked = ref(false)
const resetFinished = ref(false);

function doSetup() {
  fetch('https://v2.jokeapi.dev/joke/christmas').then((response) => { 
  response.json().then((res) => 
  {
    setup.value = res.setup;
    punchline.value = res.delivery;
    resetFinished.value = false;
  });
})
}

function showPunchlineOrReset() {
  if(!showPunchlineClicked.value){
    showPunchlineClicked.value = true;
  }
  else {
    resetFinished.value = true;
    doSetup();
    showPunchlineClicked.value = false;
  }
}

doSetup();

</script>

<style>
</style>
