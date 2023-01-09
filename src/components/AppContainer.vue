<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 1.5rem;
  }
}
</style>
