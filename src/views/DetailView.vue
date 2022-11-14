<template>
  <BaseLayout msg="sock.title">
    <DetailComponent />
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import DetailComponent from "@/components/DetailComponent.vue";

export default {
  name: "CreateView",
  components: { BaseLayout, DetailComponent },
  data() {},
};
</script>
