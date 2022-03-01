<template>
  <div class="border border-black w-3/12 p-2 rounded">
    <BoardTitleComponent :columnTitle="column.name" />
    <div v-if="haveTasks">
      <BoardTaskColumnComponent class="mt-4" :tasks="column.tasks" />
    </div>
    <div v-else>
      <span>No tasks</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import TaskComponent from '../Task/TaskComponent.vue'
import BoardTitleComponent from '../BoardColumnTitle/BoardColumnTitleComponent.vue'
import { IBoardColumn } from 'domain/interfaces/IBoardColumn'
import BoardTaskColumnComponent from '../BoardTasksColumn/BoardTasksColumnComponent.vue'

export default defineComponent({
  components: { BoardTitleComponent, TaskComponent, BoardTaskColumnComponent },
  props: {
    column: {
      required: true,
      type: Object as () => IBoardColumn
    }
  },
  setup(props) {
    const haveTasks = computed(() => props.column.tasks.length !== 0)
    return {...toRefs(props), haveTasks}
  }
})
</script>
