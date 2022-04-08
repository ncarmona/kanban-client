<template>
  <div>
    <HeaderComponent class="mb-3 text-center" :headerNumber="3" :text="textHeader"/>
    <TaskComponent class="cursor-pointer" @click="swapTaskBacklog(task)" v-for="task in backlog[field]" :key="task.id" :task="task" />
  </div>
</template>

<script lang="ts">
import { ITask } from 'domain/interfaces/ITask'
import { defineComponent } from 'vue'
import TaskComponent from '../Task/Task/TaskComponent.vue'
import HeaderComponent from '../UI/Header/HeaderComponent.vue'

export default defineComponent({
  components: { TaskComponent, HeaderComponent },
  props: {
    backlog: {
      required: true,
      type: Object
    },
    textHeader: {
      required: true,
      type: String
    },
    field: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const currentField = props.field
    const targetField = props.field === 'selected' ? 'unselected' : 'selected'

    const swapTaskBacklog = async(task:ITask) => {
      props.backlog[currentField] = props.backlog[currentField].filter((t:ITask) => t.id !== task.id)
      props.backlog[targetField].push(task)
    }

    return { swapTaskBacklog }
  },
})
</script>
