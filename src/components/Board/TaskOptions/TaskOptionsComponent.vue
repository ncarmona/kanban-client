<template>
  <div class="flex ml-1">
    <BookOpenIcon class="h-6 mr-2"/>
    <PencilAltIcon class="h-6 mr-2"/>
    <TrashIcon class="h-6 mr-2"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TrashIcon, PencilAltIcon, BookOpenIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: { TrashIcon, PencilAltIcon, BookOpenIcon }
})
</script>
