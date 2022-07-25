<template>
  <span ref="errorMessage" class="text-red-600 flex invisible" :data-cy="dataCy">
    <ExclamationIcon class="h-6"/>
    {{message}}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, toRefs, watch } from 'vue'
import { ExclamationIcon } from '@heroicons/vue/outline'
export default defineComponent({
  components: { ExclamationIcon },
  props: {
    message: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const errorMessage: Ref = ref(null)
    const errorTriggered = () => props.message !== ""
    const showError = () => {
      errorTriggered() ? errorMessage.value.classList.remove("invisible") : errorMessage.value.classList.add("invisible")
    }
    watch(props, () => showError())
    const dataCy = computed(() => "UI-form-error-message-" + props.name.toLowerCase())
    return {errorTriggered, errorMessage,dataCy, ...toRefs(props)}
  },
})
</script>
