import { Module } from 'vuex'

import { IRootState } from '../type'
import { ISystemState } from './type'

import { getPageListData } from '@/service/system/system.service'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0
    }
  },

  actions: {
    getList({ commit }, playload) {
      const { pageName, query } = playload
      const url = `/${pageName}/list`
      getPageListData(url, query).then((res) => {
        console.log(playload)
        commit('changeList', { type: 'users', data: res.data })
      })
    }
  },
  mutations: {
    changeList(state, playload) {
      ;(state as any)[`${playload.type}List`] = playload.data.list
      ;(state as any)[`${playload.type}Count`] = playload.data.totalCount
    }
  },
  getters: {
    pageListData(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
}

export default systemModule
