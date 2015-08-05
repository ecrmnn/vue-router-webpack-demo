var Vue = require('vue');

var VueRouter = require('./vendor/vue-router.0.1.0');
Vue.use(VueRouter);

Vue.use(require('vue-resource'));

// Initializing the router
var router = new VueRouter({
  history: true
});

router.map(require('./routes'));

router.redirect({
  '/users/all': '/users'
});

var App = Vue.extend();

router.start(App, '#app');