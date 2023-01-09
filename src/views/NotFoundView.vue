<script setup>
import AppContainer from '../components/AppContainer.vue';
import notFoundIcon from '../assets/images/404.png';
</script>

<template>
  <section class="not-found">
    <AppContainer>
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
