<template>
  <div class="todoList">
    <div class="container flex f-center f-column">
      <div class="text-c pt-30 mb-20">
        <svg
          width="186"
          height="119"
          viewBox="0 0 186 119"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M56.7171 95.9381L56.3663 96.2594C54.0921 98.7788 51.3273 100.815 48.2387 102.246C45.1501 103.677 41.8015 104.473 38.3946 104.586C25.0372 104.586 15.3228 94.6262 15.3228 80.891C15.3228 67.1559 25.0372 57.2226 38.3946 57.2226C41.8015 57.3355 45.1501 58.1314 48.2387 59.5624C51.3273 60.9935 54.0921 63.03 56.3663 65.5494L56.7171 65.8975L65.2982 55.5627L65.0823 55.2949C61.9629 51.3523 57.9681 48.1775 53.4093 46.018C48.8504 43.8586 43.8506 42.7727 38.7994 42.8449C28.7981 42.6459 19.0842 46.1706 11.5719 52.7246C4.15337 60.2578 0 70.3721 0 80.9044C0 91.4368 4.15337 101.551 11.5719 109.084C19.0678 115.669 28.7905 119.206 38.7994 118.991C43.8535 119.064 48.8561 117.976 53.4158 115.811C57.9754 113.647 61.9684 110.465 65.0823 106.514L65.2982 106.273L56.7171 95.9381Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M73.9878 117.572H89.1801V44.0233H73.9878V117.572Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M148.681 101.588C145.344 103.802 141.465 105.079 137.455 105.283C132.544 105.283 130.331 102.605 130.331 96.9827V57.9459H145.793V44.2375H130.331V21.2117L115.436 29.2439V44.2375H102.618V58.0798H115.436V99.6065C115.436 110.905 122.209 118.643 132.274 118.83C137.01 119.064 141.708 117.89 145.766 115.457H145.901L149.571 101.267L148.681 101.802V101.588Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M161.229 117.572H176.448V44.0233H161.229V117.572Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M185.298 31.1182C178.497 21.5064 169.464 13.6605 158.962 8.24413C148.459 2.82773 136.797 0 124.961 0C113.125 0 101.462 2.82773 90.96 8.24413C80.4577 13.6605 71.4243 21.5064 64.6234 31.1182L63.8948 32.1357H81.3808L81.5697 31.9214C87.1382 26.0482 93.8594 21.3679 101.319 18.1687C108.779 14.9695 116.82 13.3191 124.947 13.3191C133.074 13.3191 141.115 14.9695 148.575 18.1687C156.035 21.3679 162.756 26.0482 168.325 31.9214L168.541 32.1357H186L185.298 31.1182Z"
            fill="#E40520"
          />
        </svg>
      </div>

      <div class="todosBox">
        <div class="size60 bold text-c">Thank you {{ getUser.username }}</div>

        <div v-for="(todo, i) in getTodos" :key="i" class="mb-20">
          <div class="bold-500">
            {{ todo.name }}
          </div>

          <div>{{ todo.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoListPage",
  computed: {
    ...mapGetters(["getTodos", "getUser"]),
  },
};
</script>

<style lang="sass">
@import "../assets/_vars.sass"

.todoList
  padding-bottom: 15px
  min-height: calc( 100vh - 289px )
  background: $header-color

.todosBox
  box-sizing: border-box
  padding: 15px
  background-color: #fff
  max-width: 1200px
  width: 100%
</style>
