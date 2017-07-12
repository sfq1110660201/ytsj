<template>
	<div id="">
		<div class="chartsOption borR">
			<!--<select class="left selectRepair borR">
				<option value="">最近10天</option>
				<option value="">最近30天</option>
				<option value="">最近90天</option>
				<option value="">最近180天</option>
			</select>-->
			<div class="dateContainer left borR">
				<input type="date" class="dateIpt" v-model="firsTime" />至
				<input type="date" class="dateIpt" v-model="secTime"/>
				<button class="chartsSure" @click="getData(firsTime,secTime)">确定</button>
			</div>
		</div>
		<div id="charts">
			<div id="main" :style="{width:'960px',height:'600px'}"></div>
		</div>
		<ul class="dataRange">
			<div class="dataRangeHead">
				<div class="dateContainer left borR">
					<input type="date" class="dateIpt " v-model="firsTime1" />至
					<input type="date" class="dateIpt" v-model="secTime1"/>
					<button class="chartsSure" @click="getData1(firsTime1,secTime1)">确定</button>
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
						<tr v-for="(item,index) in newAddingData" v-if="index <pageCount && index>=pageCount-10">
							<td>{{item.time}}</td>
							<td>{{item.newAdding}}</td>
							<td>{{item.cancleCare}}</td>
							<td>{{item.netIncreases}}</td>
							<td>{{item.totalAddings}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<ul class="pagination right">
				<li class="btn btn-default btn-sm kakCol" @click="minus" v-if='pageNumber!=1'>◀</li>
				<li class="pageNumber">&nbsp;{{pageNumber}}/{{pageNum}}&nbsp;</li>
				<li class="btn btn-default btn-sm kakCol" @click="addPageNum">▶</li>
				<input type="text" maxlength="2" v-model="num" class="pageNumberIpt" />
				<li class="btn btn-default btn-sm" @click="goThatPage()">转跳</li>
			</ul>
		</ul>
	</div>
</template>

<script>
	import echarts from "echarts"
	export default {
		data() {
			return {
				ipId: "",
				pageNumber: 1,
				dateArr: ['2012-12-11', '2012-12-12', '2012-12-13', '2012-12-14', '2012-12-15', '2012-12-16', '2012-12-17', '2012-12-18', '2012-12-19', '2012-12-20'],
				everyDaysNewAdding: [231, 290, 130, 1320, 932, 901, 934, 1290, 1330, 820],
				getTime:"",
				firsTime:"",
				firsTime1:"",
				secTime:"",
				secTime1:"",
				readNums:[150, 232, 201, 154, 190, 330, 410, 190,190, 330],
				newAddingData:[],
				pageNum:"",
				pageCount:10,
				num:"",
			}
		},
		computed: { //计算属性

		},
		mounted() {
			this.$nextTick(function() {
				this.ipId = this.$route.query.ipId
				
				var date=new Date();
				var month=(date.getMonth()+1).toString().length<2 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
				var thatdateOne=date.getDate().toString().length<2 ? "0"+ date.getDate().toString() : date.getDate().toString();
				const today=date.getFullYear()+"-"+ month +'-'+thatdateOne;
				//console.log(today)
				this.secTime=today;
				this.secTime1=today;
				var TenDaysAgo=date.getTime()-24*60*60*1000*9;
				var thatTime=new Date(TenDaysAgo)
				var thatMonth=(thatTime.getMonth()+1).toString().length<2 ? "0"+(thatTime.getMonth()+1).toString() : (thatTime.getMonth()+1).toString();
				var thatdateTwo=thatTime.getDate().toString().length<2 ? "0"+ thatTime.getDate().toString() : thatTime.getDate().toString();
				var tenAgo=thatTime.getFullYear()+"-"+ thatMonth +'-'+thatdateTwo;
				//console.log(tenAgo)
				this.firsTime=tenAgo
				this.firsTime1=tenAgo
				this.getTodayData(this.firsTime,this.secTime)
				this.getList(this.firsTime1,this.secTime1)
			})
		},
		methods: {
			getData(firsTime,secTime){
				this.getTodayData(firsTime,secTime)
			},
			getData1(firsTime,secTime){
				this.getList(firsTime,secTime)
			},
			getTodayData(startdate,enddate){
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/ipm/static/usertrends/"+this.ipId, {
					params: {
						startdate:startdate,
						enddate:enddate
					},
					headers: { 'Authorization': TOKEN }
					
				}).then(
					function(res) {
						if(res.data.code==0){
							this.dateArr=[];
							this.everyDaysNewAdding=[];
							this.readNums=[];
							//console.log(res)
							var dateData=res.data.data;
							
							for(var i=0;i<dateData.length;i++){
								//debugger
								this.dateArr.push(dateData[i].date)
								
								if(dateData[i].data.grow!="" && dateData[i].data.unsubscribe!=""){
									if(dateData[i].data.grow > dateData[i].data.unsubscribe){
										this.everyDaysNewAdding.push(dateData[i].data.grow-dateData[i].data.unsubscribe)
									}else{
										this.everyDaysNewAdding.push(0)
									}
								}else{
									this.everyDaysNewAdding.push(0)
								}
								
								if(dateData[i].data.dayviews!=""){
									this.readNums.push(dateData[i].data.dayviews);
								}else{
									this.readNums.push(0);
								}
							}
							//console.log(this.everyDaysNewAdding)
							this.setChart()
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			getList(startdate,enddate){
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/ipm/static/usertrends/"+this.ipId, {
					params: {
						startdate:startdate,
						enddate:enddate
					},
					headers: { 'Authorization': TOKEN }
					
				}).then(
					function(res) {
						if(res.data.code==0){
							this.newAddingData=[];
							this.pageNumber=1;
							this.pageCount=10;
							var dateData=res.data.data;
							this.pageNum=Math.ceil((dateData.length)/10);
							//console.log(this.pageNum)
							for(var i=0;i<dateData.length;i++){
								//debugger
								if(dateData[i].data.grow!="" && dateData[i].data.unsubscribe!="" && dateData[i].data.cumulativegrow!=""){
									if(dateData[i].grow-dateData[i].unsubscribe>=0){
										this.newAddingData.push({
											time:dateData[i].date,
											newAdding:dateData[i].data.grow,
											cancleCare:dateData[i].data.unsubscribe,
											netIncreases:dateData[i].data.grow-dateData[i].data.unsubscribe,
											totalAddings:dateData[i].data.cumulativegrow,
										})
									}else{
										this.newAddingData.push({
											time:dateData[i].date,
											newAdding:dateData[i].data.grow,
											cancleCare:dateData[i].data.unsubscribe,
											netIncreases:0,
											totalAddings:dateData[i].data.cumulativegrow,
										})
									}
									
								}else{
									this.newAddingData.push({
										time:dateData[i].date,
										newAdding:0,
										cancleCare:0,
										netIncreases:0,
										totalAddings:0,
									})
								}
							}
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			goThatPage(){//跳页
				if(/^[0-9]*$/.test(this.num)){//正则检测输入值是否为数值
					if(this.num<=this.pageNum){
						//console.log(this.pageCount)
						this.pageNumber=this.num;
						this.pageCount=(this.num)*10
					}
				}
			},
			setChart() {
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
						data: ['新关注人数-全部',"","日阅读量"]
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
						containLabel: true, //控制图表大小
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false, //控制周一距离0点位置
						data: this.dateArr
					}],
					yAxis: [{
						type: 'value'
					}],
					label: {
						normal: { //配置这点数值样式
							textStyle: {
								color: 'rgba(0, 0, 0, 0.8)',
							}
						}
					},
					itemStyle: { //配置图表样式
						normal: {
							//color: '#b2d8c6',
							shadowBlur: 600,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					series: [{
						name: '新关注人数-全部',
						type: 'line',
						stack: '总量',
						label: {
							normal: { //设置这点是否显示数字
								show: true,
								position: 'top'
							}
						},
						areaStyle: { normal: {} },
						data: this.everyDaysNewAdding
					},{
						name: '',
						type: 'line',
						stack: '',
						label: {
							normal: { //设置这点是否显示数字
								show: false,
								position: 'top'
							}
						},
						areaStyle: { normal: {} },
						data: []
					},{
			            name:'日阅读量',
			            type:'line',
			            stack: '总量',
			            label: {
							normal: { //设置这点是否显示数字
								show: true,
								position: 'top'
							}
						},
			            areaStyle: {normal: {}},
			            data:this.readNums
			        },]
				});
			},
			minus() { //点击分页栏减1
				if(this.pageNumber > 1) {
					--this.pageNumber
					this.pageCount=this.pageCount-10;
				}
			},
			addPageNum() { //点击分页栏加1
				if(this.pageNumber < this.pageNum) {
					//console.log(this.pageCount)
					++this.pageNumber
					this.pageCount=this.pageCount+10;
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
	
	.dataRange {
		margin-top: 45px;
		border: 1px solid #ced2d9;
		overflow: hidden;
		padding-bottom: 10px;
		.dataRangeHead {
			padding: 5px 0;
			background: #f4f5f9;
			overflow: hidden;
		}
		.tableContent {
			table {
				border-bottom: 1px solid #ced2d9;
				tr {
					height: 45px;
				}
				th,
				td {
					text-align: center;
					line-height: 30px;
					font-size: 13px;
				}
			}
		}
	}
	
	.pagination {
		margin: 5px 0;
		/*overflow: hidden;*/
		margin-right: 53px;
	}
	
	.btn {
		padding: 3px 2px;
	}
	
	.pageNumberIpt {
		width: 40px;
		border-radius: 3px;
		padding: 0 5px;
		text-align: center;
		border: 1px solid #ced2d9;
		position: relative;
		top: 2px;
	}
	
	.kakCol {
		color: #576477;
	}
	
	.pageNumber {
		position: relative;
		top: 2px;
	}
</style>