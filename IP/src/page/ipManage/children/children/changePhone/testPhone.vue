<template>
	<div class="testPhone">
		<section class="stepInfo">
			<div class="firstStep">
				<div class="step activeBake"></div>
				<div class="phoneWord activeColor">验证手机</div>
			</div>
			<span class="line1 "></span>
			<div class="secStep">
				<div class="step "></div>
				<div class="phoneWord ">修改手机</div>
			</div>
			<span class="line2 "></span>
			<div class="thirdStep">
				<div class="step "></div>
				<div class="phoneWord">完成</div>
			</div>
		</section>
		<section class="testContent">
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 control-label">验证手机号</p>
					<div class="col-sm-5 col-xs-5">
						<p class="form-control-static">{{userPhone}}</p>
						<span class="form-control-static warned">&nbsp;{{phoneTip}}</span>
					</div>
				</div>
				<div class="form-group" style="margin-bottom: 50px;">
					<p class="col-sm-2 col-xs-2 control-label" style="margin-right: 15px;">验证手机号</p>
					<div class="input-group col-md-5">
						<!--<span class="input-group-addon">$</span>-->
						<input type="text" class="form-control" v-model.trim="Txt" placeholder="输入验证码" />
						<span class="input-group-addon btn" @click="getTxt">发送验证码</span>
						
					</div>
					
				</div>
				<div class="form-group marginRepair">
					<label class="col-sm-2 col-xs-2 control-label"> </label>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control save" @click="goNext" value="下一步" />
					</div>
				</div>

			</form>

		</section>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				phoneTip:"",
				userPhone: "",
				phoneNum:"",
				Txt:"",
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				var phoneNum=localStorage.getItem("phoneNum")
				this.phoneNum=phoneNum
				this.userPhone = phoneNum.substr(0, 3) + "****" + phoneNum.substr(7, 4)

			})
		},
//		computed: mapGetters({ //vuex获取值用户手机号码
//			phoneNum: "getPhone"
//		}),
		methods: {
			
			getTxt() {//更改手机获取验证码
				this.phoneTip=""
				console.log(this.phoneNum)
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.post("https://api.lotusdata.com/v1/sms/send", {}, {
					params: {
						phone: this.phoneNum,
						sendtype: "passreset",
					},
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						console.log(res.data.message)
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			goNext() {//匹配验证码
				if(this.Txt!=""){
					var TOKEN = localStorage.getItem("TOKEN")
					var userInfo={
						"phone": this.phoneNum,
    					"vercode": this.Txt
					}
					this.$http.post("https://api.lotusdata.com/ip/v1/reg/phoneinfo", userInfo, {
						headers: { 'Authorization': TOKEN }
					}).then(
						function(res) {
							console.log(res)
							if(res.data.code=='0'){
								//调用vuex方法存储resettoken
								this.$store.commit('setResettoken',res.data.data)
								this.$router.push({ path: "/ipContent/userInfo/accountSecurity/changeAnotherPhone" })
							}else{
								this.phoneTip="验证码错误"
							}
						},
						function() {
							console.log("数据匹配失败")
						}
					)
				}else if(this.Txt==""){
					this.phoneTip="验证码不能为空"
				}
				
			},
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.testPhone {
		.stepInfo {
			position: relative;
			/*margin-left: 100px;*/
			/*overflow: hidden;*/
			.firstStep {
				position: absolute;
				left: 0;
				.step {
					margin-left: 20px;
					width: 20px;
					height: 20px;
					border-radius: 100%;
					border: 1px solid #e4e7e9;
				}
			}
			.line1 {
				position: absolute;
				left: 40px;
				display: block;
				width: 300px;
				height: 10px;
				border-bottom: 1px solid #e4e7e9;
			}
			.secStep {
				position: absolute;
				left: 320px;
				.step {
					margin-left: 20px;
					width: 20px;
					height: 20px;
					border-radius: 100%;
					border: 1px solid #e4e7e9;
				}
			}
			.line2 {
				position: absolute;
				left: 360px;
				display: block;
				width: 300px;
				height: 10px;
				border-bottom: 1px solid #e4e7e9;
			}
			.thirdStep {
				position: absolute;
				left: 640px;
				.step {
					margin-left: 20px;
					width: 20px;
					height: 20px;
					border-radius: 100%;
					border: 1px solid #e4e7e9;
				}
			}
		}
		.testContent {
			position: relative;
			width: 700px;
			top: 100px;
		}
	}
	
	.activeBake {
		background: #6dc5a3;
	}
	
	.phoneWord {
		margin-top: 10px;
	}
	
	.activeColor {
		color: #6dc5a3;
	}
	
	.form-group {
		margin-bottom: 30px;
	}
	
	.save {
		background: #6dc5a3!important;
		color: #FFF!important;
	}
	.warned{
		font-size: 13px;
	}
</style>