<template>
  <div>
    <div class="mb-2">
      <InputTextComponent class="mb-5" :input="emailInput" />
      <InputTextComponent class="mb-5" :input="passwordInput" />
      <InputTextComponent class="mb-5" :input="password2Input" />
    </div>
    <FormErrorMessageComponent class="mb-2" :message="errorMessage" name="register" />
    <ButtonComponent class="w-full" @click="register" :button="registerButton" />
  </div>

</template>

<script lang="ts">
import { IButton } from '../../UI/Button/interfaces/IButton'
import ButtonComponent from '../../UI/Button/ButtonComponent.vue'
import InputTextComponent from '../../UI/InputText/InputTextComponent.vue'
import { IInputText } from 'components/UI/InputText/interfaces/IInputText'
import { InputType } from '../../UI/InputText/interfaces/InputType'
import { defineComponent, ref, Ref, watch } from 'vue'
import { KeyIcon, MailIcon } from '@heroicons/vue/outline'
import { AuthRequests } from '../../../requests/auth'
import { IAuth } from 'domain/interfaces/IAuth'
import FormErrorMessageComponent from '../../UI/FormErrorMessage/FormErrorMessageComponent.vue'
import { AxiosError } from 'axios'
import { IResponse } from '../../../core/interfaces/IResponse'

export default defineComponent({
  props: {
    success: {
      required: true,
      type: Function
    },
    fail: {
      registered: true,
      type: Function
    }
  },
  components: { InputTextComponent, ButtonComponent, FormErrorMessageComponent },
  setup(props) {
    const emailInput: Ref<IInputText> = ref({
      inputValue: '',
      name: 'Email',
      type: InputType.EMAIL,
      icon: MailIcon
    })
    const passwordInput: Ref<IInputText> = ref({
      inputValue: '',
      name: 'Password',
      type: InputType.PASSWORD,
      icon: KeyIcon
    })
    const password2Input: Ref<IInputText> = ref({
      inputValue: '',
      name: 'Repeat password',
      type: InputType.PASSWORD,
      icon: KeyIcon
    })
    const registerButton: Ref<IButton> = ref({
      label: 'Register',
      disabled: true,
      name: 'register',
      processing: {
        enabled: false,
        processingText: 'Creating account...'
      }
    })
    const errorMessage: Ref<string> = ref("")

    const signupPayload = (): IAuth => {
      const { inputValue: email } = emailInput.value
      const { inputValue: password } = passwordInput.value

      return { email, password }
    }

    const signup = () => {
      const authRequests = new AuthRequests()
      authRequests.signup(signupPayload())
        .then(() => props.success!())
        .catch((error: AxiosError) => {
          const { status_code } = error.response?.data as IResponse
          errorMessage.value = errorCode(status_code)
        })
        .finally(() => resetButtonLabel())
    }

    const register = () => {
      changeButtonToProcessing()
      signup()
    }

    const errorCode = (code: number) => {
      let text: Function

      switch (code) {
        case 500:
          text = () => 'Email already exists.'
          break;
      
        default:
          text = () => 'Unexpected error.'
          break;
      }

      return text()
    }
    const changeButtonToProcessing = () => registerButton.value.processing!.enabled = true
    const resetButtonLabel = () => registerButton.value.processing!.enabled = false
    const someFieldEmpty = (fields: string[]): boolean => {
      return fields.every((f: string) => f.trim().length !== 0)
    }

    const equalFields = (field1: string, field2: string): boolean  => {
      return field1 === field2
    }

    const validateEmail = (email:string): boolean => {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return reg.test(email)
    }

    watch([emailInput, passwordInput, password2Input], (v) => {
      const email: string = v[0].inputValue
      const password: string = v[1].inputValue
      const password2: string = v[2].inputValue
      const fields: string[] = [ email, password, password2]

      registerButton.value.disabled = !validateEmail(email) || !equalFields(password, password2) || !someFieldEmpty(fields)

    }, { deep: true })

    return { emailInput, passwordInput, password2Input, registerButton, register, errorMessage } 
  }
})
</script>
