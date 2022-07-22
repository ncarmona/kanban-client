<template>
  <span ref="errorMessage" class="text-red-600 flex invisible">
    <ExclamationIcon class="h-6"/>
    {{message}}
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, toRefs, watch } from 'vue'
import { ExclamationIcon } from '@heroicons/vue/outline'
export default defineComponent({
  components: { ExclamationIcon },
  props: {
    message: {
      type: String,
      required: false,
    }
  },
  setup(props) {
    const errorMessage: Ref = ref(null)
    const errorTriggered = () => props.message !== ""
    const showError = () => {
      errorTriggered() ? errorMessage.value.classList.remove("invisible") : errorMessage.value.classList.add("invisible")
    }
    watch(props, () => showError())
    return {errorTriggered, errorMessage, ...toRefs(props)}
  },
})
</script>
