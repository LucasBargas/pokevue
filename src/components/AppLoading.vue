<template>
  <div class="loading-icon-container">
    <div class="loading-icon">
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes loading-icon-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-icon-container {
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  .loading-icon {
    display: inline-block;
    width: 40px;
    height: 40px;

    &:after {
      content: " ";
      display: block;
      width: 35px;
      height: 35px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #333333;
      border-color: #333333 transparent #333333 transparent;
      animation: loading-icon-animation 1s linear infinite;
    }
  }
}
</style>
