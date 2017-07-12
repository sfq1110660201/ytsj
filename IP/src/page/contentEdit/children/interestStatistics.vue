<template>
	<div id="">
		<div class="linetopic">粉丝关注统计</div>
		<div class="qualityContent">
			<div id="qualityMain" :style="{width:'960px',height:'600px'}"></div>
		</div>
		<div class="linetopic">粉丝关注统计</div>
		<div class="keyWords">
			<div id="keyMain" :style="{width:'960px',height:'600px'}"></div>
		</div>
	</div>
</template>

<script>
	import echarts from "echarts"
	export default {
		data() {
			return {
				pageNumber: 1
			}
		},
		computed: { //计算属性

		},
		mounted() {
			this.$nextTick(function() {
				this.setQualityContent()
				this.setKeyWords()
			})
		},
		methods: {
			setQualityContent() {
				var myChart = echarts.init(document.getElementById('qualityMain'));
				myChart.setOption({
					title: {
						//text: '新增人数折线图'
						subtext: '新增人数折线图'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							crossStyle: {
								color: '#999'
							}
						}
					},
					toolbox: {
						feature: {
							dataView: { show: true, readOnly: false },
							magicType: { show: true, type: ['line', 'bar'] },
							restore: { show: true },
							saveAsImage: { show: true }
						}
					},
					grid: {
						left: '0%',
						right: '4%',
						bottom: '4%',
						top:'15%',
						containLabel: true, //控制图表大小
					},
					legend: {
						data: ['新增男粉丝', '新增女粉丝', '新增粉丝数']
					},
					xAxis: [{
						type: 'category',
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						axisPointer: {
							type: 'shadow'
						}
					}],
					yAxis: [{
							type: 'value',
							name: '人数',
							min: 0,
							max: 250,
							interval: 50,
							axisLabel: {
								formatter: '{value}'
							}
						},
						{
							type: 'value',
							name: '人数',
							min: 0,
							max: 25,
							interval: 5,
							axisLabel: {
								formatter: '{value} '//'前可以加°C
							}
						}
					],
					series: [{
							name: '新增男粉丝',
							type: 'bar',
							label: {
								normal: {//设置这点是否显示数字
									show: true,
									position: 'top'
								}
							},
							data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
						},
						{
							name: '新增女粉丝',
							type: 'bar',
							label: {
								normal: {//设置这点是否显示数字
									show: true,
									position: 'top'
								}
							},
							data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
						},
						{
							name: '新增粉丝数',
							type: 'line',
							yAxisIndex: 1,
							label: {
								normal: {//设置这点是否显示数字
									show: true,
									position: 'top'
								}
							},
							data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
						}
					]
				});
			},
			setKeyWords() {
				var myChart = echarts.init(document.getElementById('keyMain'));
				myChart.setOption({
					title: {
//						text: '世界人口总量',
						subtext: '粉丝关键词统计'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['2011年', '2012年']
					},
					grid: {
						left: '0%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01]
					},
					yAxis: {
						type: 'category',
						data: ['巴西', '印尼', '美国', '印度', '中国', '世s']
					},
					series: [{
							name: '2011年',
							type: 'bar',
							label: {
								normal: {//设置这点是否显示数字
									show: true,
									position: 'right'
								}
							},
							data: [23, 89, 34, 70, 44, 30]
						}
					]
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.linetopic {
		border-left: 5px solid #6dc5a3;
		padding-left: 10px;
		margin-bottom: 30px;
	}
	
	.qualityContent {
		margin-bottom: 30px;
	}
</style>