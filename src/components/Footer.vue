<template>
  <div class="footer_container">
    <div class="footer_main">
      <img alt="logo" class="imgLogo" src="@/assets/logo_blue.png" />
      <div class="footed_contact">
        <div class="footer_content">
          <div class="footer_content_header">About</div>
          <li v-for="item in About" :key="item.id" class="footer_content_item">
            {{ item.name }}
          </li>
        </div>
        <div class="footer_content">
          <div class="footer_content_header">Information</div>
          <li
            v-for="item in Information"
            :key="item.id"
            class="footer_content_item"
          >
            {{ item.name }}
          </li>
        </div>
        <div class="footer_content">
          <div class="footer_content_header">Service</div>
          <li
            v-for="item in Service"
            :key="item.id"
            class="footer_content_item"
          >
            {{ item.name }}
          </li>
        </div>
      </div>
    </div>
    <div class="footer_media">
      <div class="footer_media_contact">
        <div class="footer_media_contact-name footer_mb">Contacts</div>
        <div class="footer_media_contact-content">
          <div class="footer_media-phone">
            <p>+1 601-201-5580</p>
            <span>ensome@info.co.us</span
            ><span
              ><img
                style="color: #292d33; margin-left: 8px"
                :src="iconRight"
                alt=""
            /></span>
          </div>
          <div class="footer_media-phone">
            <p>1642 Washington Avenue, Jackson, MS, 39201</p>
            <span>Driving derections</span
            ><span
              ><img
                style="color: #292d33; margin-left: 8px"
                :src="iconRight"
                alt=""
            /></span>
          </div>
        </div>
      </div>
      <div class="footer_media_main">
        <div class="footer_media_contact-name">Social</div>
        <div>
          <img :src="social1" alt="" />
          <img :src="social2" alt="" />
          <img :src="social3" alt="" />
          <img :src="social4" alt="" />
          <img :src="social5" alt="" />
          <img :src="social6" alt="" />
        </div>
      </div>
    </div>
    <div>
      <li v-for="item in About" :key="item.id" class="footer_content_item">
        {{ item.name }}
      </li>
    </div>
    <div class="footer_media">
      <div class="footer_subMedia">
        <span class="footer_policy">Privacy policy</span
        ><span class="footer_policy"
          ><img
            style="color: #292d33; margin-left: 8px; margin-right: 76px"
            :src="iconRight"
            alt=""
        /></span>
        <span class="footer_policy">Terms of us</span
        ><span
          ><img
            style="color: #292d33; margin-left: 8px"
            :src="iconRight"
            alt=""
        /></span>
      </div>
      <div class="footer_policy_end">© 2022 Ensome. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
import social1 from "@/assets/fa.png";
import social2 from "@/assets/2social.png";
import social3 from "@/assets/l.png";
import social4 from "@/assets/youtube.png";
import social5 from "@/assets/4social.png";
import social6 from "@/assets/6.png";
import iconRight from "@/assets/right.png";

export default {
  name: "FooterComponent",
  setup() {
    const About = [
      {
        id: 1,
        name: "Home",
      },
      {
        id: 2,
        name: "About Us",
      },
      {
        id: 3,
        name: "Services",
      },
      {
        id: 4,
        name: "Solutions",
      },
    ];
    const Information = [
      {
        id: 1,
        name: "Contacts",
      },
      {
        id: 2,
        name: "Our team",
      },
      {
        id: 3,
        name: "Blog",
      },
      {
        id: 4,
        name: "FAQ",
      },
    ];
    const Service = [
      {
        id: 1,
        name: "Pages",
      },
      {
        id: 1,
        name: "Elements",
      },
      {
        id: 2,
        name: "Site map",
      },
      {
        id: 3,
        name: "Pricing",
      },
      {
        id: 4,
        name: "FAQ",
      },
    ];
    return {
      About,
      Information,
      Service,
      social1,
      social2,
      social3,
      social4,
      social5,
      social6,
      iconRight,
    };
  },
};
</script>

<style scoped>
.footer_container {
  max-width: 1110px;
  margin: auto;
}
.footer_main {
  padding: 50px 0px 40px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #c9dcec;
}
.imgLogo {
  padding-top: 6px;
}
.footed_contact {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 100px;
}
.footer_content_header {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #292d33;
  text-align: start;
}
.footer_content_item {
  padding: 10px 0;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: start;
  list-style: none;
}
.footer_media {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0px;
  border-bottom: 1px solid #c9dcec;
}
.footer_media_contact-name {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #292d33;
  text-align: start;
}
.footer_media_main > div {
  padding-top: 16px;
}
.footer_media_main > div > img {
  padding: 0px 8px;
}
.footer_media_contact-content {
  display: flex;
  justify-content: flex-start;
  align-items: start;
  gap: 36px;
}
.footer_media-phone > p {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 10px 0;
}
.footer_media-phone > span {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: start;
}
.footer_policy {
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #9497a1;
}
.footer_policy_end {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #9497a1;
}
@media only screen and (max-width: 600px) {
  .analysis {
    display: block;
    text-align: center;
  }
  .footer_main {
    border-bottom: none;
    display: block;
    padding: 50px 0px 20px 0px;
  }
  .footer_content_header {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .footer_content {
    padding: 16px 0px;
    border-bottom: 1px solid #9497a1;
  }
  .footed_contact {
    display: block;
  }
  .footer_content_item {
    display: none;
  }
  .footer_media {
    display: block;
    border-bottom: none;
    padding: 0px 0px 30px;
  }
  .footer_media_main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer_container {
    padding: 0 16px;
  }
  .footer_media-phone {
    display: none;
  }
  .footer_media div span > img {
    display: none;
  }
  .footer_media div span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #292d33;
    margin-right: 15px;
  }
  .footer_subMedia {
    padding-bottom: 15px;
    border-bottom: 1px solid #9497a1;
  }
  .footer_policy_end {
    padding-top: 10px;
  }
  .footer_mb {
    display: none;
  }
}
</style>
