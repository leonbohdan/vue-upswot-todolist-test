<template>
  <div class="main p-rel">
    <div class="container mb-40 mt-40">
      <div class="maxW-665 mb-15">
        <span class="bold-500">Business Analytics</span>
        — a new, convenient tool for managing and forecasting your business
        performance, which will help analyze your own finances and cash flows,
        visualize your reporting, business processes, KPI's
      </div>

      <div class="mb-15">
        <div class="mb-10">
          <svg
            class="fl-l"
            width="23"
            height="17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.958 0 23 2.994 8.772 17 0 8.366 3.042 5.37l5.73 5.64L19.958 0Z"
              fill="#0076C0"
            />
          </svg>

          <div class="bold-500 ml-35">Interactive Reporting</div>
        </div>

        <div class="ml-35 maxW-630">
          In just a few clicks, you can connect your data from 1C, CRM
          (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay),
          Logistic (Nova Poshta), Google Analytics and many more systems that
          reflect different aspects of business activities.
        </div>
      </div>

      <div class="mb-15">
        <div class="mb-10">
          <svg
            class="fl-l"
            width="23"
            height="17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.958 0 23 2.994 8.772 17 0 8.366 3.042 5.37l5.73 5.64L19.958 0Z"
              fill="#0076C0"
            />
          </svg>

          <div class="bold-500 ml-35">Automated data updates</div>
        </div>

        <div class="ml-35 maxW-630">
          The application automatically updates and structures the data in just
          60 seconds, saving you time and money.
        </div>
      </div>

      <div class="mb-15">
        <div class="mb-10">
          <svg
            class="fl-l"
            width="23"
            height="17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.958 0 23 2.994 8.772 17 0 8.366 3.042 5.37l5.73 5.64L19.958 0Z"
              fill="#0076C0"
            />
          </svg>

          <div class="bold-500 ml-35">Data Security</div>
        </div>

        <div class="ml-35 maxW-630">
          The Bank guarantees the safety of your personal data, ensuring their
          integrity and confidentiality.
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <button type="button" class="button">Button</button>
    </div> -->
  </div>
</template>

<script>
// import LoginForm from '@/components/LoginForm.vue'

export default {
  name: "LoginPage",
  components: {
    // LoginForm
  },
};
</script>

<style lang="sass">
.main
  .maxW-665
    max-width: 665px

  .maxW-630
    max-width: 630px
</style>
