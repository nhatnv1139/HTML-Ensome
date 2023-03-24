<template>
  <div class="services">
    <BasePages>
      <div class="service_main">
        <div class="title">Blog list</div>
        <div class="subtitle">
          <div class="home">Home</div>
          <div><img :src="thang" alt="" /></div>
          <div class="Services">Blog list</div>
        </div>
        <div class="blog">
          <div class="blog_main">
            <div class="item_blog">
              <div class="itemChild" v-for="item in cardHome" :key="item.id">
                <img :src="item.card" alt="" />
                <div class="item_time">
                  {{ item.time }}
                </div>
                <div class="item_title">
                  {{ item.title }}
                </div>
                <div class="item_subtitle">
                  {{ item.subtitle }}
                </div>
                <div class="item_btn">
                  {{ item.btn }}
                </div>
              </div>
            </div>
            <div class="sub_item_blog">
              <div class="btn_search">
                <input type="text" placeholder="Search" class="input" />
                <div class="btn">Search</div>
              </div>
              <div class="item_right">Popular posts</div>
              <div class="item_log" v-for="item in sideBlog" :key="item">
                <div class="item_blog_side">
                  <img :src="item.card" alt="" />
                  <div class="item_log-child">
                    <div class="item_log_time">
                      {{ item.time }}
                    </div>
                    <div class="item_log_time_title">
                      {{ item.title }}
                    </div>
                    <div class="btn_log">Read more</div>
                  </div>
                </div>
              </div>
              <div class="item_right">Categories</div>
              <div v-for="e in category" :key="e" class="item_category">
                <div class="input_side">{{ e.name }}</div>
                <img :src="img9" alt="" class="input_side_img" />
              </div>
              <div class="item_right">Tags</div>
              <div class="item_tag_child">
                <div v-for="e in Tags" :key="e" class="item_tags">
                  <div class="tags_name" :class="{ active: e.id == 1 }">
                    {{ e.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <BlogSession /> -->
      <!-- <ComponentFull :isAnalysis="true" /> -->
      <!-- <Review /> -->
      <!-- <div class="home-contact">
        <Consultation />
        <ContactUs />
      </div> -->
      <ComponentFull :isEmail="true" />
    </BasePages>
  </div>
</template>
<script>
// import Review from "@/components/Review.vue";
// import BlogSession from "@/components/BlogSession.vue";
// import ButtonForm from "@/components/ButtonForm.vue";
import ComponentFull from "@/components/ComponentFull.vue";
// import ContactUs from "@/components/ContactUs/ContactUs.vue";
// import Consultation from "@/components/ContactUs/Consultation.vue";
import BasePages from "@/components/BasePages/BasePages.vue";
import illustration from "@/assets/001_illustration.png";
import illustration1 from "@/assets/illustration1.png";

import aboutUs from "@/assets/aboutUs.png";
// import logo_1 from "@/assets/aboutUs.svg";
import person from "@/assets/123person.png";
import thang from "@/assets/thang.png";
import doc from "@/assets/doc1.png";
import logo_1 from "@/assets/logo_2.png";
import img from "@/assets/img_10.png";
import img8 from "@/assets/img_8.png";
import img9 from "@/assets/456.png";

export default {
  name: "solutionApp",
  components: {
    ComponentFull,
    BasePages,
  },
  setup() {
    const Tags = [
      {
        id: 1,
        name: "All topics",
      },
      {
        name: "All ",
        id: 2,
      },
      {
        name: "All topics",
      },
    ];
    const cardHome = [
      {
        id: 1,
        card: img,
        time: "22 June 2022",
        title: "Machine learning",
        btn: "read me",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 2,
        card: img,
        time: "22 June 2022",
        title: "Machine learning",
        btn: "read me",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 3,
        card: img,
        time: "22 June 2022",
        title: "Machine learning",
        btn: "read me",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
    ];
    const sideBlog = [
      {
        id: 1,
        card: img8,
        time: "22 June 2022",
        title: "Machine learning",
        btn: "read me",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 2,
        card: img8,
        time: "22 June 2022",
        title: "Machine learning",
        btn: "read me",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
      {
        id: 3,
        card: img8,
        time: "22 June 2022",
        title: "Machine learning",
        btn: "read me",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
      },
    ];
    const category = [
      { name: "categSoftware developmentory" },
      { name: "categSoftware developmentory" },
      { name: "categSoftware developmentory" },
    ];
    return {
      illustration,
      aboutUs,
      // logo_1,
      person,
      cardHome,
      illustration1,
      thang,
      doc,
      logo_1,
      img,
      sideBlog,
      img8,
      category,
      img9,
      Tags,
    };
  },
};
</script>
<style scoped>
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
.blog {
  padding-top: 280px;
}
.blog_main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}
.item_blog {
  width: 60%;
}
.item_time {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #9497a1;
  padding: 25px 0px;
}
.item_title {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #292d33;
}
.item_subtitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #9497a1;
  padding: 15px 0px;
}
.item_btn {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #185cff;
  margin-bottom: 70px;
}
.sub_item_blog {
  width: 40%;
}
.btn_search {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input {
  border: 1px solid #9497a1;
  width: 100%;
  border-radius: 6px;
  padding: 15px 25px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #292d33;
}
.btn {
  padding: 15px 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  background: #185cff;
  border-radius: 6px;
}
.item_right {
  padding-top: 60px;
  padding-bottom: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #292d33;
}
.item_log {
  padding: 20px 0;
}
.item_blog_side {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
}
.item_log_time {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #9497a1;
}
.item_log_time_title {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 15px 0;
}
.btn_log {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #185cff;
}
.input_side {
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  padding: 20px 0px;
  border-bottom: 1px solid #9497a1;
  border-top: none;
  border-right: none;
  border-left: none;
}
.item_category {
  position: relative;
}
.input_side_img {
  position: absolute;
  right: 0;
  top: 50%;
}
.tags_name {
  color: #185cff;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  padding: 4px 11px;
}
.active {
  color: #ffffff;
  background: #185cff;
  border-radius: 6px;
}
.item_tag_child {
  display: flex;
  justify-content: flex-start;
}
</style>
