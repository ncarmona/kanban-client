<template>
  <AuthLayout>
    <NoRegisteredTextComponent data-cy="not-registed-text" class="flex justify-end"/>
      <div class="flex flex-col place-items-center w-full h-screen mt-10">
        <div class="w-full md:w-8/12">
          <HeaderComponent class="mb-8" data-cy="view-title" :headerNumber="1" text="login" />
          <LoginFormComponent class="w-full" :success="loginSuccess" :fail="loginFail"/>
        </div>
      </div>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import NoRegisteredTextComponent from '../components/Login/NoRegisteredText/NoRegisteredTextComponent.vue'
import HeaderComponent from '../components/UI/Header/HeaderComponent.vue'
import LoginFormComponent from '../components/Login/LoginForm/LoginFormComponent.vue'
import AuthLogo from '../assets/kanban_auto.svg'
import { Router, useRouter } from 'vue-router'

export default defineComponent({
  components: { AuthLayout, HeaderComponent, LoginFormComponent, NoRegisteredTextComponent },
  setup() {
    const router:Router = useRouter()
    const loginSuccess = () => router.push({ name: "home" })
    const loginFail = () => { return }

    return { loginSuccess, loginFail, AuthLogo }
  }
})
</script>
