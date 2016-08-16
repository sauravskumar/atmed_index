require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Atmed',
    description: 'Technology company.',
    head: {
      titleTemplate: '%s',
      meta: [
        {name: 'description', content: 'Atmed is a technology company which aims to automate everything possible.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Atmed'},
        {property: 'og:image', content: 'https://res.cloudinary.com/atmed/image/upload/c_scale,h_200,q_100/v1469877963/atmed_umufoy.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Atmed'},
        {property: 'og:description', content: 'Technology company.'},
        // {property: 'og:card', content: 'summary'},
        // {property: 'og:site', content: '@erikras'},
        {property: 'og:creator', content: '@AtmedInc'},
        {property: 'og:url', content: 'https://atmed.co'},
        {property: 'og:type', content: 'website'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
