<template>
  <div id="app">
    <header-layout />

    <router-view />

    <footer-layout />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderLayout from "./layout/Header.vue";
import FooterLayout from "./layout/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderLayout,
    FooterLayout,
  },
  computed: {
    ...mapGetters(["isAuthorizedUser", "initialiseLoginedUser"]),
  },
  mounted() {
    if (this.isAuthorizedUser) {
      this.$router.push({
        name: "todo",
      });
    } else {
      this.$router.push({
        name: "login",
      });
    }
  },
  created() {
    this.$store.dispatch("initializeLoginedUser");
  },
};
</script>

<style lang="sass">
@import "assets/__init.sass"
</style>
