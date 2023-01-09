<script setup>
import {reactive} from 'vue'
import AppContainer from '../components/AppContainer.vue';
import notFoundIcon from '../assets/images/404.png';
import AppLoading from '../components/AppLoading.vue';

const state = reactive({isLoading: false});

state.isLoading = true;
setTimeout(() => {
  state.isLoading = false;
}, 1000);
</script>

<template>
  <section class="not-found">
    <div v-if="state.isLoading">
      <AppLoading />
    </div>

    <AppContainer v-else>
      <div class="not-found-wrapper">
        <h1>Sentimos muito, página não encontrada!</h1>

        <figure>
          <img :src="notFoundIcon" alt="Página não encontrada" />
        </figure>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped lang="scss">
.not-found {
  padding: 3rem 0;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 60vh;

    h1 {
      margin-bottom: 1rem;
    }

    img {
      max-width: 180px;
    }
  }
}
</style>
