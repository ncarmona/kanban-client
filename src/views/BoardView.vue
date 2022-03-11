<template>
  <RegisteredUserLayout>
    <BoardComponent />
  </RegisteredUserLayout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import BoardComponent from '../components/Board/BoardComponent.vue'
import RegisteredUserLayout from '../layouts/RegisteredUserLayout.vue'

export default defineComponent({
  components: { BoardComponent, RegisteredUserLayout }
})
</script>