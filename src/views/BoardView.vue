<template>
  <RegisteredUserLayout>
    <BoardComponent :board="board"/>
  </RegisteredUserLayout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { IBoard } from 'domain/interfaces/IBoard'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Store, useStore } from 'vuex'
import BoardComponent from '../components/Board/BoardComponent.vue'
import RegisteredUserLayout from '../layouts/RegisteredUserLayout.vue'

export default defineComponent({
  components: { BoardComponent, RegisteredUserLayout },
  setup() {
    const store:Store<any> = useStore()
    const route = useRoute()
    const board = computed(():IBoard => {
      const board:string = route.params.board as string
      const boardName:string = board.replaceAll('-', ' ')
      return store.getters.getBoard(boardName)
    })
    
    return { board }
  }
})
</script>