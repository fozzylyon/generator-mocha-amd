define( function ( require ) {
	'use strict';

	var <%= name %> = require( '<%=location%>/<%=name%>' );

	describe( '<%= name %> <%= _.classify(specType) %>', function () {

		it('should be an instance of <%= name %> <%= _.classify(specType) %>', function () {
			var <%= inflector.lowerCaseFirstChar( name ) %> = new <%= name %>();
			<%= inflector.lowerCaseFirstChar( name ) %>.should.be.an.instanceof( <%= name %> );
		} );

		it('should have more test written', function () {
			( false ).should.be.ok;
		} );
	} );

} );