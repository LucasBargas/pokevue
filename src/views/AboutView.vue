<script setup>
import {reactive} from 'vue'
import { RouterLink } from 'vue-router';
import AppContainer from '../components/AppContainer.vue';
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
          Este App foi desenvolvido por mim, Lucas Bargas, com base em um layout
          disponibilizado pelo Matheus Battisti, do
          <a
            href="https://horadecodar.com.br/hora-de-codar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hora de Codar
          </a>
          , no youtube, onde o mesmo desenvolveu este projeto com Nextjs.
        </p>

        <p>
          Para estudo decidi fazer este projeto com Vuejs, framework no qual
          estou estudando empenhadamente.
        </p>

        <h2>Para mais informações</h2>
        <ul>
          <li>
            <strong>Repositório do app no github:</strong>
            <a
              href="https://github.com/LucasBargas/pokevue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cliquei aqui
            </a>
          </li>
          <li>
            <strong>Meu portfolio completo:</strong>
            <a
              href="https://projetoslucasbargas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cliquei aqui
            </a>
          </li>
        </ul>

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
      margin-bottom: 1rem;
    }

    p {
      line-height: 1.325rem;
    }

    h2 {
      margin: 1rem 0 .5rem 0;
      font-size: 1.5rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .25rem;

      li {
        display: flex;
        gap: .25rem;

        a {
          font-weight: 400;
        }
      }
    }

    a {
      display: inline-block;
      color: #333;
      font-weight: 700;
    }

    img {
      margin-top: 1.5rem;
      max-width: 300px;
    }
  }
}
</style>
