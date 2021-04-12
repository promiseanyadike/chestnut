<template>
  <div>
    <section class="footer">
      <div class="about">
        <div class="columns is-multiline">
          <div class="container aboutus">
            <div class="column" style="padding: 0">
              <div class="has-text-white">About chestnutbolt</div>
              <div
                class="about_content has-text-white has-text-justified"
                v-html="aboutPages.content"
              ></div>
              <!-- <div v-html="data.title" class="has-text-white"></div>
              <div v-html="data.content" class="about_content has-text-white has-text-justified"></div>-->
            </div>
            <div class="column" style="padding: 0">
              <div class="has-text-white">Social Media Handles</div>
              <div class="social_media">
                <a href="#" target="_blank" class="has-text-white">
                  <span class="icon f">
                    <i class="mdi mdi-facebook"></i>
                  </span>
                  facebook
                </a>
                <a
                  href="facebook.com/chestnutbolt.com"
                  target="_blank"
                  class="has-text-white"
                >
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
              <div class="is-hidden-mobile">
                <div class="footerComp--title">useful links</div>
                <div>
                  <ul>
                    <li>
                      <nuxt-link to="/" style="color: yellow">Home</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/services" style="color: yellow"
                        >Our Services</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/Gallery" style="color: yellow"
                        >Gallery</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/about" style="color: yellow"
                        >About Us</nuxt-link
                      >
                    </li>
                    <li>
                      <nuxt-link to="/contact" style="color: yellow"
                        >Contact</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- <div class="column">4th column</div> -->
            <div class="column" style="padding: 0">
              <div class="has-text-white">
                ChestnutBolt
                <ul
                  class="has-text-left"
                  style="padding: 2rem 0 0 0; list-style-type: square"
                >
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
                  <!-- <li>
                    Other Forms of Technological/Engineering Works
                    <br />
                  </li> -->
                </ul>
              </div>
              <div class="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8285990473214!2d5.613329914346017!3d6.416064426184059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10472defc8fe0d77%3A0x5fb6a6011a67a450!2sChestnut%20And%20Bolt!5e0!3m2!1sen!2sng!4v1604286329664!5m2!1sen!2sng"
                  width="100%"
                  height="220"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-white has-text-centered copyright">
        © 2019 ChestnutBolt . All rights reserved | Powered by Anyadike Promise.
      </div>
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
    ...mapState("abouts", ["aboutPages"]),
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
  padding: 5rem;
}

.container.aboutus {
  display: flex;
  text-align: center;
  max-height: 27rem;
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
  height: 90%;
  overflow: hidden;
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
    max-height: none !important;
  }
  .about_content.has-text-white {
    padding: 2rem 0;
    height: 50%;
    overflow: hidden;
  }
  .about {
    padding: 3rem !important;
  }
}

@media screen and (max-width: 420px) {
  .container.aboutus {
    display: block !important;
    text-align: center !important;
  }
}
.has-text-white.has-text-centered.copyright {
  padding-bottom: 2rem;
}
</style>

