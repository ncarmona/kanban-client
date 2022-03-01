<template>
  <div class="flex flex-col justify-items-center border border-gray-200">
    <span> {{task.title}} </span>
    <span> {{description}} </span>
    <div>
      <TaskTagList :tags="task.tags" />
    </div>
  </div>
</template>

<script lang="ts">
import { ITask } from 'domain/interfaces/ITask'
import { computed, defineComponent, toRefs } from 'vue'
import TaskTagList from '../TaskTagListComponent/TaskTagListComponent.vue'

export default defineComponent({
  props: {
    task: {
      required: true,
      type: Object as () => ITask
    }
  },
  components: { TaskTagList },
  setup(props) {
    const description = computed(() => props.task.description)
    return {...toRefs(props), description}
  }
})
</script>
