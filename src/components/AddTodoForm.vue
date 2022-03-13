<template>
  <div>
    <div class="mb-20">
      <button type="button" class="button" @click="turnBack()">Back</button>
    </div>

    <div class="flex f-column mb-40 p-rel">
      <label for="todoName" class="mb-5">Todo Name</label>
      <input type="text" name="todoName" v-model="newTodo.name" />
    </div>

    <div class="flex f-column mb-40 p-rel">
      <label for="todoBody" class="mb-5">Description</label>
      <input type="text" name="todoBody" v-model="newTodo.body" />
    </div>

    <div class="text-c">
      <button
        type="button"
        class="button boxed"
        @click="saveTodo()"
        :disabled="isDisabledButton"
      >
        Save Todo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodoForm",
  props: {
    todoEditId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      newTodo: {
        id: Date.now(),
        name: "",
        body: "",
      },
    };
  },
  computed: {
    isDisabledButton() {
      return !this.newTodo.name || !this.newTodo.body;
    },
  },
  methods: {
    turnBack() {
      this.$emit("close-add-form");
    },
    saveTodo() {
      if (!this.newTodo.name || !this.newTodo.body) {
        return;
      }
      this.$store.dispatch("addTodo", this.newTodo);
      this.$emit("close-add-form");
    },
  },
};
</script>

<style lang="sass"></style>
