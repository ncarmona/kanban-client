<template>
  <ConfigurationLayout>
    <HeaderComponent :headerNumber="1" text="Board configuration" />
  </ConfigurationLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConfigurationLayout from '../layouts/ConfigurationLayout.vue'
import HeaderComponent from '../components/UI/Header/HeaderComponent.vue'

export default defineComponent({
  components: { ConfigurationLayout, HeaderComponent }
})
</script>
