<template>
  <Component :is="linkTag" :a="url.link" :to="url.link" class="flex transition delay-75 duration-300 hover:bg-violet-500">
    <Component class="h-6" :is="url.icon" />
    <span class="ml-2">{{url.text}}</span>
  </Component>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { INavBarLink } from '../interfaces/NavBarLink'

export default defineComponent({
  props: {
    url: {
      required: true,
      type: Object as () => INavBarLink | String
    }
  },
  setup(props) {
    const { url } = props
    const isSubMenu = !!url.link
    const linkTag = computed(() => {
      const tags:any = {
        'string': 'a',
        'object': 'router-link'
      }
      return isSubMenu ? tags[typeof(url)] : 'span'
    })
    return { ...toRefs(props), linkTag } 
  }
})
</script>
