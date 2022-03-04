<template>
  <div class="border border-gray-200">
    <div class="flex flex-col p-3 bg-white">
      <span class="mb-3 font-bold">{{task.title}}</span>
      <span>{{description}}</span>
    </div>
    <TaskFooter class="flex flex-row-reverse border-t border-grey-100 bg-slate-100" :tags="task.tags" />
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
