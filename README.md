# Sails + React + Webpack boilerplate

A boilerplate for [Sails](http://sailsjs.org) apps with a [React](https://facebook.github.io/react/) frontend.

## Includes

* [Sails](http://sailsjs.org) v0.12.2
* [React](https://facebook.github.io/react/) v15.0.1
* [Babel with ES2015](https://babeljs.io)
* [React Router](https://github.com/reactjs/react-router)
* [sails-hook-autoreload](https://github.com/sgress454/sails-hook-autoreload)
* [Sass](https://github.com/jtangelder/sass-loader)
* [Autoprefixer](https://github.com/passy/autoprefixer-loader)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [Karma](https://github.com/karma-runner/karma)
* [Mocha](https://github.com/mochajs/mocha)
* [Mocha-Istanbul](https://github.com/arikon/mocha-istanbul)
* [Enzyme](https://github.com/airbnb/enzyme)
___

### Clone

```shell
git clone https://github.com/markmur/sails-react-webpack.git
cd sails-react-webpack
npm install
```
___

### Run (development)

There are multiple ways to run the project in development as sails and webpack-dev-server run independently. The easiest way is to use [Foreman](https://github.com/theforeman/foreman) (`npm install -g foreman`) and run:

```shell
nf start
```

This will start all processes listed in the `Procfile`. 

To view your app, go to `http://localhost:3000` in your browser.
___

### Run (Production)

Wepack builds the bundle files on `postinstall` and sails is lifted the same way it's always lifted in production:

```shell
sails lift --prod
```

You can also manually run webpack with `npm run dist`.

___

### Frontend tests

* [karma & Jasmine](http://www.thinksincode.com/2016/07/07/karma-jasmine-webpack.html).
* [Enzyme docs](http://airbnb.io/enzyme/docs/api/)

You need `karma-cli` installed globally

```bash
$ npm install -g karma-cli
```

To watch the files and test files
``` bash
$ karma start
```

To run once
``` bash
$ npm run test:ui
```

You can play around with the Karma configuration at `karma.conf.js`.

### Unit Tests

* [Mocha & Istanbul](https://coderwall.com/p/x6jfwg/running-istanbul-code-coverage-with-mocha)
* [Supertest](https://github.com/visionmedia/supertest)

Runs mocha_istanbul with Grunt.

To run
``` bash
$ npm test
```

behind the npm scenes it simply runs
``` bash
$ grunt test
```

### Pre-Push
Tests run with [pre-push](https://www.npmjs.com/package/pre-push) every time you try to push any code. 

Note that Sails cannot be lifted for the Unit Tests to run successfully.
