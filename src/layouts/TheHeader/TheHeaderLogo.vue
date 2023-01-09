<script setup>
import { RouterLink } from 'vue-router';
import logo from '../../assets/images/pokeball.png'

const props = defineProps({
  handleNavActive: Function,
})
</script>

<template>
  <figure @click="props.handleNavActive">
    <RouterLink to="/">
      <img :src="logo" alt="PokeVue - logo" />
      <h2>PokeVue</h2>
    </RouterLink>
  </figure>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  gap: .5rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  h2 {
    font-size: 2rem;
    color: #ffffff;
  }
}
</style>
