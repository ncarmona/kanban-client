<template>
  <div>
    <TaskComponent class="mb-3" v-for="task in tasks" :key="task.id"/>
  </div>
</template>

<script lang="ts">
import { ITask } from 'domain/interfaces/ITask'
import { defineComponent, toRefs } from 'vue'
import TaskComponent from '../Task/TaskComponent.vue'

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
