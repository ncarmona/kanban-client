<template>
  <AuthLayout>
    <AlreadyHaveAnAccountComponent v-if="pendingToRegister" class="flex justify-end"/>
      <div class="flex flex-col place-items-center w-full h-screen mt-10">
        <div v-if="pendingToRegister" class="w-full md:w-8/12">
          <HeaderComponent class="mb-8" :headerNumber="1" text="register" />
          <RegisterFormComponent class="w-full" :success="registerSuccess" :fail="registerFail"/>
        </div>
        <ConfirmationEmailSendedComponent v-else email="email@gmail.com" />
      </div>
  </AuthLayout>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from 'vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import HeaderComponent from '../components/UI/Header/HeaderComponent.vue'
import RegisterFormComponent from '../components/Register/RegisterForm/RegisterFormComponent.vue'
import AlreadyHaveAnAccountComponent from '../components/Register/AlreadyHaveAnAccount/AlreadyHaveAnAccountComponent.vue'
import ConfirmationEmailSendedComponent from '../components/Register/ConfirmationEmailSended/ConfirmationEmailSendedComponent.vue'
export default defineComponent({
  components: { AuthLayout, HeaderComponent, RegisterFormComponent, AlreadyHaveAnAccountComponent, ConfirmationEmailSendedComponent },
  setup() {
    const registerOk: Ref<boolean> = ref(false)
    const registerSuccess = () => {
      registerOk.value = true
    }
    const registerFail = () => {
      return false
    }
    const pendingToRegister = computed(() => !registerOk.value)
    return { registerSuccess, registerFail, pendingToRegister }
  }
})
</script>
