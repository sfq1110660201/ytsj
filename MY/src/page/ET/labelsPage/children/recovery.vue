<template>
	<div class="shoplist_container containerRepair">
		<ul class="containerLeft">

			<router-link to="/ETmsite/ETrecovery/ETdiet" tag='li' class="lebalParts" v-bind:class="{ diet: dietItem3.isNormal, dietShow:dietItem3.isLight }" @click.native="diet3()"></router-link>
			<router-link to="/ETmsite/ETrecovery/ETNursing" tag='li' class="lebalParts" v-bind:class="{ nursing: nursingItem3.isNormal, nursingShow:nursingItem3.isLight }" @click.native="nursing3()"></router-link>
			<router-link to="/ETmsite/ETrecovery/ETbaoJian" tag='li' class="lebalParts" v-bind:class="{ healthcare: healthcareItem3.isNormal, healthcareShow:healthcareItem3.isLight }" @click.native="healthcare3()"></router-link>
			<router-link to="/ETmsite/ETrecovery/ETeducation" tag='li' class="lebalParts" v-bind:class="{ education: educationItem3.isNormal, educationShow:educationItem3.isLight }" @click.native="education3()"></router-link>
		</ul>
		<ul class="containerRight" v-if="">
			<!--<div v-show='bool' >{{searchValue}}</div>-->
			<router-view v-on:listenDietEvent="fromDiet" v-on:listenNursingEvent="fromNursing" v-on:listenBaojianEvent="fromBaojian" v-on:listenEducation="fromEducation"></router-view>
			<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :auto-fill='bool' ref="loadmore">
				<ul style="" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
					<router-link to="" tag='li' v-for="recovery in recoverys" @click.native="goParagraph(recovery)" class="shop_li">

						<hgroup class="shop_right">
							<header class="shop_detail_header">
								<h4 class="" class="shop_title lengthRepair  premium">{{recovery.title}}</h4>

							</header>

							<p class="fee_distance">
								<section class="fee">
									<!--<img :src="recovery.ipPic" class="ipIcon">-->
									<span>{{recovery.ipName}} </span>
									<span class="segmentation">|</span>
									<span>&nbsp;&nbsp;{{recovery.views}}&nbsp;阅读</span>
									<span class="segmentation">|</span>
									<span>{{recovery.time}}</span>
									<!--<span @click.stop="shareInfo()">分享</span>-->
								</section>
								
							</p>
						</hgroup>
						<section v-if="screenWidth">
							<img :src="recovery.src" class="shop_img" style="">
						</section>
					</router-link>
				</ul>
				<div class="bottom_load" v-html="loadContent">
					<!--<img class="loadImg"  src="../../../../static/img/loading01.gif"/>-->
				</div>
				<div slot="top" class="mint-loadmore-top">
					<span class="topload" v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
					<span class="topload" v-show="topStatus === 'loading'">loading</span>
				</div>
			</mt-loadmore>
			<mt-popup v-model="popupVisible" popup-transition="popup-fade" position="bottom">
				<div class="shareContent" :style="{width: wid+'px'}">
					<h5 class="articleShare">分享文章</h5>
					<ul class="sharePath">
						<li><img class="shareImg" src="/static/MY/img/weichatLogin.png" /><span>微信好友</span></li>
						<li><img class="shareImg" src="/static/MY/img/share_weichat.png" /><span>微信朋友圈</span></li>
						<li><img class="shareImg" src="/static/MY/img/share_qq.png" /><span>qq好友</span></li>
						<li><img class="shareImg" src="/static/MY/img/share_weibo.png" /><span>微博</span></li>
					</ul>
					<ul class="shareParts">
						<li><img class="shareImg" src="/static/MY/img/copy.png" /><span>复制链接</span></li>
						<li><img class="shareImg" src="/static/MY/img/shoucang.png" /><span>收藏</span></li>
						<li><img class="shareImg" src="/static/MY/img/jubao.png" /><span>举报</span></li>
					</ul>
					<p class="cancle" @click="cancle()">取消</p>
				</div>
			</mt-popup>

		</ul>
	</div>
</template>

<script>
	import { Popup } from 'mint-ui'
	var wx = require('weixin-js-sdk');
	
	export default {

		data() {
			return {
				screenWidth: false,
				recoverys: [],
				dietItem3: {
					name:"饮食",
					isNormal: false,
					isLight: true
				},
				nursingItem3: {
					name:"护理",
					isNormal: true,
					isLight: false
				},
				healthcareItem3: {
					name:"保健",
					isNormal: true,
					isLight: false
				},
				educationItem3: {
					name:"教育",
					isNormal: true,
					isLight: false
				},
				topStatus: '',
				bottomStatus: "",
				load: "",
				bool: false,
				allLoaded: false,
				popupVisible: false,
				wid: 0,
				loading: false,
				start: 0,
				listData: [], //存储获取数据
				loadContent: "<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>",
				lebalValue: "恢复|饮食", //接口传入标签值
				isloadMore: 0, //判断让loadMore方法不再调用接口
				pageLebal:"",//存储当前二级标签，如饮食、护理、保健、教育
				//一下为微信分享用变量
				SDK: "",
				//微信分享参数
				weiChatAppId:"",
				weiChatNonceStr:"",
				weiChatSignature:"",
				weiChatTimeStamp:"",
				//分享链接参数
				weiChatTitle:"",
				requestLink:"",
				weiChatLink:"",
				weiChatDesc:"",
				weiChatImgUrl:"",

			}
		},
		mounted() {
			this.$nextTick(function() {
				//是否显示右边图片
				var wid = document.body.clientWidth;
				if(wid >= 360) {
					this.screenWidth = true
				}
				var href=window.location.href.split('#')[0];//#前url
				this.requestLink=href;//请求SDKurl
				this.weiChatLink="https://ip.lotusdata.com/wx/share/app/baby";//分享链接url
				this.getWechatSDK();
				this.getListData(this.lebalValue);
			})
		},
		components: {
			Popup
		},
//		props:['searchValue'],
		methods: {
			fromDiet(res) {
				if(this.dietItem3.isLight==true){this.pageLebal=this.dietItem3.name}
				if(this.nursingItem3.isLight==true){this.pageLebal=this.nursingItem3.name}
				if(this.healthcareItem3.isLight==true){this.pageLebal=this.healthcareItem3.name}
				if(this.educationItem3.isLight==true){this.pageLebal=this.educationItem3.name}
				var lebal="恢复|"+this.pageLebal+"|"+res
				//console.log(lebal)
				this.recoverys = [];
				this.start = 0;
				this.isloadMore = 0;
				this.getListData(lebal);
			},
			fromNursing(res) {
				if(this.dietItem3.isLight==true){this.pageLebal=this.dietItem3.name}
				if(this.nursingItem3.isLight==true){this.pageLebal=this.nursingItem3.name}
				if(this.healthcareItem3.isLight==true){this.pageLebal=this.healthcareItem3.name}
				if(this.educationItem3.isLight==true){this.pageLebal=this.educationItem3.name}
				var lebal="恢复|"+this.pageLebal+"|"+res
				//console.log(lebal)
				this.recoverys = [];
				this.start = 0;
				this.isloadMore = 0;
				this.getListData(lebal);
			},
			fromBaojian(res) {
				if(this.dietItem3.isLight==true){this.pageLebal=this.dietItem3.name}
				if(this.nursingItem3.isLight==true){this.pageLebal=this.nursingItem3.name}
				if(this.healthcareItem3.isLight==true){this.pageLebal=this.healthcareItem3.name}
				if(this.educationItem3.isLight==true){this.pageLebal=this.educationItem3.name}
				var lebal="恢复|"+this.pageLebal+"|"+res
				//console.log(lebal)
				this.recoverys = [];
				this.start = 0;
				this.isloadMore = 0;
				this.getListData(lebal);
			},
			fromEducation(res) {
				if(this.dietItem3.isLight==true){this.pageLebal=this.dietItem3.name}
				if(this.nursingItem3.isLight==true){this.pageLebal=this.nursingItem3.name}
				if(this.healthcareItem3.isLight==true){this.pageLebal=this.healthcareItem3.name}
				if(this.educationItem3.isLight==true){this.pageLebal=this.educationItem3.name}
				var lebal="恢复|"+this.pageLebal+"|"+res
				//console.log(lebal)
				this.recoverys = [];
				this.start = 0;
				this.isloadMore = 0;
				this.getListData(lebal);
			},
			getWechatSDK() { //获取微信SDK
				var TOKEN = localStorage.getItem("TOKEN") //获取token
				//console.log(TOKEN2)
				//console.log("requestLink:    "+this.requestLink)
				this.$http.post("https://api.lotusdata.com/v1/wx/jsconfig", {}, {
					params: {
						url: this.requestLink
					},
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						this.SDK = res.data.data;
						this.weiChatAppId=this.SDK.AppID;
						this.weiChatNonceStr=this.SDK.NonceStr;
						this.weiChatSignature=this.SDK.Signature;
						this.weiChatTimeStamp=Number(this.SDK.TimeStamp);
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			getListData(value) {
				//debugger
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/v1/article/list", {
					params: {
						stype: "muying",
						key: value,
						start: this.start,
						limit: 20
					},
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var listData = res.data.data
						//console.log(listData)
						if(listData != null) { //获取数据 不为空时
							this.listData = listData
							for(var i = 0; i < listData.length; i++) {
								if(listData[i].Pic.indexOf("http") != -1) {
									this.recoverys.push({
										title: listData[i].Title,
										ipName: listData[i].Ipname,
										views: listData[i].Views,
										src: listData[i].Pic,
										articleId: listData[i].Articleid,
										time:listData[i].CreateDate.substr(5,5)
										//ipPic:listData[i].Ippic
									})
								} else if(listData[i].Pic.indexOf("http") == -1) { //完善图片路径
									this.recoverys.push({
										title: listData[i].Title,
										ipName: listData[i].Ipname,
										views: listData[i].Views,
										src: "http://images.yitushijie.com/" + listData[i].Pic,
										articleId: listData[i].Articleid,
										time:listData[i].CreateDate.substr(5,5)
										//ipPic:listData[i].Ippic
									})
								}
							}
						} else { //请求数据为null，已无更多数据
							this.loadContent = "已无更多数据";
							this.isloadMore = 1; //不再调用接口
						}
						
						//添加微信分享
						wx.config({
							debug: false, //开启debug
							appId: this.weiChatAppId, //微信appid
							timestamp: this.weiChatTimeStamp, //时间戳
							nonceStr: this.weiChatNonceStr,//生成签名的随机串
							signature: this.weiChatSignature, //签名
							jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] //使用的api
						});
						wx.showOptionMenu();
						//var titleValue=this.weiChatTitle;
						var linkValue=this.weiChatLink;
						//console.log("linkValue:    "+linkValue)
						//var descValue=this.weiChatDesc;
						//var imgUrlValue=this.weiChatImgUrl;
						wx.ready(function() {
							wx.onMenuShareAppMessage({
								title: "母婴传说", // 分享标题
								link: linkValue, // 分享链接
								desc: "专注于母婴知识传播", // 分享描述
								imgUrl: "https://images.yitushijie.com/Fm2xzBBbWZ0cdmd58rPFCLnO7ldP", // 分享图标
								success: function() {
									console.log('分享成功啦！');
								},
								cancel: function() {
									console.log('分享失败');
								}
							});
							wx.onMenuShareTimeline({
								title: "母婴传说", // 分享标题
								link: linkValue, // 分享链接
								desc: "专注于母婴知识传播", // 分享描述
								imgUrl: "https://images.yitushijie.com/Fm2xzBBbWZ0cdmd58rPFCLnO7ldP", // 分享图标
								success: function() {
									console.log('分享成功啦！');
								},
								cancel: function() {
									console.log('分享失败');
								}
							});
						});
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			loadTop() { //下拉刷新执行的方法
				//this.$router.push({path:"/msite/recommend"})
				this.loadContent="<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>";
				this.recoverys = [];
				this.start = 0
				this.isloadMore = 0
				this.getListData(this.lebalValue);
				this.$refs.loadmore.onTopLoaded();
			},
			handleTopChange(status) {
				//console.log(status)
				this.load = "Loading..."
				this.topStatus = status;
			},
			shareInfo() { //弹出分享模态窗
				//console.log(this.$route.path) ///msite/recommend
				var wid = window.screen.width;
				this.wid = wid
				this.popupVisible = true
			},
			loadMore() {
				//debugger
				if(this.isloadMore == 0) {
					if(this.listData != null) {
						this.loading = true;
						setTimeout(() => {
							this.start += 20; //
							//console.log(this.start)
							this.getListData(this.lebalValue);
							this.loading = false;
						}, 1000);
					}
				}
			},
			diet3() {
				this.dietItem3.isLight = true;
				this.dietItem3.isNormal = false;
				this.nursingItem3.isLight = false;
				this.nursingItem3.isNormal = true;
				this.healthcareItem3.isLight = false;
				this.healthcareItem3.isNormal = true;
				this.educationItem3.isLight = false;
				this.educationItem3.isNormal = true;
				this.loadContent = "<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>"; //对加载图标初始化
				this.start = 0
				this.isloadMore = 0
				this.recoverys = [];
				this.lebalValue = "恢复|饮食";
				this.getListData(this.lebalValue);
			},
			nursing3() {
				this.dietItem3.isLight = false;
				this.dietItem3.isNormal = true;
				this.nursingItem3.isLight = true;
				this.nursingItem3.isNormal = false;
				this.healthcareItem3.isLight = false;
				this.healthcareItem3.isNormal = true;
				this.educationItem3.isLight = false;
				this.educationItem3.isNormal = true;
				this.loadContent = "<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>"
				this.start = 0
				this.isloadMore = 0
				this.recoverys = [];
				this.lebalValue = "恢复|护理";
				this.getListData(this.lebalValue);
			},
			healthcare3() {
				this.dietItem3.isLight = false;
				this.dietItem3.isNormal = true;
				this.nursingItem3.isLight = false;
				this.nursingItem3.isNormal = true;
				this.healthcareItem3.isLight = true;
				this.healthcareItem3.isNormal = false;
				this.educationItem3.isLight = false;
				this.educationItem3.isNormal = true;
				this.loadContent = "<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='static/MY/img/loading.gif'/>"
				this.start = 0
				this.isloadMore = 0
				this.recoverys = [];
				this.lebalValue = "恢复|保健";
				this.getListData(this.lebalValue);
			},
			education3() {
				this.dietItem3.isLight = false;
				this.dietItem3.isNormal = true;
				this.nursingItem3.isLight = false;
				this.nursingItem3.isNormal = true;
				this.healthcareItem3.isLight = false;
				this.healthcareItem3.isNormal = true;
				this.educationItem3.isLight = true;
				this.educationItem3.isNormal = false;
				this.loadContent = "<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>"
				this.start = 0
				this.isloadMore = 0
				this.recoverys = [];
				this.lebalValue = "恢复|教育";
				this.getListData(this.lebalValue);
			},
			goParagraph(recovery) { //
				this.$router.push({path:"/ETparagraph/"+recovery.articleId})
				//console.log(recovery.articleId)
			},
			cancle() {
				this.popupVisible = false
			}
		},
		watch: {
//			searchValue:"reSetList"
		}
	}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
	.shoplist_container {
		background-color: #fff;
		/*padding-bottom: 2rem;*/
	}
	
	.containerRepair {
		overflow: hidden;
		position: relative;
		min-height: 320px;
	}
	
	.containerLeft {
		/*float: left;*/
		width: 80px;
		height: 100%;
		background: rgba(235, 235, 235, 1);
		position: absolute;
	}
	
	.containerRight {
		/*float: left;*/
		margin-left: 80px;
		/*position: absolute;right: 0;top: 0;*/
	}
	
	.shop_li {
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.35rem 0.4rem;
	}
	
	.shop_img {
		@include wh(3.5rem, 2.6rem);
		display: block;
		margin-right: 0.4rem;
	}
	
	.shop_right {
		flex: auto;
		.shop_detail_header {
			@include fj;
			align-items: center;
			.shop_title {
				/*width: 10.5rem;*/
				color: #333;
				padding-top: .01rem;
				@include font(0.65rem, 0.65rem, 'PingFangSC-Regular');
				/*font-weight: 700;*/
				line-height: .8rem;
			}
			.lengthRepair {
				width: 8.2rem;
			}
		}
		.fee_distance {
			margin-top: 0.82rem;
			@include fj;
			@include sc(0.5rem, #666);
			.fee {
				@include sc(0.5rem, #666);
				span{
					color: #adadad;
				}
			}
		}
	}
	
	.loader_more {
		@include font(0.6rem, 3);
		text-align: center;
		color: #999;
	}
	
	.empty_data {
		@include sc(0.5rem, #666);
		text-align: center;
		line-height: 2rem;
	}
	
	.loading-enter-active,
	.loading-leave-active {
		transition: opacity 1s
	}
	
	.loading-enter,
	.loading-leave-active {
		opacity: 0
	}
	
	.lebalParts {
		width: 80px;
		height: 80px;
	}
	/*饮食*/
	.diet {
		background: url(/static/MY/img/btn_nav_yinshi@2x.png);
		background-size: cover;
	}
	
	.dietShow {
		background: url(/static/MY/img/btn_hig_yinshi@2x.png);
		background-size: cover;
	}
	/*护理*/
	.nursing {
		background: url(/static/MY/img/btn_nav_HuLi@2x.png);
		background-size: cover;
	}
	.nursingShow {
		background: url(/static/MY/img/btn_hig_HuLi@2x.png);
		background-size: cover;
	}
	/*保健*/
	
	.healthcare {
		background: url(/static/MY/img/btn_nav_BaoJian@2x.png);
		background-size: cover;
	}
	
	.healthcareShow {
		background: url(/static/MY/img/btn_hig_baojian@2x.png);
		background-size: cover;
	}
	/*教育*/
	
	.education {
		background: url(/static/MY/img/btn_nav_jiaoyu@2x.png);
		background-size: cover;
	}
	
	.educationShow {
		background: url(/static/MY/img/btn_hig_jiaoyu@2x.png);
		background-size: cover;
	}
	
	.topload {
		color: #A9ACB1;
		font-size: .6rem;
	}
	/*弹出框*/
	
	.shareContent {
		height: 11.6rem;
		padding-top: .5rem;
		padding-bottom: .5rem;
	}
	
	.articleShare {
		text-align: center;
		font-size: .7rem;
		/*font-weight: 600;*/
	}
	
	.sharePath {
		border-bottom: 1px solid #ddd;
		padding: .5rem 0;
	}
	
	.sharePath li {
		display: inline-block;
		width: 23%;
		text-align: center;
	}
	
	.shareImg {
		width: 2rem;
		display: inline-block;
	}
	
	.sharePath li span {
		display: block;
		font-size: 0.3rem;
		font-weight: 600;
	}
	
	.shareParts {
		width: 70%;
		margin: 0 auto;
		padding: .5rem 0;
	}
	
	.shareParts li {
		width: 31%;
		display: inline-block;
		text-align: center;
	}
	
	.shareParts li span {
		display: block;
		font-size: 0.3rem;
		font-weight: 600;
	}
	
	.cancle {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		border: 1px solid #ddd;
		font-size: .8rem;
	}
	.bottom_load {
		height: 3rem;
		background: #fdfdfd;
		overflow: hidden;
		line-height: 3rem;
		text-align: center;
		font-size: .7rem;
		color: #A9ACB1;
	}
	.ipIcon{height: .5rem;vertical-align: middle;}
</style>