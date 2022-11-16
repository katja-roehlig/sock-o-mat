<template>
  <BaseLayout msg="Organisiere deine Socken">
    <div class="home">
      <img
        src="/img/Socke-Opal-3.png"
        width="250"
        height="400"
        alt="ein random Foto"
        class="image"
      />
      <div class="button"></div>
      <button class="button-style">
        <router-link :to="{ name: 'create' }" class="button-link"
          ><span class="new">Los geht´s</span></router-link
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
  text-align: center;
  margin-block: 10%;
}

.image {
  border: 2px solid var(--contrast-color);
  border-radius: 7px;
}
.button {
  padding-top: 1em;
}
</style>
