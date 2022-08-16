import { ILoginState } from './login/type'
export interface IRootState {
  isClopse: boolean
}

export interface IRootWithModule {
  loginModule: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
