/**
 * We let REACT handle the 404 pages
 */
const version = require('../../package.json').version;

module.exports = function notFound() {

  var req = this.req;
  var res = this.res;
  var bundle;

  if (sails.config.environment !== 'development') {
    bundle = require('../../assets.json').main.js;
  }

  return res.view('index', {
    bundle: bundle,
    googleAnalytics: sails.config.googleAnalytics,
    version: version
  });

};
