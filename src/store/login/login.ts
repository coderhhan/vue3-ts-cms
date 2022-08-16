import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState } from './type'
import { login, userInfo, getMenuByRoleId } from '@/service/login/login.service'
import localCache from '@/utils/cache'
import router from '@/router'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menu: []
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setMenuData(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log(payload)
      //1.登录
      const result = await login(payload)
      const { id, token } = result.data
      localCache.setCache('token', token)
      commit('setToken', token)
      //2.获取用户信息
      // console.log(id)
      const userInforResult = await userInfo(id)
      localCache.setCache('userInfo', userInforResult.data)
      commit('setUserInfo', userInforResult.data)

      //3.获取菜单
      const loadMenuByRoleId = await getMenuByRoleId(userInforResult.data.role.id)
      localCache.setCache('menu', loadMenuByRoleId.data)
      commit('setMenuData', loadMenuByRoleId.data)

      //登陆成功跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      token && commit('setToken', token)
      const userInfo = localCache.getCache('userInfo')
      userInfo && commit('setUserInfo', userInfo)
      const menu = localCache.getCache('menu')
      token && commit('setMenuData', menu)
      console.log(menu)
    }
  }
}

export default loginModule
