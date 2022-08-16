import requestInstance from '../index'

import { accountLoginData, phoneLoginData, ResponeData, sendCodeQuery } from './type'
import { loginData } from './type'
enum LoginAPI {
  loginAccount = '/login/AccountLogin',
  loginPhone = '/login/PhoneLogin',
  sendCode = '/login/SendCode',
  login = '/login',
  userInfo = '/users/',
  UserMenus = '/role/'
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

export const login = function (data: loginData): Promise<ResponeData> {
  return requestInstance.post<ResponeData>({
    url: LoginAPI.login,
    data: data
  })
}

export const userInfo = function (id: string): Promise<ResponeData> {
  return requestInstance.get<ResponeData>({
    url: LoginAPI.userInfo + id,
    isShowLoading: false
  })
}

export const getMenuByRoleId = function (id: string): Promise<ResponeData> {
  return requestInstance.get<ResponeData>({
    url: LoginAPI.UserMenus + id + '/menu',
    isShowLoading: false
  })
}
