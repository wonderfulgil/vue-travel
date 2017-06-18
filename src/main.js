import Vue from 'vue'
import router from './router/index'
import layout from './components/layout'
import axios from 'axios';
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.prototype.$axios = axios;// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
//Vue.config.productionTip = false//在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
//轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
	el:'#app',
	template:'<layout></layout>',
	router,
	axios, 
	components:{
		layout:layout,
	}
});







