<template>
  <BaseLayout :msg="subtitle">
    <DetailComponent @subtitleSock="handleSubtitle" />
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import DetailComponent from "@/components/DetailComponent.vue";

export default {
  name: "CreateView",
  components: { BaseLayout, DetailComponent },
  data() {
    return {
      subtitle: "",
    };
  },
  methods: {
    handleSubtitle(title) {
      this.subtitle = title;
    },
  },
};
</script>
