<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import AppLoading from './AppLoading.vue';
import PokeCard from './PokeCard.vue';
import logo from '../assets/images/pokeball.png'

const state = reactive({ isLoading: false, maxPokemons: 40 })
const data = ref(null);

const handleGetDatas = async () => {
  state.isLoading = true;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${state.maxPokemons}`);
  const { results } = await res.json();

  results.forEach((pokemon, index) => pokemon.id = index + 1);

  if (!res.status === 200) {
    state.isLoading = false;
    data.value = null;
    return;
  }

  state.isLoading = false;
  data.value = results;
}

const handleResizeWindow = () => {
  if (window.innerWidth >= 1280) {
    state.maxPokemons = 40;
    handleGetDatas();
    return;
  }

  state.maxPokemons = 20;
  handleGetDatas();
}

onMounted(async () => {
  await handleGetDatas();
  handleResizeWindow();
  window.addEventListener('resize', handleResizeWindow)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResizeWindow);
})
</script>

<template>
  <div v-if="state.isLoading">
    <AppLoading />
  </div>

  <template v-else>
    <div class="home-title">
      <figure>
        <h1>Poke</h1>
        <img :src="logo" alt="PokeVue - logo" />
      </figure>
    </div>

    <section>
      <PokeCard
        v-for="pokemon in data"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </section>
  </template>
</template>

<style scoped lang="scss">
  .home-title {
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

section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 820px) {
    padding: 2rem 0 0 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
.loading {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
