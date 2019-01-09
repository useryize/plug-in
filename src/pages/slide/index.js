import Vue from 'vue';
import App from './index.vue';
import '../../assets/css/style.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
});
