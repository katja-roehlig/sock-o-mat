<template>
  <BaseLayout msg="Übersicht über deine Projekte">
    <SockItem />
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import SockItem from "@/components/SockItem.vue";

export default {
  name: "CreateView",
  components: { BaseLayout, SockItem },
};
</script>
