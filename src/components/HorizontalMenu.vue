<template>
  <div class="main_header">
    <div class="header_container">
      <img alt="logo" src="@/assets/logo_blue.png" />
      <ItemMenu class="item_menu" />
      <div class="btn">
        <ButtonForm textButton="Watch the demo" :icon="true" />
      </div>
      <img :src="icon" alt="" class="item_icon" />
    </div>
  </div>
</template>

<script>
import ButtonForm from "@/components/ButtonForm.vue";
import ItemMenu from "@/components/ItemMenu.vue";
import icon from "@/assets/iconsmb.png";

export default {
  components: {
    ButtonForm,
    ItemMenu,
  },
  setup() {
    return { icon };
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
.item_icon {
  display: none;
}
@media only screen and (max-width: 600px) {
  .item_menu {
    display: none;
  }
  .item_icon {
    display: block;
  }
  .main_header {
    padding: 0px 16px;
  }
  .btn {
    display: none;
  }
}
</style>
>
