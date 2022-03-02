<template>
  <div class="flex flex-row-reverse">
    <button @click="toggleContent">
      <ToggleTagsTaskComponent class="cursor-pointer mr-2" :icon="toggleIcon" />
    </button>
    <div class="flex flex-grow">
      <TaskTagList v-if="tagsVisible" :tags="tags" />
      <TaskOptions v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { ITag } from 'domain/interfaces/ITag'
import { computed, defineComponent, ref, Ref, toRefs } from 'vue'
import TaskTagList from '../TaskTagListComponent/TaskTagListComponent.vue'
import TaskOptions from '../TaskOptions/TaskOptionsComponent.vue'
import ToggleTagsTaskComponent from '../ToggleTagsTask/ToggleTagsTaskComponent.vue'

export default defineComponent({
  components: { TaskTagList, ToggleTagsTaskComponent, TaskOptions },
  props: {
    tags: {
      required: true,
      type: Object as () => ITag[]
    }
  },
  setup(props) {
    const toggleIcons = {
      options: "HashtagIcon",
      tags: "CogIcon"
    }

    const toggleIcon:Ref<string> = ref(toggleIcons.tags)
    const toggleContent = () => {
      toggleIcon.value = toggleIcon.value === toggleIcons.options
      ? toggleIcons.tags
      : toggleIcons.options
    }
    const tagsVisible = computed(() => toggleIcon.value === toggleIcons.tags)
    const optionsVisible = computed(() => toggleIcon.value === toggleIcons.options)

    return { ...toRefs(props), toggleIcons, toggleIcon, toggleContent, tagsVisible, optionsVisible }
  },
})
</script>
