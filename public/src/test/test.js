
require('./test.less');

$('h2').on('touchstart', function(e) {
	var $el = $(e.target).closest('h2').length;
	console.log($el);
	
	$(document).bind('touchmove', function(e) {
		e.preventDefault();
	});
});

$('h3').on('click', function(e) {
	$(document).unbind('touchmove');
});

console.log('ok');