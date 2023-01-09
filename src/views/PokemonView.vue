<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, reactive } from 'vue';
import AppLoading from "../components/AppLoading.vue";
import AppContainer from "../components/AppContainer.vue";

const state = reactive({ isLoading: false })
const data = ref(null);

const route = useRoute();
const { id } = route.params;

onMounted(async () => {
  state.isLoading = true;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await res.json();

  if (!res.status === 200) {
    state.isLoading = false;
    data.value = null;
    return;
  }

  console.log(json.types)
  state.isLoading = false;
  data.value = json;
})
</script>

<template>
  <section class="pokemon">
    <div v-if="state.isLoading">
      <AppLoading />
    </div>

    <AppContainer v-else-if="!state.isLoading && data">
      <div class="pokemon-wrapper">
        <h1>{{ data.name }}</h1>

        <figure>
          <img
            :src="id > 9 ?
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' +
      id + '.png' : 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00' +
      id + '.png'"
            alt="sds"
          />
        </figure>

        <div class="pokemon-wrapper-id">
          <h3>Número</h3>
          <p>#{{ id }}</p>
        </div>

        <div class="pokemon-wrapper-type">
          <h4>Tipo:</h4>

          <div>
            <span v-for="{ type } in data.types" :key="type" :class="type.name">
              {{ type.name }}
            </span>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style scoped lang="scss">
.pokemon {
  padding: 3rem 0;

  &-wrapper {
    max-width: 380px;
    width: 100%;
    margin: 0 auto;

    h1 {
      text-transform: capitalize;
      font-size: 2.5rem;
      background: #333333;
      color: #ffffff;
      text-align: center;
      padding: .25rem;
      margin-bottom: .5rem;
      border-radius: 4px;
    }

    &-id {
      text-align: center;

      h3 {
        font-size: 1.25rem;
        margin-bottom: .5rem;
      }
    }

    &-type {
      text-align: center;
      padding-top: .875rem;

      h4 {
        font-size: 1.25rem;
      }

      div {
        padding-top: .5rem;
        display: flex;
        justify-content: center;
        max-width: 60%;
        margin: 0 auto;
        gap: .5rem;

        span {
          flex: 1;
          padding: .6rem 1rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          text-transform: uppercase;
          font-size: .8rem;
          color: #fff;
          letter-spacing: 1px;

          &.normal {
            background-color: #aa9;
          }

          &.fire {
            background-color: #f42;
          }

          &.water {
            background-color: #39f;
          }

          &.eletric {
            background-color: #fc3;
          }

          &.grass {
            background-color: #7c5;
          }

          &.ice {
            background-color: #6cf;
          }

          &.fighting {
            background-color: #b54;
          }

          &.poison {
            background-color: #a59;
          }

          &.ground {
            background-color: #db5;
          }

          &.flying {
            background-color: #89f;
          }

          &.psychic {
            background-color: #f59;
          }

          &.bug {
            background-color: #ab2;
          }

          &.rock {
            background-color: #ba6;
          }

          &.ghost {
            background-color: #66b;
          }

          &.dragon {
            background-color: #76e;
          }

          &.dark {
            background-color: #754;
          }

          &.steel {
            background-color: #aab;
          }

          &.fairy {
            background-color: #e9e;
          }
        }
      }
    }
  }
}
</style>
