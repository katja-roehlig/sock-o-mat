<template>
  <div class="size-main">
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
  </div>
  <FooterComponent class="footer" />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
  props: {
    msg: String,
  },
};
</script>
