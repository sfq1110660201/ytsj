import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
// import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'//添加mint-ui组件库
import 'mint-ui/lib/style.css';
import { Loadmore } from 'mint-ui';//添加mint-ui懒加载组件
import { InfiniteScroll } from 'mint-ui';//无限滚动


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Mint)
Vue.component(Loadmore.name, Loadmore);
Vue.use(InfiniteScroll);

const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})


new Vue({
	router,
	
}).$mount('#app')

