<template>
	<div class="">
		<table class="table table-hover">
	      <thead>
	        <tr>
	        	
	          <th>医图号</th>
	          <th>创建日期</th>
	          <th>创始人</th>
	          <th>服务状态</th>
	          <th>审核状态</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr v-for=" ipCount in ipCounts">
	          <td style="overflow: hidden;"><img class="ipLogo" :src="ipCount.ipImg"/> {{ipCount.ipName}}</td>
	          <td>{{ipCount.ipTime}}</td>
	          <td>{{ipCount.ipMangaer}}</td>
	          <td>{{ipCount.ipIsNormal}}</td>
	          <td>{{ipCount.ipReview}}</td>
	        </tr>
	      </tbody>
	   </table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ipCounts:[{
					ipImg:"/static/img/dasdad.png",
					ipName:"锐捷洗手液",
					ipTime:"2012-12-12",
					ipMangaer:"张三",
					ipIsNormal:"正常",
					ipReview:"审核中"
				},{
					ipImg:"/static/img/dasdad.png",
					ipName:"健康长知识",
					ipTime:"2002-12-12",
					ipMangaer:"李四",
					ipIsNormal:"正常",
					ipReview:"审核中"
				},{
					ipImg:"/static/img/dasdad.png",
					ipName:"妙妈学堂",
					ipTime:"2012-02-12",
					ipMangaer:"张三",
					ipIsNormal:"正常",
					ipReview:"审核中"
				}]
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				
			})
		},
		methods: {
			
		},
		watch: {
			
		}
	}
</script>

<style lang="scss" scoped>
	tr{
		height: 63px;
		th,td{
			padding: 0!important;
			text-align: center;
			font-size: 20px;
			color: #959595;
			line-height: 63px!important;
			.ipLogo{
				width: 32px;
				height: 32px;
				border-radius: 100%;
				/*display: inline-block;
			    margin-right: 15px;
			    vertical-align: middle;*/
			   float: left;
			   margin-left: 35%;
			   margin-top: 16px;
			}
		}
		
	}
	tbody tr:hover{
		background: #f4f7fa!important;
	}
</style>