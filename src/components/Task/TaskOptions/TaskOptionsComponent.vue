<template>
  <div class="flex ml-1">
    <BookOpenIcon class="h-6 mr-2 transition delay-75 duration-300 hover:text-violet-700 cursor-pointer"/>
    <PencilAltIcon class="h-6 mr-2 transition delay-75 duration-300 hover:text-violet-700 cursor-pointer"/>
    <TrashIcon class="h-6 mr-2 transition delay-75 duration-300 hover:text-violet-700 cursor-pointer"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TrashIcon, PencilAltIcon, BookOpenIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: { TrashIcon, PencilAltIcon, BookOpenIcon }
})
</script>
