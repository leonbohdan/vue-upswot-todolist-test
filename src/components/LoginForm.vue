<template>
  <div class="loginForm">
    <div class="loginForm__login mb-20">
      <div class="flex f-column mb-40 p-rel">
        <label for="name" class="mb-5">Name</label>
        <input
          type="text"
          name="name"
          :class="{ error: false }"
          v-model="inputName"
        />

        <span v-if="false" class="error flex f-center">
          <svg
            class="mr-10"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
              fill="#D60000"
            />
          </svg>

          <span>Enter right user name</span>
        </span>
      </div>

      <div class="flex f-column mb-40 p-rel">
        <label for="name" class="mb-5">Password</label>
        <input
          type="text"
          name="password"
          :class="{ error: false }"
          v-model="inputPassword"
        />

        <span v-if="false" class="error flex f-center">
          <svg
            class="mr-10"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.29622L9.70378 0L5.49999 4.20377L1.29622 0L0 1.29622L4.20377 5.49999L0 9.70378L1.29622 11L5.49999 6.79623L9.70375 11L11 9.70378L6.79623 5.49999L11 1.29622Z"
              fill="#D60000"
            />
          </svg>

          <span>Enter right password</span>
        </span>
      </div>

      <button
        type="button"
        class="button boxed mb-20"
        @click="compareInputedData()"
      >
        LOGIN
      </button>

      <div class="text-c">
        <router-link to="/login" class="link-c size20"
          >Forgot Password</router-link
        >
      </div>
    </div>

    <button type="button" class="button grey boxed">Register now</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      inputName: "",
      inputPassword: "",
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    isEqualUser() {
      return (
        this.getUser.username === this.inputName &&
        this.getUser.password === this.inputPassword
      );
    },
  },
  methods: {
    compareInputedData() {
      if (this.isEqualUser) {
        this.$store.dispatch("changeAuthorizedStatus");

        this.$router.push({
          name: "todo",
        });
      } else {
        console.log("this.isEqualUser", this.isEqualUser);
      }
    },
  },
};
</script>

<style lang="sass">
@import "../assets/_vars.sass"

.loginForm
  position: absolute
  background: #fff

  +mobile_min
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1)
    right: 20px
    top: -230px
    width: 480px

  +mobile
    position: relative
    width: 100%
    margin-bottom: 40px

  &__login
    padding: 40px 30px 0 30px
    +mobile
      padding: 0

    .error
      position: absolute
      bottom: -25px
</style>
