export interface accountLoginData {
  name: string
  password: string
}

export interface phoneLoginData {
  phone: string
  verifyCode: string
}

export interface sendCodeQuery {
  email: string
  verifyCode: string
}

export interface ResponeData {
  code: number
  message: string
  data: any
}
