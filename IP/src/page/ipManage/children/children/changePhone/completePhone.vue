<template>
	<div class="completePhone">
		<section class="stepInfo">
			<div class="firstStep">
				<div class="step "></div>
				<div class="phoneWord ">验证手机</div>
			</div>
			<span  class="line1 "></span>
			<div class="secStep">
				<div class="step "></div>
				<div class="phoneWord ">修改手机</div>
			</div>
			<span  class="line2 "></span>
			<div class="thirdStep">
				<div class="step activeBake"></div>
				<div class="phoneWord activeColor">完成</div>
			</div>
		</section>
		<section class="testContent activeColor">
			新手机修改成功！网页将于{{backNum}}秒后跳转登录页
		</section>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					emailName:"",
					backNum:5
				}
			},
			components: {

			},
			mounted() {
				this.$nextTick(function() {
					this.backLogin();

				})
			},
			methods: {
				backLogin(){
					var that=this;
					var timefunc=setInterval(function(){
						that.backNum--;
						if(that.backNum==0){
							clearInterval(timefunc);
							that.$router.push({ path: "/login" })
						}
					},1000)
				}
			},
			watch: {

			}
	}
</script>

<style lang="scss" scoped>
.completePhone{
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
</style>