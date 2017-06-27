<template>
	<div id="">
		<div class="linetopic">性别分布</div>
		<div class="qualityContent">
			<div id="qualityMain" :style="{width:'960px',height:'600px'}"></div>
		</div>
		<div class="linetopic">省份分布</div>
		<div class="keyWords">
			<div id="keyMain" :style="{width:'960px',height:'600px'}"></div>
		</div>
		<ul class="dataRange">
			<div class="tableContent">
				<table class="table table-condensed">
					<thead>
						<tr style="background: #f4f5f9;">
							<th>省份</th>
							<th>粉丝</th>
							<th>粉丝占比</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2012-12-12</td>
							<td>Mark</td>
							<td>Otto</td>
						</tr>
						<tr>
							<td>2012-12-12</td>
							<td>Mark</td>
							<td>Otto</td>
						</tr>
					</tbody>
				</table>
			</div>
			<ul class="pagination right">
				<li class="btn btn-default btn-sm kakCol" @click="minus" v-if='pageNumber!=1'>◀</li>
				<li class="pageNumber">&nbsp;{{pageNumber}}/3&nbsp;</li>
				<li class="btn btn-default btn-sm kakCol" @click="addPageNum">▶</li>
				<input type="text" maxlength="2" class="pageNumberIpt" />
				<li class="btn btn-default btn-sm">转跳</li>
			</ul>
		</ul>
		<div class="linetopic">
			<span>城市分布</span>&nbsp;
			<select class="selectRepair">
				<option value="">北京市</option>
				<option value="">天津市</option>
				<option value="">上海市</option>
				<option value="">重庆市</option>
				<option value="">河北省</option>
				<option value="">山西省</option>
				<option value="">辽宁省</option>
				<option value="">吉林省</option>
				<option value="">黑龙江省</option>
				<option value="">江苏省</option>
				<option value="">浙江省</option>
				<option value="">安徽省</option>
				<option value="">福建省</option>
				<option value="">台湾省</option>
				<option value="">江西省</option>
				<option value="">山东省</option>
				<option value="">河南省</option>
				v<option value="">湖北省</option>
				<option value="">湖南省</option>
				<option value="">广东省</option>
				<option value="">河南省</option>
				<option value="">四川省</option>
				<option value="">贵州省</option>
				<option value="">云南省</option>
				<option value="">陕西省</option>
				<option value="">甘肃省</option>
				<option value="">青海省</option>
				<option value="">内蒙古自治区</option>
				<option value="">广西壮族自治区</option>
				<option value="">西藏自治区</option>
				<option value="">宁夏回族自治区</option>
				<option value="">新疆维吾尔自治区</option>
				<option value="">澳门特别行政区</option>
				<option value="">香港特别行政区</option>
			</select>
		</div>
		<ul class="dataRange">
			<div class="tableContent">
				<table class="table table-condensed">
					<thead>
						<tr style="background: #f4f5f9;">
							<th style="width: 35%;">城市</th>
							<th>用户</th>
							<th>占粉丝比</th>
							<th></th>
						</tr>
					</thead>
					<tbody v-for="(city,index) in citys">
						<tr>
							<td>{{city.name}}</td>
							<td class="text_left">{{city.userProportion}} <span class="userProportion" :style="{width:city.userProportion*0.35+'px'}"></span></td>
							<td>{{city.distribute}}</td>
							<td @click="showDistrict(city,index)">展开</td>
						</tr>
						<tr class='districtBor' v-if="city.isDistrictShow" v-for="district in city.districts" >
							<td>{{district.name}}</td>
							<td class="text_left">{{district.userProportion}} <span class="userProportion" :style="{width:district.userProportion*0.35+'px'}"></span></td>
							<td>{{district.distribute}}</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
			<ul class="pagination right">
				<li class="btn btn-default btn-sm kakCol" @click="minus" v-if='pageNumber!=1'>◀</li>
				<li class="pageNumber">&nbsp;{{pageNumber}}/3&nbsp;</li>
				<li class="btn btn-default btn-sm kakCol" @click="addPageNum">▶</li>
				<input type="text" maxlength="2" class="pageNumberIpt" />
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
				pageNumber: 1,
				
				citys:[{
					name:"西安",
					userProportion:"234",
					distribute:"21%",
					isDistrictShow:false,//判断区是否显示
					districts:[{
						name:"雁塔区",
						userProportion:"333",
						distribute:"35%",
					},{
						name:"莲湖区",
						userProportion:"233",
						distribute:"25%"
					},{
						name:"碑林区",
						userProportion:"233",
						distribute:"25%"
					},]
				},{
					name:"宝鸡",
					userProportion:"343",
					distribute:"25%",
					isDistrictShow:false,//判断区是否显示
					districts:[{
						name:"陈仓区",
						userProportion:"833",
						distribute:"35%",
					},{
						name:"渭滨区",
						userProportion:"233",
						distribute:"25%"
					},{
						name:"碑林区",
						userProportion:"233",
						distribute:"25%"
					},]
				},{
					name:"咸阳",
					userProportion:"334",
					distribute:"26%",
					isDistrictShow:false,//判断区是否显示
					districts:[{
						name:"雁塔区",
						userProportion:"333",
						distribute:"35%",
					},{
						name:"莲湖区",
						userProportion:"233",
						distribute:"25%"
					},{
						name:"碑林区",
						userProportion:"233",
						distribute:"25%"
					},]
				},]
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
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['男', '女']
					},
					grid: {
						left: '0%',
						right: '4%',
						bottom: '4%',
						containLabel: true
					},
					xAxis: {
						type: 'value'
					},
					yAxis: {
						type: 'category',
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					},
					//					itemStyle: {//配置图表样式
					//		                normal: {
					//		                    color: '#b2d8c6',
					//		                    shadowBlur: 600,
					//		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					//		                }
					//		          	},
					series: [{
							name: '男',
							type: 'bar',
							stack: '总量',
							label: {
								normal: {
									show: true,
									position: 'insideRight'
								}
							},
							data: [20, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '女',
							type: 'bar',
							stack: '总量',
							label: {
								normal: {
									show: true,
									position: 'insideRight'
								}
							},
							data: [150, 212, 201, 154, 190, 330, 410]
						},
					]
				});
			},
			randomData() {
				return Math.round(Math.random() * 1000);
			},
			setKeyWords() {
				var myChart = echarts.init(document.getElementById('keyMain'));
				myChart.setOption({
					title: {
						text: '粉丝分布',
//						subtext: '纯属虚构',
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['粉丝分布']
					},
					visualMap: {
						min: 0,
						max: 2500,
						left: 'left',
						top: 'bottom',
						text: ['高', '低'], // 文本，默认为数值文本
						calculable: true
					},
					toolbox: {
						show: true,
						orient: 'vertical',
						left: 'right',
						top: 'center',
						feature: {
							dataView: { readOnly: false },
							restore: {},
							saveAsImage: {}
						}
					},
					series: [{
							name: '粉丝分布',
							type: 'map',
							mapType: 'china',
							roam: false,
							label: {
								normal: {
									show: true
								},
								emphasis: {
									show: true
								}
							},
							data: [
								{ name: '北京', value: this.randomData() },
								{ name: '天津', value: this.randomData() },
								{ name: '上海', value: this.randomData() },
								{ name: '重庆', value: this.randomData() },
								{ name: '河北', value: this.randomData() },
								{ name: '河南', value: this.randomData() },
								{ name: '云南', value: this.randomData() },
								{ name: '辽宁', value: this.randomData() },
								{ name: '黑龙江', value: this.randomData() },
								{ name: '湖南', value: this.randomData() },
								{ name: '安徽', value: this.randomData() },
								{ name: '山东', value: this.randomData() },
								{ name: '新疆', value: this.randomData() },
								{ name: '江苏', value: this.randomData() },
								{ name: '浙江', value: this.randomData() },
								{ name: '江西', value: this.randomData() },
								{ name: '湖北', value: this.randomData() },
								{ name: '广西', value: this.randomData() },
								{ name: '甘肃', value: this.randomData() },
								{ name: '山西', value: this.randomData() },
								{ name: '内蒙古', value: this.randomData() },
								{ name: '陕西', value: this.randomData() },
								{ name: '吉林', value: this.randomData() },
								{ name: '福建', value: this.randomData() },
								{ name: '贵州', value: this.randomData() },
								{ name: '广东', value: this.randomData() },
								{ name: '青海', value: this.randomData() },
								{ name: '西藏', value: this.randomData() },
								{ name: '四川', value: this.randomData() },
								{ name: '宁夏', value: this.randomData() },
								{ name: '海南', value: this.randomData() },
								{ name: '台湾', value: this.randomData() },
								{ name: '香港', value: this.randomData() },
								{ name: '澳门', value: this.randomData() }
							]
						},
						
					]
				})
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
			showDistrict(district,index){//点击展开事件
				//console.log(this.citys[index].isDistrictShow)
				this.citys[index].isDistrictShow=!this.citys[index].isDistrictShow
			}
		}

	}
</script>

<style lang="scss" scoped>
	.linetopic {
		border-left: 5px solid #6dc5a3;
		padding-left: 10px;
		margin-bottom: 30px;
		.selectRepair{
			border: 1px solid #6dc5a3;
			padding-bottom: 2px;
		}
	}
	
	.qualityContent {
		margin-bottom: 30px;
	}
	.dataRange{
		margin: 25px 0 45px;
		/*border:1px solid #ced2d9;*/
		overflow: hidden;
		padding-bottom: 10px;
		.tableContent{
			table{
				border-bottom:1px solid #ced2d9;
				tr{
					height:35px;
					.userProportion{
						display: inline-block;
						height: 16px;
						background:#6dc5a3;
					}
				}
				th,td{
					text-align: center;
					line-height: 35px;
				}
				.districtBor{
					border: 2px solid #ebc85e;
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