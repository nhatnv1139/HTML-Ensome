<template>
  <div class="item_menu">
    <div v-for="item in itemMenu" :key="item.id">
      <router-link :to="item.url" class="">
        <div
          class="item_content_menu"
          :class="{ activeMenu: item.id === activeStep }"
        >
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const activeStep = ref(1);
    const itemMenu = [
      {
        id: 1,
        name: "Home",
        url: "/",
      },
      {
        id: 2,
        name: "services",
        url: "/services",
      },
       {
        id: 2,
        name: "BlogView",
        url: "/BlogView",
      },
      {
        id: 3,
        name: "AboutUs",
        url: "/AboutUs",
      },
      {
        id: 4,
        name: "solution",
        url: "/solution",
      },
      {
        id: 5,
        name: "FAQs",
        url: "/FAQs",
      },
      {
        id: 6,
        name: "OutTeam",
        url: "/OutTeam",
      },
    ];
    return {
      itemMenu,
      activeStep,
    };
  },
};
</script>

<style scoped>
.item_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.item_content_menu {
  color: #9497a1;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
a {
  text-decoration: none;
}
.activeMenu {
  color: #292d33;
}
</style>
