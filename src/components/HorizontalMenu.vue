<template>
  <div class="main_header">
    <div class="header_container">
      <img alt="logo" src="@/assets/logo_blue.png" />
      <ItemMenu />
      <div>
        <ButtonForm textButton="Watch the demo" :icon="true" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonForm from "@/components/ButtonForm.vue";
import ItemMenu from "@/components/ItemMenu.vue";

export default {
  components: {
    ButtonForm,
    ItemMenu,
  },
};
</script>

<style lang="css" scoped>
img {
  object-fit: contain;
}
.main_header {
  width: 100%;
  /* max-height: 126px; */
  background: #ffffff;
  text-align: center;
}
.header_container {
  max-width: 1110px;
  margin: auto;
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
>
