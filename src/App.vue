<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import BoardComponent from './components/Board/BoardComponent.vue';
import TaskComponent from './components/Board/Task/TaskComponent.vue'

export default defineComponent({
  components: { TaskComponent, BoardComponent }
})
</script>

<template>
  <div class="h-screen pt-20">
    <BoardComponent />
  </div>
</template>
