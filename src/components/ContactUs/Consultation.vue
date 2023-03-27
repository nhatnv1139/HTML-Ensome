<template>
  <div class="consultation-main">
    <div class="consultation_container">
      <div class="consultation_heard">
        <div class="consultation_title">
          Left questions? Contacts us now for a free consultation and free
          trial!
        </div>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </p>
      </div>
      <div class="consultation_contact">
        <div class="title">Email address</div>
        <div class="subtitle">ensome@info.co.us</div>
      </div>
      <div class="consultation_contact">
        <div class="title">Phone number</div>
        <div class="subtitle">+1601-201-5580</div>
      </div>
      <div class="consultation_contact">
        <div class="title">Address</div>
        <div class="subtitle">
          1642 Washington Avenue, Jackson, MS, Mississippi, 39201
        </div>
      </div>
      <div class="btn_consultation">
        <ButtonForm textButton="Contact US" />
      </div>
    </div>
  </div>
</template>


<script>
import ButtonForm from "@/components/ButtonForm.vue";
export default {
  name: "ConsultationP",
  components:{
    ButtonForm
  }
};
</script>

<style scoped>
.consultation-main {
  /* max-width: 1110px;
  margin: auto; */
}
.consultation_container {
  max-width: 540px;
}
.consultation_heard {
  padding-bottom: 80px;
}
.consultation_heard > p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #9497a1;
}
.consultation_title {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  color: #292d33;
  margin-bottom: 24px;
}
.consultation_contact {
  padding-bottom: 24px;
}
.title {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 2px;
  color: #9497a1;
}
.subtitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #292d33;
}
.btn_consultation{
  display: none;
}
@media only screen and (max-width: 600px) {
  .home_card {
    grid-template-columns: auto;
    padding-top: 110px;
    padding: 110px 44px 0px;
    width: 100%;
  }
  .consultation_heard{
    padding-bottom: 0px;
  }
  .home-contact {
    display: block;
    padding: 0px 16px;
  }
  .consultation_heard > p {
    display: none;  
  }
  .btn_consultation{
  display: block;
  padding-bottom: 60px;
}
.consultation_container{
  padding-top: 60px;
}
}
</style>
