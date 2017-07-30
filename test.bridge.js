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





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("truly", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("`truly( hello )`", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("`truly( { } )`", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( [ ] )", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( function( ){ }", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( 123 )", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( true )", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( true )", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( Infinity )", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( 0 )", function () {
		it("should be true", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, true);

		});
	});

	describe("truly( undefined )", function () {
		it("should be false", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, false);

		});
	});

	describe("truly( )", function () {
		it("should be false", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, false);

		});
	});

	describe("truly( null )", function () {
		it("should be false", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, false);

		});
	});

	describe("truly( NaN )", function () {
		it("should be false", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, false);

		});
	});

	describe("truly( 0/0 )", function () {
		it("should be false", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, false);

		});
	});

	describe("truly( '' )", function () {
		it("should be false", function () {
			var result = browser.url(bridgeURL).execute(function () {return truly();});
			assert.equal(result.value, false);

		});
	});



});


//: @end-bridge


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJ0cnVseSIsImVxdWFsIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsT0FBVixFQUFtQixZQUFPOzs7QUFHekIsS0FBSUMsWUFBWUMsU0FBaEI7QUFDQSxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNILFNBQWQsRUFBeUIsYUFBekIsQ0FBakI7QUFDQSxLQUFJSSx3QkFBdUJGLFVBQTNCOztBQUVBSCxVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENNLEtBQUksZ0JBQUosRUFBc0IsWUFBTztBQUM1QixPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFKLFNBQWIsRUFBeUJLLE9BQXpCLENBQWtDLG9CQUFPQyxPQUFQLEVBQWxDLENBQWI7QUFDQWQsVUFBT2UsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixJQUE1Qjs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQWIsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ25DTSxLQUFJLGdCQUFKLEVBQXNCLFlBQU87QUFDM0IsT0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsT0FBUCxFQUFsQyxDQUFiO0FBQ0FkLFVBQU9lLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIs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S0FBNUI7O0FBRUEsR0FKRjtBQUtDLEVBTkQ7Ozs7QUFVQSxDQWpJRDs7O0FBb0lBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInRydWx5XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInRydWx5L3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy90cnVseS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuXHJcbmRlc2NyaWJlKCBcInRydWx5XCIsICggKSA9PiB7XHJcblxyXG5cdFxyXG5cdGxldCBkaXJlY3RvcnkgPSBfX2Rpcm5hbWU7XHJcblx0bGV0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoIGRpcmVjdG9yeSwgXCJicmlkZ2UuaHRtbFwiICk7XHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgdGVzdEJyaWRnZSB9YDtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHRydWx5KCBoZWxsbyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gdHJ1bHkoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgdHJ1bHkoIHsgfSApYFwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHRydWx5KCApICk7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwidHJ1bHkoIFsgXSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gdHJ1bHkoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggZnVuY3Rpb24oICl7IH1cIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiB0cnVseSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCAxMjMgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHRydWx5KCApICk7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwidHJ1bHkoIHRydWUgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHRydWx5KCApICk7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggdHJ1ZSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gdHJ1bHkoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUpO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCBJbmZpbml0eSApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gdHJ1bHkoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggMCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gdHJ1bHkoICkgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggdW5kZWZpbmVkIClcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgYmUgZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gdHJ1bHkoICkgKTtcdFx0XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHRydWx5KCApICk7XHRcdFxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggbnVsbCApXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGJlIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IHRydWx5KCApICk7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCBOYU4gKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiB0cnVseSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UpO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRydWx5KCAwLzAgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiB0cnVseSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJ0cnVseSggJycgKVwiLCAoICkgPT4ge1xyXG5cdGl0KCBcInNob3VsZCBiZSBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiB0cnVseSggKSApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblxyXG59ICk7XHJcblxyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuLy8gY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG4vLyBjb25zdCB0cnVseSA9IHJlcXVpcmUoIFwiLi90cnVseS5qc1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCBcImhlbGxvXCIgKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCB7IH0gKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCBbIF0gKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCBmdW5jdGlvbiggKXsgfSApLCB0cnVlLCBcInNob3VsZCBiZSB0cnVlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggdHJ1bHkoIDEyMyApLCB0cnVlLCBcInNob3VsZCBiZSB0cnVlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggdHJ1bHkoIHRydWUgKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCB0cnVlICksIHRydWUsIFwic2hvdWxkIGJlIHRydWVcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggSW5maW5pdHkgKSwgdHJ1ZSwgXCJzaG91bGQgYmUgdHJ1ZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCAwICksIHRydWUsIFwic2hvdWxkIGJlIHRydWVcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggdW5kZWZpbmVkICksIGZhbHNlLCBcInNob3VsZCBiZSBmYWxzZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCApLCBmYWxzZSwgXCJzaG91bGQgYmUgZmFsc2VcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggbnVsbCApLCBmYWxzZSwgXCJzaG91bGQgYmUgZmFsc2VcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCB0cnVseSggTmFOICksIGZhbHNlLCBcInNob3VsZCBiZSBmYWxzZVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIHRydWx5KCAwLzAgKSwgZmFsc2UsIFwic2hvdWxkIGJlIGZhbHNlXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggdHJ1bHkoIFwiXCIgKSwgZmFsc2UsIFwic2hvdWxkIGJlIGZhbHNlXCIgKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCBcIm9rXCIgKTtcclxuIl19
//# sourceMappingURL=test.bridge.js.map
