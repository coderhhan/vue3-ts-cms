import { HForm } from '@/components/HForm'

export const modelConfig: HForm = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  // colLayout: {
  //   span: 8
  // },
  collapseLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  formItems: [
    {
      field: 'name',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      label: '真实姓名',
      type: 'input',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      label: '登陆密码',
      type: 'input',
      placeholder: '请输入登陆号码'
    },
    {
      field: 'cellphone',
      label: '手机号码',
      type: 'select',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ],
      placeholder: '请输入手机号码'
    },
    {
      field: 'departmentId',
      label: '选择部门',
      type: 'select'
    }
  ]
}
