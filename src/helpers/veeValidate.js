import { required, email } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'
extend('email', {
  ...email,
  message: '請輸入正確郵箱'
})
extend('required', {
  ...required,
  message: '此欄位為必填欄位'
})
