<script setup>
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
import AppContainer from '../../components/AppContainer.vue';
import TheHeaderLogo from './TheHeaderLogo.vue';

const navOpenened = reactive({ opened: false })

const handleNavActive = () => {
  navOpenened.opened = !navOpenened.opened;
}
</script>

<template>
  <header class="header">
    <AppContainer>
      <div class="header-wrapper">
        <TheHeaderLogo :handleNavActive="handleNavActive" />

        <nav
          ref="nav"
          class="header-wrapper-nav"
          :class="navOpenened.opened ?  'active' : ''"
        >
          <ul>
            <li>
              <RouterLink to="/" @click="handleNavActive">Início</RouterLink>
            </li>
            <li>
              <RouterLink to="/sobre" @click="handleNavActive">
                Sobre
              </RouterLink>
            </li>
          </ul>
        </nav>

        <button class="header-wrapper-mobile-btn" @click="handleNavActive">
          <i :class="navOpenened.opened ?  'bi bi-x' : 'bi bi-list'"></i>
        </button>
      </div>
    </AppContainer>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #333333;
  width: 100%;
  height: 5rem;
  z-index: 1000;

  * {
    color: #ffffff;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    &-nav {
      @media (max-width: 576px) {
        background: #333333;
        position: absolute;
        top: 5rem;
        left: 0;
        width: 100%;
        height: 0;
        overflow-y: hidden;
        visibility: hidden;
        transition: .4s;
      }

      &.active {
        @media (max-width: 576px) {
          height: calc(100vh - 5rem);
          visibility: visible;
          overflow-y: auto;
          transition: .4s;
        }
      }

      ul {
        display: flex;

        @media (max-width: 576px) {
          flex-direction: column;
          gap: .5rem;
          padding: 0 1.5rem;
        }

        a {
          padding: .5rem 0 .5rem 2rem;
          transition: .4s;

          @media (max-width: 576px) {
            display: block;
            width: 100%;
            padding: 1rem 0;
          }

          &:hover {
            color: #e23b31;
          }

          &.router-link-exact-active {
            color: #e23b31;

            @media (max-width: 576px) {
              border-bottom: 2px solid #e23b31;
            }
          }
        }
      }
    }

    &-mobile-btn {
      display: none;

      @media (max-width: 576px) {
        display: block;
      }

      .bi {
        font-size: 2.25rem;
      }
    }
  }
}
</style>
