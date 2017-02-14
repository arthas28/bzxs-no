
require('./users.less');

//import Vue from "vue"; //会去node_modules\vue\package.json
import Test from '../../components/test.vue';
import Home from '../../components/home.vue';
import Assets from '../../components/assets.vue';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);

var routes = [
	{ path: '/home', component: Home, name: 'home' },
	{ path: '/test', component: Test, name: 'test' }
];

var router = new VueRouter({
	routes: routes
	// hashbang: false,
	// mode: 'history'
});

var $usersVm = new Vue({
    el: '#usersView',
    data: { myTime: '2017-01-06' },
    router: router,
    components: {
    	Assets
    }
});