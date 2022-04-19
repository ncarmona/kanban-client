<template>
  <div class="flex flex-col">
    <label :for="attributeName" class="mb-2 font-bold">{{name}}</label>
    <div ref="borderInputRef" class="flex place-items-center h-10 border rounded">
      <Component ref="iconInputRef" v-if="assignedIcon" :is="icon" class="h-6 ml-2 text-slate-400"/>
      <input
        class="ml-2 grow outline-0 hover:border-violet-700 focus:border-violet-700 disabled:cursor-not-allowed"
        :alt="alt"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :disabled="disabled"
        :type="type"
        :id="attributeName"
        :name="attributeName"
        :pattern="pattern"
        :max="max"
        :maxlength="maxlength"
        :min="min"
        :minlength="minlength"
        :readonly="readonly"
        :required="required"
        :placeholder="placeholder"
        @focus="setInputColors"
        @blur="setInputColors"
        v-model="props.input.inputValue" />
      <Component
        :is="togglePasswordTypeIcon"
        @click="toggleInputType"
        v-if="isPasswordType"
        class="h-6 mr-1 cursor-pointer text-slate-400 hover:text-violet-600" />
    </div>
  </div>
</template>

<script lang="ts">
import { EyeIcon, EyeOffIcon } from '@heroicons/vue/outline'
import { computed, defineComponent, Ref, ref } from 'vue'
import { IInputText } from './interfaces/IInputText'
import { InputType } from './interfaces/InputType'

export default defineComponent({
  props: {
    input: {
      required: true,
      type: Object as () => IInputText
    }
  },
  setup(props) {
    const name = computed(() => props.input.name)
    const placeholder = computed(() => props.input.placeholder ?? '')
    const type = computed(() => props.input.type ?? InputType.TEXT)
    const alt = computed(() => props.input.alt ?? '')
    const autocomplete = computed(() => props.input.autocomplete ?? false)
    const autofocus = computed(() => props.input.autofocus ?? false)
    const disabled = computed(() => props.input.disabled ?? false)
    const max = computed(() => props.input.max ?? '')
    const min = computed(() => props.input.min ?? '')
    const maxlength = computed(() => props.input.maxlength ?? '')
    const minlength = computed(() => props.input.minlength ?? '')
    const pattern = computed(() => props.input.pattern ?? '')
    const readonly = computed(() => props.input.readonly ?? false)
    const required = computed(() => props.input.required ?? false)
    const inputValue = computed(() => props.input.inputValue)
    const icon = computed(() => props.input.icon)

    const firstType: InputType = props.input.type ?? InputType.TEXT
    const isPasswordType = computed(() => firstType === InputType.PASSWORD)
    const togglePasswordTypeIcon = computed(() => props.input.type === InputType.PASSWORD ? EyeIcon : EyeOffIcon)
    const assignedIcon = computed(() => !!props.input.icon)
    const attributeName = computed(() => props.input.name.replace(' ', '-'))
    const borderInputRef:Ref = ref()
    const iconInputRef:Ref = ref()

    const colorBorder = (e:Event) => {
      e.type === 'focus' ? borderInputRef.value.classList.add('border-violet-600') : borderInputRef.value.classList.remove('border-violet-600')
    }
    const colorIcon = (e:Event) => {
      e.type === 'focus' ? iconInputRef.value.classList.add('text-violet-600') : iconInputRef.value.classList.remove('text-violet-600')
    }
    const setInputColors = (e: Event) => {
      colorBorder(e)
      colorIcon(e)
    }
    const toggleInputType = () => {
      const { type } = props.input
      const { TEXT, PASSWORD } = InputType
      props.input.type = type === PASSWORD ? TEXT : PASSWORD
    }
    return {
      name,
      placeholder,
      type,
      alt,
      autocomplete,
      autofocus,
      disabled,
      min,
      max,
      minlength,
      maxlength,
      pattern,
      readonly,
      required,
      inputValue,
      assignedIcon,
      icon,
      isPasswordType,
      togglePasswordTypeIcon,
      toggleInputType,
      props,
      borderInputRef,
      setInputColors,
      iconInputRef,
      attributeName
    }
  },
})
</script>
