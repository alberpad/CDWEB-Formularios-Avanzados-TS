import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
// @ts-ignore
import validatorEs from 'vee-validate/dist/locale/es';
Vue.use(VeeValidate, {
  // Para evitar problemas de colisión (xej con bootstrap-vue)
  fieldsBagName: 'veeFields',
});
// Para obtener los mensajes de vee-validate en español
Validator.localize('es', validatorEs);

Validator.extend('strength_password', {
  getMessage: (field: string) =>
    `El campo ${field} debe contener al menos: 1 letra mayúscula, 1 letra minúscula, 1 número y un carácter especial (por ejemplo,. _ &? Etc.)
`,
  validate: (value: string) => {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
    return strongRegex.test(value);
  },
});
