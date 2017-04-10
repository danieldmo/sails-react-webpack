var bootstrap = require('../bootstrap.test');
var chai = require('chai');
var expect = require('chai').expect;
var colors = require('colors');
var queryString = require('querystring');
var request;

describe('AppController', function() {

  this.timeout(10000);

  var sailsApp;

  /**
   * Before we start this test
   * @param  {Function} done callback funtion
   */
  before((done) => {

     bootstrap.init((app) => {
       sailsApp = app;
       request = require('supertest')(app.hooks.http.app);
       done();
    });
  });

  it('should render the Main app', (done) => {
    request.get('/').expect(200).end(done);
  });

});
