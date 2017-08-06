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

var assert=require("should");





//: @bridge:
var path=require("path");
//: @end-bridge






//: @bridge:

describe("truly",function(){

var bridgeURL="file://"+path.resolve(__dirname,"bridge.html");

describe("`truly( 'hello' )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly("hello");
}).

value;

assert.equal(result,true);

});
});


describe("`truly( { } )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly({});
}).

value;

assert.equal(result,true);

});
});


describe("`truly( [ ] )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly([]);
}).

value;

assert.equal(result,true);

});
});


describe("`truly( function( ){ } )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(function(){});
}).

value;

assert.equal(result,true);

});
});


describe("`truly( 123 )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(123);
}).

value;

assert.equal(result,true);

});
});


describe("`truly( true )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(true);
}).

value;

assert.equal(result,true);

});
});


describe("`truly( Infinity )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(Infinity);
}).

value;

assert.equal(result,true);

});
});


describe("`truly( 0 )`",function(){
it("should be equal to true",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(0);
}).

value;

assert.equal(result,true);

});
});


describe("`truly( undefined )`",function(){
it("should be equal to false",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(undefined);
}).

value;

assert.equal(result,false);

});
});


describe("`truly( )`",function(){
it("should be equal to false",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly();
}).

value;

assert.equal(result,false);

});
});


describe("`truly( null )`",function(){
it("should be equal to false",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(null);
}).

value;

assert.equal(result,false);

});
});


describe("`truly( NaN )`",function(){
it("should be equal to false",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(NaN);
}).

value;

assert.equal(result,false);

});
});


describe("`truly( 0/0 )`",function(){
it("should be equal to false",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly(0/0);
}).

value;

assert.equal(result,false);

});
});


describe("`truly( '' )`",function(){
it("should be equal to false",function(){

var result=browser.url(bridgeURL).execute(

function(){
return truly("");
}).

value;

assert.equal(result,false);

});
});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsInRydWx5IiwidmFsdWUiLCJlcXVhbCIsIkluZmluaXR5IiwidW5kZWZpbmVkIiwiTmFOIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxHQUFNQSxRQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxHQUFNQyxNQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsT0FBVixDQUFtQixVQUFPOztBQUV6QixHQUFJQyxxQkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxDQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsU0FBVSxvQkFBVixDQUFnQyxVQUFPO0FBQ3RDSSxHQUFJLHlCQUFKLENBQStCLFVBQU87O0FBRXJDLEdBQUlDLFFBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosVUFBVztBQUNWLE1BQU9DLE9BQU8sT0FBUCxDQUFQO0FBQ0EsQ0FKVzs7QUFNWEMsS0FORjs7QUFRQWIsT0FBT2MsS0FBUCxDQUFjTixNQUFkLENBQXNCLElBQXRCOztBQUVBLENBWkQ7QUFhQSxDQWREOzs7QUFpQkFMLFNBQVUsZ0JBQVYsQ0FBNEIsVUFBTztBQUNsQ0ksR0FBSSx5QkFBSixDQUErQixVQUFPOztBQUVyQyxHQUFJQyxRQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLFVBQVc7QUFDVixNQUFPQyxPQUFPLEVBQVAsQ0FBUDtBQUNBLENBSlc7O0FBTVhDLEtBTkY7O0FBUUFiLE9BQU9jLEtBQVAsQ0FB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QUFJQyxRQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLFVBQVc7QUFDVixNQUFPQyxPQUFPLEVBQVAsQ0FBUDtBQUNBLENBSlc7O0FBTVhDLEtBTkY7O0FBUUFiLE9BQU9jLEtBQVAsQ0FBY04sTUFBZCxDQUFzQixLQUF0Qjs7QUFFQSxDQVpEO0FBYUEsQ0FkRDs7QUFnQkEsQ0FqUEQ7O0FBbVBBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwidHJ1bHkvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RydWx5LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJ0cnVseVwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgdHJ1bHkoICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWx5KCBcImhlbGxvXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgdHJ1bHkoIHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1bHkoIHsgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImB0cnVseSggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0cnVseSggWyBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHRydWx5KCBmdW5jdGlvbiggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1bHkoIGZ1bmN0aW9uKCApeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHRydWx5KCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWx5KCAxMjMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgdHJ1bHkoIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWx5KCB0cnVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHRydWx5KCBJbmZpbml0eSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1bHkoIEluZmluaXR5ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHRydWx5KCAwIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0cnVseSggMCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImB0cnVseSggdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1bHkoIHVuZGVmaW5lZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgdHJ1bHkoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1bHkoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImB0cnVseSggbnVsbCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWx5KCBudWxsICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImB0cnVseSggTmFOIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1bHkoIE5hTiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgdHJ1bHkoIDAvMCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWx5KCAwLzAgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHRydWx5KCAnJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWx5KCBcIlwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
