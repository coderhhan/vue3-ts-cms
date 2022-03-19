import requestInstance from '../index'

import { accountLoginData, phoneLoginData, ResponeData, sendCodeQuery } from './type'
enum LoginAPI {
  loginAccount = '/login/AccountLogin',
  loginPhone = '/login/PhoneLogin',
  sendCode = '/login/SendCode'
}
export const loginAccount = function (data: accountLoginData): Promise<ResponeData> {
  return requestInstance.post<ResponeData>({
    url: LoginAPI.loginAccount,
    data: data
  })
}

export const loginPhone = function (data: phoneLoginData): Promise<ResponeData> {
  return requestInstance.post<ResponeData>({
    url: LoginAPI.loginPhone,
    data: data
  })
}

export const sendCode = function (data: sendCodeQuery): Promise<ResponeData> {
  return requestInstance.post<ResponeData>({
    url: LoginAPI.sendCode,
    data: data
  })
}
