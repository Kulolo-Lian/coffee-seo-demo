// 1. 首先导入所需的函数和插件
import { defineConfig } from 'vite'
import { resolve } from 'path'
import viteImagemin from 'vite-plugin-imagemin'

// 2. 使用 defineConfig 包装配置
export default defineConfig({
  // 你原有的配置
  root: 'src', // 源文件都在src文件夹里
  build: {
    outDir: '../dist', // 编译后的文件输出到项目根目录的dist文件夹
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        brew: resolve(__dirname, 'src/how-to-brew-coffee.html'),
        faqs: resolve(__dirname, 'src/coffee-faqs.html')
      }
    },
    // 添加：确保 _redirects 文件被复制到 dist 目录
    copyPublicDir: true
  },
  
  // 3. 添加 plugins 部分，配置图片压缩
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75, progressive: true },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false }
        ]
      },
      webp: { quality: 75 }
    })
  ]
})

