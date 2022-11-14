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
  background-color: var(--basic-color-darker);
  color: var(--bg-color);
  padding: 0.4em 0.9em 0.4em 0.9em;
  border-radius: 0.6em;
  border: none;
  font-size: 0.9em;
  font-weight: bold;
  box-shadow: 2px 2px 0px var(--contrast-color);
  text-align: center;
}
.button-style:hover {
  background-color: var(--contrast-color);
  box-shadow: 2px 2px 0px var(--contrast-color);
}
.button-link {
  text-decoration: none;
  color: inherit;
}

h3 {
  font-size: 0.9em;
  color: var(--constrast-color);
  margin: 0;
}
</style>
