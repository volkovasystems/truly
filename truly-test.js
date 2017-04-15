
const assert = require( "assert" );
const truly = require( "./truly.js" );

assert.equal( truly( "hello" ), true, "should be true" );
assert.equal( truly( { } ), true, "should be true" );
assert.equal( truly( function( ){ } ), true, "should be true" );
assert.equal( truly( 123 ), true, "should be true" );
assert.equal( truly( true ), true, "should be true" );
assert.equal( truly( true ), true, "should be true" );
assert.equal( truly( Infinity ), true, "should be true" );
assert.equal( truly( 0 ), true, "should be true" );
assert.equal( truly( undefined ), false, "should be false" );
assert.equal( truly( ), false, "should be false" );
assert.equal( truly( null ), false, "should be false" );
assert.equal( truly( NaN ), false, "should be false" );
assert.equal( truly( 0/0 ), false, "should be false" );
assert.equal( truly( "" ), false, "should be false" );
console.log( "ok" );
