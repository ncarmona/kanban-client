<template>
  <div class="h-screen bg-gray-50">
    <NavBarComponent class="bg-violet-700 shadow-xl" :navBarItems="menuItems"/>
    <div class="pt-20">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { AdjustmentsIcon, ArchiveIcon, DocumentAddIcon, LogoutIcon, UserIcon, ViewBoardsIcon } from '@heroicons/vue/solid'
import { defineComponent } from '@vue/runtime-core'
import NavBarComponent from '../components/UI/NavBar/NavBarComponent.vue'
import { INavBar } from '../components/UI/NavBar/interfaces/NavBar'
import { toRefs } from 'vue'

export default defineComponent({
  components: {  NavBarComponent },
  setup(props) {
    const menuItems: INavBar = {
      left: [
        { text: "Create task", icon: DocumentAddIcon, type: "link" },
        { text: "Backlog", icon: ArchiveIcon, type: "link" },
        { text: "Board configuration", icon: AdjustmentsIcon, type: "link" },
      ],
      right: [
        { text: "Boards", icon: ViewBoardsIcon, type: "menu", subLinks: [
          { text: "Submenu1" },
          { text: "Submenu2" },
          { text: "Submenu3" }
        ]},
        { text: "User", icon: UserIcon, type: "menu", subLinks: [
          { text: "Submenu1" },
          { text: "Submenu2" }
        ]},
        { text: "Logout", icon: LogoutIcon, type: "link" }
      ]
    }
    return { menuItems, ...toRefs(props) }
  }
})
</script>