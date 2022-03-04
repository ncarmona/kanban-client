<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import BoardComponent from './components/Board/BoardComponent.vue';

export default defineComponent({
  components: { BoardComponent }
})
</script>

<template>
  <div class="h-screen pt-20 bg-gray-50">
    <BoardComponent />
  </div>
</template>
