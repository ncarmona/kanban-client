<template>
  <button class="bg-violet-700 hover:bg-violet-500 text-white rounded p-2"
          :type="type"
          :name="name"
          :autofocus="autofocus"
          :disabled="disabled">
    {{label}}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { IButton } from './interfaces/IButton'
export default defineComponent({
  props: {
    button: {
      required: true,
      type: Object as () => IButton
    }
  },
  setup(props) {
    const type = computed(() => props.button.type ?? 'button')
    const autofocus = computed(() => props.button.autofocus ?? false)
    const disabled = computed(() => props.button.disabled ?? false)
    const name = computed(() => props.button.name ?? '')
    const value = computed(() => props.button.value ?? '')
    const label = computed(() => props.button.label)

    return { type, autofocus, disabled, name, value, label }
  },
})
</script>
