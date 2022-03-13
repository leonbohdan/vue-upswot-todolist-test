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
import { mapGetters } from "vuex";

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
    ...mapGetters(["getTodos"]),
    isDisabledButton() {
      return !this.newTodo.name || !this.newTodo.body;
    },
  },
  methods: {
    getTodo(id) {
      const todo = this.getTodos.filter((el) => el.id === id);
      this.newTodo.id = todo[0].id;
      this.newTodo.name = todo[0].name;
      this.newTodo.body = todo[0].body;
    },
    turnBack() {
      this.$emit("close-add-form");
    },
    saveTodo() {
      if (!this.newTodo.name || !this.newTodo.body) {
        return;
      }
      if (this.todoEditId) {
        this.$store.dispatch("editTodo", this.newTodo);
      }
      if (!this.todoEditId) {
        this.$store.dispatch("addTodo", this.newTodo);
      }
      this.$emit("close-add-form");
    },
  },
  mounted() {
    if (this.todoEditId) {
      this.getTodo(this.todoEditId);
    }
  },
};
</script>

<style lang="sass"></style>
