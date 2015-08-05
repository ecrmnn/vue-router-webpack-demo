module.exports = {
  template: require('../templates/users.html'),

  route: {
    reload: true,
    activate: function (transition) {
      console.log(transition);
    },
    waitForActivate: true
  },

  data: function () {
    'use strict';

    return {
      currentUser: false,
      users: []
    }
  },

  ready: function () {
    'use strict';

    for (var iterator = 0; iterator <= 5; iterator++) {

      this.$http.get('https://randomuser.me/api/?avoidRedirect')
        .success(function (reponse) {
          'use strict';

          var user = reponse.results[0].user;

          this.users.push(user);
        })
    }
  },

  methods: {
    toggleUser: function (user) {
      'use strict';

      if (user.opened) {
        user.$delete('opened');
      } else {
        user.$set('opened', true);
      }
    }
  }
}