<script setup>
import {reactive} from 'vue'
import AppContainer from '../components/AppContainer.vue';
import notFoundIcon from '../assets/images/404.png';
import AppLoading from '../components/AppLoading.vue';

const state = reactive({isLoading: false});

state.isLoading = true;
setTimeout(() => {
  state.isLoading = false;
}, 500);
</script>

<template>
  <section class="about">
    <div v-if="state.isLoading">
      <AppLoading />
    </div>

    <AppContainer v-else>
      <div class="about-wrapper">
        <h2>About</h2>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped lang="scss">
p {
  color: red;
}
</style>
