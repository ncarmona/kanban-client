<template>
  <HomeLayout>
    <Header :headerNumber="1" text="Home" />
    <ul>
      <li v-for="board in boards" :key="board">
        <router-link class="font-semibold" :to="boardLink(board)">{{board}}</router-link>
      </li>
    </ul>
  </HomeLayout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import HomeLayout from '../layouts/HomeLayout.vue'
import { useStore } from 'vuex'
import { RouteLocationRaw } from 'vue-router'
import Header from '../components/UI/Header/HeaderComponent.vue'

export default defineComponent({
  components: { HomeLayout, Header },
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
