<template>
  <div class="services">
    <BasePages>
      <div class="service_main">
        <div class="title">Solutions</div>
        <div class="subtitle">
          <div class="home">Home</div>
          <div class="Services">Solutions</div>
        </div>
        <div class="solution_text">
          <div class="text_left">
            Technology doesn't just help businesses — it allows them to extract
            business value from vast big of data.
          </div>
          <div class="text_right">
            <div class="text_right_title">
              Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
              imperdiet in mauris et, euismod vestibulum lacus. Integer enim
              elit, tincidunt aliquam ligula.
            </div>
            <div class="text_right_btn">
              <ButtonForm textButton="See pricing" />
              <ButtonForm textButton="Contact Us" />
            </div>
          </div>
        </div>
        <div class="title">Our solutions</div>
        <div class="home_card">
          <div v-for="item in cardHome" :key="item" class="home_card_main">
            <!-- <img :src="item.card" alt="" /> -->
            <div class="home_out_team"></div>

            <div class="home_card_title">{{ item.title }}</div>
            <div class="home_card_content">{{ item.content }}</div>
            <div class="home_card_icon">
              <div>Read more</div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- <BlogSession /> -->
      <ComponentFull :isAnalysis="true" />
      <Review />
      <div class="home-contact">
        <Consultation />
        <ContactUs />
      </div>
      <ComponentFull :isEmail="true" />
    </BasePages>
  </div>
</template>
<script>
import Review from "@/components/Review.vue";
// import BlogSession from "@/components/BlogSession.vue";
import ButtonForm from "@/components/ButtonForm.vue";
import ComponentFull from "@/components/ComponentFull.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import Consultation from "@/components/ContactUs/Consultation.vue";
import BasePages from "@/components/BasePages/BasePages.vue";
import illustration from "@/assets/001_illustration.png";
import illustration1 from "@/assets/illustration1.png";

// import ButtonForm from "@/components/ButtonForm.vue";
import play from "@/assets/Vector.png";
import logo_1 from "@/assets/logo_1.svg";
import person from "@/assets/123person.png";

export default {
  name: "solutionApp",
  components: {
    // HorizontalMenu,
    // Footer,
    ComponentFull,
    ContactUs,
    Consultation,
    BasePages,
    ButtonForm,
    Review,
    // BlogSession,
  },
  setup() {
    const cardHome = [
      {
        id: 1,
        card: person,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 2,
        card: person,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 3,
        card: person,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 4,
        card: person,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 5,
        card: person,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 6,
        card: person,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
    ];
    return {
      illustration,
      play,
      logo_1,
      person,
      cardHome,
      illustration1,
    };
  },
};
</script>
<style scoped>
.home-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1110px;
  margin: auto;
}
.service_main {
  max-width: 1110px;
  margin: auto;
}
.title {
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  color: #292d33;
  padding: 100px 0px 20px;
  text-align: center;
}
.subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
}
.home {
  color: #9497a1;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}
.Services {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #292d33;
  line-height: 24px;
}
.home_card {
  /* max-width: 1100px; */
  /* margin: auto; */
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  /* width: 100%; */

  padding-bottom: 100px;
  padding-top: 30px;
}
.home_card_main {
  /* padding: 46px 35px; */
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  /* border-radius: 6px; */
  /* text-align: center; */
  border-top: 6px solid #185cff;
  padding: 41px 35px 35px;
}
.home_card_title {
  font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 33px;
  padding: 30px 0px 16px;
}
.home_card_content {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #9497a1;
  padding-bottom: 30px;
}
.home_card_icon {
  color: #185cff;
}
img {
  border-radius: 6px 6px 0px 0px;
}
.solution_text {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 125px;
  margin-top: 280px;
}
.text_left {
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  color: #292d33;
  /* max-width: 445px; */
}
.text_right_btn {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}
.text_right_title {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #9497a1;
  margin-bottom: 30px;
}
</style>
