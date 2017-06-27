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
				<div class="phoneWord activeColor">修改手机</div>
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
					<label class="col-lg-2 control-label" >新邮箱:</label>
					<div class="col-lg-5">
						<input type="text"  class="form-control" placeholder="请输入您的密码"/>
						<!--<p class="form-control-static warned">*名称检测已被注册，请检测使用新名称</p>-->
					</div>
				</div>
				<div class="form-group">
					<label class="col-lg-2 control-label" >确认新邮箱:</label>
					<div class="col-lg-5">
						<input type="text"  class="form-control" placeholder="请输入您的密码"/>
						<!--<p class="form-control-static warned">*名称检测已被注册，请检测使用新名称</p>-->
					</div>
				</div>
				<div class="form-group marginRepair">
					<label class="col-md-2 control-label"> </label>
					<div class="col-md-2">
						<input type="button" class="btn btn-default form-control save" @click="save" value="保存"/>
					</div>
				</div>

			</form>

		</section>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					
				}
			},
			components: {

			},
			mounted() {
				this.$nextTick(function() {
					

				})
			},
			methods: {
				save(){
					this.$router.push({path:"/ipContent/userInfo/accountSecurity/completeMail"})
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