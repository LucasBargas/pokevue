<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  pokemon: Object,
})
</script>

<template>
  <div class="pokemon">
    <figure>
      <RouterLink :to="/pokemon/ + pokemon.id">
        <img
          :src="pokemon.id > 9 ?
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' +
      props.pokemon.id + '.png' : 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00' +
      props.pokemon.id + '.png'"
          alt="sds"
        />
      </RouterLink>
    </figure>

    <div class="pokemon-infos">
      <span class="pokemon-infos-flag">#{{ props.pokemon.id }}</span>
      <RouterLink :to="/pokemon/ + pokemon.id">
        {{ props.pokemon.name }}
      </RouterLink>
    </div>

    <div class="pokemon-details">
      <RouterLink :to="/pokemon/ + pokemon.id">Detalhes</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pokemon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #333;
  padding: 2rem 1rem;
  border: 2px solid #e23b31;
  border-radius: 1rem;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, .5);
  min-height: 340px;

  img {
    width: 100%;
    height: 100%;
    max-width: 150px;
  }

  &-infos {
    padding-top: 1rem;

    &-flag {
      display: inline-block;
      background: #e23b31;
      color: #ffffff;
      font-weight: 500;
      border-radius: 5px;
      padding: 5px;
    }

    a {
      display: block;
      margin-top: .5rem;
      text-transform: capitalize;
      font-size: 1.375rem;
      color: #ffffff;
    }
  }

  &-details {
    padding-top: 1.5rem;

    a {
      display: inline-block;
      background: #fff;
      color: #333;
      font-weight: 700;
      padding: .7rem 1.2rem;
      border-radius: 5px;
      transition: .4s;

      &:hover {
        background: #e23b31;
        color: #fff;
      }
    }
  }
}
</style>
