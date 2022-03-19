export const registerRules = {
  userAccount: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  email: [
    {
      required: true,
      pattern: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}
