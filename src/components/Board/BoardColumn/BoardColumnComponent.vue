<template>
  <div class="border bg-gray-200 w-3/12 p-2 shadow-md rounded">
    <BoardTitleComponent class="flex justify-center" :columnTitle="column.name" />
    <div v-if="haveTasks" class="mt-5">
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
