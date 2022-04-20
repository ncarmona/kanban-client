<template>
  <div :class="componentCursor" @click="toggle">
    <div :class="disabledCSS">
      <CheckIcon ref="checkIcon" :class="checkCSS" />
    </div>
    <span class="ml-1">{{data.label}}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref, toRefs } from 'vue'
import { ICheckBox } from './interfaces/ICheckbox'
import { CheckIcon } from '@heroicons/vue/outline'
export default defineComponent({
  components: { CheckIcon },
  props: {
    data: {
      required: true,
      type: Object as () => ICheckBox
    }
  },
  setup(props) {
    const toggle = () => {
      const { checked, enabled } = props.data
      if (enabled ?? true) {
        props.data.checked = !checked
        checkIcon.value.classList.toggle('invisible')
      }
    }
    const checkIcon: Ref = ref(null)
    const checkIsVisible = computed(() => props.data.checked)
    const checkCSS = computed(() => {
      const checked: string = 'h-4 text-violet-700 font-bolder'
      const unchecked: string = 'h-4 text-violet-700 font-bolder invisible'

      return props.data.checked ? checked : unchecked
    })
    const componentCursor = computed(() => {
      const { enabled } = props.data

      const disabledCSS: string = 'flex h-5 cursor-not-allowed text-gray-500 place-items-center'
      const enabledCSS: string = 'flex h-5 cursor-pointer'

      return enabled ?? true ? enabledCSS : disabledCSS
    })
    const disabledCSS = computed(() => {
      const { enabled } = props.data
      
      const disabledCSS: string = 'border border-black rounded bg-gray-500'
      const enabledCSS: string = 'border border-black rounded'

      return enabled ?? true ? enabledCSS : disabledCSS
    })
    return { ...toRefs(props), toggle, checkIsVisible, checkIcon, checkCSS, componentCursor, disabledCSS }
  },
})
</script>
