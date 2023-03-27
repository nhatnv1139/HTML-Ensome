<template>
  <div class="home">
    <BasePages>
      <div class="home_header home_pc">
        <div class="home_header_container">
          <div class="home_title">Find true power in your data with Ensome</div>
          <div class="home_subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div class="home_btn">
            <ButtonForm textButton="Learn more" />
            <div class="btn_noBG">
              <img :src="play" alt="" />
              <div class="bt_text_main">Watch the demo</div>
            </div>
          </div>
          <!-- <ButtonForm textButton="Learn more" /> -->
        </div>

        <div class="home_header_img">
          <img :src="illustration" alt="" />
        </div>
      </div>
      <!-- mb -->

      <div class="home_header home_mb">
        <div class="home_header_img">
          <img :src="illustration" alt="" />
        </div>
        <div class="home_header_container">
          <div class="home_title">Find true power in your data with Ensome</div>
          <div class="home_subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div class="home_btn">
            <ButtonForm textButton="Learn more" class="btn_learn" />
            <ButtonForm textButton="Watch the demo" :icon="true" />
          </div>
        </div>
      </div>

      <div class="home_logo home_pc">
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
      </div>
      <div class="home_logo home_mb">
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
        <img :src="logo_1" alt="" />
      </div>

      <div class="home_advance">
        <div class="home_advance_title">Why our clients chosse Ensome?</div>
        <div class="home_advance_subtitle">
          Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </div>
      </div>
      <div class="home_card">
        <div v-for="item in cardHome" :key="item" class="home_card_main">
          <img :src="item.card" alt="" />
          <div class="home_card_title">{{ item.title }}</div>
          <div class="home_card_content">{{ item.content }}</div>
        </div>
      </div>
      <!-- mb -->

      <div class="home_header home_pc">
        <div class="home_header_container">
          <div class="home_title">Find true power in your data with Ensome</div>
          <div class="home_subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div class="home_btn">
            <ButtonForm textButton="Learn more" />
          </div>
        </div>
        <div class="home_header_img">
          <img :src="illustration1" alt="" />
        </div>
      </div>
      <div class="home_header home_mb">
        <div class="home_header_img">
          <img :src="illustration" alt="" />
        </div>
        <div class="home_header_container">
          <div class="home_title">Find true power in your data with Ensome</div>
          <div class="home_subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div class="home_btn">
            <ButtonForm textButton="Discover more" class="btn_learn" />
          </div>
        </div>
      </div>
      <div class="home_header_option home_pc">
        <div class="home_header_img_option">
          <img :src="illustration1" alt="" />
        </div>
        <div class="home_header_container">
          <div class="home_title">Find true power in your data with Ensome</div>
          <div class="home_subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div class="home_btn">
            <ButtonForm textButton="Learn more" />
          </div>
        </div>
      </div>
      <div class="home_header home_mb">
        <div class="home_header_img">
          <img :src="illustration" alt="" />
        </div>
        <div class="home_header_container">
          <div class="home_title">Find true power in your data with Ensome</div>
          <div class="home_subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div class="home_btn">
            <ButtonForm textButton="Discover more" class="btn_learn" />
          </div>
        </div>
      </div>
      <BlogSession />
      <Review />
      <ComponentFull :isAnalysis="true" />
      <div class="home-contact">
        <Consultation class="home_contact_consultation" />
        <ContactUs class="home_contact_contactUS" />
      </div>
      <ComponentFull :isEmail="true" />
    </BasePages>
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <!-- <HorizontalMenu msg="Welcome to Your Vue.js App" /> -->
    <!-- <ComponentFull :isEmail="true" /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HorizontalMenu from "@/components/HorizontalMenu.vue";
// import Footer from "@/components/Footer.vue";
import Review from "@/components/Review.vue";
import BlogSession from "@/components/BlogSession.vue";

import ComponentFull from "@/components/ComponentFull.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import Consultation from "@/components/ContactUs/Consultation.vue";
import BasePages from "@/components/BasePages/BasePages.vue";
import illustration from "@/assets/001_illustration.png";
import illustration1 from "@/assets/illustration1.png";

import ButtonForm from "@/components/ButtonForm.vue";
import play from "@/assets/Vector.png";
import logo_1 from "@/assets/logo_1.svg";
import card from "@/assets/card.png";

export default {
  name: "HomeView",
  components: {
    // HorizontalMenu,
    // Footer,
    ComponentFull,
    ContactUs,
    Consultation,
    BasePages,
    ButtonForm,
    Review,
    BlogSession,
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
.home_header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  max-width: 1100px;
  margin: auto;
}
.home_header_option {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 95px;
  padding-top: 30px;
  max-width: 1100px;
  margin: auto;
}
.home_header_img_option {
  width: 50%;
  text-align: right;
}
.home_header_img_option > img {
  width: 766px;
  width: 100%;
  height: 590px;
  float: right;
}
.home_header_container {
  width: 50%;
}
.home_header_img {
  width: 50%;
}
.home_title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
}
.home_subtitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #9497a1;
  padding: 30px 0px 35px 0px;
}
.home_btn {
  display: flex;
  justify-content: flex-start;
}
.btn_noBG {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #292d33;
  padding-left: 20px;
}
.btn_noBG > img {
  padding-right: 10px;
  color: #292d33;
}
.bt_text_main {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
.home_logo {
  padding: 48px 0px 100px 0px;
  max-width: 1100px;
  margin: auto;
}
.home_logo > img {
  width: 183px;
}
.home_advance {
  padding-bottom: 50px;
  text-align: center;
  max-width: 540px;
  margin: auto;
  max-width: 1100px;
  margin: auto;
}
.home_advance_title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  text-align: center;
  font-size: 46px;
  line-height: 60px;
  margin-bottom: 30px;
}
.home_advance_subtitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #9497a1;
  text-align: center;
}
.home_card {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  padding-bottom: 100px;
}
.home_card_main {
  padding: 46px 35px;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
}
.home_card_title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  margin-bottom: 16px;
}
.home_card_content {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
}
.home-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1110px;
  margin: auto;
}
.home_mb {
  display: none;
}
@media only screen and (max-width: 600px) {
  .home-contact {
    display: block;
    padding: 0px 16px;
  }
  .home_contact_contactUS {
    display: none;
  }
  .home_pc {
    display: none;
  }
  .home_mb {
    display: block;
  }
  .home_header_img {
    /* display: flex;
    justify-content: center; */
  }
  .home_header_img img {
    max-width: 354px;
  }
  .home_header_container {
    padding: 0px 16px;
    width: 100%;
  }
  .home_title {
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 40px;
    padding: 30px 0px 20px;
  }
  .home_btn {
    display: block;
  }
  .btn_learn {
    margin-bottom: 20px;
  }
  .home_logo img {
    width: 25%;
  }
  .home_card {
    grid-template-columns: auto;
  }
}
</style>
