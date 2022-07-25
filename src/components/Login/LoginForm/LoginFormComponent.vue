<template>
  <div>
    <div class="mb-2">
      <InputTextComponent class="mb-5" :input="inputEmail" @click="clearErrorMessages()"/>
      <InputTextComponent :input="inputPassword" @click="clearErrorMessages()"/>
    </div>
    <FormErrorMessageComponent class="mb-2" :message="loginErrorMessage" name="login"/>
    <ButtonComponent class="w-full" @click="login" :button="loginButton" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { KeyIcon, UserIcon } from '@heroicons/vue/outline'
import { IInputText } from '../../UI/InputText/interfaces/IInputText'
import { InputType } from '../../UI/InputText/interfaces/InputType'
import InputTextComponent from '../../UI/InputText/InputTextComponent.vue'
import ButtonComponent from '../../UI/Button/ButtonComponent.vue'
import { IButton } from 'components/UI/Button/interfaces/IButton'
import { AuthRequests } from '../../../requests/auth'
import { IAuth } from 'domain/interfaces/IAuth'
import FormErrorMessageComponent from '../../UI/FormErrorMessage/FormErrorMessageComponent.vue'
import { AxiosError } from 'axios'
import { sha512_256 } from "js-sha512"
export default defineComponent({
  components: { InputTextComponent, ButtonComponent, FormErrorMessageComponent },
  props: {
    success: {
      required: true,
      type: Function
    },
    fail: {
      required: true,
      type: Function
    }
  },
  setup(props) {
    const inputEmail: Ref<IInputText> = ref({
      name: 'Email',
      inputValue: '',
      type: InputType.EMAIL,
      autofocus: true,
      icon: UserIcon
    })
    const inputPassword: Ref<IInputText> = ref({
      name: 'Password',
      inputValue: '',
      type: InputType.PASSWORD,
      icon: KeyIcon
    })
    const loginButton: Ref<IButton> = ref({
      label: 'login',
      processing: {
        enabled: false,
        processingText: 'Validating ...'
      },
      name: 'login',
      disabled: true
    })
    const loginErrorMessage: Ref<string> = ref("")
    const signinPayload = async ():Promise<IAuth> => {
      const { inputValue: email} = inputEmail.value
      let { inputValue: password} = inputPassword.value
      password = sha512_256.create().update(password).hex()
      return { email, password }
    }
    const login = async (): Promise<void> => {
      const signin = new AuthRequests()
      loginButton.value.processing!.enabled = true
      signin.signin(await signinPayload())
        .then(() => props.success())
        .catch((error: AxiosError) => {
          props.fail()
          loginErrorMessage.value = "Wrong credentials. Try again."
        })
        .finally(() => {
          loginButton.value.processing!.enabled = false
          clearForm()
        })
    }

    const clearForm = () => {
      inputEmail.value.inputValue = ""
      inputPassword.value.inputValue = ""
    }
    const clearErrorMessages = () => {
      loginErrorMessage.value = ""
    }
    const someFieldEmpty = (email:string, password:string): boolean => {
      const email2 = email.trim().length !== 0
      const password2 = password.trim().length !== 0

      return email2 && password2
    }
    const validateEmail = (email:string): boolean => {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reg.test(email)
    }
    watch([inputEmail, inputPassword], (v) => {
      const email = v[0].inputValue
      const password = v[1].inputValue

      loginButton.value.disabled = !someFieldEmpty(email, password) || !validateEmail(email)
    }, {deep: true})

    return { inputEmail, inputPassword, login, loginButton, loginErrorMessage, clearErrorMessages }
  }
})
</script>
