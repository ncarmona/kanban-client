<template>
  <AuthLayout>
    <AlreadyHaveAnAccountComponent class="flex justify-end"/>
      <div class="flex flex-col place-items-center w-full h-screen mt-10">
        <HeaderComponent class="mb-8" :headerNumber="1" text="register" />
        <RegisterFormComponent class="w-full md:w-6/12" :success="registerSuccess" :fail="registerFail"/>
      </div>
  </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import HeaderComponent from '../components/UI/Header/HeaderComponent.vue'
import RegisterFormComponent from '../components/Register/RegisterForm/RegisterFormComponent.vue'
import AlreadyHaveAnAccountComponent from '../components/Register/AlreadyHaveAnAccount/AlreadyHaveAnAccountComponent.vue'

export default defineComponent({
  components: { AuthLayout, HeaderComponent, RegisterFormComponent, AlreadyHaveAnAccountComponent },
  setup() {
    const registerSuccess = () => {}
    const registerFail = () => {}

    return { registerSuccess, registerFail }
  }
})
</script>
