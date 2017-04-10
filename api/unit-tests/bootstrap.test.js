var Sails = require('sails');
var colors = require('colors');

/**
* Tests bootstrap
* @type {Object}
*/
var bootstrap = {

  /**
  * sails application
  * @type {Sails}
  */
  app: null,

  /**
  * whether the application has been lifted or not
  * @type {Boolean}
  */
  lifted: false,

  /**
  * Whether the lift process is running or not
  * @type {Boolean}
  */
  lifting: false,

  /**
  * initialize the thing and returns the Sails instance
  * @param  {function} ready
  */
  init: function(ready) {

    var self = this;

    if (this.lifted) {

      // the app has already been lifted
      ready(this.app);
      return;

    } else if (this.lifting) {

      // the sails application is lifting
      // so we try to get the APP in 1 second
      setTimeout(self.init, 5000, ready);
      return;

    }

    this.lifting = true;

    Sails.lift({
      log: { level: 'silent' },
      environment: 'local'
    }, function(err, sails) {

      if (err) {
        throw new Error(err);
      }

      self.lifted = true;
      console.info('Sails has been lifted'.green);
      self.app = sails;
      self.lifting = false;
      ready(sails);
    });

  },

  /**
  * destroy the current sails instance
  * @param  {Function} cb [description]
  */
  destroy: function(cb) {
    this.app.lower(cb);
  },

  /**
  * this method tries to request a page without authentication
  * and returns whether the user got redirected to the login page or not
  *
  * @param  {[type]}   url     [description]
  * @param  {[type]}   request [description]
  * @param  {Function} cb    callback function, return whether the user was redirected
  */
  checkLoginRedirect: function(url, request, cb) {
    request
    .get(url)
    .expect(200)
    .end(function() {
      var textResponse = arguments[1].text;

      // console.log('redirect to login test');
      // console.log(textResponse);
      cb(/Moved Temporarily. Redirecting to \/login/ig.test(textResponse));
    });
  }

};

module.exports = bootstrap;
