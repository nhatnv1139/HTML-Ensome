<template>
  <div class="services">
    <BasePages>
      <div class="service_main">
        <div class="title">About Us</div>
        <div class="subtitle">
          <div class="home">Home</div>
          <div><img :src="thang" alt="" /></div>
          <div class="Services">About Us</div>
        </div>
        <div class="solution_text">
          <div class="text_left">
            <div class="text_left_title">Who we are</div>
            <div class="text_left_sub">
              {{ subtext }}
            </div>
          </div>
          <div>
            <img :src="aboutUs" alt="" />
          </div>
        </div>
        <div class="solution_text1">
          <div>
            <img :src="aboutUs" alt="" />
          </div>
          <div class="text_left">
            <div class="text_left_title">Who we are</div>
            <div class="text_left_sub">
              {{ subtext }}
            </div>
          </div>
        </div>
        <div class="number">Ensome in numbers</div>
        <div class="analysis_container">
          <div class="analysis">
            <div v-for="item in analysis" :key="item.id" class="analysis_main">
              <div class="analysis_count">{{ item.count }}</div>
              <div class="analysis_name">{{ item.name }}</div>
              <!-- <img :src="doc" alt="" /> -->
            </div>
          </div>
        </div>
        <div class="text_conteent">
          <div class="text_left">
            <div class="text_left_title">Our customers</div>
            <div class="text_left_sub">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudan, totam rem aperiam.
            </div>
          </div>
        </div>
        <div class="home_logo">
          <img :src="logo_1" alt="" />
          <img :src="logo_1" alt="" />
          <img :src="logo_1" alt="" />
          <img :src="logo_1" alt="" />
          <img :src="logo_1" alt="" />
          <img :src="logo_1" alt="" />
        </div>
      </div>
      <!-- <BlogSession /> -->
      <!-- <ComponentFull :isAnalysis="true" /> -->
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
// import ButtonForm from "@/components/ButtonForm.vue";
import ComponentFull from "@/components/ComponentFull.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import Consultation from "@/components/ContactUs/Consultation.vue";
import BasePages from "@/components/BasePages/BasePages.vue";
import illustration from "@/assets/001_illustration.png";
import illustration1 from "@/assets/illustration1.png";

import aboutUs from "@/assets/aboutUs.png";
// import logo_1 from "@/assets/aboutUs.svg";
import person from "@/assets/123person.png";
import thang from "@/assets/thang.png";
import doc from "@/assets/doc1.png";
import logo_1 from "@/assets/logo_2.png";

export default {
  name: "solutionApp",
  components: {
    // HorizontalMenu,
    // Footer,
    ComponentFull,
    ContactUs,
    Consultation,
    BasePages,
    // ButtonForm,
    Review,
    // BlogSession,
  },
  setup() {
    const subtext = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    
Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia lectus.`;
    const analysis = [
      {
        id: 1,
        name: "Project executed",
        count: "1830+",
      },
      {
        id: 2,
        name: "Data analytics",
        count: "220",
      },
      {
        id: 3,
        name: "Data management",
        count: "390",
      },
      {
        id: 4,
        name: "Satisfied customers",
        count: "834+",
      },
    ];
    return {
      illustration,
      aboutUs,
      // logo_1,
      person,
      illustration1,
      subtext,
      thang,
      analysis,
      doc,
      logo_1,
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
  align-items: flex-end;
  gap: 30px;
  margin-top: 280px;
}
.solution_text1 {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  margin-top: 134px;
}
.text_left {
  width: 40%;
  /* max-width: 445px; */
}
.text_left_title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  color: #292d33;
  margin-bottom: 30px;
}
.text_left_sub {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #9497a1;
  white-space: pre-line;
}
.text_right {
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
.number {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  color: #292d33;
  text-align: center;
  padding-top: 220px;
  padding-bottom: 50px;
}
.analysis_container {
  padding: 30px 48px;
}
.analysis {
  padding: 30px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.analysis_main {
  max-width: 255px;
}
.analysis_count {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  color: #185cff;
}
.analysis_name {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #9497a1;
  line-height: 28px;
}
.text_conteent {
  padding-top: 260px;
}
.home_logo {
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
