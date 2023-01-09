<script setup>
import { RouterLink } from 'vue-router';
import AppContainer from '../components/AppContainer.vue';
import HomeShowcase from '../components/HomeShowcase.vue';
</script>

<template>
  <section class="home">
    <AppContainer>
      <HomeShowcase />
    </AppContainer>
  </section>
</template>

<style scoped lang="scss">
.home {
  padding: 3rem 0;
}
</style>
