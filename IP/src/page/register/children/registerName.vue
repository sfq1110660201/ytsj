<template>
	<div >
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
		<section class="primaryregiste">
			<div class="singleIofo">
				<span>电子邮箱</span>
				<input type="text" id="" placeholder="作为登录用户名" />
			</div>
			<div class="singleIofo">
				<span>设定密码</span>
				<input type="password" id="" placeholder="支持字母+数字（不支持特殊符号，最大长度10位）" />
			</div>
			<div class="singleIofo">
				<span>确认密码</span>
				<input type="password" id="" placeholder="支持字母+数字（不支持特殊符号，最大长度10位）" />
			</div>
			<div class="singleIofo">
				<span>手机号码</span>
				<input type="text" id="" placeholder="作为绑定手机" />
			</div>
			<div class="singleIofo">
				<span>短信验证码</span>
				<input type="text" id="" placeholder="" style="width: 380px;" />
				<span class="getTxt">获取验证码</span>
			</div>
		</section>
		<p class="next">
			<router-link to="/register/fillInfo" tag='li' class="tagli">下一步</router-link>
		</p>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					het: 0,
				}
			},
			mounted() {
				this.$nextTick(function() {
					this.het = window.screen.availHeight-215; //屏幕可视区域高	
				})
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
	
	.primaryregiste {
		/*position: relative;*/
		top: 120px;
		background: #fff;
		width: 750px;
		/*height: 300px;*/
		border: 1px solid #C7C7C7;
		margin: 50px auto 50px;
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
</style>