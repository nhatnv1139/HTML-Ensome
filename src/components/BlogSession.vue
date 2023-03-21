<template>
  <div class="main_blog">
    <div class="blog_container">
      <div class="blog_title">Glad to help your success</div>
      <div class="blog_content">
        <div class="blog_content_main" v-for="item in blog" :key="item">
          <div class="blog_content_item">
            <div class="time">{{ item.time }}</div>
            <div class="title">{{ item.title }}</div>
            <div class="subtitle">{{ item.subtitle }}</div>
            <div class="btn">
              <div class="bt">Proxy</div>
              <div class="bt">VPN</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_blog">
        <div class="btn_blog_1">
          <ButtonForm textButton="Learn more" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonForm from "@/components/ButtonForm.vue";

export default {
  components: {
    ButtonForm,
  },
  setup() {
    const blog = [
      {
        id: 1,
        time: "22 June 2020",
        title: "Sed ut perspiciatis unde omnis at vero blanditils",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
      },
      {
        id: 1,
        time: "22 June 2020",
        title: "Sed ut perspiciatis unde omnis at vero blanditils",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
      },
      {
        id: 1,
        time: "22 June 2020",
        title: "Sed ut perspiciatis unde omnis at vero blanditils",
        subtitle:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti... ",
      },
    ];
    return {
      blog,
    };
  },
};
</script>

<style scoped>
.main_blog {
  background: #f0f9ff;
}
.blog_container {
  padding: 100px 0px;
  max-width: 1110px;
  margin: auto;
}
.blog_title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  text-align: center;
}
.blog_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-top: 50px;
}
.blog_content_item {
  background: #ffffff;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
  padding: 30px 35px 46px;
}
.time {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #9497a1;
}
.title {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #292d33;
  padding: 20px 0px 16px;
}
.subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #9497a1;
  padding-bottom: 20px;
}
.btn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
.bt {
  color: #185cff;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
}
.btn_blog {
  max-width: 190px;
  width: 100%;
  margin: auto;
}
.btn_blog_1 {
  padding-top: 50px;
  text-align: center;
}

</style>
