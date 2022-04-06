<template>
  <BoardLayout>
    <div class="ml-4 mr-4">
      <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </BoardLayout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import BoardLayout from '../layouts/BoardLayout.vue'
import TaskComponent from '../components/Task/Task/TaskComponent.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { IBoard } from 'domain/interfaces/IBoard'

export default defineComponent({
  components: { BoardLayout, TaskComponent },
  setup() {
    const store = useStore()
    const route = useRoute()
    const board: string = route.params.board as string
    const getBoardName = (board:string):string => board.replace('-', ' ')
    const getCurrentBoard = (): IBoard => store.getters.getBoard(getBoardName(board))
    const tasks = computed(() => getCurrentBoard().backlog)

    return { tasks }
  }
})
</script>
