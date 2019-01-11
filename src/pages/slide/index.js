import Vue from 'vue';
import App from './index.vue';
import VueRouter from 'vue-router';
import '../../assets/css/style.css';
import '../../components/flexible';
import slide from './slide';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: App},
        {path: '/slide', component: slide, name: 'slide'}
    ]
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h('router-view')
});
