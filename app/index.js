'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    /*var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the epic ' + chalk.red('Sulky') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));*/
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_bowerrc'),
        this.destinationPath('.bowerrc')
      );

      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );


      this.fs.copy(
        this.templatePath('app.js'),
        this.destinationPath('app.js')
      );

      this.fs.copy(
        this.templatePath('fis-conf.js'),
        this.destinationPath('fis-conf.js')
      );

      this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
      );

      this.fs.copy(
        this.templatePath('require-config.js'),
        this.destinationPath('require-config.js')
      );

      this.fs.copy(
        this.templatePath('views/base/index.js'),
        this.destinationPath('views/base/index.js')
      );


      this.fs.copy(
        this.templatePath('views/home/index.js'),
        this.destinationPath('views/home/index.js')
      );

      this.fs.copy(
        this.templatePath('components/example/index.js'),
        this.destinationPath('components/example/index.js')
      );

      this.fs.copy(
        this.templatePath('components/example/index.html'),
        this.destinationPath('components/example/index.html')
      );

      this.fs.copy(
        this.templatePath('components/example/index.scss'),
        this.destinationPath('components/example/index.scss')
      );


      this.fs.copy(
        this.templatePath('assets/css/app.scss'),
        this.destinationPath('assets/css/app.scss')
      );


      this.fs.copy(
        this.templatePath('assets/img'),
        this.destinationPath('assets/img')
      );

      this.fs.copy(
        this.templatePath('assets/fonts'),
        this.destinationPath('assets/fonts')
      );

    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    var that = this;
    this.installDependencies({
      npm: false,
      callback: function () {
        that.spawnCommand('sulky', ['release']);

        that.spawnCommand('sulky', ['server', 'start']);

        that.spawnCommand('sulky', ['release', '-wL']);

      }
    });
  }
});
