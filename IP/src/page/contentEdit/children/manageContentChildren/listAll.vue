<template>
	<div>
		<div v-if="isShowModel.indexOf(item.Checkstate)!=-1" class="listItem" v-for="item in articleData">
			<section class="listItemL left">
				<p>{{item.Title}}<span class="original">{{item.Original}}</span></p>
				<p>
					<span class="isReview">{{item.Checkstate}}</span>
					<span class="publishtime marginLRepair">{{item.CreateDate}}</span>
					<span class="editor marginLRepair">编辑:&nbsp;{{item.Creator}}</span>
					<!--<span class="reviewer marginLRepair">审核人：&nbsp;张三</span>-->
					<select class="operation marginLRepair" @click="chooseMedicine(item)">
						<!--<option :value="option.name" v-for="option in item.options">{{option.name}}</option>-->
						<option :value="option.name" v-model="option.name" v-for="option in options">{{option.name}}</option>
					</select>
				</p>
				<p v-if="item.Checkstate=='已审核'">
					<!--<p>-->
					<span class="readerCount" @click="germsg">阅读：{{item.Views}}</span>
					<span class="thumbs marginLRepair">点赞：NODATA</span>
					<span class="comment marginLRepair">评论：NODATA</span>
				</p>
			</section>
			<section class="listItemR right">
				<img class="listItemPic" :src="item.Pic" />
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ipId: "",
				page: 0,
				articleData: [],
				selected: "",
				options: [{
					name: "操作"
				}, {
					name: "修改"
				}, {
					name: "删除"
				}, {
					name: "发布"
				}],
				isShowModel: "已审核/审核中/未通过",
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.ipId = this.$route.query.ipId;
				this.getIpInfo();
			})
		},
		props: ['childReview'],
		computed: {
			//			childReview:function(){
			//				console.log(11111)
			//			}
		},
		methods: {
			getIpInfo() {
				var TOKEN = localStorage.getItem("TOKEN")
				//console.log(TOKEN)
				this.$http.get("https://api.lotusdata.com/ip/v1/article/list/" + this.ipId, {
					params: {
						key: "",
						start: this.page,
						limit: 20,
						options: [{
							name: "操作"
						}, {
							name: "修改"
						}, {
							name: "删除"
						}, {
							name: "发布"
						}]
					},
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res.data.data)
						var articleData = res.data.data;
						if(articleData != null) {
							for(var i = 0; i < articleData.length; i++) {
								if(articleData[i].Checkstate == -1) { //审核未通过
									this.articleData.push({
										Articleid: articleData[i].Articleid,
										Title: articleData[i].Title,
										CreateDate: articleData[i].CreateDate.substr(0, 10),
										Creator: articleData[i].Creator,
										Views: articleData[i].Views,
										Pic: articleData[i].Pic,
										Checkstate: "未通过",
										Original: "nodata",
										options: [{
											name: "操作"
										}, {
											name: "修改"
										}, {
											name: "删除"
										}, {
											name: "发布"
										}]
									})
								} else if(articleData[i].Checkstate == 0) { //审核中
									this.articleData.push({
										Articleid: articleData[i].Articleid,
										Title: articleData[i].Title,
										CreateDate: articleData[i].CreateDate.substr(0, 10),
										Creator: articleData[i].Creator,
										Views: articleData[i].Views,
										Pic: articleData[i].Pic,
										Checkstate: "审核中",
										Original: "nodata",
										options: [{
											name: "操作"
										}, {
											name: "修改"
										}, {
											name: "删除"
										}, {
											name: "发布"
										}]
									})
								} else if(articleData[i].Checkstate == 1) { //已审核
									this.articleData.push({
										Articleid: articleData[i].Articleid,
										Title: articleData[i].Title,
										CreateDate: articleData[i].CreateDate.substr(0, 10),
										Creator: articleData[i].Creator,
										Views: articleData[i].Views,
										Pic: articleData[i].Pic,
										Checkstate: "已审核",
										Original: "nodata",
										options: [{
											name: "操作"
										}, {
											name: "修改"
										}, {
											name: "删除"
										}, {
											name: "发布"
										}]
									})
								}

							}
							if(res.data.data.length == 20) {
								this.page += 1;
								this.getIpInfo()
							}
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			chooseMedicine(item) {
				var e = event;
				if(e.target.value == "修改") {
					//console.log(item)
					this.$router.push({ path: "/contentEdit/publish/Graphic?", query: { ipId: this.ipId, Articleid: item.Articleid } })
				} else if(e.target.value == "删除") {
					this.delete(item.Articleid);

				}
			},
			delete(articleId) {
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.delete("https://api.lotusdata.com/ip/v1/article/" + articleId, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						if(res.data.code == 0) {
							this.articleData = [];
							this.getIpInfo();
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			germsg() {
				console.log(this.childReview)
			},

		},
		watch: { //监听审核状态变化
			childReview: function() {
				this.isShowModel = this.childReview;

			}
		}

	}
</script>

<style lang="scss" scoped>
	.listItem {
		padding: 30px 25px 18px 20px;
		border-bottom: 2px solid #e6e6e6;
		overflow: hidden;
		.listItemL {
			.original {
				margin-left: 15px;
				padding: 2px 8px;
				font-size: 10px;
				color: #c3c3c3;
				border: 1px solid #c3c3c3;
				border-radius: 3px;
			}
			.isReview {
				font-size: 10px;
				padding: 2px 8px;
				color: #fff;
				background: #fc8675;
				border-radius: 3px;
			}
			.operation {
				/*color: #6dc5a3;*/
			}
		}
		.listItemR {
			.listItemPic {
				width: 112px;
				height: 70px;
			}
		}
	}
	
	.marginLRepair {
		margin-left: 25PX;
	}
	
	section {
		p,
		span {
			font-size: 12px;
		}
	}
</style>