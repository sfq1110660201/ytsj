<template>
	<div style="">
		<section class="form-horizontal bottomLine" role="form">
			<div class="form-group">
				<p class="col-sm-2 col-xs-2 textLeft control-label" for="password4">用户:</p>
				<div class="col-sm-10 col-xs-10 uploadImgContent">
					杭州妙妈
				</div>
			</div>
			<div class="form-group">
				<p class="col-sm-2 col-xs-2 textLeft control-label" for="password4">医图ID:</p>
				<div class="col-sm-10 col-xs-10 uploadImgContent">
					211324564789
				</div>
			</div>
		</section>
		<section class="form-horizontal" role="form">
			<div class="form-group">
				<p class="col-sm-2 col-xs-2 textLeft control-label" for="password4">企业LOGO:</p>
				<div class="col-sm-10 col-xs-10 uploadImgContent">
					<img class="ipLogo" src="/static/img/(1)_03.png"/>
					<div class="upLoadImg">
						<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、jif;图片不可大于2M</p>
						<input type="button" class="btn btn-default" value="选择图片"/>
						<p class="form-control-static warned">*图片不符合要求</p>
					</div>
				</div>
			</div>
			<div class="form-group marginRepair">
				<p class="col-sm-2 col-xs-2 textLeft control-label"> </p>
				<div class="col-sm-2 col-xs-2">
					<input type="button" class="btn btn-default form-control colorRepair" value="保存"/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.form-horizontal{padding-left: 82px;}
	.bottomLine{margin-bottom: 20px;border-bottom: 1px solid #e6e9ea;}
	.control-label{padding-top: 0;}
	.infoShow{
		padding: 20px 100px;
		border-bottom: 1px solid #e6e9ea;
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
	.marginRepair{margin-top: 40px;}
	.colorRepair{background: #6dc5a3!important;color: #fff!important;}
</style>