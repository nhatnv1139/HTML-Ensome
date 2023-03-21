<template>
  <!-- <h1>123</h1> -->
  <div class="base_page">
    <HorizontalMenu class="header-menu" />
    <div class="content_page">
      <slot></slot>
    </div>
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
.header-menu {
  position: fixed;
  z-index: 1000;
}
.content_page {
  padding-top: 126px;
}
</style>
