<template>
	<div class="loginContainer" v-show="loginShow" :style="{height:het+'px',width:wid+'px'}">
		<div class="containerModel">
			<section class="left loginL">
				<p class="welcome">欢迎来到医图视界</p>
				<p class="tip">用医学美图构建健康数据大视界!用循证医学解构健康医疗大数据!</p>
				<p class="tip">用健康教育打通用户链接新思路!</p>
				<router-link to="/register/registerName" class="btn btn-default register">注 册</router-link>
			</section>
			<section class="right loginR">
				<p class="center headTip">登 陆</p>
				<div class="iptCon">
					<div class="left">
						<img class="logIcon" src="/static/IP/img/userName.png" />
						<span class="iptItem">邮&nbsp;&nbsp;&nbsp;箱</span>
						<input class="iptL" type="text" v-focus v-model.trim="userName"  />
					</div>
					<div class="right">
						<p class="warned infoTip" v-if="isUserName" v-text="userNameText"></p>
						<p v-if="usernameRight"><img class="isright" src="/static/IP/img/right.png" /></p>
					</div>
				</div>
				<div class="iptCon">
					<div class="left">
						<img class="logIcon" src="/static/IP/img/passwordIcon.png" />
						<span class="iptItem">密&nbsp;&nbsp;&nbsp;码</span>
						<input class="iptLPassword" v-model="password" type="password" maxlength="15" />
					</div>
					<div class="right">
						<p class="warned infoTip" v-if="isPassword" v-text="passwordText"></p>
						<p v-if="passwordRight"><img class="isright" src="/static/IP/img/right.png" /></p>
					</div>
				</div>
				<div class="iptCon">
					<div class="left">
						<img class="logIcon" src="/static/IP/img/istrue.png" />
						<span class="iptItem">验证码</span>
						<input class="iptLIstrue" type="text" v-model.trim="verificationValue" @keyup.enter="submit"/>
						<span class="warned Tip" v-if="isVerification" v-text="verificationText"></span>
						<img v-if="verificationRight" class="isverificationRight" src="/static/IP/img/right.png" />
					</div>
					<div class="right backRepair">
						<!--<p class="warned infoTip" v-if="isPassword" v-text="passwordText"></p>-->
						<p><img class="verification" :src="verificationPic" @click="reLoad" /></p>
					</div>
				</div>
				<router-link to="/register/recoverKeywords" tag="p" class="text-right">忘记密码</router-link>
				<router-link to="" tag="p" class="submit" @click.native="submit">登 录</router-link>
			</section>

		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import Vue from 'vue'
	// 注册一个全局自定义指令 v-focus
	Vue.directive('focus', {
		//将绑定元素插入到 DOM 中
		inserted: function(el) {
			el.focus();
		}
	})
	export default {
		data() {
			return {
				loginShow:false,
				het: 0,
				wid: 0,
				//用户名
				userName: "",
				userNameText: "请输入用户名", //最长为8个汉字
				isUserName: false,
				usernameRight: false,
				//密码
				password: "",
				passwordText: "",
				isPassword: false,
				passwordRight: false,
				//验证码
				verificationValue: "",
				verificationPic: "", //验证码图片
				verificationId: "", //验证码图片Id
				verificationText: "",
				isVerification: false,
				verificationRight: false,
				//获取验证码token
				token: "",
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight; //屏幕可视区域高
				this.wid = window.screen.availWidth; //屏幕可视区域高
				var TOKEN=localStorage.getItem("TOKEN");
				var emailName=localStorage.getItem("emailName");
				var enterpriseId=localStorage.getItem("enterpriseId");
				var phoneNum=localStorage.getItem("phoneNum");
				var token=localStorage.getItem("token");
				if(TOKEN!=undefined && emailName!=undefined && enterpriseId!=undefined && phoneNum!=undefined && token!=undefined){
					
					this.$router.push({ path: "/ipContent/yiTu/myYiTu", query: { enterpriseId: enterpriseId } })
				}else{
					this.loginShow=true;
					this.getVerificationPicToken();
				}
			})
		},
		computed:mapState({//vuex存值
		  	//msg:state => state.msg//function(state){return satate.msg}
		}),
		methods: {
			getVerificationPicToken() { //获取验证码token（非用户token）
				this.$http.get("https://api.lotusdata.com/v1/buser/token", {
					params: {
						username: "uuapp.li@qq.com",
						password: "123123",
						refreshtoken: 0
					}
				}).then(
					function(res) {
						this.token = "JWT " + res.data.token;
						localStorage.setItem("token",this.token)
						this.getVerificationPic()
					},
					function() {
						console.log("获取TOKEN失败")
					}
				)
			},
			getVerificationPic() { //获取验证码图片
				this.$http.get("https://api.lotusdata.com/v1/captcha/create", {
					headers: { 'Authorization': this.token }
				}).then(
					function(res) {
						var verificationId = res.data.data.CaptchaId;
						//console.log(verificationId)
						this.verificationId = verificationId
						this.verificationPic = "https://api.lotusdata.com/captcha/" + verificationId + ".png"
					},
					function() {
						console.log("初次获取验证码失败")
					}
				)
			},
			reLoad() { //点击验证码重新获取新验证码
				this.verificationPic = "https://api.lotusdata.com/captcha/" + this.verificationId + ".png?" + "reload=" + (new Date()).getTime();
				//console.log(this.verificationPic)
				//console.log(this.verificationId)
			},
			submit() {
				//console.log(this.userName,this.password,this.verificationValue)
				if(this.userName == '') {
					this.userNameText = "请输入用户名"
					this.isUserName = true;
					this.isPassword = false;
					this.isVerification = false;
				} else if(this.password == '') {
					this.passwordText = "请输入密码"
					this.isPassword = true;
					this.isUserName = false;
					this.isVerification = false;
				} else if(this.verificationValue == '') {
					this.verificationText = "请输入图片验证码"
					this.isVerification = true;
					this.isUserName = false;
					this.isPassword = false;
				} else if(this.userName != '' && this.password != '' && this.verificationValue != '') {
					this.testVerification();
				}
			},
			testVerification() { //匹配验证码
				this.$http.post("https://api.lotusdata.com/v1/captcha/verify", {}, {
					params: {
						captchaId: this.verificationId,
						captcha: this.verificationValue,
					},
					headers: { 'Authorization': this.token }
				}).then(
					function(res) {
						var res = res.data.code
						if(res == 0) { //验证成功
							//console.log(res);
							this.isVerification = false;
							this.testNameAndPssword();
							this.getVerificationPicToken();

						} else { //验证失败
							//console.log(res);
							this.verificationText = "验证码输入不正确"
							this.isVerification = true;
							this.getVerificationPicToken();
							this.verificationValue = ""
							this.isPassword = false;
						}

					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			testNameAndPssword() { //匹配用户名和密码
				this.$http.get("https://api.lotusdata.com/v1/buser/token", {
					params: {
						username: this.userName,
						password: this.password,
						refreshtoken: 0
					}
				}).then(
					function(res) {
						if(res.data.code == 0 && res.data.data != "") {
							//console.log(res.data)
							this.isPassword = false;
							this.isVerification = false;
							var TOKEN = res.data.token;
							var enterpriseId = res.data.data.Enterpriseid;
							localStorage.setItem("TOKEN", 'JWT ' + TOKEN)
							localStorage.setItem("enterpriseId",enterpriseId)
							localStorage.setItem("emailName",res.data.data.Email)
							localStorage.setItem("phoneNum",res.data.data.Phone)
							this.$router.push({ path: "/ipContent/yiTu/myYiTu", query: { enterpriseId: enterpriseId } })
						} else {
							this.password = "";
							this.passwordText = "密码与用户名不匹配"
							this.isPassword = true;
						}
					},
					function() {
						console.log("获取TOKEN失败")
					}
				)
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.loginContainer {
		min-height: 900px;
		min-width: 1585px;
		background: url(/static/IP/img/back.jpg) no-repeat;
		background-size: cover;
		position: relative;
		.containerModel {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, .5);
			overflow: hidden;
			padding: 150px 50px;
			.loginL {
				padding: 165px 0;
				width: 835px;
				.welcome {
					font-size: 100px;
					color: #fff;
					font-weight: 100;
					margin-bottom: 50px;
				}
				.tip {
					font-size: 25px;
					color: #8b8c8c;
					word-spacing: 25px;
				}
				.register {
					background: #1e67ea;
					color: #fff;
					border: 0;
					padding: 8px 50px;
					font-size: 25px;
					margin-top: 55px;
				}
			}
			.loginR {
				width: 645px;
				padding: 90px 80px 80px;
				background: rgba(43, 106, 217, .8);
				.headTip {
					font-size: 35px;
					color: #fff;
					font-weight: 100;
					margin-bottom: 40px;
				}
				.iptCon {
					padding: 60px 0 10px 10px;
					border-bottom: 1px solid #fff;
					overflow: hidden;
					.logIcon {
						width: 21px;
						height: 27px;
						vertical-align: text-bottom;
					}
					.iptItem {
						display: inline-block;
						color: #fff;
						font-size: 25px;
						font-weight: 100;
						margin-left: 15px;
						width: 75px;
					}
					.iptL {
						background: transparent;
						color: #fff;
						font-size: 22px;
						margin-left: 10px;
					}
					.iptLPassword {
						display: inline-block;
						background: transparent;
						color: #fff;
						font-size: 22px;
						margin-left: 10px;
						width: 180px;
					}
					.iptLIstrue {
						display: inline-block;
						background: transparent;
						color: #fff;
						font-size: 22px;
						margin-left: 10px;
						width: 90px;
					}
					.infoTip {
						position: relative;
						top: 13px;
						font-size: 13px;
					}
					.Tip {
						position: relative;
						/*top: 8px;*/
						font-size: 13px;
					}
					.isright {
						width: 30px;
						height: 30px;
						position: relative;
						top: 5px;
					}
					.backRepair {
						background: #fff;
						display: inline-block;
					}
					.backRepair p {
						margin-bottom: 0;
					}
					.verification {
						width: 100px;
						position: relative;
						top: 0px;
						cursor: pointer;
					}
					.isverificationRight {
						margin-left: 20px;
						width: 30px;
						height: 30px;
						position: relative;
						top: -5px;
						/*cursor: pointer;*/
					}
				}
				.text-right {
					/*text-align: right;*/
					color: #fff;
					margin-top: 20px;
					cursor: pointer;
				}
				.submit {
					margin-top: 20px;
					text-align: center;
					padding: 10px 0;
					background: #0a89f7;
					border-radius: 5px;
					color: #fff;
					font-size: 25px;
					font-weight: 100;
					cursor: pointer;
				}
			}
		}
	}
</style>