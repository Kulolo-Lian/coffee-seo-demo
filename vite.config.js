import { resolve } from 'path'

export default {
  root: 'src', // 源文件都在src文件夹里
  build: {
    outDir: '../dist', // 编译后的文件输出到项目根目录的dist文件夹
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        brew: resolve(__dirname, 'src/how-to-brew-coffee.html'),
        faqs: resolve(__dirname, 'src/coffee-faqs.html')
      }
    }
  }
}