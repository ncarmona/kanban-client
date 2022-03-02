<template>
  <div class="border border-gray-200 ml-3 rounded">
    <div class="flex flex-col p-3">
      <span class="mb-3 font-bold">{{task.title}}</span>
      <span>{{description}}</span>
    </div>
    <TaskFooter class="ml-1" :tags="task.tags" />
  </div>
</template>

<script lang="ts">
import { ITask } from 'domain/interfaces/ITask'
import { computed, defineComponent, toRefs } from 'vue'
import TaskFooter from '../TaskFooter/TaskFooterComponent.vue'

export default defineComponent({
  props: {
    task: {
      required: true,
      type: Object as () => ITask
    }
  },
  components: { TaskFooter },
  setup(props) {
    const description = computed(() => props.task.description)

    return {...toRefs(props), description}
  }
})
</script>
