module.exports = {
  template: require('../templates/about.html'),

  methods: {
    loadJquery: function () {
      'use strict';

      require(['jquery'], function (script) {
        'use strict';

        console.log(script, 'jQuery loaded successfully');
      });
    }
  }
}