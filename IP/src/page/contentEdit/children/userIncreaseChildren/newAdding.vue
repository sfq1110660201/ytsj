<template>
	<div id="">
		<div class="chartsOption borR">
			<select class="left selectRepair borR">
				<option value="">最近10天</option>
				<option value="">最近30天</option>
				<option value="">最近90天</option>
				<option value="">最近180天</option>
			</select>
			<div class="dateContainer left borR">
				<input type="date" class="dateIpt" value="" />至
				<input type="date" class="dateIpt" />
				<button class="chartsSure">确定</button>
			</div>
		</div>
		<div id="charts">
			<div id="main" :style="{width:'960px',height:'600px'}"></div>
		</div>
		<ul class="dataRange">
			<div class="dataRangeHead">
				<div class="dateContainer left borR">
					<input type="date" class="dateIpt " value="" />至
					<input type="date" class="dateIpt" />
					<button class="chartsSure">确定</button>
				</div>
			</div>
			<div class="tableContent">
				<table class="table table-condensed">
			      <thead>
			        <tr>
			          <th>时间</th>
			          <th>新关注人数</th>
			          <th>取消关注人数</th>
			          <th>净关注人数</th>
			          <th>累计关注人数</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>2017-06-15</td>
			          <td>Mark</td>
			          <td>Otto</td>
			          <td>@mdo</td>
			          <td>@mdo</td>
			        </tr>
			        <tr>
			          <td>2012-12-12</td>
			          <td>Mark</td>
			          <td>Otto</td>
			          <td>@mdo</td>
			          <td>@mdo</td>
			        </tr>
			      </tbody>
			   	</table>
			</div>
			<ul class="pagination right">
				<li class="btn btn-default btn-sm kakCol" @click="minus" v-if='pageNumber!=1'>◀</li>
				<li class="pageNumber">&nbsp;{{pageNumber}}/3&nbsp;</li>
				<li class="btn btn-default btn-sm kakCol" @click="addPageNum">▶</li>
				<input type="text" maxlength="2"  class="pageNumberIpt"/>
				<li class="btn btn-default btn-sm">转跳</li>
			</ul>
		</ul>
	</div>
</template>

<script>
	import echarts from "echarts"
	export default {
		data() {
			return {
				pageNumber:1
			}
		},
		computed:{//计算属性
			
		},
		mounted() {
			this.$nextTick(function() {
				this.setChart()
			})
		},
		methods:{
			setChart(){
				var myChart = echarts.init(document.getElementById('main'));
				myChart.setOption({
					title: {
						text: '新增人数折线图'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						data: ['新关注人数-全部']
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					grid: {
						left: '0%',
						right: '4%',
						bottom: '4%',
						containLabel: true,//控制图表大小
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,//控制周一距离0点位置
						data: ['2012-12-11','2012-12-12', '2012-12-13', '2012-12-14', '2012-12-15', '2012-12-16', '2012-12-17', '2012-12-18', '2012-12-19', '2012-12-20']
					}],
					yAxis: [{
						type: 'value'
					}],
					label: {
	                normal: {//配置这点数值样式
		                    textStyle: {
		                        color: 'rgba(0, 0, 0, 0.8)',
		                    }
		                }
		            },
					itemStyle: {//配置图表样式
		                normal: {
		                    color: '#b2d8c6',
		                    shadowBlur: 600,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		          	},
					series: [
						{
							name: '新关注人数-全部',
							type: 'line',
							stack: '总量',
							label: {
								normal: {//设置这点是否显示数字
									show: true,
									position: 'top'
								}
							},
							areaStyle: { normal: {} },
							data: [231, 290, 130, 1320,932, 901, 934, 1290, 1330, 1320]
						}
					]
				});
			},
			minus(){//点击分页栏减1
				if(this.pageNumber>1){
					--this.pageNumber
					
				}
			},
			addPageNum(){//点击分页栏加1
				if(this.pageNumber<3){
					++this.pageNumber
					
				}
			},
		}

	}
</script>

<style lang="scss" scoped>
	.chartsOption {
		/*height: 45px;*/
		overflow: hidden;
		background: #f4f5f9;
		padding: 5px 0;
		.selectRepair,
		.dateIpt {
			height: 40px;
			background: #f4f5f9;
			color: #777;
			padding: 0 10px;
		}
		
	}
	.dateContainer {
		color: #000000;
		padding-right: 20px;
		.dateIpt {
			height: 40px;
			display: inline-block;
			padding: 0 0px 0 10px;
			width: 163px;
			color: #777;
			background: #f4f5f9;
		}
		.chartsSure {
			padding: 3px 13px;
			background: #6dc5a3;
			color: #fff;
			border-radius: 3px;
		}
	}
	.borR {
		border-right: 1px solid #ced2d9;
	}
	#charts {
		border: 1px solid #ced2d9;
		.chartOptions {
			/*height: 45px;*/
		}
	}
	.dataRange{
		margin-top: 45px;
		border:1px solid #ced2d9;
		overflow: hidden;
		padding-bottom: 10px;
		.dataRangeHead{
			padding: 5px 0;
			background: #f4f5f9;
			 overflow: hidden;
			    
		}
		.tableContent{
			table{
				border-bottom:1px solid #ced2d9;
				tr{
					height: 45px;
				}
				th,td{
					text-align: center;
					line-height: 45px;
				}
			}
		}
	}
	.pagination{
		margin: 5px 0;
		/*overflow: hidden;*/
		margin-right: 53px;
	}
	.btn{
		padding: 3px 2px;
	}
	.pageNumberIpt{
		width: 40px;
		border-radius: 3px;
		padding: 0 5px;
		text-align: center;
		border: 1px solid #ced2d9;
		position: relative;
		top: 2px;
	}
	.kakCol{
		color: #576477;
	}
	.pageNumber{position: relative;top: 2px;}
</style>