<template>
	<div id="">
		<section>
			<img class="tipIcon" src="/static/IP/img/dasdas43.png"/>仅统计了内容发出后7天内的累计数据，并且客户端展示的阅读数，和此处的阅读数计算方法略有不同，因此两者数值也可能不一样。
		</section>
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
			          <th>内容标题</th>
			          <th>时间</th>
			          <th>阅读人数</th>
			          <th>点赞人数</th>
			          <th>收藏人数</th>
			          <th>分享人数</th>
			        </tr>
			      </thead>
			      <tbody>
			        <tr>
			          <td>2017-06-15</td>
			          <td>Mark</td>
			          <td>Otto</td>
			          <td>Otto</td>
			          <td>@mdo</td>
			          <td>@mdo</td>
			        </tr>
			        <tr>
			          <td>2012-12-12</td>
			          <td>Mark</td>
			          <td>Otto</td>
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
			
			})
		},
		methods:{
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
	.tipIcon{width: 21px;vertical-align: middle;}
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