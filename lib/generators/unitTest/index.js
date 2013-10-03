'use strict';

var generator = require( 'yeoman-generator' );
var util      = require( 'util' );
var path      = require( 'path' );
var findit    = require( 'findit' );
var _         = require( 'underscore' );
var inflector = require( 'inflector' );

var Generator = module.exports = function Generator () {
	generator.NamedBase.apply( this, arguments );

	this.sourceRoot( path.join( __dirname, '../../', 'templates' ) );

	this.argument( 'specType', { 'type' : String, 'required' : false } );
	this.argument( 'location', { 'type' : String, 'required' : false } );

	this.inflector = inflector;
};

util.inherits( Generator, generator.NamedBase );

Generator.prototype.createTestFile = function createTestFile () {
	var ext = '.js';
	this.template( 'specs/unitTest' + ext, path.join( 'test/public/spec/', this.location, this.name + 'Test' + ext ) );
};

Generator.prototype.rebuildTestSuiteList = function () {
	var done = this.async();

	this.fileList = [];

	// find all in spec dir
	var finder = findit.find( 'test/public/spec' );

	// on file save to fileList array
	finder.on( 'file', _.bind( function ( file ) {
		this.fileList.push( file );
	}, this ) );

	// when done save to testSuite.js
	finder.on( 'end', _.bind( function () {

		// get file list without /test/public/ dir prefix
		this.fileList = _.map( this.fileList, _.bind( function ( file ) {
			return (/test\/public\/(.*)/).exec( file )[ 1 ];
		}, this ) );

		// remove testSuite.js from list
		this.fileList = _.without( this.fileList, 'spec/testSuite.js' );

		// rewrite the testSuite file
		this.template( 'testSuite.js', 'test/public/spec/testSuite.js' );

		done();
	}, this ) );
};
