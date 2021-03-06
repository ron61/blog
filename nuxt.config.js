export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon', 
        href: '/favicon.ico' 
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // ビルド先のディレクトリをdocsにする
  buildDir: 'docs/',

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // nuxt generateするときの設定
  generate: {

    // generate先のディレクトリをdocsにする
    dir: "docs",

    // フォールバックHTMLを404.htmlにする
    fallback: true
  },

  // google analytics
  googleAnalytics: {
    id: 'G-7XGX7NF2WQ'
  }
}
