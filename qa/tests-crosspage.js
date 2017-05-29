var Browser = require('zombie'),
    assert = require('chai').assert;

var browser;


suite('Cross-page Testing', function(){
	setup(function(){
		browser = new Browser();
	});
	
	// test for case when visiting from hood river tour page
	test('Visiting a group rate quote from the hood river tour page' + ' should populate the referrer field');
	
	// test for case when visiting from oreagon coast tour page
	test();

	// test for case when visiting directly 
	test();
});
