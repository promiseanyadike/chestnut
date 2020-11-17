
<template>
  <div class="homePage">
    <div class="resources container">
      <div class="container">
        <div class="contactBlock">
          <div class="leftText">
            <span class="contactTitle"> Address </span>
            <span v-html="contact.address" />
            <span class="emailDetails">
              <p><strong>Email:</strong> <span v-html="contact.email" /></p>
              <p>
                <strong>Telephone:</strong> <span v-html="contact.telephone" />
              </p>
              <!-- <p><strong>Fax:</strong> <span v-html="contactPage.fax" /> </p> -->
            </span>
          </div>

          <div class="contactForm">
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
              :message="errors.has('phone_no') ? errors.first('phone_no') : ''"
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
        </div>
      </div>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8285990473214!2d5.613329914346017!3d6.416064426184059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10472defc8fe0d77%3A0x5fb6a6011a67a450!2sChestnut%20And%20Bolt!5e0!3m2!1sen!2sng!4v1604286329664!5m2!1sen!2sng"
        width="100%"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen
      />
    </div>

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

export default {
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

  async asyncData({ store }) {
    await Promise.all([
      store.dispatch("pages/getContactPage"),
      store.dispatch("contact/getContactInfo"),
      store.dispatch("abouts/getAboutPage"),
      // store.dispatch("snippets/getScripts"),
      // store.dispatch("snippets/getNoScripts")
    ]);
    let data = {
      image: store.state.pages.contactPage.page.attributes.header.image.data,
      height: "400px",
      left: store.state.pages.contactPage.page.attributes.header.title,
      right: "",
    };

    store.commit("setBillboard", data);

    let contact = copy(store.state.contact.contactPages);

    return { data, contact };
  },

  // head () {
  //   return {
  //     meta: this.contactPage.meta
  //   }
  // },

  computed: {
    ...mapState("pages", ["contactPage"]),
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
};
</script>

<style lang="scss">
@import "~assets/variable.scss";
</style>

