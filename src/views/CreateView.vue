<template>
  <BaseLayout msg="Erstelle ein neues Sockenprojekt"
    ><CreateComponent
  /></BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import CreateComponent from "@/components/CreateComponent.vue";

export default {
  name: "CreateView",
  components: { BaseLayout, CreateComponent },
};
</script>
<style scoped></style>
