import { Module } from 'vuex'

import { IRootState } from '../type'
import { ISystemState } from './type'

import { getPageListData } from '@/service/system/system.service'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      usersCount: 0
    }
  },

  actions: {
    getList({ commit }, playload) {
      getPageListData('/users/list', {
        offset: 0,
        size: 10,
        name: 'w',
        cellphone: 4
      }).then((res) => {
        console.log(playload)
        commit('changeList', { type: 'users', data: res.data })
      })
    }
  },
  mutations: {
    changeList(state, playload) {
      console.log(playload, state)
    }
  },
  getters: {
    pageListData(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}List`]
      }
    }
  }
}

export default systemModule
