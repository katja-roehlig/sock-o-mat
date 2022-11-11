<template>
  <BaseLayout msg="Sockenstricken mal anders">
    <div class="home">
      <img
        src="@/assets/img/Socke-Opal-3.png"
        width="200"
        height="300"
        alt="ein random Foto"
      />
    </div>
    <button class="button-style home-button">
      <router-link :to="{ name: 'create' }" class="button-link"
        >Neue Socke</router-link
      >
    </button>
    <button class="button-style home-button">
      <router-link :to="{ name: 'overview' }" class="button-link"
        >Übersicht</router-link
      >
    </button>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "HomeView",
  components: { BaseLayout },
};
</script>
<style scoped>
.home {
  margin-block: 2em;
}
.home-button {
  margin-bottom: 2em;
}
</style>
