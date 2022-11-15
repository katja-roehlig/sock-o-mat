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
</style>
