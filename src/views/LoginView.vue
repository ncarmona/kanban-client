<template>
  <AuthLayout>
    <NoRegisteredTextComponent class="flex justify-end"/>
      <div class="flex flex-col place-items-center w-full h-screen mt-10">
        <HeaderComponent class="mb-8" :headerNumber="1" text="login" />
        <LoginFormComponent class="w-full md:w-6/12" :success="loginSuccess" :fail="loginFail"/>
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
