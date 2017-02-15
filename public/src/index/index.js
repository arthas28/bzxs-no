
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
  	yield x = x + 2;
  	console.log('end!');
  	return console.log(x);
}

var hw = helloWorldGenerator(2);

//yield返回紧跟在语句后面的那个表达式的值
console.log(hw.next().value);	//执行到第一个yield这一行
hw.next('22');	//执行到第二个yield这一行
hw.next();	//执行到最后
// hw.next();

function closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    while (el) {
        if (matchesSelector.call(el, selector)) {
            break;
        }
        el = el.parentElement;
    }
    return el;
}

var $indexVm = new Vue({
    el: '#indexView',
    data: { 
    	open: {
    		state: 0,
    		data: ['Open touch?', 'Close touch?']
    	}
    },
    methods: {
    	openTouch: function() {
    		if(this.open.state) {
    			this.open.state = 0;
    		} else {
    			this.open.state = 1;
    		}
    	}
    }
});

document.body.addEventListener('touchmove', function(e) {
	console.log('body');
	
	var $el = closest(e.target, '.keyTouch');
	console.log($el);

	if($el) {
		return;
	} else {
		$indexVm.open.state = 1;
	}
});


