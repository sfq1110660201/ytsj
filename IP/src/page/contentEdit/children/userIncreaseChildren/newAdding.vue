<template>
	<div id="">
		<div class="chartsOption borR">
			<select class="left selectRepair borR">
				<option value="">最近30天</option>
				<option value="">最近30天</option>
				<option value="">最近30天</option>
				<option value="">最近30天</option>
			</select>
			<div class="dateContainer left borR">
				<input type="date"  class="dateIpt"/>至
				<input type="date"  class="dateIpt"/>
				<button class="chartsSure">确定</button>
			</div>
		</div>
		<div id="charts">
		    <div id="main"  :style="{width:'960px',height:'600px'}"></div>
		</div>
	</div>
</template>

<script>
	import echarts from "echarts"
	export default{
        data (){
            return {
                msg:[5, 20, 36, 10, 10, 20]
                
            }
        },
        mounted (){
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption({
                title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
            });
        }

    }
</script>

<style lang="scss" scoped>
	.chartsOption{
		/*height: 45px;*/
		overflow: hidden;
		background: #f4f5f9;
		padding:5px 0;
		.selectRepair,.dateIpt{
			height: 40px;
			background: #f4f5f9;
			color: #777;
		}
		.dateContainer{
			
			padding-right: 10px;
			.dateIpt{
				display: inline-block;
				padding: 0 0px 0 10px;
				width: 163px;
			}
			.chartsSure{
				padding: 3px 13px;
				background: #6dc5a3;
				color: #fff;
				border-radius: 3px;
			}
		}
		.borR{
			border-right: 1px solid #ced2d9;
		}
		
	}
	#charts{
		border: 1px solid #ced2d9;
		.chartOptions{
			/*height: 45px;*/
		}
	}
</style>