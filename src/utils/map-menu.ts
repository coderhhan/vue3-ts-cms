import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenu: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1 默认加载所有路由route
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('@/router/main', true, /.ts$/)
  routeFiles.keys().forEach((key) => {
    console.log(key)
    const route = require('@/router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)
  //2 根据菜单获取需要添加的routes
  const _recurse = function (menus: any) {
    menus.forEach((menu: any) => {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        route && routes.push(route)
      } else {
        _recurse(menu.children)
      }
    })
  }

  _recurse(userMenu)
  return routes
}
