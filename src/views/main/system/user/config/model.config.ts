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
      field: 'id',
      label: 'id',
      type: 'input',
      placeholder: '请输入ID'
    },
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
      field: 'cellphone',
      label: '电话号码',
      type: 'input',
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
      label: '用户状态',
      type: 'select',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ],
      placeholder: '请输入用户状态'
    },
    {
      field: 'createAt',
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        rangeSeparator: '至',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
