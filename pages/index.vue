<template>
  <div class="homePage">
    <paragraph-block
      :title="value.page.attributes.header.title"
      :subtitle="value.page.attributes.header.subtitle"
      :content="value.page.attributes.header.content"
      :image="value.page.attributes.header.image.data"
    />
    <section class="second_section" v-if="service.length > 0">
      <div class="services is-uppercase is-size-3">Services</div>
      <div class="container">
        <div class="columns is-multiline">
          <div
            class="column is-6 box-wrap"
            v-for="(areas, i) in service"
            :key="i"
          >
            <div
              class="investigateBlock"
              style="background: transparent; box-shadow: 0 0 9px 2px #064e685e"
            >
              <!-- <h4 class="never">
                <span class="icon has-text-info">
                  <i style="font-size: 60px" :class="service.icon"></i>
                </span>
              </h4>-->
              <h4 class="never">
                <span
                  class="mdi mdi-lightbulb-group icon has-text-info"
                  style="font-size: 60px"
                ></span>
              </h4>
              <div
                class="investigateBlock--title"
                style="text-align: center; padding-bottom: 1rem"
                v-html="areas.Title"
              ></div>
              <div
                class="investigateBlock--content"
                v-html="areas.Content"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="dark"
      :style="{
        'background-image': `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), url(${this.galleryPage.page.attributes.header.image.data})`,
      }"
    >
      <div
        class="container"
        v-if="galleryImages.length > 0"
        style="padding: 2rem 0"
      >
        <!-- <div class="container"> -->
        <div class="is-uppercase is-size-3">GALLERY</div>
        <div class="columns is-gapless">
          <!-- <div class="column" v-for="event in galleryImages" :key="event.id">
            <a :href="event.link" target="_blank">
              <div :style="{'background-image': `url(${event.image.data})`}" class="event" />
            </a>
          </div>-->
          <div
            class="column"
            v-for="event in gallery.slice(0, 4)"
            :key="event.id"
          >
            <div
              :style="{ 'background-image': `url(${event.media_url})` }"
              class="event"
              v-show="
                event.media_type == 'CAROUSEL_ALBUM' ||
                event.media_type == 'IMAGE'
              "
            />
            <video
              v-show="event.media_type == 'VIDEO'"
              controls
              class="gallery-image"
            >
              <source :src="event.media_url" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="has-text-right view-more">
          <nuxt-link to="/gallery">
            <h1 class="content heading" style="color: yellow">MORE</h1>
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- contact starts here -->
    <div
      class="footerContact"
      :style="{
        'background-image': `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), url(${contactPage.page.attributes.header.image.data})`,
      }"
    >
      <div class="container">
        <div class="contactBox">
          <div class="contact--form">
            <div class="contactTitle">
              <span>Get In touch</span>
            </div>
            <div class="contactContent">
              <div class="contactleft">
                <div class="contactText">
                  <span v-html="contact.address" />
                  <p>
                    <strong>Email</strong>
                    <br />
                  </p>
                  <span v-html="contact.email" />
                  <p>
                    <strong>Telephone</strong>
                    <br />
                  </p>
                  <span v-html="contact.telephone" />
                </div>
              </div>

              <!-- form starts here -->
              <!-- <div class="formSection is-hidden-mobile"> -->
              <div class="formSection is-hidden-mobile">
                <span class="formTitle">Enquiry Form</span>
                <br />
                <br />
                <b-field
                  label
                  :type="errors.has('name') ? 'is-danger' : ''"
                  :message="errors.first('name')"
                >
                  <b-input
                    v-model="form.name"
                    placeholder="Name"
                    name="name"
                    v-validate="'required'"
                  />
                </b-field>

                <b-field
                  label
                  :type="errors.has('email') ? 'is-danger' : ''"
                  :message="errors.first('email')"
                >
                  <b-input
                    v-model="form.email"
                    placeholder="Email"
                    name="email"
                    v-validate="'required|email'"
                  />
                </b-field>

                <b-field
                  label
                  :type="errors.has('phone_no') ? 'is-danger' : ''"
                  :message="
                    errors.has('phone_no') ? errors.first('phone_no') : ''
                  "
                >
                  <b-input
                    placeholder="Phone Number"
                    v-model="form.phone_no"
                    v-validate="'required|numeric'"
                    name="phone_no"
                    type="text"
                  ></b-input>
                </b-field>

                <b-field
                  label
                  :type="errors.has('subject') ? 'is-danger' : ''"
                  :message="errors.first('subject')"
                >
                  <b-input
                    v-model="form.subject"
                    placeholder="Subject"
                    name="subject"
                    v-validate="'required'"
                  />
                </b-field>

                <b-field
                  label
                  :type="errors.has('message') ? 'is-danger' : ''"
                  :message="errors.first('message')"
                >
                  <b-input
                    v-model="form.message"
                    type="textarea"
                    placeholder="Message"
                    name="message"
                    v-validate="'required'"
                  />
                </b-field>

                <div>
                  <button class="button is-link" @click="sendEnquiry">
                    Submit
                  </button>
                </div>
              </div>
              <!-- form ends here -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contact ends here -->

    <section class="sectionsix">
      <div class="has-text-centered has-text-white">
        <div class="columns">
          <div
            class="column social"
            :style="social.color"
            v-for="social in socials"
            :key="social.id"
          >
            <a
              :href="social.link"
              :style="social.color"
              class="has-text-white"
              :key="social.id"
              target="_blank"
            >
              <div
                :class="social.icon"
                class="social-icon mdi is-size-3-desktop"
                v-html="social.text"
              ></div>
              <!-- {{social.text}} -->
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { copy, Dialog } from "@/utils/helpers";
import ParagraphBlock from "@/components/paragraphBlock";

export default {
  name: "HomePage",
  layout: "home",
  ParagraphBlock,
  components: {},

  data() {
    return {
      form: {
        name: "",
        email: "",
        phone_no: "",
        subject: "",
        message: "",
        date: null,
      },
      socials: [
        {
          id: 4,
          icon: "mdi-facebook",
          link: "https://www.facebook.com/dtouchexpertslaundry/",
          color: "background-color: hsl(204, 86%, 53%)",
          text: "like us on facebook",
        },

        {
          id: 2,
          icon: "mdi-twitter",
          link: "https://twitter.com/dtouchexpertslaundry",
          color: "background-color: grey",
          text: "follow us on twitter",
        },
        {
          id: 3,
          icon: "mdi-instagram",
          link: "https://www.instagram.com/dtouchexpertslaundry/",
          color: "background-color: #553592",
          text: "follow us on instagram",
        },
      ],
    };
  },

  computed: {
    ...mapState(["servicePages"]),
    ...mapState("gallery", ["gallery"]),
    // ...mapState("contact", ["contactPages"]),

    galleryImages() {
      let x = this.gallery.slice();
      console.log(x);
      return x.splice(0, 4);
    },
  },

  methods: {
    async sendEnquiry() {
      this.form.date = new Date();
      let result = await this.$validator.validateAll();
      if (result) {
        let res = await this.$store.dispatch("sendEnquiry", this.form);
        if (res == 1) {
          this.$buefy.dialog.alert({
            message:
              "Thank you for contacting us, we'll get back to you as soon as possible..",
            type: "is-success",
            position: "is-top",
            onConfirm: () => window.location.reload(true),
          });
          return;
        }
        this.$buefy.snackbar.open({
          message: "Error Sending Enquiry",
          type: "is-danger",
          position: "is-top",
        });
        return;
      }
    },
  },

  async asyncData({ store, error }) {
    try {
      let home = await Promise.all([
        store.dispatch("pages/getHomePage"),
        store.dispatch("service/getServicePage"),
        store.dispatch("gallery/getInstagramGallery"),
        store.dispatch("pages/getGalleryPage"),
        store.dispatch("pages/getContactPage"),
        store.dispatch("contact/getContactInfo"),
        store.dispatch("abouts/getAboutPage"),
        // store.dispatch("pages/getAboutPage"),
        // store.dispatch("pages/getContactPage"),
      ]);
      // console.log(home);
    } catch (err) {
      error(err);
    }

    let value = copy(store.state.pages.homePage);
    let service = copy(store.state.service.areaPage);
    let galleryPage = copy(store.state.pages.galleryPage);
    let contactPage = copy(store.state.pages.contactPage);
    let aboutpage = copy(store.state.abouts.aboutPages);

    let contact = copy(store.state.contact.contactPages);
    // console.log(value);
    console.log(service);
    return {
      value,
      service,
      galleryPage,
      contactPage,
      contact,
      aboutpage,

      // contact,
    };
  },
};
</script>


