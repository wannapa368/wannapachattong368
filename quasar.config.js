import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {
    boot: ['axios'],
    css: ['app.scss'],
    extras: ['roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20'
      },

      vueRouterMode: 'hash',                 // ต้องใช้ hash mode สำหรับ GitHub Pages
      publicPath: '/wannapachattong368/'     // ต้องตรงกับชื่อ repo
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},
      plugins: ['Notify']
    },

    animations: [],

    // ปิด PWA ถ้าไม่ได้ใช้
    pwa: {
      workboxMode: 'GenerateSW'
    }
  }
})
