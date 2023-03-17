<template>
  <!-- <h1>123</h1> -->
  <div class="base_page">
    <HorizontalMenu />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import HorizontalMenu from "@/components/HorizontalMenu.vue";
export default {
  components: { Footer, HorizontalMenu },
};
</script>

<style scoped>
.base_page {
  /* max-width: 1100px;
  margin: auto; */
}
</style>
