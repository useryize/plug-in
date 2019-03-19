import Vue from 'vue';
import app from './index.vue';
import '../../util/common';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(app)
});
