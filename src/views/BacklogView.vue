<template>
  <BoardLayout>
    <div class="flex flex-col">
      <p class="flex justify-center w-full mb-7">
        Click a task in order to move it to sprint or backlog
      </p>
      <div class="flex md:flex-row flex-col">
        <TaskGroupComponent class="w-11/12 md:w-6/12 ml-4 mr-4 mb-10" :backlog="backlog" textHeader="Backlog" field="unselected" />
        <TaskGroupComponent class="w-11/12 md:w-6/12 ml-4 mr-4" :backlog="backlog" textHeader="Sprint" field="selected" />
      </div>
      <div class="flex flex-col align-items-center w-full mt-7">
        <p class="mb-3">Selected tasks will be added to the board.</p>
        <ButtonComponent v-on:click="sendBacklogTaskToBoard" class="w-11/12" :button="buttonData" />
      </div>
    </div>
  </BoardLayout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import BoardLayout from '../layouts/BoardLayout.vue'
import TaskGroupComponent from '../components/TaskGroup/TaskGroupComponent.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { IBoard } from 'domain/interfaces/IBoard'
import ButtonComponent from '../components/UI/Button/ButtonComponent.vue'
import { IButton } from 'components/UI/Button/interfaces/IButton'

export default defineComponent({
  components: { BoardLayout, TaskGroupComponent, ButtonComponent },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const board: string = route.params.board as string

    const getBoardName = (board:string):string => board.replace('-', ' ')
    const getCurrentBoard = (): IBoard => store.getters.getBoard(getBoardName(board))
    const sendBacklogTaskToBoard = () => {
      vuexSendBacklogTaskToBard()
      redirectToBoard()
    }
    const vuexSendBacklogTaskToBard = () => {
      const payload = {
        boardName: getBoardName(board),
        tasks: backlog.value.selected
      }
      store.dispatch('moveTaskToBoard', payload)
    }
    const redirectToBoard = () => {
      router.push({
        name: 'board',
        params: { board }
      })      
    }
    const backlog: Ref = ref({
      selected: [],
      unselected: [...getCurrentBoard().backlog]
    })
    const buttonData: IButton = {
      label: "Add to board"
    } 
    return { backlog, buttonData, sendBacklogTaskToBoard }
  }
})
</script>
