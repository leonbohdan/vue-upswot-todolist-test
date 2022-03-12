<template>
  <div class="loginForm">
    <div class="loginForm__login mb-20">
      <div class="flex f-column mb-40">
        <label for="name" class="mb-5">Name</label>
        <input type="text" name="name" />
      </div>

      <div class="flex f-column mb-40">
        <label for="name" class="mb-5">Password</label>
        <input type="text" name="password" />
      </div>

      <button type="button" class="button boxed mb-20">LOGIN</button>

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
export default {
  name: "LoginForm",
};
</script>

<style lang="sass">
.loginForm
  position: absolute
  right: 20px
  top: -230px
  background: #fff
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1)
  width: 480px

  &__login
    padding: 40px 30px 0 30px
</style>
