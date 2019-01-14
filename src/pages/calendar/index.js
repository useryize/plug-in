import Vue from 'vue';
import App from './index.vue';
import '../../assets/css/style.css';
import '../../components/flexible';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App)
});
