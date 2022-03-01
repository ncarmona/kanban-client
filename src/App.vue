<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import BoardComponent from './components/Board/BoardComponent.vue';
import TaskComponent from './components/Board/Task/TaskComponent.vue'

export default defineComponent({
  components: { TaskComponent, BoardComponent }
})
</script>

<template>
  <div class="min-h-full">
    <BoardComponent />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
