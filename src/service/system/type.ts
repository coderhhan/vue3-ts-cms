export interface ResponeData<T = any> {
  code: number
  message: string
  data: T
}

export interface queryata {
  name: string
  offset: number
  size: number
  cellphone?: number
}
