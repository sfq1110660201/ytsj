<template>
	<div class="detail_page" id="paragraph">
		<head-top :head-title="articleTitle">
			<span class="getBack" slot="back" @click="goBack(pathQuery)">
				<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" style="height: .9rem;">
	                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
	            </svg>
			</span>
		</head-top>
		<section id="scroll_section" class="scroll_container">
			<p class="pragraphTitle">{{articleTitle}}</p>
			<div class="paragraphExplain">
				<span class="time">{{articleTime}}</span>
				<span class="paragraphFrom">{{articlefrom}}</span>
				<!--<span class="browseCount">
        			<img src="/static/img/concern_03.png"/>
        			<i class="count">{{readCount}}</i>
        		</span>-->
			</div>
			<!--文章内容-->
			<section v-html="" class="markdown" v-html="articleParagraph">

			</section>
			<p class="paragraphLabel">
				<span class="labels" v-for="leabal in leabals">{{leabal.name}}</span>
			</p>
			<p class="resdCount" v-if="isRead">{{readCount}}&nbsp;阅读</p>
			<a class="contentIndex" v-if="isDoctorShow" style="display: block;" :href="locationhref">
				<div class="lineConttent">
					<span class="leftLines"></span>
					<span class="lineTitle">指导医生</span>
					<span class="rightLines"></span>
				</div>
				<p class="doctorImg" style="text-align: center;margin-top: 1rem;"><span class="repairSpan"><img style="width: 4rem;" :src="doctor.src" /></span></p>
				<p class="doctorName" style="text-align: center;">{{doctor.name}}</p>
				<p class="doctorPosition" style="text-align: center;font-size: .6rem;color: #adadad;margin-top: .3rem;">{{doctor.title}}&nbsp;&nbsp;{{doctor.position}}</p>
				<p class="hospital" style="text-align: center;font-size: .6rem;color: #adadad;margin-top: .3rem;">{{doctor.hospital}}</p>
				<img class="pointTip" src="/static/MY/img/btn_nav_JianTou@2x.png" />
			</a>
			<div class="contentIndex" v-if="iscontentIndex">
				<div class="photoContent">
					<img class="doctorImg" style="float: left;width: 4rem;" :src="weichattCode" />
					<div class="photoContent_R">
						<p class="doctorName ipName">{{articlefrom}}</p>
						<p class="ipInfo">{{ipInfo}}</p>
					</div>
				</div>
			</div>

		</section>
	</div>
</template>

<script>
	import headTop from 'src/components/header/head'
	var wx = require('weixin-js-sdk');

	export default {
		data() {
			return {
				articleTitle: '',
				articleTime: "",
				articlefrom: "",
				articleParagraph: "",
				readCount: "",
				leabals: [],
				doctor: {
					src: "",
					name: "",
					position: "",
					hospital: "",
					title: ""

				},
				weichattCode: "",
				ipInfo: "",
				isDoctorShow: false, //判断医生信息展示部分是否显示
				iscontentIndex:false,//判断ip简介部分是否显示
				isRead:false,
				locationhref: "###",
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
				pathQuery:"",//判断返回页面
			}
		},
		components: {
			headTop,
		},
		mounted() {
			this.$nextTick(() => {		
				this.pathQuery=this.$route.query
				//console.log(this.pathQuery)
				var href=window.location.href.split('#')[0];//http://localhost:8088/
				this.requestLink=href
				this.weiChatLink="https://ip.lotusdata.com/wx/share/article/"+this.$route.params.deviceId
				this.getToken(); //获取TOKEN
			})
		},
		computed: {

		},
		methods: {
			goBack(value){//判断返回前一页或首页
				//console.log(value)
				if(value.type=="share"){
					location.href=window.location.href.split('#')[0];
				}else{
					this.$router.go(-1);
				}
			},
			getToken() { //获取TOKEN
				this.$http.get("https://api.lotusdata.com/v1/buser/token", {
					params: {
						username: "uuapp.li@qq.com",
						password: "123123",
						refreshtoken: 0
					}
				}).then(
					function(res) {
						var TOKEN = res.data.token;
						localStorage.setItem("TOKEN2", 'JWT ' + TOKEN)
						this.getWechatSDK()
						this.getParagraphData()
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			getWechatSDK() { //获取微信SDK
				var TOKEN2 = localStorage.getItem("TOKEN2") //获取token
				//console.log(TOKEN2)
				console.log("requestLink:    "+this.requestLink)
				this.$http.post("https://api.lotusdata.com/v1/wx/jsconfig", {}, {
					params: {
						url: this.requestLink
					},
					headers: { 'Authorization': TOKEN2 }
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
			getParagraphData() { //加载文章详情
				var TOKEN2 = localStorage.getItem("TOKEN2") //获取token
				//通过路由文章ID
				//console.log(TOKEN2)
				var articleId = this.$route.params.deviceId
				this.$http.get("https://api.lotusdata.com/v1/article/" + articleId, {
					headers: { 'Authorization': TOKEN2 }
				}).then(
					function(res) {
						//头部信息
						var articleData = res.data.data
						//console.log(articleData)
						this.weiChatImgUrl=articleData.articledata.Ippic
						this.articleTitle = articleData.articledata.Title
						this.weiChatTitle=this.articleTitle
						this.articleTime = articleData.articledata.CreateDate.substr(0, 10)
						this.articlefrom = articleData.articledata.Ipname
						
						if(articleData.articledata.Views!=""){
							this.isRead=true
							this.readCount = articleData.articledata.Views
						}
						this.articleParagraph = articleData.articledata.Content
						//文章标签
						for(var i = 0; i < articleData.articletags.length; i++) {
							this.leabals.push({
								"name": articleData.articletags[i].Tagname
							})
						}
						//医生信息
						var isShow = articleData.doctorinfo.idPhoto
						if(isShow == "" || isShow == null) {
							this.isDoctorShow = false
						} else {
							this.isDoctorShow = true
							this.doctor.src = articleData.doctorinfo.idPhoto
							this.doctor.name = articleData.doctorinfo.name
							this.doctor.position = articleData.doctorinfo.dutyName
							this.doctor.title = articleData.doctorinfo.titleName
							this.doctor.hospital = articleData.doctorinfo.workingUnit
							this.locationhref = "http://ip.lotusdata.com/doctor/index/" + articleData.doctorinfo.id
						}
						//微信二维码
						if(articleData.articledata.Qrcode!=""){
							this.iscontentIndex=true
							this.weichattCode = articleData.articledata.Qrcode
							if(articleData.articledata.Ipsummary.length >= 40) {
								this.ipInfo = articleData.articledata.Ipsummary.substr(0, 40) + "..."
								this.weiChatDesc=this.ipInfo
							} else {
								this.ipInfo = articleData.articledata.Ipsummary;
								this.weiChatDesc=this.ipInfo
							}
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
						var titleValue=this.weiChatTitle;
						var linkValue=this.weiChatLink;
						console.log("linkValue:    "+linkValue)
						var descValue=this.weiChatDesc;
						var imgUrlValue=this.weiChatImgUrl;
						wx.ready(function() {
							wx.onMenuShareAppMessage({
								title: titleValue, // 分享标题
								link: linkValue, // 分享链接
								desc: descValue, // 分享描述
								imgUrl: imgUrlValue, // 分享图标
								success: function() {
									console.log('分享成功啦！');
								},
								cancel: function() {
									console.log('分享失败');
								}
							});
							wx.onMenuShareTimeline({
								title: titleValue, // 分享标题
								link: linkValue, // 分享链接
								desc: descValue, // 分享描述
								imgUrl: imgUrlValue, // 分享图标
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
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
	.detail_page {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fdfffe;
		z-index: 202;
		padding-top: 1.95rem;
		p,
		span {
			font-family: Helvetica Neue, Tahoma, Arial;
		}
	}
	.scroll_container {
		position: fixed;
		overflow-y: scroll;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 1.95rem .7rem 0 .7rem;
		/*overflow-y: auto;*/
		.paragraphExplain {
			font-size: .5rem;
			color: #B8BBBF;
			overflow: hidden;
			.paragraphFrom {
				color: steelblue;
				margin-left: 1rem;
			}
			.browseCount {
				float: right;
				img {
					width: .6rem;
				}
				.count {
					color: #B8BBBF;
				}
			}
		}
		.paragraphLabel {
			padding: .5rem 0;
			.labels {
				padding: .2rem .3rem;
				color: #666666;
				background: #eae8e8;
				font-size: .6rem;
				border-radius: 5px;
				margin-right: 1rem;
				/*white-space:nowrap;*/
				display: inline-block;
				margin-bottom: .5rem;
			}
		}
		.contentIndex {
			padding: .7rem 0;
			position: relative;
			.lineConttent {
				margin: 0 auto;
				width: 80%;
				span {
					display: inline-block;
					color: #888888;
				}
				.leftLines {
					float: left;
					width: 30%;
					height: 1px;
					border-top: .5px solid #8F8F94;
					margin-top: .8rem;
				}
				.rightLines {
					float: right;
					width: 30%;
					height: 1px;
					border-top: .5px solid #8F8F94;
					margin-top: .8rem;
				}
				.lineTitle {
					width: 40%;
					text-align: center;
					font-size: .7rem;
				}
			}
			.photoContent {
				overflow: hidden;
				padding: .3rem .6rem;
				border: 1px solid #eeeeee;
				border-radius: .2rem;
				.doctorImg {
					/*margin-top: .5rem;*/
					/*text-align: center;*/
					/*		    		float:left;*/
					img {
						width: 4rem;
					}
				}
				.photoContent_R {
					margin-left: .5rem;
					float: left;
					width: 65%;
					.doctorName {
						margin-top: .3rem;
					}
					.doctorName,
					.doctorPosition,
					.hospital {
						font-size: .6rem;
						/*text-align: center;*/
						color: #666666;
						margin-bottom: .2rem;
					}
				}
			}
		}
	}
	
	.markdown {
		font-size: .65rem;
		padding: .7rem 0;
		/*padding: 0 .7rem;*/
		color: #666;
	}
	
	.littleTip {
		margin-top: .3rem;
		font-size: .7rem;
		text-align: center;
		color: #09bb07;
		margin-bottom: .2rem;
		b {
			color: #09bb07;
		}
	}
	
	.pragraphTitle {
		margin: .2rem 0 .5rem
	}
	
	.ipName {
		color: #09bb07!important;
		font-weight: 600;
	}
	
	.ipInfo {
		font-size: .6rem;
		color: #adadad;
	}
	
	.pointTip {
		height: .8rem;
		position: absolute;
		right: 1rem;
		top: 6rem;
	}
	
	.resdCount {
		font-size: .6rem;
		color: #adadad;
	}
	
	.repairSpan {
		display: inline-block;
		width: 4rem;
		height: 4rem;
		border-radius: 100%;
		overflow: hidden;
	}
	.getBack{
			width: 1rem;
		    float: left;
		    margin-top: .5rem;
		    margin-left: .4rem;
	}
</style>