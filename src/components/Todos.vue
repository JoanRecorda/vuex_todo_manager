<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
  </div>
    <div class="todos">
      <div
          @dbclick="onDbClick(todo)"
          v-for="todo in allTodos"
          :key="todo.id"
          class="todo"
          v-bind:class="{'is-complete':todo.completed}">
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="far fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Todos",
  methods: {
    ...mapActions(['fetchTodos', "deleteTodo", "updateTodo"]),
    onDbClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }

      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #E8E9A1;
  background: #FF8080;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #ECDBBA;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #64E291;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #FF8080;
}
.is-complete {
  background: #64E291;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>