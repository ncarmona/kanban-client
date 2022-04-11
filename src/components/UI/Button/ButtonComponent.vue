<template>
  <button ref="btn" class="bg-violet-700 hover:bg-violet-500 text-white rounded p-2 disabled:cursor-not-allowed"
          :type="type"
          :name="name"
          :autofocus="autofocus"
          :disabled="disabled">
    <span ref="btnSpan">{{visibleLabel}}</span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, watch } from 'vue'
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
    const label:string = props.button.label
    const disabled:Ref<boolean> = ref(props.button.disabled ?? false)
    const autofocus:Ref<boolean> = ref(props.button.autofocus ?? false)
    const name:Ref<string> = ref(props.button.name ?? '')

    const visibleLabel:Ref = ref(label)
    const btn:Ref = ref(null)
    const btnSpan:Ref = ref(null)

    const enableProcessing = () => {
      visibleLabel.value = props.button.processing?.processingText
      btnSpan.value.classList.add('animate-pulse')
      btn.value.classList.add('cursor-progress')
      btnSpan.value.classList.remove('disabled:cursor-not-allowed')
    }

    const disableProcessing = () => {
      visibleLabel.value = label
      btnSpan.value.classList.remove('animate-pulse')
      btn.value.classList.remove('cursor-progress') 
      btnSpan.value.classList.add('disabled:cursor-not-allowed')
    }

    watch(props.button.processing!, () => {
      const { enabled } = props.button.processing!
      enabled ? enableProcessing() : disableProcessing()
    })

    return { type, autofocus, disabled, name, visibleLabel, btn, btnSpan }
  },
})
</script>
