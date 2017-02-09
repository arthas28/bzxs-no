
//import Vue from "vue"; //会去node_modules\vue\package.json
import Test from '../components/test.vue';
import Home from '../components/home.vue';
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
    el: '#detailView',
    data: { myTime: '2018-08-08' },
    router: router
});