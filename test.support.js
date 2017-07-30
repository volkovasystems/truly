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

var assert = require("assert");



//: @client:
var truly = require("./truly.support.js");
//: @end-client






//: @client: 
describe("truly", function () {

	describe("`truly( hello )`", function () {
		it("should be true", function () {

			assert.equal(truly("hello"), true);

		});
	});

	describe("`truly( { } )`", function () {
		it("should be true", function () {

			assert.equal(truly({}), true);

		});
	});

	describe("truly( [ ] )", function () {
		it("should be true", function () {

			assert.equal(truly([]), true);

		});
	});

	describe("truly( function( ){ }", function () {
		it("should be true", function () {

			assert.equal(truly(function () {}), true);

		});
	});

	describe("truly( 123 )", function () {
		it("should be true", function () {

			assert.equal(truly(123), true);

		});
	});

	describe("truly( true )", function () {
		it("should be true", function () {

			assert.equal(truly(true), true);

		});
	});

	describe("truly( true )", function () {
		it("should be true", function () {

			assert.equal(truly(true), true);

		});
	});

	describe("truly( Infinity )", function () {
		it("should be true", function () {

			assert.equal(truly(Infinity), true);

		});
	});

	describe("truly( 0 )", function () {
		it("should be true", function () {

			assert.equal(truly(0), true);

		});
	});

	describe("truly( undefined )", function () {
		it("should be false", function () {

			assert.equal(truly(undefined), false);

		});
	});

	describe("truly( )", function () {
		it("should be false", function () {

			assert.equal(truly(), false);

		});
	});

	describe("truly( null )", function () {
		it("should be false", function () {

			assert.equal(truly(null), false);

		});
	});

	describe("truly( NaN )", function () {
		it("should be false", function () {

			assert.equal(truly(NaN), false);

		});
	});

	describe("truly( 0/0 )", function () {
		it("should be false", function () {

			assert.equal(truly(0 / 0), false);

		});
	});

	describe("truly( '' )", function () {
		it("should be false", function () {

			assert.equal(truly(""), false);

		});
	});



});
//: @end-client





// const assert = require( "assert" );
// const truly = require( "./truly.js" );

// assert.equal( truly( "hello" ), true, "should be true" );

// assert.equal( truly( { } ), true, "should be true" );

// assert.equal( truly( [ ] ), true, "should be true" );

// assert.equal( truly( function( ){ } ), true, "should be true" );

// assert.equal( truly( 123 ), true, "should be true" );

// assert.equal( truly( true ), true, "should be true" );

// assert.equal( truly( true ), true, "should be true" );

// assert.equal( truly( Infinity ), true, "should be true" );

// assert.equal( truly( 0 ), true, "should be true" );

// assert.equal( truly( undefined ), false, "should be false" );

// assert.equal( truly( ), false, "should be false" );

// assert.equal( truly( null ), false, "should be false" );

// assert.equal( truly( NaN ), false, "should be false" );

// assert.equal( truly( 0/0 ), false, "should be false" );

// assert.equal( truly( "" ), false, "should be false" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidHJ1bHkiLCJkZXNjcmliZSIsIml0IiwiZXF1YWwiLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsIk5hTiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFFBQVFELFFBQVMsb0JBQVQsQ0FBZDtBQUNBOzs7Ozs7O0FBT0E7QUFDQUUsU0FBVSxPQUFWLEVBQW1CLFlBQU87O0FBRXpCQSxVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENDLEtBQUksZ0JBQUosRUFBc0IsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxPQUFQLENBQWQsRUFBZ0MsSUFBaEM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsZ0JBQVYsRUFBNEIsWUFBTztBQUNuQ0MsS0FBSSxnQkFBSixFQUFzQixZQUFPOztBQUUzQkosVUFBT0ssS0FBUCxDQUFjSCxNQUFPLEVBQVAsQ0FBZCxFQUE0QixJQUE1Qjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxjQUFWLEVBQTBCLFlBQU87QUFDakNDLEtBQUksZ0JBQUosRUFBc0IsWUFBTzs7QUFFM0JKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxFQUFQLENBQWQsRUFBNEIsSUFBNUI7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFDLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUMxQ0MsS0FBSSxnQkFBSixFQUFzQixZQUFPOztBQUUzQkosVUFBT0ssS0FBUCxDQUFjSCxNQUFPLFlBQVcsQ0FBRyxDQUFyQixDQUFkLEVBQXVDLElBQXZDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGNBQVYsRUFBMEIsWUFBTztBQUNqQ0MsS0FBSSxnQkFBSixFQUFzQixZQUFPOztBQUUzQkosVUFBT0ssS0FBUCxDQUFjSCxNQUFPLEdBQVAsQ0FBZCxFQUE0QixJQUE1Qjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDbENDLEtBQUksZ0JBQUosRUFBc0IsWUFBTzs7QUFFM0JKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxJQUFQLENBQWQsRUFBNkIsSUFBN0I7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFDLFVBQVUsZUFBVixFQUEyQixZQUFPO0FBQ2xDQyxLQUFJLGdCQUFKLEVBQXNCLFlBQU87O0FBRTNCSixVQUFPSyxLQUFQLENBQWNILE1BQU8sSUFBUCxDQUFkLEVBQTZCLElBQTdCOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLG1CQUFWLEVBQStCLFlBQU87QUFDdENDLEtBQUksZ0JBQUosRUFBc0IsWUFBTzs7QUFFM0JKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBT0ksUUFBUCxDQUFkLEVBQWlDLElBQWpDOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBSCxVQUFVLFlBQVYsRUFBd0IsWUFBTztBQUMvQkMsS0FBSSxnQkFBSixFQUFzQixZQUFPOztBQUUzQkosVUFBT0ssS0FBUCxDQUFjSCxNQUFPLENBQVAsQ0FBZCxFQUEwQixJQUExQjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxvQkFBVixFQUFnQyxZQUFPO0FBQ3ZDQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTVCSixVQUFPSyxLQUFQLENBQWNILE1BQU9LLFNBQVAsQ0FBZCxFQUFrQyxLQUFsQzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUosVUFBVSxVQUFWLEVBQXNCLFlBQU87QUFDN0JDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsT0FBZCxFQUF3QixLQUF4Qjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxlQUFWLEVBQTJCLFlBQU87QUFDbENDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxJQUFQLENBQWQsRUFBNkIsS0FBN0I7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7O0FBUUFDLFVBQVUsY0FBVixFQUEwQixZQUFPO0FBQ2pDQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87O0FBRTVCSixVQUFPSyxLQUFQLENBQWNILE1BQU9NLEdBQVAsQ0FBZCxFQUE0QixLQUE1Qjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUwsVUFBVSxjQUFWLEVBQTBCLFlBQU87QUFDakNDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxJQUFFLENBQVQsQ0FBZCxFQUE0QixLQUE1Qjs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxhQUFWLEVBQXlCLFlBQU87QUFDaENDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFNUJKLFVBQU9LLEtBQVAsQ0FBY0gsTUFBTyxFQUFQLENBQWQsRUFBMkIsS0FBM0I7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7Ozs7QUFVQSxDQTVIRDtBQTZIQTs7Ozs7O0FBTUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwidHJ1bHlcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwidHJ1bHkvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RydWx5LmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwiLi90cnVseS5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OiBcclxuZGVzY3JpYmUoIFwidHJ1bHlcIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggXCJgdHJ1bHkoIGhlbGxvIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cnVseSggXCJoZWxsb1wiICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgdHJ1bHkoIHsgfSApYFwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCB7IH0gKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCBbIF0gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCBbIF0gKSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCBmdW5jdGlvbiggKXsgfVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCBmdW5jdGlvbiggKXsgfSApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwidHJ1bHkoIDEyMyApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIHRydWVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1bHkoIDEyMyApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwidHJ1bHkoIHRydWUgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCB0cnVlICksIHRydWUpO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCB0cnVlIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cnVseSggdHJ1ZSApLCB0cnVlKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggSW5maW5pdHkgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCBJbmZpbml0eSApLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwidHJ1bHkoIDAgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCAwICksIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggdW5kZWZpbmVkIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1bHkoIHVuZGVmaW5lZCApLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGZhbHNlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCApLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCBudWxsIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1bHkoIG51bGwgKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggTmFOIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZmFsc2VcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHJ1bHkoIE5hTiApLCBmYWxzZSk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwidHJ1bHkoIDAvMCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGZhbHNlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRydWx5KCAwLzAgKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggJycgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBmYWxzZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cnVseSggXCJcIiApLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHJcbn0gKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG4vLyBjb25zdCB0cnVseSA9IHJlcXVpcmUoIFwiLi90cnVseS5qc1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCBcImhlbGxvXCIgKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCB7IH0gKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCBbIF0gKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCBmdW5jdGlvbiggKXsgfSApLCB0cnVlLCBcInNob3VsZCBiZSB0cnVlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggdHJ1bHkoIDEyMyApLCB0cnVlLCBcInNob3VsZCBiZSB0cnVlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggdHJ1bHkoIHRydWUgKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCB0cnVlICksIHRydWUsIFwic2hvdWxkIGJlIHRydWVcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggSW5maW5pdHkgKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCAwICksIHRydWUsIFwic2hvdWxkIGJlIHRydWVcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggdW5kZWZpbmVkICksIGZhbHNlLCBcInNob3VsZCBiZSBmYWxzZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCApLCBmYWxzZSwgXCJzaG91bGQgYmUgZmFsc2VcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggbnVsbCApLCBmYWxzZSwgXCJzaG91bGQgYmUgZmFsc2VcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggTmFOICksIGZhbHNlLCBcInNob3VsZCBiZSBmYWxzZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCAwLzAgKSwgZmFsc2UsIFwic2hvdWxkIGJlIGZhbHNlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggdHJ1bHkoIFwiXCIgKSwgZmFsc2UsIFwic2hvdWxkIGJlIGZhbHNlXCIgKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCBcIm9rXCIgKTtcclxuIl19
//# sourceMappingURL=test.support.js.map
