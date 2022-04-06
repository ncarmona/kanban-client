<template>
  <HomeLayout>
    <h1>Home</h1>
    <ul>
      <li v-for="board in boards" :key="board">
        <router-link :to="boardLink(board)">{{board}}</router-link>
      </li>
    </ul>
  </HomeLayout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import HomeLayout from '../layouts/HomeLayout.vue'
import { useStore } from 'vuex'
import { RouteLocationRaw } from 'vue-router'

export default defineComponent({
  components: { HomeLayout },
  setup() {
    const store = useStore()
    const boards = computed(():string[] => store.getters.getProfileBoards)
    const boardLink = (board: string):RouteLocationRaw => {
      return {
        name: 'board',
        params: {
          board: formatBoardsURL(board)
        }
      }
    }
    const formatBoardsURL = (boardName: string): string => boardName.replace(' ', '-')
    return { boards, boardLink }
  }
})
</script>
