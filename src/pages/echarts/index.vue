<template>
    <div class="echarts" ref="echarts"></div>
</template>

<script>
import eCharts from 'echarts';

export default {
    data () {
        return {
            option: {
                title: {
                    text: 'ECharts'
                },
                tooltip: {},
                legend: {
                    data: ['ECharts']
                },
                xAxis: {
                    data: ['5', '10', '15', '20', '25', '30']
                },
                yAxis: {
                    type: 'value',
                    data: ['5', '10', '15', '20', '25', '30']
                },
                series: [{
                    name: 'ECharts',
                    type: 'line',
                    data: [2, 5, 29]
                }]
            }
        };
    },
    mounted () {
        this.$nextTick(() => {
            eCharts.init(this.$refs.echarts).setOption(this.option);
        });
    }
};
</script>

<style>
    .echarts {width: 100%; height: 200px}
</style>
