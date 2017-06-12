<template>
	<div>
		<div class="editTitle">
			<input class="editTitleIpt" type="text" placeholder="标题  （5-30字）" style="display: block;height: 75px;width: 100%;font-size: 25px;padding-left: 25px;"/>
		</div>
		<div id="editor-container">
			<div id="editor-trigger">
				
			</div>
			<!--<p><b>以下是编辑器的内容：</b></p>-->
			<!--<p>{{ editorContent }}</p>-->
		</div>
		<p class="publishTitle">图文封面</p>
		<form class="form-horizontal" role="form">
			<div class="form-group">
				<!--<label class="col-lg-2 control-label text_left" >医图号logo:</label>-->
				<div class="col-lg-8 uploadImgContent">
					<img class="ipLogo" src="/static/img/(1)_03.png"/>
					<div class="upLoadImg">
						<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、jif;图片不可大于2M</p>
						<input type="button" class="btn btn-default" value="选择图片"/>
						<p class="form-control-static warned">*图片不符合要求</p>
					</div>
				</div>
			</div>
			
			
			<!--<div class="form-group marginRepair">
				<label class="col-md-2 control-label"> </label>
				<div class="col-md-2">
					<input type="button" class="btn btn-default form-control paddingRepair" value="提交"/>
				</div>
				<div class="col-md-2">
					<input type="button" class="btn btn-default form-control paddingRepair" value="返回"/>
				</div>
			</div>-->
		</form>
		<p class="publishTitle">来源内容</p>
		<div><input type="radio" name="type" id="" value="原创" />原创</div>
		<div><input type="radio" name="type" id="" value="转载" />转载</div>
	</div>
</template>

<script>
	import 'src/plugins/wangEditor.js'
	import 'src/style/wangEditor.css'
    export default {
        data(){
            return{
                het:0,
                editorContent: '',
            }
        },
        mounted() {
			var self = this;
            // 创建编辑器
            var editor = new wangEditor('editor-trigger');
            editor.onchange = function () {
                // onchange 事件中更新数据
                self.editorContent = editor.$txt.html();
            };
            editor.create();
		},
        components: {
           
        }
        
    }
</script>

<style>
	/*@import 'src/style/wangEditor';*/
	.editTitle{
		height: 75px;
		border:1px solid #ccc;
	}
	#editor-trigger {
        height: 564px;
    }
    .publishTitle{
    	padding: 30px 0 25px 0;
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
		color: #b0b0b0;
	}
	.warned{color: #f8534c;}
	.text_left{
		text-align: left!important;
	}
</style>