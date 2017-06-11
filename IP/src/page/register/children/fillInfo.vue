<template>
	<div>
		<section class="stepRegister">
			<div class="firstStep">
				<div class="step activeBake">1</div>
				<div class="littleWord activeColor">注册账号</div>
			</div>
			<span class="line1 lineLight"></span>
			<div class="secStep">
				<div class="step activeBake">2</div>
				<div class="littleWord activeColor">填写资料</div>
			</div>
			<span class="line2 "></span>
			<div class="thirdStep">
				<div class="step ">3</div>
				<div class="littleWord">注册完成</div>
			</div>
		</section>
		<!--<div id="mainregiste">-->
			<section class="mainregiste addingRepair">
				<div class="mainStep">
					<span class="stepTitle">主题信息登记</span>
					<span class="lineGray"></span>
				</div>
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>企业名称</label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder=""/>
							<p class="form-control-static explain">请与营业执照名称保持一致，审核通过后不可修过</p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>医图号描述</label>
						<div class="col-lg-2">
				    			<select class="form-control">
									<option >163.com</option>
									<option >qq.com</option>
									<option >162.ocm</option>
								</select>
				    		<!--</div>-->
						</div>
						<div class="col-lg-2">
				    			<select class="form-control">
									<option >163.com</option>
									<option >qq.com</option>
									<option >162.ocm</option>
								</select>
				    		<!--</div>-->
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" > </label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder="详细地址"/>
							<!--<p class="form-control-static explain">请与营业执照名称保持一致，审核通过后不可修过</p>-->
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>营业执照注册号</label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder=""/>
							<p class="form-control-static explain">输入15营业执照注册号或18位统一社会信用代码</p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>营业执照扫描件</label>
						<div class="col-lg-10 uploadImgContent">
							<img class="ipLogo" src="/static/img/(1)_03.png"/>
							<div class="upLoadImg">
								<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、jif;图片不可大于2M</p>
								<input type="button" class="btn btn-default" value="选择图片"/>
								<p class="form-control-static warned">*图片不符合要求</p>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>企业LOGO</label>
						<div class="col-lg-10 uploadImgContent">
							<img class="ipLogo" src="/static/img/(1)_03.png"/>
							<div class="upLoadImg">
								<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、jif;图片不可大于2M</p>
								<input type="button" class="btn btn-default" value="选择图片"/>
								<p class="form-control-static warned">*图片不符合要求</p>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>经营范围</label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder=""/>
							<p class="form-control-static explain">请与营业执照名称保持一致，审核通过后不可修过</p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>行业领域</label>
						<div class="col-lg-2">
				    			<select class="form-control">
									<option >163.com</option>
									<option >qq.com</option>
									<option >162.ocm</option>
								</select>
				    		<!--</div>-->
						</div>
						
					</div>
				</form>
			</section>
			<section class="mainregiste">
				<div class="mainStep">
					<span class="stepTitle">运营者信息登记</span>
					<span class="lineGray2"></span>
				</div>
				<form class="form-horizontal" role="form">
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>身份证姓名</label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder=""/>
							<p class="form-control-static explain">请与营业执照名称保持一致，审核通过后不可修过</p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>证件号码</label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder=""/>
							<p class="form-control-static explain"></p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>证件照片</label>
						<div class="col-lg-10 uploadImgContent">
							<img class="ipLogo" src="/static/img/(1)_03.png"/>
							<div class="upLoadImg">
								<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、jif;图片不可大于2M</p>
								<input type="button" class="btn btn-default" value="选择图片"/>
								<p class="form-control-static warned">*图片不符合要求</p>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>手机号码</label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder=""/>
							<p class="form-control-static explain"></p>
						</div>
					</div>
					<div class="form-group">
						<label class="col-lg-2 control-label" ><span class="roundLight">●&nbsp;</span>联系邮箱</label>
						<div class="col-lg-10">
							<input type="text"  class="form-control" placeholder=""/>
							<p class="form-control-static agreement"><input type="checkbox" name="" /><router-link to=""  class="toAgreeMent">&nbsp;&nbsp;同意《医图视界链健康数据链AI平台》</router-link></p>
						</div>
					</div>
					<p class="next">
						<router-link to="/register/fillInfo" tag='li' class="tagli">下一步</router-link>
					</p>
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

			}

	}
</script>

<style lang="scss" scoped>
	.stepRegister {
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
	#mainregiste{
		overflow-y: scroll;
		top: 120px;
		width: 915px;
		margin: 0 auto;
	}
	.addingRepair{padding-top: 120px;}
	.mainregiste {
		/*position: relative;*/
		top: 120px;
		/*background: #fff;*/
		width: 915px;
		/*height: 300px;*/
		/*border: 1px solid #C7C7C7;*/
		/*background: #fff;*/
		margin: 0 auto;
		.mainStep{
			overflow: hidden;
			margin-bottom:40px;
			span{
				float: left;
			}
		}
		.stepTitle{
			border-bottom: 2px solid #4781ea;
			padding-bottom: 10px;
			font-size: 20px;
		}
		.lineGray{
			border-bottom: 2px solid #C7C7C7;
			height: 40px;
    		width: 792px;
		}
		.lineGray2{
			border-bottom: 2px solid #C7C7C7;
			height: 40px;
    		width: 772px;
		}
		
	}

	.lineLight{
		border-bottom: 2px solid #4781ea!important;
	}
	.activeBake {
		color: #4781ea!important;
		border: 2px solid #4781ea!important;
	}
	
	.activeColor {
		color: #4781ea!important;
	}
	.roundLight{
		color: #4781ea!important;
		/*font-size: 25px;*/
		
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
	input::-webkit-input-placeholder{
		color: #C7C7C7
	}
	input:-moz-placeholder{
		color: #C7C7C7
	}
	input::-moz-placeholder{
		color: #C7C7C7
	}
	input:-ms-input-placeholder {
		color: #C7C7C7
	}
	.form-group{
		margin-bottom: 30px;
		.control-label{
			text-align: left;
		}
	}
	.warned{color: #f8534c;}
	.explain{color: #C7C7C7;}
	.agreement{
		
		margin-top: 30px;
		.toAgreeMent{
			color: #4781ea;
		}
		
	}
	.uploadImgContent{overflow: hidden;}
	.ipLogo{
		float: left;
		width: 133px;
		height: 133px;
	}
	.upLoadImg{
		float: left;
		margin-left: 15px;
	}
	.upLoadImgDescription{
		margin-bottom: 77px;
		color: #C7C7C7;
	}
	.next{
		/*position: relative;*/
		/*top: 165px;*/
		height: 50px;
		width: 400px;
		text-align: center;
		line-height: 50px;
		border: 2px solid #4781ea;
		margin: 50px auto 100px;
		/*margin-bottom: 100px;*/
		.tagli{
			font-size: 25px;
			color: #4781ea;
		}
	}
</style>