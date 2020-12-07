<template>
  <div class="login">
    <div class="welcome">Chestnut and Bolt Admin</div>
    <!-- <p> -->
    <!-- <admin-login @loginPost="login($event)"/> -->
    <!-- <admin-login @loginPost="userLogin($event)"/> -->
    <!-- </p> -->
    <!-- </div> -->
    <div class="login-form">
      <form @submit.prevent="userLogin">
        <div class="form">
          <b-notification
            :type="authstatus.class"
            has-icon
            :active.sync="authstatus.toggle"
            >{{ authmsg }}</b-notification
          >

          <b-field
            label="Username"
            :type="errors.has('username') ? 'is-danger' : ''"
            :message="errors.has('username') ? errors.first('username') : ''"
            class="field loginpage-label"
          >
            <b-input
              name="username"
              v-validate="'required'"
              v-model="form.email"
              placeholder="Enter Username"
            />
          </b-field>

          <b-field
            label="Password"
            :type="errors.has('password') ? 'is-danger' : ''"
            :message="errors.has('password') ? errors.first('password') : ''"
            class="loginpage-label"
            password-reveal
          >
            <b-input
              type="password"
              name="password"
              v-validate="'required'"
              password-reveal
              v-model="form.password"
              placeholder="Enter Password"
            />
          </b-field>
        </div>

        <div class="login-footer">
          <button
            class="button login-footer-btn is-fullwidth is-primary"
            :class="loading"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Notification, clone } from "@/utils/helpers";
export default {
  layout: "login",
  data() {
    return {
      checked: true,
      loading: null,
      authmsg: null,
      authstatus: {
        class: "",
        toggle: false,
      },

      form: {
        email: null,
        password: null,
      },
    };
  },

  methods: {
    async userLogin() {
      let result = await this.$validator.validateAll();

      // if (!result) {
      //   return;
      // }
      if (result) {
        this.authmsg = null;
        this.loading = true;
        this.authstatus = { class: "", toggle: false };

        // try {
        //   let req = await this.$store.dispatch("auth/login", clone(this.form));
        //   if (req.code == 200) {
        //     Notification(
        //       this,
        //       "Login successful. Redirecting....",
        //       "is-success"
        //     );

        //     setTimeout(() => (window.location = "/dashboard"));
        //   } else if (req.code == 404) {
        //     Notification(this, "incorrect Username or Password", "is-danger");
        //   } else {
        //     Notification(
        //       this,
        //       "Could not connect to the server, try again",
        //       "is-danger"
        //     );
        //   }
        // }
        try {
          let login = await this.$store.dispatch("auth/login", this.form);
          if (login == 200) {
            this.authmsg = "Login successful. Redirecting....";
            this.authstatus.class = "is-success";
            this.authstatus.toggle = true;
            this.loading = false;
            setTimeout(() => this.$router.push("/dashboard"), 1500);
          } else if (login == 404) {
            this.authstatus.class = "is-danger";
            this.authstatus.toggle = true;
            this.authmsg = "Incorrect Username or Password.";
            this.loading = null;
          } else {
            this.authstatus.class = "is-danger";
            this.authstatus.toggle = true;
            this.authmsg =
              "Could not connect to the server. please check your connection and try again.";
            this.loading = null;
          }
        } catch (error) {
          this.authstatus.class = "is-danger";
          this.authstatus.toggle = true;
          this.authmsg =
            "Could not connect to the server. please check your connection and try again.";
          // Notification(this, "Could not connect to the server. please check your connection and try again.", "is-danger");
          this.loading = null;
        }
      }
    },
  },
};
</script>

<style>
.welcome {
  /* padding: 40px; */
  font-size: 51px;
  color: white;
}
/*
** RESPONSIVENESS
*/
@media screen and (max-width: 420px) {
  .welcome {
    font-family: serif !important;
    text-align: center !important;
    font-size: 79px !important;
  }
  .login {
    margin-top: -67px !important;
  }
  p section {
    padding: 35px;
  }
}

@media screen and (max-width: 360px) {
  .field {
    padding-right: 24px !important;
  }
  p section {
    padding: 35px;
  }
}
.login-footer {
  padding-top: 37px;
}
.label {
  color: white;
}
</style>