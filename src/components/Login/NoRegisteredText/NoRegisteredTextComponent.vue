<template>
  <div>
    <span class="font-extralight mr-1">Have not registered? </span>
    <router-link class="text-violet-700" :to="signupRoute">Sign up now</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationRaw } from 'vue-router'

export default defineComponent({
  setup() {
    const signupRoute:RouteLocationRaw = { name: 'register' }

    return { signupRoute }
  }
})
</script>
