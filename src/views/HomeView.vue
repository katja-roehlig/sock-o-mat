<template>
  <BaseLayout msg="Sockenstricken mal anders">
    <div class="home">
      <img src="https://picsum.photos/200" alt="ein random Foto" />
    </div>
    <button class="button-style home-button">Neue Socke</button>
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
