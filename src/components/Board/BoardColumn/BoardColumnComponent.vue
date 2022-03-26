<template>
  <div class="border bg-gray-200 p-2 shadow-md rounded">
    <BoardTitleComponent class="flex justify-center" :columnTitle="column.name" />
    <BoardTaskColumnComponent v-if="haveTasks" class="mt-4" :tasks="column.tasks" />
    <EmptyColumnComponent v-else/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import BoardTitleComponent from '../BoardColumnTitle/BoardColumnTitleComponent.vue'
import { IBoardColumn } from 'domain/interfaces/IBoardColumn'
import BoardTaskColumnComponent from '../BoardTasksColumn/BoardTasksColumnComponent.vue'
import EmptyColumnComponent from '../EmptyColumn/EmptyColumnComponent.vue'

export default defineComponent({
  components: { BoardTitleComponent, BoardTaskColumnComponent, EmptyColumnComponent },
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
