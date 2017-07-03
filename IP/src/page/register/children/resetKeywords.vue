<template>
	<div class="recoverKeywords" :style="{height:het+'px'}">
		<header class="recoverHeader">
			<span class="recover left ">找回密码</span>
			<span class="reset right bord">重置密码</span>
		</header>
		<div class="tipContainer">
			<div class="littleTip" v-if="isTipShow">{{tipWord}}</div>
		</div>
		<section>
			<input maxlength="15" type="password" placeholder="重置密码" v-model.trim="newPassword1" />
			<input maxlength="15" type="password" placeholder="确认密码" v-model.trim="newPassword2" />
			<button class="nextBtn" @click="enture">确认</button>
		</section>
		<!--跳转模态窗-->
		<section class="registerSucceed" :style="{width: modelWid+'px', height: modelHet +'px'}" v-if="isModelShow">
			<div class="goPageWindow box-shadow">
				<div class="lineOne">
					<img class="checkRight" src="/static/img/636574c6e136a799b7309a525894222.png" /> 新密码设置成功
				</div>
				<router-link class="toLogin" to="/login" tag="p">转跳至登录页面</router-link>
				<!--<p class="explain">系统将在<span class="explain">{{backtime}}</span>秒后自动转跳至用户中心，如果没有请点击
					<router-link :to="({ path: '/ipContent/yiTu/myYiTu', query: { enterpriseId: enterpriseId } })">手动跳转</router-link>
				</p>-->
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					het: 0,
					isTipShow: false,
					tipWord: "",
					newPassword1: "",
					newPassword2: "",
					modelWid:0,
					modelHet:0,
					isModelShow:false,
				}
			},
			mounted() {
				this.$nextTick(function() {
					this.het = window.screen.availHeight - 115; //屏幕可视区域高	
					this.modelWid = window.screen.availWidth;
					this.modelHet = window.screen.availHeight;
				})
			},
			methods: {
				enture() {
					if(this.newPassword1 == "") {
						this.isTipShow = true;
						this.tipWord = "请填写新密码";
					} else if(this.newPassword2 == "") {
						this.isTipShow = true;
						this.tipWord = "请填写新密码";
					} else if(this.newPassword1 != this.newPassword2) {
						this.isTipShow = true;
						this.tipWord = "检测到两处密码不相同，请重新填写";
					} else if(this.newPassword1 == this.newPassword2 && this.newPassword1 != "") {

						if(this.newPassword1.length <= 15 && this.newPassword1.length > 5) {
							this.isTipShow = false;
							this.sendPassword();
							console.log("success")
						} else if(this.newPassword1.length < 6) {
							this.isTipShow = true;
							this.tipWord = "密码最小长度为6位";
						}
					}
				},
				sendPassword() { //更换新密码
					var token = sessionStorage.getItem("token")
					var setResettoken = sessionStorage.getItem("setResettoken")
					console.log(this.newPassword1)
					var postInfo = {
						"resettoken": setResettoken,
						"type": "password",
						"newdata": this.newPassword1
					}
					this.$http.post("https://api.lotusdata.com/ip/v1/reg/resetdata", postInfo, {
						headers: {
							'Authorization': token
						}
					}).then(
						function(res) {
							console.log(res)
							if(res.data.code == 0) {
								this.isModelShow=true;
							}
						},
						function() {
							console.log("数据匹配失败")
						}
					)
				}
			},
			components: {

			}

	}
</script>

<style lang="scss" scoped>
	.recoverKeywords {
		width: 396px;
		margin: 0 auto;
		/*background: #31B0D5;*/
		.recoverHeader {
			overflow: hidden;
			.recover,
			.reset {
				font-size: 25px;
				padding-bottom: 15px;
			}
			.recover {
				margin-left: 10px;
			}
			.reset {
				margin-right: 10px;
			}
			.bord {
				color: #4781ea;
				border-bottom: 2px solid #4781ea;
			}
		}
		.tipContainer {
			width: 260px;
			height: 25px;
			margin: 20px auto 0;
			.littleTip {
				width: 260px;
				height: 25px;
				line-height: 25px;
				font-size: 16px;
				color: #fff;
				background: #4781ea;
				margin: 20px auto 0;
				border-radius: 2px;
				opacity: .7;
				text-align: center;
			}
		}
		section {
			/*margin-top: 20px;*/
			border: 1px solid #d1d1d1;
			position: relative;
			padding-bottom: 20px;
			background: #fff;
			input {
				border: 0;
				display: block;
				height: 69px;
				width: 100%;
				padding: 0 10px 0 20px;
				font-size: 20px;
				border-bottom: 1px solid #d1d1d1;
			}
			/*.getTxt{
				position: absolute;
				right: 0;
				top: 69px;
				height: 69px;
				border-left: 1px solid #d1d1d1;
				line-height: 69px;
				font-size: 20px;
				padding: 0 15px;
				color: #4781ea;
			}*/
			.nextBtn {
				display: block;
				width: 120px;
				margin: 0 auto;
				color: #fff;
				background: #4781ea;
				padding: 5px 0;
				margin-top: 40px;
				border-radius: 3px;
			}
		}
		.registerSucceed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 666;
			background: rgba(255, 255, 255, .8);
			.goPageWindow {
				width: 550px;
				height: 435px;
				background: #fff;
				position: absolute;
				left: 50%;
				top: 40%;
				margin-left: -275px;
				margin-top: -200px;
				border-radius: 5px;
				padding: 25px;
				p {
					text-align: center;
					margin-top: 20px;
				}
				.lineOne {
					color: #1e67ea;
					font-size: 25px;
					text-align: center;
					margin-top: 150px;
					.checkRight {
						width: 30px;
						vertical-align: middle;
					}
				}
			}
			.agreeContainer {
				width: 700px;
				height: 400px;
				background: #fff;
				position: absolute;
				left: 50%;
				top: 40%;
				margin-left: -330px;
				margin-top: -180px;
				border: 5px solid #646464;
				overflow: hidden;
				.agreeHeader {
					overflow: hidden;
					padding: 5px 10px;
					background: #fbfbfb;
					border: 1px solid #eee;
					.right {
						cursor: pointer;
					}
				}
				.agreementList {
					padding: 10px 10px;
					overflow: hidden;
					overflow-y: scroll;
					height: 360px;
					p {
						font-size: 13px;
					}
				}
			}
			.box-shadow {
				-webkit-box-shadow: 0 0 20px #767879;
				-moz-box-shadow: 0 0 20px #767879;
				box-shadow: 0 0 20px #767879;
			}
		}
	}
	.toLogin{
		cursor: pointer;
	}
</style>