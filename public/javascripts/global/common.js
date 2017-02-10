window.BZXS = {
	/**
	 *  倒记时
	 *  interval_second 为秒
	 */
	countDown: function(interval_second) {
		var interval = parseInt(interval_second)
		var days = Math.floor(interval / 60 / 60 / 24)
		var hours = Math.floor(interval / 60 / 60 - days * 24)
		var minutes = Math.floor(interval / 60 - hours * 60 - days * 24 *
			60)
		var second = Math.round(interval - minutes * 60 - hours * 60 *
			60 - days * 24 * 60 * 60)
		if (days < 10) {
			days = '0' + days
		}
		if (hours < 10) {
			hours = '0' + hours
		}
		if (minutes < 10) {
			minutes = '0' + minutes
		}
		if (second < 10) {
			second = '0' + second
		}
		return '<span>' + days + '</span>d:<span>' + hours +
			'</span>h:<span>' + minutes + '</span>m:<span>' + second +
			'</span>s'
	},

	getQueryString: function getQueryString(name) {
		//get url query params
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	},

	setCookie: function(name, val, expires, domain) {
		/*setCookie start*/
		var __CurrentMainDomain__ = (function () {
			var hostnameArray = location.hostname.split('.');
			return "." + hostnameArray.slice(-2).join('.');
		})();

		//domain = domain || __CurrentMainDomain__;
		var text = String(encodeURIComponent(val));
		var  date = new Date();
		date.setTime(date.getTime() + Number(expires)*1000);
		text += '; expires=' + date.toUTCString();
		// domain
			text += '; path=/';
		if (typeof (domain) != "undefined" && domain != "") {
			text += '; domain='+__CurrentMainDomain__;
		}

		document.cookie = name + '=' + text;
	},

	getCookie: function(objName) {
		var arrStr = document.cookie.split("; ");
	    for (var i = 0; i < arrStr.length; i++) {
	        var temp = arrStr[i].split("=");
	        if (temp[0] == objName) {
	            return decodeURIComponent(temp[1])
	        }
	    }
	},

	isCookie: function(objName, objValue, expires) {
		var cookie = this.getCookie(objName);
	    if (typeof (cookie) != "undefined" && cookie) {
	        return cookie
	    } else {
	        setCookie(objName, objValue, expires);
	        return this.getCookie(objName)
	    }
	},

	delCookie: function(name) {
	    var cval = this.getCookie(name);
	    if (cval != null) {
			this.setCookie(name, '', -1)
	    }
	},

 	//解析rul 
	parseURL: function(url) {
		var a = document.createElement('a');
		url = url || window.location.href;
		a.href = url;
		return {
			source: url,
			protocol: a.protocol.replace(':',''),
			host: a.hostname,
			port: a.port,
			query: a.search,
			params: (function(){
			    var ret = {},
			        seg = a.search.replace(/^\?/,'').split('&'),
			        len = seg.length, i = 0, s;  
			    for (;i<len;i++) {
			        if (!seg[i]) { continue; }
			        s = seg[i].split('=');  
			        ret[s[0]] = s[1];  
			    }
			    return ret;  
			})(),
			file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
			hash: a.hash.replace('#',''),
			path: a.pathname.replace(/^([^\/])/,'/$1'),
			relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
			segments: a.pathname.replace(/^\//,'').split('/')
		};  
	},

	// isMobile or not
	mobilecheck: function() {
		var check = false;
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			check = true;
		}
		return check;
	},

	dateFormat: function(timestamp, sepChart) {
		timestamp = parseInt(timestamp);
		var d = new Date(timestamp);
		var m = ('0' + (d.getMonth() + 1)).substr(-2, 2);
		var day = ('0' + d.getDate()).substr(-2, 2);
		var h = ('0' + d.getHours()).substr(-2, 2);
		var min = ('0' + d.getMinutes()).substr(-2, 2);
		var sec = ('0' + d.getSeconds()).substr(-2, 2);

		return d.getFullYear() + sepChart + m + sepChart + day + ' ' + h + ':' + min + ':' + sec;
	}
};