<template>
  <div class="page_unit">
    <h1 class="general-info-heading">Contact Information</h1>

    <div>
      <b-field
        label="Name"
        custom-class="is-small"
        :type="errors.has('name') ? 'is-danger' : ''"
        :message="errors.first('name')"
      >
        <b-input
          :disabled="edit"
          v-model="value.name"
          expanded
          name="name"
          placeholder="Name"
          v-validate="'required'"
        />
      </b-field>

      <b-field
        label="Email"
        custom-class="is-small"
        :type="errors.has('email') ? 'is-danger' : ''"
        :message="errors.first('email')"
      >
        <b-input
          :disabled="edit"
          v-model="value.email"
          expanded
          name="email"
          placeholder="Email"
          v-validate="'required'"
        />
      </b-field>

      <b-field
        label="Phone No"
        custom-class="is-small"
        :type="errors.has('phone') ? 'is-danger' : ''"
        :message="errors.first('phone')"
      >
        <b-input
          :disabled="edit"
          v-model="value.phone_no"
          expanded
          name="phone No"
          placeholder="Phone No"
          v-validate="'required'"
        />
      </b-field>

      <b-field
        label="Date"
        custom-class="is-small"
        :type="errors.has('date') ? 'is-danger' : ''"
        :message="errors.first('date')"
      >
        <b-input
          :disabled="edit"
          v-model="value.date"
          expanded
          name="date"
          placeholder="Date"
          v-validate="'required'"
        />
      </b-field>

      <b-field
        label="Subject"
        custom-class="is-small"
        :type="errors.has('subject') ? 'is-danger' : ''"
        :message="errors.first('subject')"
      >
        <b-input
          :disabled="edit"
          v-model="value.subject"
          expanded
          name="subject"
          placeholder="Subject"
          v-validate="'required'"
        />
      </b-field>

      <b-field
        label="Message"
        custom-class="is-small"
        :type="errors.has('message') ? 'is-danger' : ''"
        :message="errors.first('message')"
      >
        <b-input
          :disabled="edit"
          v-model="value.message"
          expanded
          type="textarea"
          rows="12"
          name="message"
          placeholder="Message"
          v-validate="'required'"
        />
      </b-field>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      pageInfo: {
        title: "View Contact",
        show: true,
        link: "/contact",
      },
      edit: true,
      message: "",
    };
  },

  async asyncData({ store, params }) {
    await Promise.all([
      store.dispatch("contacts/getContacts"),
      store.dispatch("contacts/getContact", params.id),
    ]);
  },

  mounted() {
    this.$store.dispatch("changeNavInfo", this.pageInfo);
  },

  computed: {
    ...mapState("contacts", ["contact"]),

    value() {
      let data = _.extend({}, this.contact);
      data.date = new Date(data.date);
      let month = data.date.getMonth() + 1;
      data.date =
        data.date.getUTCDate() + "/" + month + "/" + data.date.getUTCFullYear();
      return data;
    },
  },

  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
  },
};
</script>

<style>
</style>
