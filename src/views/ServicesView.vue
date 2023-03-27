<template>
  <div class="services">
    <BasePages>
      <div class="service_main">
        <div class="title">Services</div>
        <div class="subtitle">
          <div class="home">Home</div>
          <div class="Services">Services</div>
        </div>
        <div class="home_card">
          <div v-for="item in cardHome" :key="item" class="home_card_main">
            <!-- <div style="width:33%"> -->
            <img :src="item.card" alt="" />
            <div class="home_card_title">{{ item.title }}</div>
            <div class="home_card_content">{{ item.content }}</div>
            <div class="home_card_icon">
              <div>Read more</div>
              <img src="" alt="" />
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <!-- <BlogSession />
      <Review /> -->
      <ComponentFull :isAnalysis="true" />
      <div class="home-contact">
        <Consultation class="home_contact_consultation" />
        <ContactUs class="home_contact_contactUS" />
      </div>
      <ComponentFull :isEmail="true" />
    </BasePages>
  </div>
</template>
<script>
// import Review from "@/components/Review.vue";
// import BlogSession from "@/components/BlogSession.vue";

import ComponentFull from "@/components/ComponentFull.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import Consultation from "@/components/ContactUs/Consultation.vue";
import BasePages from "@/components/BasePages/BasePages.vue";
import illustration from "@/assets/001_illustration.png";
import illustration1 from "@/assets/illustration1.png";

// import ButtonForm from "@/components/ButtonForm.vue";
import play from "@/assets/Vector.png";
import logo_1 from "@/assets/logo_1.svg";
import card from "@/assets/card.png";

export default {
  components: {
    // HorizontalMenu,
    // Footer,
    ComponentFull,
    ContactUs,
    Consultation,
    BasePages,
    // ButtonForm,
    // Review,
    // BlogSession,
  },
  setup() {
    const cardHome = [
      {
        id: 1,
        card: card,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 2,
        card: card,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 3,
        card: card,
        title: "Machine learning",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      // {
      //   id: 4,
      //   card: card,
      //   title: "Machine learning",
      //   content:
      //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      // },
      // {
      //   id: 5,
      //   card: card,
      //   title: "Machine learning",
      //   content:
      //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      // },
      // {
      //   id: 6,
      //   card: card,
      //   title: "Machine learning",
      //   content:
      //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      // },
    ];
    return {
      illustration,
      play,
      logo_1,
      card,
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
  max-width: 1100px;
  margin: auto;
  grid-template-columns: auto auto auto;
  display: grid;
  gap: 30px;
  padding-bottom: 100px;
  padding-top: 280px;
}
.home_card_main {
  padding: 46px 35px;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
  text-align: center;
}
.home_card_title {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #292d33;
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
  text-align: center;
  color: #185cff;
}
@media only screen and (max-width: 600px) {
  .home_card {
    grid-template-columns: auto;
    padding-top: 110px;
    padding: 110px 44px 0px;
    width: 100%;
  }
  .home-contact {
    display: block;
    padding: 0px 16px;
  }
  .home_contact_contactUS {
    display: none;
  }
  .title {
    padding-top: 36px;
  }
}
</style>
