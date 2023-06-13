const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')
module.exports = {
  outputDir: './build',
  publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://123.207.32.32:5000',
        // target: 'localhost:8000',
        // changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        // imports: ['vue'],
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          // IconsResolver({
          //   prefix: 'Icon'
          // })
          IconsResolver({ prefix: 'Icon' })
          //   IconsResolver()
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(),
          // // 自动注册图标组件
          // IconsResolver()
          IconsResolver({ componentPrefix: 'icon' })
        ]
      }),
      // Icons({ compiler: 'vue3', scale: 1, defaultClass: 'inline-block', autoInstall: true })
      Icons({
        compiler: 'vue3',
        autoInstall: true
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        views: '@/views',
        utils: '@/utils'
      }
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  // }
}
