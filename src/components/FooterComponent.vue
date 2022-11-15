<template>
  <div class="footer-container">
    <button class="button-style button-link">
      <slot name="button-right ">
        <router-link :to="{ name: 'overview' }">Überblick</router-link></slot
      >
    </button>
    <button class="button-style button-link">
      <router-link to="/">Home</router-link>
    </button>
    <button class="button-style button-link">
      <slot name="button-left">
        <router-link :to="{ name: 'create' }">neu</router-link></slot
      >
    </button>
  </div>
  <div class="bottom-footer"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  background-color: var(--bg-color);
  border-top: 2px solid var(--basic-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bottom-footer {
  background-color: var(--basic-color);
  border-top: 2px solid var(--accent-color);
}
</style>
