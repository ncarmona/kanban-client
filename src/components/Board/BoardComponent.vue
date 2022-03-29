<template>
  <div class="flex w-fit">
    <BoardColumnComponent class="w-80 ml-4" v-for="column in board.columns" :column="column" :key="column.name"/>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import BoardColumnComponent from './BoardColumn/BoardColumnComponent.vue'
import { IBoard } from 'domain/interfaces/IBoard'

export default defineComponent({
  components: { BoardColumnComponent },
  props: {
    board: {
      required: true,
      type: Object as () => IBoard
    }
  },
  setup(props) {
    return { ...toRefs(props) }
    
  }
})
</script>
