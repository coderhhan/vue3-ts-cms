import { Module } from 'vuex'

import { IRootState } from '../type'
import { ISystemState } from './type'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userQuery: {}
    }
  },
  getters: {},
  actions: {},
  mutations: {}
}

export default systemModule
