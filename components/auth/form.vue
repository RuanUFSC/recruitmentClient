<template>
  <Form @submit="handleSubmit" :validation-schema="activeSchema">
    <slot></slot>
    <div>
      <button type="submit" class="btn btn-primary w-100 mt-2">
        {{ submitText }}
      </button>
    </div>
  </Form>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps({
  submitText: {
    type: String,
    required: true,
  },
  validationSchema: {
    type: Object,
    required: false,
  },
});

const defaultSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres').matches(/^(?=.*[A-Z])(?=.*[0-9])/, 'Senha deve conter ao menos 1 número e 1 letra maiúscula').required('Senha é obrigatória'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas não conferem').required('Confirmação de senha é obrigatória'),
});

const activeSchema = computed(() => props.validationSchema || defaultSchema);

const emits = defineEmits(['submit']);

const handleSubmit = (values) => {
  emits('submit', values);
};

</script>