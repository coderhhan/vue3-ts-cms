import { createStore } from 'vuex'

import { IRootState } from './type'

import loginModule from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      isClopse: false
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export default store
