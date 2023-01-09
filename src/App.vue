<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TheHeader from './layouts/TheHeader/TheHeader.vue';
import TheFooter from './layouts/TheFooter.vue';
</script>

<template>
  <TheHeader />

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<style>
#app {
  min-height: calc(100vh + 2rem);
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 5rem;
}
</style>
