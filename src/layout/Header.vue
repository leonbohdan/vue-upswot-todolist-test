<template>
  <div class="header">
    <nav class="header__nav">
      <div class="container flex f-space f-center">
        <router-link to="/login">
          <svg
            width="103"
            height="66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m31.408 53.21-.194.178a13.98 13.98 0 0 1-4.501 3.32 14.059 14.059 0 0 1-5.451 1.298c-7.397 0-12.777-5.524-12.777-13.142 0-7.618 5.38-13.127 12.777-13.127 1.886.063 3.74.504 5.45 1.298a13.98 13.98 0 0 1 4.502 3.32l.194.193 4.752-5.732-.12-.148a18.15 18.15 0 0 0-6.464-5.145 18.267 18.267 0 0 0-8.09-1.76 22.244 22.244 0 0 0-15.078 5.48A22.29 22.29 0 0 0 0 44.87a22.29 22.29 0 0 0 6.408 15.63 22.108 22.108 0 0 0 15.078 5.494c2.799.04 5.569-.563 8.094-1.764a18.12 18.12 0 0 0 6.46-5.156l.12-.134-4.752-5.732ZM40.972 65.208h8.413V24.416h-8.413v40.792ZM82.334 56.343a12.366 12.366 0 0 1-6.216 2.05c-2.72 0-3.945-1.486-3.945-4.604V32.138h8.562v-7.603h-8.562v-12.77l-8.249 4.454v8.316h-7.098v7.677h7.098v23.032c0 6.267 3.75 10.558 9.325 10.662 2.622.13 5.224-.522 7.471-1.871h.075l2.032-7.87-.493.297v-.12ZM89.282 65.208h8.428V24.416h-8.428v40.792Z"
              fill="#fff"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M102.612 17.259A40.753 40.753 0 0 0 88.027 4.572 41.032 41.032 0 0 0 69.2 0 41.032 41.032 0 0 0 50.37 4.572 40.746 40.746 0 0 0 35.786 17.26l-.403.564h9.683l.104-.119a32.98 32.98 0 0 1 10.937-7.627 33.156 33.156 0 0 1 26.169 0 32.98 32.98 0 0 1 10.936 7.627l.12.12H103l-.388-.565Z"
              fill="#E40520"
            />
          </svg>
        </router-link>

        <router-link to="/login" class="logOut bold size24">LogOut</router-link>
      </div>
    </nav>

    <div class="header__bg flex f-end">
      <div class="container header__message">
        <div>Welcome to</div>
        <div>Business Analytics Online</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="sass">
@import "../assets/_vars.sass"

.header
  &__bg
    background-image: url(../assets/main_bg.png)
    background-repeat: no-repeat
    width: 100%
    min-height: 457px
    .container
      +mobile_min
        margin: 0 auto 60px

  &__message
    font-size: 55px
    line-height: 156.69%
    color: #fff
</style>
