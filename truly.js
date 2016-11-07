"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "truly",
			"path": "truly/truly.js",
			"file": "truly.js",
			"module": "truly",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/truly.git",
			"test": "truly-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Check if the value is not undefined, null, empty string, NaN and Infinity.
	@end-module-documentation

	@include:
		{
			"protype": "protype"
		}
	@end-include
*/

if( typeof require == "function" ){
	var protype = require( "protype" );
}

if( typeof window != "undefined" && !( "protype" in window ) ){
	throw new Error( "protype not defined" );
}

this.truly = function truly( value ){
	/*;
		@meta-configuration:
			{
				"value:required": "*"
			}
		@end-meta-configuration
	*/

	let valueType = protype( value );
	if( valueType.NUMBER ){
		return ( !isNaN( value ) && isFinite( value ) );
	}

	return ( !valueType.UNDEFINED && value !== null && value !== "" );
};

if( typeof module != "undefined" && typeof module.exports != "undefined" ){
	module.exports = this.truly;
}
