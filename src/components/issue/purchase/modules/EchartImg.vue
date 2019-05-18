<template>
    <div style="width:100%;height:100%;" ref="myEchart"></div>
</template>
<script>
import Chart from 'echarts'
export default {
    data(){
        return{
            chart: null,
            option:{ },
        }
    },
    props: ['plan_table'],
    mounted() {
        this.initChart();
    },
    methods:{
        initChart(){
            this.chart = Chart.init(this.$refs.myEchart);
            this.chart.setOption({
                title : {
                    text:this.plan_table.title,
                    subtext:this.plan_table.subtext
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:this.plan_table.legend,
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data :this.plan_table.xData
                    }
                ],
                yAxis : {type : 'value'},
                series : this.plan_table.yData
            })
        }
    },
    beforeDestroy() {
        if (!this.chart) { return }
        this.chart.dispose();
        this.chart = null;
    },
}
</script>
