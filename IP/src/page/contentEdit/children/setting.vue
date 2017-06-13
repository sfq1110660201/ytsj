<template>
	<div class="settingContainer">
		<div class="settingHeader">
			<div class="settingHeaderL">
				我发表的
			</div>
			<div class="settingHeaderR"></div>
		</div>
		<form class="form-horizontal" role="form">
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 control-label textLeft" ><span class="activeColor">●&nbsp;</span>医图号名称</p>
					<div class="col-sm-5 col-xs-5">
						<input type="text"  class="form-control" placeholder="请输入您的密码"/>
						<p class="form-control-static warned">*名称检测已被注册，请检测使用新名称</p>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 control-label textLeft" ><span class="activeColor">●&nbsp;</span>医图号logo</p>
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
					<p class="col-sm-2 col-xs-2 control-label textLeft" ><span class="activeColor">●&nbsp;</span>二维码</p>
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
					<p class="col-sm-2 col-xs-2 control-label textLeft" ><span class="activeColor">●&nbsp;</span>医图号简介</p>
					<div class="col-sm-5 col-xs-5">
						<textarea class="form-control textarea"></textarea>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 control-label textLeft" ><span class="activeColor">●&nbsp;</span>医图号描述</p>
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
					<label class="col-sm-2 col-xs-2 control-label textLeft"> </label>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="提交"/>
					</div>
					<!--<div class="col-md-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="返回"/>
					</div>-->
				</div>
			</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			this.$nextTick(function() {

			})
		},
		components: {

		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.settingContainer{
		.settingHeader {
			overflow: hidden;
			.settingHeaderL {
				float: left;
				width: 70px;
				border-top: 2px solid #6dc5a3;
				padding-top: 30px;
				color: #6dc5a3;
			}
			.settingHeaderR {
				float: left;
				width: 886px;
				border-top: 2px solid #ced2d9;
				padding-top: 30px;
				/*text-align: right;*/
			}
		}
	}
	.form-horizontal{margin-top: 40px;}
	.textarea{height: 130px;resize: none;}
	.form-group{margin-bottom: 20px;}
	.marginRepair{margin-top: 40px;}
	.paddingRepair{background: #6dc5a3!important;color: #fff!important;}
</style>