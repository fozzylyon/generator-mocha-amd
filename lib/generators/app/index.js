'use strict';

var path     = require( 'path' );
var util     = require( 'util' );
var yeoman   = require( 'yeoman-generator' );
var validDir = require( '../../../helpers/validateDirectory' );

var Generator = module.exports = function Generator ( args, options ) {
	yeoman.generators.Base.apply(this, arguments);

	this.sourceRoot( path.join( __dirname, '../../', 'templates' ) );

	this.skipInstall = options['skip-install'];

};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setupEnv = function setupEnv() {

	this.baseDir  = validDir.getValidatedFolder( '../../public/' ) ? '../../public/js' : '../js';
	this.fileList = [ 'spec/exampleTest' ];

	//this.template('server/app.js', 'server/app.js');
	this.template( 'index.html', 'test/public/index.html' );
	this.template( 'SpecRunner.js', 'test/public/SpecRunner.js' );
	this.template( 'testSuite.js', 'test/public/spec/testSuite.js' );

	this.copy( 'exampleTest.js', 'test/public/spec/exampleTest.js' );
};
