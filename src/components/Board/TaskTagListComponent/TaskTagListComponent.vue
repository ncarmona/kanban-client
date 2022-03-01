<template>
  <TaskTagComponent v-for="tag in tags" :tag="tag" :key="tag.id" />
</template>

<script lang="ts">
import { ITag } from 'domain/interfaces/ITag'
import { defineComponent, toRefs } from 'vue'
import TaskTagComponent from '../TaskTagComponent/TaskTagComponent.vue'

export default defineComponent({
  components: { TaskTagComponent },
  props: {
    tags: {
      required: true,
      type: Object as () => ITag[]
    }
  },
  setup(props) {
    return {...toRefs(props)}
  },
})
</script>
