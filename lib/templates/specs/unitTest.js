define( function ( require ) {
	'use strict';

	var <%= name %> = require( '<%=location%>/<%=name%>' );

	describe( '<%= name <%= _.classify(specType) %>', function () {

		it('should be an instance of <%= name %> <%= _.classify(specType) %>', function () {
			var <%= inflector.camelize( name, true ) %> = new <%= name %>();
			expect( <%= inflector.camelize( name, true ) %> ).to.be.an.instanceof( <%= name %> );
		} );

		it('should have more test written', function () {
			expect( false ).to.be.ok;
		} );
	} );

} );