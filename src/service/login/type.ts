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

export interface ResponeData<T = any> {
  code: number
  message: string
  data: T
}

export interface loginData {
  name: string
  password: string
}
