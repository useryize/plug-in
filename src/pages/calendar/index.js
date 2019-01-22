import Vue from 'vue';
import App from './index.vue';
import '../../util/common';
import '../../assets/css/calendar.css';
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App)
});
