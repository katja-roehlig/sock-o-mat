<template>
  <BaseLayout msg="Organisiere deine Socken">
    <div class="home">
      <img
        src="/img/Socke-Opal-3.png"
        width="200"
        height="300"
        alt="ein random Foto"
        class="image"
      />
    </div>
    <div class="button">
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
    </div>
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
  text-align: center;
}
.home-button {
  margin-bottom: 2em;
}
.button {
  display: flex;
  justify-content: space-evenly;
}
.image {
  border: 2px solid var(--basic-color);
}
</style>
