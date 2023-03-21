<template>
  <div class="review_main">
    <div class="review_header">
      <div class="title">Trusted by the best in the business</div>
      <div class="icon_button">
        <img :src="left" alt="" class="imgLeft" />
        <img :src="right" alt="" />
      </div>
    </div>
    <div class="review_item">
      <div class="review_person" v-for="item in reviewItem" :key="item.id">
        <!-- <div> -->
        <div class="review_child">
          <img :src="item.url" alt="" class="img" />
          <div class="subtitle">{{ item.subTitle }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="position">{{ item.position }}</div>
        </div>

        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import person from "@/assets/person_1.png";
import right from "@/assets/123.png";
import left from "@/assets/234.png";

export default {
  name: "ReviewComponent",
  setup() {
    const reviewItem = [
      {
        id: 1,
        url: person,
        subTitle:
          "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” ",
        name: "Alex",
        position: "ceo",
      },
      {
        id: 2,
        url: person,
        subTitle:
          "“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.” ",
        name: "Alex",
        position: "ceo",
      },
    ];
    return {
      reviewItem,
      right,
      left,
    };
  },
};
</script>

<style scoped>
.review_main {
  max-width: 1110px;
  margin: auto;
  padding: 100px 0px;
}
.review_header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  color: #292d33;
  max-width: 445px;
}
.review_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  /* padding: 75px 35px 35px; */
  padding-top: 100px;
}
.review_person {
  /* padding: 35px; */
}
.img {
  /* width: 80px;
  height: 80px; */
  /* padding-top: 25px; */
  position: absolute;
  left: 35px;
  top: -40px;
}
.imgLeft {
  padding: 0px 15px;
}
.subtitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #9497a1;
  padding: 35px 0px;
}
.name {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #292d33;
  padding-bottom: 4px;
}
.position {
  color: #9497a1;
  font-weight: 400;
  font-size: 14px;
}
.review_child {
  position: relative;
  padding: 35px;

  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
}
</style>
