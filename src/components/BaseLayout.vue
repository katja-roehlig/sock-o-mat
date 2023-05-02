<template>
  <div class="main__container">
    <div class="size-main">
      <HeaderComponent :msg="msg" />
      <slot />
    </div>
    <FooterComponent class="footer" />
  </div>
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
<style scoped>
.main__container {
  position: relative;
}
.footer {
  position: sticky;
  left: 0%;
  right: 0%;
  bottom: 0%;
}
</style>
