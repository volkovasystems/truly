"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "truly",
			"path": "truly/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/truly.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"truly": "truly"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const truly = require( "./truly.js" );
//: @end-server

//: @client:
const truly = require( "./truly.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:
describe( "truly", ( ) => {

	describe( "`truly( 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( "hello" ), true );

		} );
	} );


	describe( "`truly( { } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( { } ), true );

		} );
	} );


	describe( "`truly( [ ] )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( [ ] ), true );

		} );
	} );


	describe( "`truly( function( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( function( ){ } ), true );

		} );
	} );


	describe( "`truly( 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( 123 ), true );

		} );
	} );


	describe( "`truly( true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( true ), true);

		} );
	} );


	describe( "`truly( Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( Infinity ), true );

		} );
	} );


	describe( "`truly( 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( 0 ), true );

		} );
	} );


	describe( "`truly( undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( undefined ), false );

		} );
	} );


	describe( "`truly( )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( ), false );

		} );
	} );


	describe( "`truly( null )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( null ), false );

		} );
	} );


	describe( "`truly( NaN )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( NaN ), false);

		} );
	} );


	describe( "`truly( 0/0 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( 0/0 ), false );

		} );
	} );


	describe( "`truly( '' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( "" ), false );

		} );
	} );
} );

//: @end-server

//: @client:
describe( "truly", ( ) => {

	describe( "`truly( 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( "hello" ), true );

		} );
	} );


	describe( "`truly( { } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( { } ), true );

		} );
	} );


	describe( "`truly( [ ] )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( [ ] ), true );

		} );
	} );


	describe( "`truly( function( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( function( ){ } ), true );

		} );
	} );


	describe( "`truly( 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( 123 ), true );

		} );
	} );


	describe( "`truly( true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( true ), true);

		} );
	} );


	describe( "`truly( Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( Infinity ), true );

		} );
	} );


	describe( "`truly( 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			assert.equal( truly( 0 ), true );

		} );
	} );


	describe( "`truly( undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( undefined ), false );

		} );
	} );


	describe( "`truly( )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( ), false );

		} );
	} );


	describe( "`truly( null )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( null ), false );

		} );
	} );


	describe( "`truly( NaN )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( NaN ), false);

		} );
	} );


	describe( "`truly( 0/0 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( 0/0 ), false );

		} );
	} );


	describe( "`truly( '' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( truly( "" ), false );

		} );
	} );
} );

//: @end-client


//: @bridge:

describe( "truly", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`truly( 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( "hello" );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( { } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( { } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( [ ] )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( [ ] );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( function( ){ } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( function( ){ } );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( 123 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( 123 );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( true );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( Infinity )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( Infinity );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( 0 )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( 0 );
				}

			).value;

			assert.equal( result, true );

		} );
	} );


	describe( "`truly( undefined )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( undefined );
				}

			).value;

			assert.equal( result, false );

		} );
	} );


	describe( "`truly( )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( );
				}

			).value;

			assert.equal( result, false );

		} );
	} );


	describe( "`truly( null )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( null );
				}

			).value;

			assert.equal( result, false );

		} );
	} );


	describe( "`truly( NaN )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( NaN );
				}

			).value;

			assert.equal( result, false );

		} );
	} );


	describe( "`truly( 0/0 )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( 0/0 );
				}

			).value;

			assert.equal( result, false );

		} );
	} );


	describe( "`truly( '' )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return truly( "" );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

} );

//: @end-bridge
