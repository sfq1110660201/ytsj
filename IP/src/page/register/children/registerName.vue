<template>
	<div :style="{height:het+'px'}">
		<section class="stepRegister">
			<div class="firstStep">
				<div class="step activeBake">1</div>
				<div class="littleWord activeColor">注册账号</div>
			</div>
			<span class="line1 lineLight"></span>
			<div class="secStep">
				<div class="step ">2</div>
				<div class="littleWord ">填写资料</div>
			</div>
			<span class="line2 "></span>
			<div class="thirdStep">
				<div class="step ">3</div>
				<div class="littleWord">注册完成</div>
			</div>
		</section>
		<div class="littleTip">
			<p  class="tipContainer" v-if="isTipShow" v-text="tipWord"></p >
		</div>
		<section class="primaryregiste">

			<div class="singleIofo">
				<span>电子邮箱</span>
				<input type="text" v-model.trim="mailName" @blur="" placeholder="作为登录用户名" />
			</div>
			<div class="singleIofo">
				<span>设定密码</span>
				<input type="password" v-model.trim="password1" maxlength="15" placeholder="支持字母+数字（不支持特殊符号，长度6-15位）" />
			</div>
			<div class="singleIofo">
				<span>确认密码</span>
				<input type="password" v-model.trim="password2" maxlength="15" @blur="" placeholder="支持字母+数字（不支持特殊符号，长度6-15位）" />
			</div>
			<div class="singleIofo">
				<span>手机号码</span>
				<input type="text" v-model.trim="phoneNumber" placeholder="作为绑定手机" />
			</div>
			<div class="singleIofo">
				<span>短信验证码</span>
				<input type="text" v-model.trim="Txt" style="width: 380px;" />
				<span class="getTxt" @click="getTxt">获取验证码</span>
			</div>
		</section>
		<p class="next">
			<router-link to="" tag='li' class="tagli" @click.native="goNext">下一步</router-link>
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				het: 0,
				mailName: '', //电子邮件
				password1: "", //密码1
				password2: "", //密码2
				phoneNumber: "", //电话号码
				postphone:"",//发送时的电话号码
				Txt: "", //验证码
				isTipShow: false,
				tipWord: "",

			}
		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight - 115; //屏幕可视区域高	
			})
		},
		methods: {
			getMailName() {
				//console.log(this.mailName)
				if(this.mailName != "") {
					var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
					if(myreg.test(this.mailName)) {
						this.isTipShow=false;
						this.testEmailExist();
					} else if(!myreg.test(this.mailName)) {
						this.isTipShow=true;
						this.tipWord="邮箱格式不符合规范"
					}
				}
			},
			testEmailExist(){
				var TOKEN = localStorage.getItem("token")
				var data = {
					"filed": "email",
					"data": this.mailName
				}
				this.$http.post("https://api.lotusdata.com/ip/v1/reg/checkdata", data, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var isRepeatNum = res.data.data;
						if(isRepeatNum == 1) { //已注册
							this.isTipShow=true;
							this.tipWord="名称检测已被注册， 请使用新邮箱"
						} else if(isRepeatNum == 0) { //未注册
							this.isTipShow=false;
							this.tipWord=""
							this.enturePassword();
						}

					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			
			enturePassword(){//检测输入密码
				if(this.password1==""){
					this.isTipShow=true;
					this.tipWord="请输入空缺密码"
				}else if(this.password2==""){
					this.isTipShow=true;
					this.tipWord="请输入空缺密码"
				}else if(this.password1!="" && this.password2!=""){
					if(this.password1!=this.password2){
						this.isTipShow=true;
						this.tipWord="检测到两处密码不相同，请重新填写"
					}else if(this.password1==this.password2){
						if(this.password1.length<6){
							this.isTipShow=true;
							this.tipWord="密码长度不符规范"
						}else if(this.password1.length>=6){
							this.isTipShow=false;
							console.log("所有验证已完成")
							this.sendInfo();
						}
					}
				}
			},
			sendInfo(){
				var TOKEN = localStorage.getItem("token")
				var data = {
					"email" : this.mailName,
					"passw" : this.password2,
					"phone" : this.phoneNumber,
					"vercode" : this.Txt
				}
				this.$http.post("https://api.lotusdata.com/ip/v1/reg/baseregister", data, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						console.log(res)
						if(res.data.code==0){
							sessionStorage.setItem("registerId",res.data.data)
							sessionStorage.setItem("phoneNumber",this.phoneNumber)
							sessionStorage.setItem("mailName",this.mailName)
							sessionStorage.setItem("password",this.password2)
							this.$router.push({ path: "/register/fillInfo" })
							
						}
					},
					function() {
						console.log("数据传输失败")
					}
				)
			},
			getTxt(){//检测手机号码
				if(/^1(3|4|5|7|8)\d{9}$/.test(this.phoneNumber)){
					this.isTipShow=false;
					this.testPhoneExist(this.phoneNumber);	
				} else {
					this.isTipShow=true;
					this.tipWord="手机号码不符合规范，请重新输入"
				}
				
			},
			testPhoneExist(phone){
				var TOKEN = localStorage.getItem("token")
				var data = {
					"filed": "phone",
					"data": phone
				}
				this.$http.post("https://api.lotusdata.com/ip/v1/reg/checkdata", data, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						var isRepeatNum = res.data.data;
						if(isRepeatNum == 1) { //已注册
							this.isTipShow=true;
							this.tipWord="检测该手机号已被注册， 请重新填写"
						} else if(isRepeatNum == 0) { //未注册
							this.isTipShow=false;
							this.sendTxt();
						}

					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			sendTxt(){//手机号码无误获取验证码
				this.postphone=this.phoneNumber
				var TOKEN = localStorage.getItem("token")
				this.$http.post("https://api.lotusdata.com/v1/sms/send", {}, {
					params: {
						phone: this.postphone,
						sendtype: "register",
					},
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						console.log("短信验证码" + res.data.message)
						this.isTipShow=true;
						this.tipWord="验证码已发送，请注意查收"
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			goNext(){//点击下一步验证
				//debugger
				if(this.phoneNumber!=""){
					this.isTipShow=false;
					if(this.Txt != "") {
						this.isTipShow=false;
						var TOKEN = localStorage.getItem("token")
						this.$http.post("https://api.lotusdata.com/v1/sms/codever", {}, {
							params: {
								phone: this.phoneNumber,
								code: this.Txt
							},
							headers: { 'Authorization': TOKEN }
						}).then(
							function(res) {
								//console.log(res)
								if(res.data.code=='0'){
									this.goNextPage()
								}else{
									console.log(this.phoneNumber)
									this.isTipShow=true;
									this.tipWord="验证码错误"
								}
							},
							function() {
								console.log("数据匹配失败")
							}
						)
					}else{
						this.isTipShow=true;
						this.tipWord="请填写验证码"
					}
				}else{
					this.isTipShow=true;
					this.tipWord="请填写注册手机号"
				}
			},
			goNextPage(){
				if(this.mailName==""){
					
					this.isTipShow=true;
					this.tipWord="请输入注册邮箱"
				}else{
					this.isTipShow=false;
					this.getMailName();
				}
			},
		},
		components: {

		}

	}
</script>

<style lang="scss" scoped>
	.stepRegister {
		width: 750px;
		height: 80px;
		overflow: hidden;
		position: relative;
		left: 167px;
		.firstStep {
			position: absolute;
			left: 0;
		}
		.line1 {
			position: absolute;
			left: 59px;
			display: block;
			width: 282px;
			height: 20px;
			border-bottom: 2px solid #C7C7C7;
		}
		.secStep {
			position: absolute;
			left: 320px;
		}
		.line2 {
			position: absolute;
			left: 380px;
			display: block;
			width: 282px;
			height: 20px;
			border-bottom: 2px solid #C7C7C7;
		}
		.thirdStep {
			position: absolute;
			left: 640px;
		}
	}
	
	.littleTip {
		width: 250px;
		height: 30px;
		margin: 35px auto 0;
		.tipContainer {
			width: 250px;
			height: 30px;
			text-align: center;
			line-height: 30px;
			border-radius: 2px;
			background: rgba(30, 103, 234, .6);
			color: #fff;
		}
	}
	
	.primaryregiste {
		top: 120px;
		background: #fff;
		width: 750px;
		border: 1px solid #C7C7C7;
		margin: 0px auto 50px;
		.singleIofo {
			height: 80px;
			border-bottom: 1px solid #C7C7C7;
			span,
			input {
				display: inline-block;
				font-size: 25px;
				line-height: 80px;
			}
			span {
				padding-left: 20px;
			}
			input {
				padding-left: 15px;
				height: 78px;
				margin-top: -4px;
				border: 0;
				width: 600px;
			}
			.getTxt {
				cursor: pointer;
				width: 200px;
				text-align: center;
				color: #4781ea;
				border-left: 1px solid #ddd;
			}
		}
	}
	
	.next {
		/*position: relative;*/
		top: 165px;
		height: 50px;
		width: 400px;
		text-align: center;
		line-height: 50px;
		border: 2px solid #4781ea;
		margin: 0 auto;
		.tagli {
			font-size: 25px;
			color: #4781ea;
		}
	}
	
	.lineLight {
		border-bottom: 2px solid #4781ea!important;
	}
	
	.activeBake {
		color: #4781ea!important;
		border: 2px solid #4781ea!important;
	}
	
	.activeColor {
		color: #4781ea!important;
	}
	
	.step {
		font-size: 20px;
		color: #C7C7C7;
		background: #fff;
		margin-left: 20px;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 36px;
		border-radius: 100%;
		border: 2px solid #C7C7C7;
	}
	
	.littleWord {
		font-size: 20px;
		margin-top: 10px;
		padding-left: 5px;
	}
	
	input::-webkit-input-placeholder {
		color: #C7C7C7
	}
	
	input:-moz-placeholder {
		color: #C7C7C7
	}
	
	input::-moz-placeholder {
		color: #C7C7C7
	}
	
	input:-ms-input-placeholder {
		color: #C7C7C7
	}
	/*定义提示动画*/
	
	/*.tipContainer.v-enter {
		animation: fadein .5s;
	}
	
	.tipContainer.v-leave {
		animation: fadeout .5s;
	}
	
	@keyframes fadein {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 0.6;
		}
	}
	
	@keyframes fadeout {
		0% {
			opacity: 0.6;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 0;
		}
	}*/
</style>