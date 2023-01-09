<script setup>
import { RouterLink } from 'vue-router';
import AppContainer from '../components/AppContainer.vue';

const year = new Date();
</script>

<template>
  <footer class="footer" r>
    <AppContainer>
      <div class="footer-wrapper">
        <p>
          <RouterLink to="/">PokeVue</RouterLink>
          © {{ year.getFullYear() }}
        </p>
      </div>
    </AppContainer>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #333;

  &-wrapper {
    text-align: center;

    p {
      color: #fff;

      a {
        font-weight: 700;
      }
    }
  }
}
</style>
