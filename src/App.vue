<template>
  <div id="app">
    <nav>
      <router-link to="/login">LoginPage</router-link> |
      <router-link to="/todo">TodoList</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
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

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
