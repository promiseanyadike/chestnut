<template>
  <div>
    <section class="footer">
      <div class="about">
        <div class="columns is-multiline">
          <div class="container aboutus">
            <div class="column">
              <div class="has-text-white">about chestnutbolt</div>
              <div class="about_content has-text-white has-text-left">
                C&B is currently staffed with a small team of creative engineers and
                individuals from related fields working either as full time-staffs or
                contract staffs. These persons are dedicated to the growth of the
                company and they are very willing to give their best.
                As innovation, creativity, technical knowledge and personal talent
                are the major criteria for recruitment. We have laid down a well-
                defined recruitment method that ensures we get quality personnel in
                all the area of works the company covers. We ensure that individuals
                are divided into their area of specialization to guarantee we get the
                optimal performance from them.
                Other forms of manpower include Industrial Training students,
                National youth service corps members and unskilled labour.
              </div>
              <!-- <div v-html="data.title" class="has-text-white"></div>
              <div v-html="data.content" class="about_content has-text-white has-text-justified"></div>-->
            </div>
            <div class="column">
              <div class="has-text-white">Social Media Handles</div>
              <div class="social_media">
                <a href="#" target="_blank" class="has-text-white">
                  <span class="icon f">
                    <i class="mdi mdi-facebook-box"></i>
                  </span>
                  facebook
                </a>
                <a href="facebook.com/chestnutbolt.com" target="_blank" class="has-text-white">
                  <span class="icon t">
                    <i class="mdi mdi-twitter"></i>
                  </span>
                  twitter
                </a>
                <a href="#" target="_blank" class="has-text-white">
                  <span class="icon g">
                    <i class="mdi mdi-google-plus"></i>
                  </span>
                  google+
                </a>
                <a href="#" target="_blank" class="has-text-white">
                  <p>
                    <span class="icon i">
                      <i class="mdi mdi-instagram"></i>
                    </span>
                    instagram
                  </p>
                </a>
              </div>
            </div>
            <!-- <div class="column">4th column</div> -->
            <div class="column">
              <div class="has-text-white">
                ChestnutBolt
                <ul class="has-text-left" style="padding:2rem 0 0 0">
                  <li style="padding-bottom: 0.5rem">
                    Applications and System Software Development
                    <br />
                  </li>
                  <li style="padding-bottom: 0.5rem">
                    Sales of Electronic Components and Inventories
                    <br />
                  </li>
                  <li style="padding-bottom: 0.5rem">
                    Sales of Software and Apps.
                    <br />
                  </li>
                  <li style="padding-bottom: 0.5rem">
                    Sales of Computers, Phones and their Accessories
                    <br />
                  </li>
                  <li style="padding-bottom: 0.5rem">
                    Indigenous sales of Electrical/Electronic materials
                    <br />
                  </li>
                  <li>
                    Other Forms of Technological/Engineering Works
                    <br />
                  </li>
                </ul>
              </div>
              <!-- <div class="contact_address">
                <div class="has-text-white">
                  <span class="icon f">
                    <i class="mdi mdi-home"></i>
                  </span>
                  <div v-html="contactPages.address" />
                </div>
                <div class="has-text-white">
                  <span class="icon f">
                    <i class="mdi mdi-phone"></i>
                  </span>
                  <div v-html="contactPages.telephone" />
                </div>
                <div class="has-text-white">
                  <span class="icon f">
                    <i class="mdi mdi-email"></i>
                  </span>
                  <div v-html="contactPages.email" />
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
      <div
        class="has-text-white has-text-centered"
        style="padding-bottom: 2rem"
      >© 2019 ChestnutBolt . All rights reserved | Design by Anyadike Promise.</div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

// export default {
//   props: {
//     data: {
//       type: Object,
//       default: () => {},
//     },
//     contact: {
//       type: Object,
//       default: () => {},
//     },
//   },

//   computed: {
//     ...mapState("contact", ["contactPages"]),
//   },
// };

export default {
  name: "LayoutFooter",

  async mounted() {
    await this.$store.dispatch("contact/getContactInfo");
  },

  computed: {
    ...mapState("contact", ["contactPages"]),
  },
};
</script>

<style>
/*
css code for footer*/
#social {
  display: flex;
  justify-content: center;
}
#dtouch {
  display: flex;
  justify-content: center;
}
#footerLast {
  padding-top: 45px;
  padding-left: 4px;
}
.field.has-addons {
  padding-top: 45px;
  justify-content: center;
}
.footer {
  background: black;
  padding: 0 !important;
}
.button {
  background-color: dodgerblue;
  border-color: transparent;
  color: #fff;
}
.icon.f {
  color: hsl(204, 86%, 53%);
}
.icon.t {
  color: grey;
}
.icon.g {
  color: red;
}
.icon.i {
  color: #553592;
}
#respect {
  color: white;
  font-size: 15px;
  padding: 3em;
  border-bottom: 1px solid dodgerblue;
  text-align: center;
}

.footer .copyright .column {
  text-transform: capitalize;
  text-align: center;
  color: white;
}

.wrapper {
  padding-top: 28px;
}

.about {
  padding: 2rem 0;
}

.container.aboutus {
  display: flex;
  text-align: center;
}

.social_media {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
}

.social_media a {
  padding: 0.5rem 0;
}

.about_content.has-text-white {
  padding: 2rem 0;
}

.contact_address {
  padding: 1.5rem 0;
}

.contact_address .has-text-white {
  padding: 0.5rem 0;
}

@media screen and (max-width: 768px) {
  .container.aboutus {
    display: block !important;
    text-align: left !important;
  }
}

@media screen and (max-width: 420px) {
  .container.aboutus {
    display: block !important;
    text-align: center !important;
  }
}
</style>

