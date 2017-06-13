<template>
	<div class="addContent">
		<section class="addModel">
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label" >密码:</p>
					<div class="col-sm-5 col-xs-5">
						<input type="password"  class="form-control" placeholder="请输入您的密码"/>
						<p class="form-control-static warned">*名称检测已被注册，请检测使用新名称</p>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label" >医图号logo:</p>
					<div class="col-sm-10 col-xs-10 uploadImgContent">
						<img class="ipLogo" src="/static/img/(1)_03.png"/>
						<div class="upLoadImg">
							<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、jif;图片不可大于2M</p>
							<input type="button" class="btn btn-default" value="选择图片"/>
							<p class="form-control-static warned">*图片不符合要求</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label" >二维码:</p>
					<div class="col-sm-10 col-xs-10 uploadImgContent">
						<img class="ipLogo" src="/static/img/(1)_03.png"/>
						<div class="upLoadImg">
							<p class="upLoadImgDescription">二维码图片要求清晰，最大5M，200*200像素</p>
							<input type="button" class="btn btn-default" value="选择图片"/>
							<p class="form-control-static warned">*图片不符合要求</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label" >医图号简介:</p>
					<div class="col-sm-5 col-xs-5">
						<textarea class="form-control textarea"></textarea>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label" >医图号描述:</p>
					<div class="col-sm-2 col-xs-2">
		    			<select class="form-control">
							<option >163.com</option>
							<option >qq.com</option>
							<option >162.ocm</option>
						</select>
					</div>
					<div class="col-sm-2 col-xs-2">
		    			<select class="form-control">
							<option >163.com</option>
							<option >qq.com</option>
							<option >162.ocm</option>
						</select>
					</div>
				</div>
				<div class="form-group marginRepair">
					<p class="col-sm-2 col-xs-2 textLeft control-label"> </p>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="提交"/>
					</div>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="返回"/>
					</div>
				</div>
			</form>
		</section>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.addContent{
		padding-left: 82px;
		.addModel{
			overflow: hidden;
			.form-horizontal{
				.form-group{
					
				}
			}
		}
	}
	.warned{color: #f8534c;}
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
		color: #b0b0b0;
	}
	.textarea{height: 130px;resize: none;}
	.form-group{margin-bottom: 20px;}
	.marginRepair{margin-top: 40px;}
	.paddingRepair{background: #6dc5a3!important;color: #fff!important;}
</style>