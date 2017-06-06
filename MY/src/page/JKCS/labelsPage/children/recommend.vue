<template>
	<div class="shoplist_container" >
		<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :auto-fill='bool' ref="loadmore">
			<ul style="" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="5">
				<div v-show='bool' >{{searchValue}}</div>
				<router-link to=""  tag='li' v-for="recommend in recommends" @click.native="goParagraph(recommend)" class="shop_li" >
					<hgroup class="shop_right">
						<header class="shop_detail_header">
							<h4 class="" class="shop_title  premium">{{recommend.title}}</h4>
						</header>
						<p class="fee_distance" :style="{'margin-top':recommend.marginTop}">
							<section class="fee">
								<!--<img :src="recommend.ipPic" class="ipIcon">-->
								<span>{{recommend.ipName}} </span>
								<span class="segmentation">|</span>
								<span style="">&nbsp;&nbsp;{{recommend.views}}&nbsp;阅读</span>
								<span class="segmentation">|</span>
								<span>&nbsp;&nbsp;{{recommend.time}}</span>
								<!--<span @click.stop="shareInfo()">分享</span>-->
							</section>
						</p>
					</hgroup>
					<section v-if="screenWidth">
						<img :src="recommend.src" class="shop_img" style="">
					</section>
				</router-link>

			</ul>
			<div class="bottom_load" v-html='loadContent'>
				<!--<img class='loadImg'  src='../../../../static/img/loading01.gif'/>-->
			</div>
			<div slot="top" class="mint-loadmore-top">
				<span class="topload" v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
				<span class="topload" v-show="topStatus === 'loading'" v-text="load"></span>
			</div>
		</mt-loadmore>
		<!--弹出窗-->
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
	</div>
</template>

<script>
	import { Popup } from 'mint-ui'
	var wx = require('weixin-js-sdk');
	
	export default {
		data() {
			return {
				screenWidth: true,
				recommends: [],
				// loading :false
				topStatus: '',
				bottomStatus: "",
				load: "",
				bool: false,
				allLoaded: false,
				popupVisible: false,
				wid: 0,
				loading: false,
				start: 0,
				listData: [],
				loadContent: "<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>",
				listValue:"",
				isloadMore: 0, //判断让loadMore方法不再调用接口
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
				this.loadContent="<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>";
				this.isloadMore = 0;
				this.recommends = [];
				this.start=0;
				this.searchValue="";
				var href=window.location.href.split('#')[0];
				this.requestLink=href;//请求SDKurl
				this.weiChatLink="https://ip.lotusdata.com/wx/share/app/baby";//分享链接url
				
				this.getToken();
			})
		},
		components: {
			Popup
		},
		props:['searchValue'],
		methods: {
			reSetList(){
				//debugger
				//console.log(this.searchValue)
				if(this.searchValue!=""){//对用户搜索关键字进行接口调用
					this.loadContent="<img style='display: block; width: 5.5rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;'  src='/static/MY/img/loading.gif'/>";
					this.recommends=[];
					this.isloadMore = 0
					this.start=0;
					this.listData=[];
					this.getListData(this.searchValue)
				}
			},
			getToken() {
				this.$http.get("https://api.lotusdata.com/v1/buser/token", {
					params: {
						username: "uuapp.li@qq.com",
						password: "123123",
						refreshtoken: 0
					}
				}).then(
					function(res) {
						var TOKEN = res.data.token;
						localStorage.setItem("TOKEN", 'JWT ' + TOKEN)
						this.getWechatSDK();
						this.getListData();
					},
					function() {
						console.log("数据请求失败")
					}
				)
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
				var TOKEN = localStorage.getItem("TOKEN")
				//console.log(TOKEN)
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
						this.listData = listData
						//console.log(listData)
						if(this.listData != null) {
							for(var i = 0; i < listData.length; i++) {
								if(listData[i].Pic.indexOf("http") != -1) {//列表图片路径完整
									this.recommends.push({
										title: listData[i].Title,
										ipName: listData[i].Ipname,
										views: listData[i].Views,
										src: listData[i].Pic,
										articleId: listData[i].Articleid,
										//ipPic:listData[i].Ippic
										marginTop:(listData[i].Title.length>=13) ? '0.82rem': '1.4rem',
										time:listData[i].CreateDate.substr(5,5)
									})

								} else {
									this.recommends.push({//列表图片路径不完整
										title: listData[i].Title,
										ipName: listData[i].Ipname,
										views: listData[i].Views,
										src: "http://images.yitushijie.com/" + listData[i].Pic,
										articleId: listData[i].Articleid,
										//ipPic:listData[i].Ippic
										marginTop:(listData[i].Title.length>=13) ? '0.82rem': '1.4rem',
										time:listData[i].CreateDate.substr(5,5)
									})
								}
							}
						}else{//请求数据为null，已无更多数据
							this.isloadMore = 1; //不再调用接口
							this.loadContent = "已无更多数据";
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
				this.isloadMore = 0;
				this.recommends = [];
				this.start=0;
				this.searchValue="";
				this.getListData();
				this.$refs.loadmore.onTopLoaded(); //加载数据后需要对组件进行一些重新定位的操作。
			},
			handleTopChange(status) {
				//console.log(status)
				this.load = "正在刷新..."
				this.topStatus = status;
			},
			loadMore() {
				if(this.isloadMore == 0) {
					if(this.listData != null) {
						this.loading = true;
						setTimeout(() => {
							this.start += 20; //
							//alert(this.start)
							this.getListData(this.searchValue);
							//console.log(this.searchValue)
							this.loading = false;
						}, 1000);
					}
				}
			},
			shareInfo() {
				//console.log(this.$route.path) ///msite/recommend
				var wid = window.screen.width;
				this.wid = wid
				this.popupVisible = true
			},
			cancle() {
				this.popupVisible = false
			},
			goParagraph(recommend) { //存储文章id
				this.$router.push({path:"/JKCSparagraph/"+recommend.articleId})
				//sessionStorage.setItem("articleId", recommend.articleId);
				//console.log(recommend.articleId)
			}

		},
		watch: {
			searchValue:"reSetList"
		}
	}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
	.shoplist_container {
		background-color: #fff;
		/*padding-bottom: 2rem;*/
	}
	
	.shop_li {
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.35rem 0.4rem 0.35rem 0.6rem;
	}
	
	.shop_img {
		@include wh(4.6rem, 3.1rem);
		display: block;
		/*margin-right: 0.4rem;*/
	}
	
	.shop_right {
		flex: auto;
		.shop_detail_header {
			@include fj;
			align-items: center;
			.shop_title {
				width: 9.5rem;
				color: #333;
				padding-top: .01rem;
				@include font(0.65rem, 0.65rem, 'PingFangSC-Regular');
				/*font-weight: 700;*/
				line-height: .8rem;
			}
		}
		.fee_distance {
			/*margin-top: 0.82rem;*/
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
	
	.topload,
	.bottomload {
		color: #A9ACB1;
		font-size: .6rem;
	}
	
	.mint-loadmore-text {
		color: #A9ACB1;
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
		/*font-weight: 600;*/
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
		/*font-weight: 600;*/
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
	/*.loadImg{display: block; width: 4rem;height: 3.5rem;margin: 0 auto;margin-top: -0.5rem;}*/
</style>