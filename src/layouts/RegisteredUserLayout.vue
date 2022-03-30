<template>
  <div class="h-screen bg-gray-50">
    <NavBarComponent class="bg-violet-700 shadow-xl" :navBarItems="menuItems"/>
    <div class="pt-20 overflow-x-scroll">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { AdjustmentsIcon, ArchiveIcon, DocumentAddIcon, LogoutIcon, UserIcon, ViewBoardsIcon } from '@heroicons/vue/solid'
import { defineComponent, onBeforeMount } from '@vue/runtime-core'
import NavBarComponent from '../components/UI/NavBar/NavBarComponent.vue'
import { INavBar } from '../components/UI/NavBar/interfaces/NavBar'
import { ref, Ref, toRefs } from 'vue'
import { INavBarSubMenu } from 'components/UI/NavBar/interfaces/NavBarSubMenu'
import { Store, useStore } from 'vuex'
import { INavBarSubLink } from 'components/UI/NavBar/interfaces/NavBarSubLink'

export default defineComponent({
  components: {  NavBarComponent },
  setup(props) {
    const store:Store<any> = useStore()
    
    const menuItems: Ref<INavBar> = ref({
      left: [
        { text: "Create task", icon: DocumentAddIcon, type: "link" },
        { text: "Backlog", icon: ArchiveIcon, type: "link" },
        { text: "Board configuration", icon: AdjustmentsIcon, type: "link" },
      ],
      right: [
        { text: "User", icon: UserIcon, type: "menu", subLinks: [
          { text: "Submenu1", url: 'first-board' },
          { text: "Submenu2", url: 'first-board' }
        ]},
        { text: "Logout", icon: LogoutIcon, type: "link" }
      ]
    })
    const getProfileBoards = ():string[] => store.getters.getProfileBoards
    const formatBoardsURL = (boardName: string): string => boardName.replace(' ', '-')

    const injectBoardsList = (): INavBarSubMenu => {
      const submenuLinks:INavBarSubLink[] = getProfileBoards().map((b:string) => {
        const board:string = formatBoardsURL(b)
        return {
          text: b,
          url: {
            name: 'board',
            params: { board }
          }
        }
      })

      const submenu: INavBarSubMenu = {
        text: "Boards", icon: ViewBoardsIcon, type: "menu", subLinks: submenuLinks, link: ''
      }
      return submenu
    }

    onBeforeMount(() => menuItems.value.right.unshift(injectBoardsList()))

    return { menuItems, ...toRefs(props) }
  }
})
</script>