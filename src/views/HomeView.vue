<script setup>
import { RouterLink } from 'vue-router';
import logo from '../assets/images/pokeball.png'
import AppContainer from '../components/AppContainer.vue';
import HomeShowcase from '../components/HomeShowcase.vue';
</script>

<template>
  <section class="home">
    <AppContainer>
      <div class="home-title">
        <figure>
          <h1>Poke</h1>
          <img :src="logo" alt="PokeVue - logo" />
        </figure>
      </div>
      <HomeShowcase />
    </AppContainer>
  </section>
</template>

<style scoped lang="scss">
.home {
  padding: 3rem 0;

  &-title {
    display: flex;
    justify-content: center;

    figure {
      display: flex;
      align-items: center;
      gap: .5rem;

      img {
        width: 3rem;
        height: 3rem;
      }

      h1 {
        color: #e23b31;
        font-size: 2.5rem;

        &::after {
          content: 'Vue';
          color: #333333;
        }
      }
    }
  }
}
</style>
