<template>
  <div class="h-screen bg-gray-50">
    <NavBarComponent class="bg-violet-700 shadow-xl" :navBarItems="menuItems" />
    <div class="pt-20 overflow-x-scroll">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import NavBarComponent from '../components/UI/NavBar/NavBarComponent.vue'
import { INavBar } from '../components/UI/NavBar/interfaces/NavBar'
import { ref, Ref, toRefs } from 'vue'
import { INavBarSubMenu } from 'components/UI/NavBar/interfaces/NavBarSubMenu'
import { Store, useStore } from 'vuex'
import { INavBarSubLink } from 'components/UI/NavBar/interfaces/NavBarSubLink'
import { menuLinks } from '../config'
import { useRoute } from 'vue-router'
import { ViewBoardsIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: { NavBarComponent },
  setup() {
    const route = useRoute()
    const store:Store<any> = useStore()
    const board:string = route.params.board.toString()
    const { userSettings, logout, home } = menuLinks()
    const { name:username } = store.getters.getProfile
    const menuItems: Ref<INavBar> = ref({
      left: [ home() ],
      right: [ userSettings(username), logout(username)]
    })
    const getProfileBoards = ():string[] => store.getters.getProfileBoards
    const formatBoardsURL = (boardName: string): string => boardName.replace(' ', '-')

    const injectBoardsList = (): INavBarSubMenu => {
      return {
        text: "Boards", icon: ViewBoardsIcon, type: "menu", subLinks: generateNavBarSubLinks()
      }
    }

    const generateNavBarSubLinks = (): INavBarSubLink[] => {
      return getProfileBoards().map((b:string) => {
        const board:string = formatBoardsURL(b)
        return {
          text: b,
          url: {
            name: 'board',
            params: { board }
          }
        }
      })      
    }
    onBeforeMount(() => menuItems.value.right.unshift(injectBoardsList()))

    return { menuItems }
  },
})
</script>
