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
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
//echarts
import echarts from 'echarts'
import zhejiang from 'echarts/map/js/china'  
Vue.prototype.$echarts=echarts 

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

