<template>
	<div class="changePhone">
		<section class="stepInfo">
			<div class="firstStep">
				<div class="step "></div>
				<div class="phoneWord ">验证手机</div>
			</div>
			<span  class="line1 "></span>
			<div class="secStep">
				<div class="step activeBake"></div>
				<div class="phoneWord activeColor">修改密码</div>
			</div>
			<span  class="line2 "></span>
			<div class="thirdStep">
				<div class="step "></div>
				<div class="phoneWord">完成</div>
			</div>
		</section>
		<section class="testContent">
			<form class="form-horizontal" role="form" >
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label" >新密码</label>
					<div class="col-sm-5 col-xs-5">
						<input type="password" v-model.trim="newPassword1"  class="form-control" placeholder="请输入您的密码"/>
						<!--<p class="form-control-static warned">*名称检测已被注册，请检测使用新名称</p>-->
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 col-xs-2 control-label" >确认新密码</label>
					<div class="col-sm-5 col-xs-5">
						<input type="password" v-model.trim="newPassword2"  class="form-control" placeholder="请输入您的密码"/>
						<p class="form-control-static warned" v-text="emailRight">&nbsp;</p>
					</div>
				</div>
				<div class="form-group marginRepair">
					<label class="col-sm-2 col-xs-2 control-label"> </label>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control save" @click="save" value="保存"/>
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
					emailRight:"",
					newPassword1:"",
					newPassword2:"",
				}
			},
			components: {

			},
			mounted() {
				this.$nextTick(function() {
					console.log(this.resettoken)

				})
			},
			computed: mapGetters({ //vuex获取值用户手机号码
				resettoken: "getResettoken"
			}),
			methods: {
				save(){
					//this.$router.push({path:"/ipContent/userInfo/accountSecurity/completeMail"})
					
					 
					if(this.newPassword1==""){
						this.emailRight="请填写新密码";
					}else if(this.newPassword2==""){
						this.emailRight="请填写新密码";
					}else if(this.newPassword1!=this.newPassword2){
						this.emailRight="检测到两处密码不相同，请重新填写";
					}else if(this.newPassword1==this.newPassword2 && this.newPassword1!=""){
						
						if(this.newPassword1.length<=15 && this.newPassword1.length>5){
							this.emailRight=" "
                 			this.sendPassword();
                 			console.log("success")
           				}else if(this.newPassword1.length<6){
           					this.emailRight="密码长度最小为6位";
           				}else{
           					this.emailRight="新密码长度过长，请填写新密码";
           				}
					}
				},
				testPasswordExist(){
					var TOKEN = localStorage.getItem("TOKEN")
					var data = {
						"filed": "email",
						"data": this.newMail1
					}
					this.$http.post("https://api.lotusdata.com/ip/v1/reg/checkdata", data, {
						headers: { 'Authorization': TOKEN }
					}).then(
						function(res) {
							var isRepeatNum = res.data.data;
							if(isRepeatNum == 1) { //已存在
								this.emailRight="名称检测已被注册， 请使用新邮箱"
							} else if(isRepeatNum == 0) { //不存在
								this.sendEmail();
								this.emailRight=""
							}
	
						},
						function() {
							console.log("数据请求失败")
						}
					)
				},
				sendPassword(){//更换新邮箱
					var TOKEN = localStorage.getItem("TOKEN")
					var postInfo = {
						    "resettoken": this.resettoken,
						    "type": "password",
						    "newdata": this.newPassword1
						}
					this.$http.post("https://api.lotusdata.com/ip/v1/reg/resetdata", postInfo, {
						headers: { 'Authorization': TOKEN }
					}).then(
						function(res) {
							console.log(res)
							if(res.data.code==0){
								this.$router.push({ path: "/ipContent/userInfo/accountSecurity/completePassword" })
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
.changePhone{
	.stepInfo{
		position:relative;
		.firstStep{
			position: absolute;
			left: 0;
			.step{
				margin-left: 20px;
				width: 20px;
				height: 20px;
				border-radius: 100%;
				border: 1px solid #e4e7e9;
			}
		}
		.line1{
			position: absolute;
			left: 40px;
			display: block;
			width: 300px;
			height: 10px;
			border-bottom: 1px solid #e4e7e9;
		}
		.secStep{
			position: absolute;
			left: 320px;
			.step{
				margin-left: 20px;
				width: 20px;
				height: 20px;
				border-radius: 100%;
				border: 1px solid #e4e7e9;
			}
		}
		.line2{
			position: absolute;
			left: 360px;
			display: block;
			width: 300px;
			height: 10px;
			border-bottom: 1px solid #e4e7e9;
		}
		.thirdStep{
			position: absolute;
			left: 640px;
			.step{
				margin-left: 20px;
				width: 20px;
				height: 20px;
				border-radius: 100%;
				border: 1px solid #e4e7e9;
			}
		}
	}
	.testContent{
		position: relative;
		width: 700px;
		top: 100px;
	}
}
.activeBake{background:#6dc5a3 ;}
.phoneWord{margin-top: 10px;}
.activeColor{color: #6dc5a3 ;}
.form-group{margin-bottom: 30px;}
.save{background: #6dc5a3!important;color: #FFF!important;}
</style>