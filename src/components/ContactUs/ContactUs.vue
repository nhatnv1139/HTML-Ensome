<template>
  <div class="form_contact">
    <div class="form_title">Contact Us</div>
    <div class="form_input">
      <label for="">Name</label>
      <input type="text" v-model="data.name" />
    </div>
    <div class="form_input">
      <label for="">Email</label>
      <input type="text" v-model="data.email" />
    </div>
    <div class="form_input">
      <label for="">Theme</label>
      <input type="text" v-model="data.theme" />
    </div>
    <div class="form_input">
      <label for="">Message</label>
      <input type="text" v-model="data.message" />
    </div>
    <div class="bt-form">
      <ButtonForm textButton="Send" />
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
    const data = {
      name: "Andrea",
      email: "andrea@gmaol.com",
      theme: "Job",
      message: "Your message",
    };
    return { data };
  },
};
</script>

<style scoped>
.form_contact {
  width: 445px;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
  padding: 50px;
}
.form_title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  color: #292d33;
  padding-bottom: 30px;
}
.form_input {
  padding-bottom: 20px;
}
.form_input > input {
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #9497a1;
  padding: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #292d33;
}
.form_input > label {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #9497a1;
}
.bt-form {
  width: 137px;
  padding-top: 87px;
  text-align: end;
}
</style>
