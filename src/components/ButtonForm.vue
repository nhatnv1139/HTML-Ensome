<template>
  <div class="button_main">
    <div class="bt_text" v-if="icon">
      <img :src="play" alt="" />
      <div class="bt_text_main">
        {{ textButton }}
      </div>
    </div>
    <div v-else>
      <div class="bt_text_main1">
        {{ textButton }}
      </div>
    </div>
  </div>
</template>

<script>
import play from "@/assets/play.png";
export default {
  props: {
    textButton: String,
    icon: Boolean,
  },
  setup() {
    return { play };
  },
};
</script>

<style scoped>
.button_main {
  text-align: center;
  background: #185cff;
  border-radius: 6px;
  color: #ffffff;
  padding: 10px 14px;
}
.bt_text {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bt_text_main {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}
.bt_text > img {
  padding-right: 10px;
}
.bt_text_main1 {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
</style>
