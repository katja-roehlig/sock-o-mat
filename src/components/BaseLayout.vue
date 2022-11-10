<template>
  <HeaderComponent :msg="msg" />
  <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link :to="{ name: 'create' }">Neue Socke</router-link>|
    <router-link :to="{ name: 'overview' }">Überblick</router-link>|
    <router-link :to="{ name: 'detail' }">Einzelne Socke</router-link>
  </nav>-->
  <slot />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  components: { HeaderComponent },
  props: {
    msg: String,
  },
};
</script>

<style>
.button-style {
  background-color: var(--basic-color);
  color: var(--bg-color);
  padding: 0.5em 0.6em 0.4em 0.6em;
  border-radius: 0.4em;
  border: none;
  font-size: 0.8em;
  font-weight: bold;
  box-shadow: 2px 2px 3px var(--contrast-color);
}
</style>
