<script setup>
import { RouterLink } from 'vue-router';
import logo from '../../assets/images/pokeball.png'

const props = defineProps({
  navOpenened: Object,
})

const handleClick = () => {
  if (!props.navOpenened.opened) return;
  props.navOpenened.opened = false;
}
</script>

<template>
  <figure @click="handleClick">
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
