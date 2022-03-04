<template>
  <TaskComponent class="mb-3" v-for="task in tasks" :task="task" :key="task.id"/>
</template>

<script lang="ts">
import { ITask } from 'domain/interfaces/ITask'
import { defineComponent, toRefs } from 'vue'
import TaskComponent from '../../Task/Task/TaskComponent.vue'

export default defineComponent({
  components: { TaskComponent },
  props: {
    tasks: {
      required: true,
      type: Object as () => ITask[]
    }
  },
  setup(tasks) {
    return { ...toRefs(tasks) }
  }
})
</script>
