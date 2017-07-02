<template>
	<div class="recoverKeywords" :style="{height:het+'px'}">
		<header class="recoverHeader">
			<span class="recover left bord">找回密码</span>
			<span class="reset right">重置密码</span>
		</header>
		<div class="tipContainer">
			<div class="littleTip" v-if="isTipShow">{{tipWord}}</div>
		</div>
		
		<section>
			<input maxlength="11" type="text" v-model.trim="phoneNum" placeholder="验证手机号" />
			<input type="text" placeholder="验证码" v-model.trim="Txt"/>
			<span class="getTxt" @click="getTxt">获取验证码</span>
			<button class="nextBtn" @click="goNextPage">下一步</button>
		</section>
	</div>
</template>

<script>
    
    export default {
        data(){
            return{
                het:0,
                phoneNum:"",
                token:"",
                isTipShow:false,
                tipWord:"",
                Txt:"",
            }
        },
        mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight-115; //屏幕可视区域高	
				this.getVerificationPicToken();
			})
		},
        components: {
           
        },
        methods:{
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
						sessionStorage.setItem("token",this.token)
					},
					function() {
						console.log("获取TOKEN失败")
					}
				)
			},
        	getTxt() {//更改手机获取验证码
				if((/^1(3|4|5|7|8)\d{9}$/.test(this.phoneNum))) {
					this.isTipShow=true;
					this.tipWord="验证码已发送，请查收"
					this.$http.post("https://api.lotusdata.com/v1/sms/send", {}, {
					params: {
						phone: this.phoneNum,
						sendtype: "passreset",
					},
					headers: { 'Authorization': this.token }
					}).then(
						function(res) {
							console.log(res.data.message)
						},
						function() {
							console.log("数据请求失败")
						}
					)
				}else{
					this.isTipShow=true;
					this.tipWord="请重新输用户手机号"
				}
				
			},
        	goNextPage() { //匹配手机验证码
				if(this.Txt != "") {
					this.isTipShow=false;
					var userInfo={
						"phone": this.phoneNum,
    					"vercode": this.Txt
					}
					this.$http.post("https://api.lotusdata.com/ip/v1/reg/phoneinfo", userInfo, {
						headers: { 'Authorization': this.token }
					}).then(
						function(res) {
							console.log(res)
							if(res.data.code=='0'){
								this.$router.push({path:"/register/resetKeywords"})
								//sessionStorage.setItem("phoneNum",this.phoneNum)
								sessionStorage.setItem("setResettoken",res.data.data)
							}else{
								this.isTipShow=true;
								this.tipWord="验证失败"
							}
						},
						function() {
							console.log("数据匹配失败")
						}
					)
				}else{
					this.isTipShow=true;
					this.tipWord="请输入验证码"
				}

			},
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
		.tipContainer{
			width: 200px;
			height: 25px;
			margin: 20px auto 0;
			.littleTip{
				width: 200px;
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
			
			border: 1px solid #d1d1d1;
			position: relative;
			padding-bottom: 20px;
			background: #fff;
			input{
				border: 0;
				display: block;
				height: 69px;
				width: 100%;
				padding: 0 10px 0 20px;
				font-size: 20px;
				border-bottom: 1px solid #d1d1d1;
			}
			.getTxt{
				position: absolute;
				right: 0;
				top: 69px;
				height: 69px;
				border-left: 1px solid #d1d1d1;
				line-height: 69px;
				font-size: 20px;
				padding: 0 15px;
				color: #4781ea;
			}
			.nextBtn{
				display: block;
				width: 120px;
				margin: 0 auto;
				color: #fff;
				background:#4781ea ;
				padding: 5px 0;
				margin-top: 40px;
				border-radius: 3px;
			}
		}
	}
	
	
</style>