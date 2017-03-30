module.exports = {
  index: function (req, res) {

    return res.view('cv');

    // var bundle;

    // if (sails.config.environment !== 'development') {
    //   bundle = require('../../assets.json').main.js;
    // }

    // return res.view('index', { bundle });
  },
};
