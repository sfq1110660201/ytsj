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
					<td style="overflow: hidden;"><img class="ipLogo" :src="ipCount.ipImg" /> {{ipCount.ipName}}</td>
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
				enterpriseId:"",//企业id
				ipCounts: [
					//					{
					//						ipImg: "/static/img/dasdad.png",
					//						ipName: "锐捷洗手液",
					//						ipTime: "2012-12-12",
					//						ipMangaer: "张三",
					//						ipIsNormal: "正常",
					//						ipReview: "审核中"
					//					}
				]
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				//this.getToken();
				//console.log(this.$route.query)
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
						for(var i = 0; i < listData.length; i++) {
							if(listData[i].Servicestatus == 0) {
								if(listData[i].Auditstatus == -1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 9),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "正常",
										ipReview: "未审核",
									})
								} else if(listData[i].Auditstatus == 0) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 9),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "正常",
										ipReview: "审核中",
									})
								} else if(listData[i].Auditstatus == 1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 9),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "正常",
										ipReview: "审核通过",
									})
								}
							}else if(listData[i].Servicestatus == 1) {
								if(listData[i].Auditstatus == -1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 9),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "已冻结",
										ipReview: "未审核",
									})
								} else if(listData[i].Auditstatus == 0) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 9),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "已冻结",
										ipReview: "审核中",
									})
								} else if(listData[i].Auditstatus == 1) {
									this.ipCounts.push({
										ipImg: listData[i].Pic,
										ipName: listData[i].Ipname,
										ipTime: listData[i].Createdate.substr(0, 9),
										ipMangaer: listData[i].Creator,
										ipIsNormal: "已冻结",
										ipReview: "审核通过",
									})
								}
							}

						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
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
				margin-left: 31%;
				margin-top: 16px;
			}
		}
	}
	
	tbody tr:hover {
		background: #f4f7fa!important;
	}
</style>