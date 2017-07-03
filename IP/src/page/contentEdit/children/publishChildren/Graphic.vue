<template>
	<div>
		
		<div id="div1" class="toolbar"></div>
		<!--<div style="padding: 5px 0; color: #ccc">中间隔离带</div>-->
		<div class="editTitle">
			<input class="editTitleIpt" v-model.trim="title" maxlength="30" type="text" placeholder="标题  （5-30字）" style="display: block;height: 75px;width: 100%;font-size: 25px;padding-left: 25px;" />
		</div>
    	<div id="div2" class="toolbar"> <!--可使用 min-height 实现编辑区域自动增加高度-->
        	<p>请输入内容</p>
    	</div>
    	
		<div id="editor-container">
			<div id="editorElem">
			</div>
		</div>
		<p class="publishTitle">图文封面</p>
		<form class="form-horizontal" role="form">
			<div class="form-group">
				<!--<label class="col-lg-2 control-label text_left" >医图号logo:</label>-->
				<div class="col-sm-8 col-xs-8 uploadImgContent">
					<img class="ipLogo" :src="imgOneSrc" />
					<div class="upLoadImg">
						<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、gif;图片不可大于2M</p>
						<a href="javascript:void(0);" class="uploadA btn btn-default">
							<span>选择图片</span>
							<form id="formOne">
								<input class="uploadIpt" type="file" name="Filedata" v-on:change="iptOneChange" />
							</form>
						</a>
						<p class="form-control-static warned" v-text="isImgTypeOne"></p>
					</div>
				</div>
			</div>
		</form>
		<p class="publishTitle">来源内容</p>
		<div class="radioIpt"><input type="radio" name="isproto" value="原创" v-model="checked"/>&nbsp;原创</div>
		<div class="radioIpt"><input type="radio" name="isproto" value="转载" v-model="checked"/>&nbsp;转载</div>
		<form class="form-horizontal" role="form">
			<div class="form-group marginRepair">
				<div class="col-sm-2 col-xs-2 right">
					<input type="button" class="btn btn-default form-control right" value="取消" />
				</div>
				<div class="col-sm-2 col-xs-2 right">
					<input type="button" class="btn btn-default form-control right" value="提交审核" />
				</div>
				<div class="col-sm-2 col-xs-2 right">
					<input type="button" class="btn btn-default form-control right" @click="" value="保存" />
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	//import 'src/plugins/wangEditor.js'
	//	import 'src/style/wangEditor.css'
	import E from 'wangeditor'
	export default {
		data() {
			return {
				het: 0,
				editorContent: '',
				title:"",
				imgOneSrc:"",
				isImgTypeOne:"",
				checked:true,
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.setWangEditor()
			})
		},
		components: {

		},
		methods: {
			setWangEditor() {
				var TOKEN = localStorage.getItem("TOKEN")
				var self = this;
				// 创建编辑器
				var editor = new E('#div1', '#div2')
				editor.customConfig.onchange = (html) => {
					self.editorContent = html
				}
	
				editor.customConfig.uploadImgServer = 'https://api.lotusdata.com/v1/file/editorupload'
				editor.customConfig.uploadFileName = 'Filedata'
				editor.customConfig.uploadImgHeaders = {
					'Authorization': TOKEN
				}
				editor.customConfig.uploadImgHooks = {
					before: function(xhr, editor, files) {
						console.log("before"+xhr)
					},
					success: function(xhr, editor, result) {
						console.log(xhr)
					},
					fail: function(xhr, editor, result) {
						console.log("fail"+xhr)
					},
					error: function(xhr, editor) {
						console.log(xhr)
						console.log(editor)
					},
				}
				editor.customConfig.withCredentials = false
				editor.create()
			},
			iptOneChange: function(e) { //判断并加载IP logo
				e.preventDefault();
				var files = e.target.files;
				var data = new FormData();
				data.append('avatar', files[0]);
				var imgFile = files[0];
				var imgType = imgFile.name.substring(imgFile.name.indexOf(".") + 1, imgFile.name.length); //获取图片格式
				var imgSize = imgFile.size; //获取图片大小
				//console.log(imgFile)
				if(imgType == "png" || imgType == "jpg" || imgType == "gif" || imgType == "jpeg") {
					//console.log(imgType)
					if(imgSize < 2 * 1024 * 1024) {
						this.isImgTypeOne = " ";
						this.sendimgOne();
					} else {
						this.isImgTypeOne = "*图片大小超出2M"
					}
				} else {
					this.isImgTypeOne = "*图片不符合要求"
				}
			},
			sendimgOne() {
				var token = localStorage.getItem("token") //获取token
				//console.log(TOKEN)
				var form = document.getElementById('formOne');
				var Filedata = new FormData(formOne);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': token }
				}).then(
					function(res) {
						var newSrc = res.data.data
						this.imgOneSrc = newSrc;

					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
		}

	}
</script>

<style lang="scss" scoped>
	/*@import 'src/style/wangEditor';*/
	
	.editTitle {
		height: 75px;
		/*border: 1px solid #ccc;*/
	}
	
	#editor-trigger {
		height: 564px;
	}
	
	.publishTitle {
		padding: 25px 0 20px 0;
	}
	
	.uploadImgContent {
		overflow: hidden;
	}
	
	.ipLogo {
		float: left;
		width: 133px;
		height: 133px;
	}
	
	.upLoadImg {
		float: left;
		margin-left: 15px;
	}
	
	.upLoadImgDescription {
		margin-bottom: 77px;
		color: #b0b0b0;
	}
	
	.warned {
		color: #f8534c;
	}
	
	.text_left {
		text-align: left!important;
	}
	
	.form-group {
		margin-bottom: 0;
	}
	
	.radioIpt {
		margin-bottom: 20px;
		font-size: 20px;
	}
	.toolbar{
		border: 1px solid #ccc;
	}
	#div2{height: 600px;}
	/*图片上传控件*/
	.uploadA {
		width: 100px;
		height: 30px;
		overflow: hidden;
		position: relative;
		/*line-height: 25px;*/
		#formOne .uploadIpt{
			/*display: inline-block;*/
			width: 100%;
			height: 100%;
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 999;
		}
		span {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 3px;
			left: 0;
			z-index: 666;
		}
	}
</style>