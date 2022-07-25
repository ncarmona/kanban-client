<template>
  <ShieldCheckIcon class="w-full md:w-4/12 text-green-500"/>
  <span>Wait for email confirmation in
    <span class="font-bold text-violet-700">{{email}}</span>. If you can not see the confirmation email in your inbox check your spam folder.
  </span>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { ShieldCheckIcon } from '@heroicons/vue/outline'
export default defineComponent({
  props: {
    email: {
      required: true,
      type: String
    }
  },
  components: { ShieldCheckIcon },
  setup(props) {
    return { ...toRefs(props)}
  },
})
</script>
