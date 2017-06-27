<template>
	<div class="testPhone">
		<section class="stepInfo">
			<div class="firstStep">
				<div class="step activeBake"></div>
				<div class="phoneWord activeColor">验证手机</div>
			</div>
			<span  class="line1 "></span>
			<div class="secStep">
				<div class="step "></div>
				<div class="phoneWord ">修改手机</div>
			</div>
			<span  class="line2 "></span>
			<div class="thirdStep">
				<div class="step "></div>
				<div class="phoneWord">完成</div>
			</div>
		</section>
		<section class="testContent">
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<label class="col-md-2 control-label">验证手机号:</label>
					<div class="col-md-5">
						<p class="form-control-static">132135564654</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-md-2 control-label" style="margin-right: 15px;">验证手机号:</label>
					<div class="input-group col-md-5">
			    		<!--<span class="input-group-addon">$</span>-->
			    		<input type="text" class="form-control" placeholder="输入验证码"/>
			    		<span class="input-group-addon btn">发送验证码</span>
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
					this.$router.push({path:"/ipContent/userInfo/accountSecurity/changeAnotherMail"})
				}
			},
			watch: {

			}
	}
</script>

<style lang="scss" scoped>
.testPhone{
	.stepInfo{
		position:relative;
		/*margin-left: 100px;*/
		/*overflow: hidden;*/
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