<template>
	<div class="addContent">
		<section class="addModel">
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<label class="col-lg-2 control-label" >密码:</label>
					<div class="col-lg-5">
						<input type="password"  class="form-control" placeholder="请输入您的密码"/>
						<p class="form-control-static warned">*名称检测已被注册，请检测使用新名称</p>
					</div>
				</div>
				<div class="form-group">
					<label class="col-lg-2 control-label" >医图号logo:</label>
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
					<label class="col-lg-2 control-label" >二维码:</label>
					<div class="col-lg-10 uploadImgContent">
						<img class="ipLogo" src="/static/img/(1)_03.png"/>
						<div class="upLoadImg">
							<p class="upLoadImgDescription">二维码图片要求清晰，最大5M，200*200像素</p>
							<input type="button" class="btn btn-default" value="选择图片"/>
							<p class="form-control-static warned">*图片不符合要求</p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-lg-2 control-label" >医图号简介:</label>
					<div class="col-lg-5">
						<textarea class="form-control textarea"></textarea>
						<!--< type="password"  id="password4" class="form-control" placeholder="请输入您的密码"/>-->
					</div>
				</div>
				<div class="form-group">
					<label class="col-lg-2 control-label" >医图号描述:</label>
					<div class="col-lg-2">
						<!--<div class="input-group">-->
			    			<select class="form-control">
								<option >163.com</option>
								<option >qq.com</option>
								<option >162.ocm</option>
							</select>
			    		<!--</div>-->
					</div>
					<div class="col-lg-2">
						<!--<div class="input-group">-->
			    			<select class="form-control">
								<option >163.com</option>
								<option >qq.com</option>
								<option >162.ocm</option>
							</select>
			    		<!--</div>-->
					</div>
				</div>
				<div class="form-group marginRepair">
					<label class="col-md-2 control-label"> </label>
					<div class="col-md-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="提交"/>
					</div>
					<div class="col-md-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="返回"/>
					</div>
				</div>
			</form>
			<!--<div class="addModelLeft">医图号名称</div>
			<div class="addModelRight"></div>-->
		</section>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.addContent{
		/*margin-top: 87px;*/
		/*padding-top: 20px;*/
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