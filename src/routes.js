module.exports = {

  '/': {
    component: require('./components/home')
  },

  '/about': {
    component: require('./components/about')
  },

  '/users': {
    component: require('./components/users')
  },

  '/artists': {
    component: require('./components/artists'),
    subRoutes: {
      ':artistName': {
        component: require('./components/artist')
      }
    }
  },

  '*': {
    component: require('./components/notFound')
  }

}