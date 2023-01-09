<script setup>
import {reactive} from 'vue'
import AppContainer from '../components/AppContainer.vue';
import notFoundIcon from '../assets/images/404.png';
import AppLoading from '../components/AppLoading.vue';
import aboutPageIcon from '../assets/images/charizard.png';

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
        <h1>Sobre o PokeVue</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          atque, vitae voluptates maxime rerum at ipsum autem id qui eaque
          eveniet non eos sit pariatur aliquid deserunt.
        </p>
        <img :src="aboutPageIcon" alt="About page icon" />
      </div>
    </AppContainer>
  </section>
</template>

<style scoped lang="scss">
.about {
  padding: 3rem 0;

  &-wrapper {
    text-align: center;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    h1 {
      font-size: 2rem;
    }

    p {
      margin: 1rem 0 1.5rem 0;
      line-height: 1.325rem;
    }

    img {
      max-width: 300px;
    }
  }
}
</style>
