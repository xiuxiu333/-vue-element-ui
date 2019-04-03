
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
// import '@/assets/css/aa.sc'axiss'
import $ from 'jquery'

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'
import axios from 'axios'
Vue.prototype.$axios=axios;

Vue.use(ElementUI);


new Vue({
    el: '#app',
    router,
    comments:{App},
    template:'<app/>',
    render: h => h(App)

});
