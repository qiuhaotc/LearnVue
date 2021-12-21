import './bar.js';
import _ from 'lodash';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.use(ElementUI);

new Vue({
    el: '#components-demo',
    template: '<App/>',
    components: { App }
})
