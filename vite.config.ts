/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-08 00:47:38
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-17 09:44:06
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteSvgIcons({
      // 配置路劲在你的src里的svg存放文件
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  base: './', // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
      //__dirname总是指向被执行 js 文件的绝对路径
      '@': path.resolve(__dirname, '.', 'src'),
    },
  },
  build: {
    outDir: 'dist',
    // 9月更新
    assetsDir: 'assets', //指定静态资源存放路径
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    https: false, // 是否开启 https
    open: true, // 是否自动在浏览器打开
    port: 3217, // 端口号
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: '', // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn'],
  },
})
