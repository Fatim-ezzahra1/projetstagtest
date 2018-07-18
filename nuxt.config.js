module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'projetstage',
    meta: [
     { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Projet_Stage' },
      { hid: 'keywords', name: 'keywords', content: 'Projet_Stage' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Projet_Stage' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Projet_Stage' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Projet_Stage' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Projet_Stage' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'image/...' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Projet_Stage' },
      { hid: 'og:description', property: 'Projet_Stage' },
      { hid: 'application-name', name: 'application-name', content: 'Application Name' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
/*
Bulma
*/
css: [
    // node.js module but we specify the pre-processor
    { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
