<template>
	<div class="">
		<section class="ipContent">
			<ul>
				<li class="yituName fontSize">医图号</li>
				<li class="createTime fontSize">创建日期</li>
				<li class="build fontSize">创建人</li>
				<li class="serveStatus fontSize">服务状态</li>
				<li class="shenhe fontSize">审核状态</li>
			</ul>
			<ul>
				<router-link class="ipLine" :to="{path:'/contentEdit/homePage',query:{ipId:ipCount.ipId}}" target="_blank" v-for=" ipCount in ipCounts">
					<li style="overflow: hidden;" class="yituName"><img class="ipLogo" :src="ipCount.ipImg" /> {{ipCount.ipName}}</li>
					<li class="createTime">{{ipCount.ipTime}}</li>
					<li class="build">{{ipCount.ipMangaer}}</li>
					<li class="serveStatus">{{ipCount.ipIsNormal}}</td>
					<li class="shenhe">{{ipCount.ipReview}}</li>
				</router-link>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				enterpriseId:"",//企业id
				ipCounts: []
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.enterpriseId=this.$route.query.enterpriseId;
				this.getListData();
			})
		},
		methods: {
//			getToken() { //获取TOKEN
//				this.$http.get("https://api.lotusdata.com/v1/buser/token", {
//					params: {
//						username: "uuapp.li@qq.com",
//						password: "123123",
//						refreshtoken: 0
//					}
//				}).then(
//					function(res) {
//						var TOKEN = res.data.token;
//						var ENTERPRISEID = res.data.data.Enterpriseid
//						localStorage.setItem("TOKEN", 'JWT ' + TOKEN)
//						localStorage.setItem("ENTERPRISEID", ENTERPRISEID)
//						this.getListData();
//					},
//					function() {
//						console.log("获取TOKEN失败")
//					}
//				)
//			},
			getListData() { //获取企业ip列表
				var TOKEN = localStorage.getItem("TOKEN")
				//var ENTERPRISEID = localStorage.getItem("ENTERPRISEID");//企业ID
				this.$http.get("https://api.lotusdata.com/ip/v1/ipm/eiplist/" + this.enterpriseId, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var listData = res.data.data
						//console.log(listData)
						for(var i = 0; i < listData.length; i++) {
							if(listData[i].Servicestatus == 0) {
								if(listData[i].Auditstatus == -1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 10),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "正常",
										ipReview: "未审核",
										ipId:listData[i].Ipid
									})
								} else if(listData[i].Auditstatus == 0) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 10),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "正常",
										ipReview: "审核中",
										ipId:listData[i].Ipid
									})
								} else if(listData[i].Auditstatus == 1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 10),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "正常",
										ipReview: "审核通过",
										ipId:listData[i].Ipid
									})
								}
							}else if(listData[i].Servicestatus == 1) {
								if(listData[i].Auditstatus == -1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 10),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "已冻结",
										ipReview: "未审核",
										ipId:listData[i].Ipid
									})
								} else if(listData[i].Auditstatus == 0) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 10),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "已冻结",
										ipReview: "审核中",
										ipId:listData[i].Ipid
									})
								} else if(listData[i].Auditstatus == 1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 10),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "已冻结",
										ipReview: "审核通过",
										ipId:listData[i].Ipid
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
			getSingleIp(res){
				//console.log(res)
				this.$router.push({path:"/contentEdit/homePage",query:{ipId:res.ipId}})
				
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
.ipContent{
	ul{
		overflow:hidden;
		li{float: left;line-height: 55px; text-align: center;color: #666;font-size: 14px;}
		.fontSize{
			font-size: 16px;
			font-weight: 600;
		}
		.yituName{width: 30%;}
		.createTime{width: 25%;}
		.build{width: 25%;}
		.serveStatus{width: 10%;}
		.shenhe{width: 10%;}
		.ipLine{
			border-bottom: 1px solid #DDDDDD;
			display: block;
			height: 55px;
			
			.ipLogo {
				width: 32px;
				height: 32px;
				border-radius: 100%;
				/*display: inline-block;
			    margin-right: 15px;
			    vertical-align: middle;*/
				float: left;
				margin-left: 12%;
				margin-top: 16px;
				
			}
		}
		.ipLine:hover{
			background: #f4f7fa!important;
		}
	}
}
	tr {
		height: 63px;
		th,
		td {
			padding: 0!important;
			text-align: center;
			font-size: 20px;
			color: #959595;
			line-height: 63px!important;
			.ipLogo {
				width: 32px;
				height: 32px;
				border-radius: 100%;
				/*display: inline-block;
			    margin-right: 15px;
			    vertical-align: middle;*/
				float: left;
				margin-left: 12%;
				margin-top: 16px;
			}
		}
	}
	
	tbody tr:hover {
		background: #f4f7fa!important;
	}
</style>