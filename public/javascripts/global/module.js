var BZ = BZ || {};

(function() {
	var _Module = {};

	//模块初始的参数/方法
	var _moduleProto = {
		__initialized: false,
		__events: []
	};

	_Module._modules = {};
	_Module._tempName = '';

	//定义一个_Module
	_Module.define = function(name, val) {
		if (typeof val != 'object') {
		  return ;
		}

		var _val = _Module._modules[name];

		if(!_val) {
		  var _mp = $.extend({}, _moduleProto);
		  val = $.extend(_mp, val);

		  _Module._modules[name] = val;
		  _Module._tempName = name;
		}
		return this;
	};

	//引用_Module
	_Module.require = function(name, opts) {
		var val = _Module._modules[name];

		if(!val) {
		  return null;
		}

		if(val.__initialized == false) {
		  _Module.use(name, opts);
		}

		return val;
	};

	//触发_Module
	_Module.use = function(name, opts) {
		if(!name) {
		  name = _Module._tempName;
		}

		if(!name) {
		  return ;
		}

		var val = _Module._modules[name];

		if(!val) {
		  return ;
		}

		if(!val.initialize || typeof val.initialize != 'function') {
		  return ;
		}

		if(val.__initialized == true) {
		  return ;
		}

		opts = opts || {};
		val.initialize(opts);

		//标记已经初始化
		val.__initialized = true;
	};

	BZ.define = _Module.define;
	BZ.use = _Module.use;
	BZ.require = _Module.require;

})();