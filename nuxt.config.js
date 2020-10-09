export default {
  mode:'universal',

  server:{host:'localhost', port:'61379'},

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'myTestApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      // Not found hatası veriyor.
       { type: "text/javascript", src: 'assets/js/jquery-3.5.1.slim.min.js',body:true},
       { type: "text/javascript", src: 'assets/js/bootstrap.bundle.min.js',body:true },
       { type: "text/javascript", src: 'assets/js/components_modals.js',body:true}
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/bootstrap.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  //
  router:{
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  }
}
