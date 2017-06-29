<template>
	<div class="changePhone">
		<section class="stepInfo">
			<div class="firstStep">
				<div class="step "></div>
				<div class="phoneWord ">验证手机</div>
			</div>
			<span class="line1 "></span>
			<div class="secStep">
				<div class="step activeBake"></div>
				<div class="phoneWord activeColor">修改手机</div>
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
					<p class="col-sm-2 col-xs-2 control-label">新手机号码</p>
					<div class="col-sm-5 col-xs-5">
						<input type="text" v-model.trim="newPhone" class="form-control" placeholder="输入新手机号" />
						<p class="form-control-static warned">{{phoneTip}}</p>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 control-label" style="margin-right: 15px;">验证手机号</p>
					<div class="input-group col-sm-4 col-xs-4">
						<input type="text" class="form-control" v-model.trim="Txt" placeholder="输入验证码" />
						<span class="input-group-addon btn" @click="getTxt">发送验证码</span>

					</div>
					<p class="form-control-static warned"> </p>
				</div>
				<div class="form-group marginRepair">
					<label class="col-sm-2 col-xs-2 control-label"> </label>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control save" @click="testPhone" value="保存" />
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
				newPhone: "",
				Txt: "",
				phoneTip: " "
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				//console.log(this.resettoken)
			})
		},
		computed: mapGetters({ //vuex获取值用户手机号码
			resettoken: "getResettoken"
		}),
		methods: {
			getTxt() {
				
				//debugger
				if((/^1(3|4|5|7|8)\d{9}$/.test(this.newPhone))) {
					this.phoneTip = " "
					var TOKEN = localStorage.getItem("TOKEN")
					this.$http.post("https://api.lotusdata.com/v1/sms/send", {}, {
						params: {
							phone: this.newPhone,
							sendtype: "passreset",
						},
						headers: { 'Authorization': TOKEN }
					}).then(
						function(res) {
							console.log("短信验证码" + res.data.message)
						},
						function() {
							console.log("数据请求失败")
						}
					)
				} else {
					this.phoneTip = "*手机输入格式有误"
				}
			},
			testPhone() { //匹配新手机验证码
				if(this.Txt != "") {
					var TOKEN = localStorage.getItem("TOKEN")
					this.$http.post("https://api.lotusdata.com/v1/sms/codever", {}, {
						params: {
							phone: this.newPhone,
							code: this.Txt
						},
						headers: { 'Authorization': TOKEN }
					}).then(
						function(res) {
							console.log(res)
							//debugger
							if(res.data.code=='0'){
								this.changePhone()
							}
						},
						function() {
							console.log("数据匹配失败")
						}
					)
				}

			},
			changePhone(){//更换新手机号码
				var TOKEN = localStorage.getItem("TOKEN")
				var postInfo = {
					    "resettoken": this.resettoken,
					    "type": "phone",
					    "newdata": this.newPhone
					}
				this.$http.post("https://api.lotusdata.com/ip/v1/reg/resetdata", postInfo, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						console.log(res)
						if(res.data.code==0){
							this.$router.push({ path: "/ipContent/userInfo/accountSecurity/completePhone" })
						}
					},
					function() {
						console.log("数据匹配失败")
					}
				)
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.changePhone {
		.stepInfo {
			position: relative;
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
	
	.warned {
		font-size: 13px;
	}
</style>