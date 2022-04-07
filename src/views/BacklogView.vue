<template>
  <BoardLayout>
    <div class="flex flex-col">
      <p class="flex justify-center w-full mb-7">
        Click a task in order to move it to sprint or backlog
      </p>
      <div class="flex md:flex-row flex-col grow">
        <TaskGroupComponent class="w-11/12 md:w-6/12 ml-4 mr-4 mb-10" :backlog="backlog" textHeader="Backlog" field="unselected" />
        <TaskGroupComponent class="w-11/12 md:w-6/12 ml-4 mr-4" :backlog="backlog" textHeader="Sprint" field="selected" />
      </div>
    </div>
  </BoardLayout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import BoardLayout from '../layouts/BoardLayout.vue'
import TaskGroupComponent from '../components/TaskGroup/TaskGroupComponent.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { IBoard } from 'domain/interfaces/IBoard'
import ButtonComponent from '../components/UI/Button/ButtonComponent.vue'
import { IButton } from 'components/UI/Button/interfaces/IButton'

export default defineComponent({
  components: { BoardLayout, TaskGroupComponent, ButtonComponent },
  setup() {
    const store = useStore()
    const route = useRoute()
    const board: string = route.params.board as string

    const getBoardName = (board:string):string => board.replace('-', ' ')
    const getCurrentBoard = (): IBoard => store.getters.getBoard(getBoardName(board))
    const buttonData: IButton = {
      label: "Add to board"
    } 
    const backlog: Ref = ref({
      selected: [],
      unselected: [...getCurrentBoard().backlog]
    })
    return { backlog, buttonData }
  }
})
</script>
