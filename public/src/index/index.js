
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

function* helloWorldGenerator(x) {
	console.log('begin!');
	console.log('Hello' + (yield 123));
  	yield console.log('hello');
  	yield x =  x + 2;
  	console.log('end!');
  	return console.log(x);
}

var hw = helloWorldGenerator(2);

//yield返回紧跟在语句后面的那个表达式的值
console.log(hw.next().value);	//执行到第一个yield这一行
hw.next('22');	//执行到第二个yield这一行
hw.next();	//执行到最后
// hw.next();


