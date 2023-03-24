<template>
  <div class="container_base">
    <div class="main_full">
      <div class="analysis" v-if="isAnalysis">
        <div v-for="item in analysis" :key="item.id">
          <div class="analysis_item">
            <div class="analysis_count">{{ item.count }}</div>
            <div class="analysis_name">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="email" v-if="isEmail">
        <!-- <div v-for="item in analysis" :key="item.id"> -->
        <div class="email_info">
          <div class="email_title">Subscribe to our newsletter</div>
          <div class="email_subtitle">
            <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
            <p>voluptatem accusantium doloremque laudantium.</p>
          </div>
        </div>
        <div class="email_input">
          <input type="text" placeholder="email" />
          <div class="button">Send</div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isEmail: Boolean,
    isAnalysis: Boolean,
  },
  setup() {
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
    return { analysis };
  },
};
</script>

<style scope>
.container_base {
  background: #185cff;
}
.main_full {
  max-width: 1110px;
  margin: auto;
}
.analysis {
  padding: 30px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.analysis_item {
}
.analysis_count {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  color: #ffffff;
}
.analysis_name {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  line-height: 28px;
}
.email {
  padding: 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.email_title {
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  color: #ffffff;
  line-height: 56px;
  padding-bottom: 24px;
}
.email_subtitle > p {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #ffffff;
}
.email_input {
  display: flex;
  border-radius: 6px;
}
.email_input > input {
  background: #c9dcec;
  padding: 15px 25px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  outline: none;
}
.button {
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 11px 46px;
  border: none;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
@media only screen and (max-width: 600px) {
  .analysis {
    display: block;
    text-align: center;
  }
  .analysis_item {
    margin-bottom: 70px;
  }
  .email_subtitle {
    display: none;
  }
  .email {
    width: 100%;
    display: block;
    padding: 50px 16px;
  }
  .email_info {
    text-align: center;
  }
  .email_input > input {
    font-weight: 600;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    color: #c9dcec;
    background: none;
    border: 1px solid #c9dcec;
    margin-bottom: 24px;
  }
  .button {
    text-align: center;
  }
  .email_input {
    display: block;
  }
}
</style>
