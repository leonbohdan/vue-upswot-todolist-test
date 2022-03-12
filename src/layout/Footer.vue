<template>
  <div class="footer">
    <div class="container">
      <div class="footer__top p-30 flex f-space f-center">
        <svg
          width="56"
          height="35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m17.072 28.217-.106.095a7.59 7.59 0 0 1-2.446 1.76 7.8 7.8 0 0 1-2.963.689c-4.02 0-6.945-2.93-6.945-6.97 0-4.04 2.924-6.96 6.945-6.96a7.797 7.797 0 0 1 2.963.687 7.59 7.59 0 0 1 2.446 1.761l.106.103 2.583-3.04-.065-.079a9.828 9.828 0 0 0-3.514-2.728 10.138 10.138 0 0 0-4.398-.934 12.273 12.273 0 0 0-8.195 2.906C1.25 17.723 0 20.697 0 23.795s1.25 6.073 3.483 8.289a12.198 12.198 0 0 0 8.195 2.913 10.121 10.121 0 0 0 4.4-.935 9.811 9.811 0 0 0 3.512-2.734l.065-.071-2.583-3.04ZM22.27 34.58h4.573V12.948H22.27V34.58ZM44.752 29.879a6.837 6.837 0 0 1-3.378 1.086c-1.479 0-2.145-.787-2.145-2.44V17.042h4.654V13.01H39.23V6.239L34.746 8.6v4.41h-3.858v4.071h3.858v12.214c0 3.323 2.038 5.599 5.068 5.654a7.34 7.34 0 0 0 4.061-.992h.04l1.105-4.174-.268.158v-.063ZM48.53 34.58h4.58V12.948h-4.58V34.58Z"
            fill="#fff"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.774 9.152a21.996 21.996 0 0 0-7.927-6.727A22.754 22.754 0 0 0 37.613 0C34.05 0 30.54.832 27.379 2.425a21.996 21.996 0 0 0-7.928 6.727l-.219.3h5.263l.057-.063a17.938 17.938 0 0 1 5.945-4.045 18.41 18.41 0 0 1 7.112-1.427c2.446 0 4.866.486 7.112 1.427a17.939 17.939 0 0 1 5.944 4.045l.065.063h5.256l-.212-.3Z"
            fill="#E40520"
          />
        </svg>

        <div class="footer__links">
          <router-link to="/login" class="link">Terms & Conditions</router-link>
          <router-link to="/login" class="link">Privacy</router-link>
          <router-link to="/login" class="link"
            >Notice at Collection</router-link
          >
          <router-link to="/login" class="link">CA Privacy Hub</router-link>
          <router-link to="/login" class="link">Contact Us</router-link>
          <router-link to="/login" class="link">Sitemap</router-link>
        </div>
      </div>

      <div class="footer__bottom p-30">
        Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
        Opportunity Lender.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="sass">
.footer
  color: #fff

  &__top
    border-bottom: 1px solid #fff

  &__links .link:last-child
    padding-right: 0

  .p-30
    padding: 30px 0
</style>
