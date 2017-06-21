const webpackConfig = require('./webpack.config');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    webpack: {
      default: webpackConfig,
      watch: Object.assign(
        {},
        webpackConfig,
        {watch: true}
      )
    },

    clean: ['dist']
  });

  grunt.registerTask('default', ['webpack:default']);
};
