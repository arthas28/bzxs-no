
require('./index.less');

console.log('init!');

document.querySelector('.touch_div').onclick = function() {
	console.log('click!');
};

document.querySelector('.touch_div').addEventListener('touchstart', function(e) {
	// e.preventDefault();
	console.log('start!');
});

document.querySelector('.touch_div').addEventListener('touchmove', function(e) {
	console.log('move!');
});

document.querySelector('.touch_div').addEventListener('touchend', function(e) {
	console.log('end!');
});