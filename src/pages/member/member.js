

//使用vue-router
import Vue from 'vue'
import router from './router'
import store from './vuex'

//跟组件注入
new Vue({
	el: '#app',
	router,
	store
})
