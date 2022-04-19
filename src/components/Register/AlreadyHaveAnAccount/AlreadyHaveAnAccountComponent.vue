<template>
  <div>
    <span class="font-extralight mr-1">Have already an account? </span>
    <router-link class="text-violet-700" :to="loginRoute">Login now</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationRaw } from 'vue-router'

export default defineComponent({
  setup() {
    const loginRoute:RouteLocationRaw = { name: 'login' }

    return { loginRoute }
  }
})
</script>
