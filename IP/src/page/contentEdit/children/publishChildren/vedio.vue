<template>
	<div>
		<p class="publishTitle">标题</p>
		<input type="text" v-model.trim="title" class="iptContent" />
		<p class="publishTitle">上传语音</p>
		<div class="audioContainer">
			<audio id="audio" :src="audioSRC"  controls="controls" ref="abc">
				Your browser does not support the audio element.
			</audio>
			<span v-if="isUploading">正在上传...</span>
		</div>
		<p class="form-control-static warned" v-text="audioTip"></p>
		<a href="javascript:void(0);" class="uploadA btn btn-default marginTop paddingRepair">
			<span class="upLoadAudiospan" >上传语音</span>
			<form id="formTwo">
				<input class="uploadIpt" type="file" name="Filedata" v-on:change="iptAudioChange" />
			</form>
		</a>
		<p class="publishTitle">摘要概述</p>
		<textarea class="textarea" v-model.trim="textarea" placeholder="选填，如不填写会默认抓取正文前30个字"></textarea>
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
		<div class="radioIpt"><input type="radio" name="isproto" value="原创" v-model="checked" @change="getRadio0('原创')"/>&nbsp;原创&nbsp;&nbsp;&nbsp;&nbsp;</div>
		<div>{{fromEdit}}：<input class="editor" v-model.trim="editor" type="text" maxlength="6" /></div>
		<div class="agreement"><input type="checkbox" v-model="isAgreemnet" />&nbsp;医图视界提示：您应对自己上传的原创作品或转载作品的合法性负责，不得含有侵犯第三方知识产权的内容，否则，造成的法律责任由您全部负责！如若因此导致平台被追责的，平台有权依法向您行使追偿权。</div>
		<form class="form-horizontal" role="form">
			<div class="form-group marginRepair">
				<div class="col-sm-2 col-xs-2 right">
					<input type="button" class="btn btn-default form-control right paddingRepair" @click="cancle" value="取消" />
				</div>
				<div class="col-sm-2 col-xs-2 right">
					<input type="button" class="btn btn-default form-control right paddingRepair" @click="submit('1')" value="提交审核" />
				</div>
				<div class="col-sm-2 col-xs-2 right">
					<input type="button" class="btn btn-default form-control right paddingRepair" @click="" value="保存草稿" />
				</div>
			</div>
		</form>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				ipId: "",
				Articleid: "",
				het: 0,
				title: "",
				audioTip:"",//上传语音提示
				imgOneSrc: "",
				isImgTypeOne: "",
				checked: "原创",
				lebalIndex: 0,
				firstLebal: "生理阶段",
				secLebal: "",
				secMidLebal: "", //检索数组中是否已含所选标签
				choosingLebal: "",
				textarea: "",
				editor: "",
				isAgreemnet: false,
				fromEdit:"责任编辑",
				audioSRC:"",
				isUploading:false,
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.ipId = this.$route.query.ipId
				//console.log(this.$route.query)
				if(this.$route.query.Articleid) {
					this.Articleid = this.$route.query.Articleid;
					this.getTags();
					this.editArticle();
				} else {
					this.Articleid == "";
				}
			})
		},
		methods: {
			iptAudioChange: function(e) { //判断并加载IP logo
				e.preventDefault();
				var files = e.target.files;
				var data = new FormData();
				data.append('avatar', files[0]);
				var imgFile = files[0];
				//console.log(files)
				var imgType = imgFile.name.substring(imgFile.name.indexOf(".") + 1, imgFile.name.length); //获取图片格式
				var imgSize = imgFile.size; //获取图片大小
				if(imgType == "mp3" || imgType == "MP3") {
					if(imgSize < 10 * 1024 * 1024) {
						//debugger
						this.audioTip="";
						this.sendVoice();
					} else {
						this.audioTip = "文件大小超出10M"
					}
				} else {
					this.audioTip = "请选择MP3格式文件"
				}
			},
			sendVoice(){
				this.isUploading=true;
				var token = localStorage.getItem("token") //获取token
				var form = document.getElementById('formTwo');
				var Filedata = new FormData(formTwo);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': token }
				}).then(
					function(res) {
						
						if(res.data.code=="0"){
							this.isUploading=false;
							var newSrc = res.data.data
							this.audioSRC=newSrc;
							
						}

					},
					function() {
						console.log("数据请求失败")
					}
				)
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
					this.isImgTypeOne = "图片格式不符合要求"
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
			setLebalIndex(res) {
				this.lebalIndex = res.index;
				this.firstLebal = res.name;
				//console.log(this.choosingLebal)
			},
			saveLebals(res) {
				if(this.secMidLebal.indexOf(res) == -1) {
					this.secLebal = res;
					this.secMidLebal += this.secLebal;
					this.choosingLebal = this.firstLebal + ">" + this.secLebal;
					this.chosedLebals.push({
						name: this.choosingLebal
					})
					this.secLebal = "";
				}

			},
			deleteLebal(res, index) {
				//console.log(res,index);
				this.chosedLebals.splice(index, 1);
			},
			submit(isDraft) {
				//debugger
				if(this.title == "") {
					alert("标题为空，请填写标题")
				}else if(this.audioSRC==""){
					alert("请上传音文件")
				}else if(this.textarea==""){
					alert("请填写摘要概述")
				} else if(this.imgOneSrc == "") {
					alert("请选择图文封面")
				} else if(this.checked == "") {
					alert("请选择原创类型")
				} else if(this.editor == "") {
					alert("请填写责任编辑")
				} else if(this.isAgreemnet == false) {
					alert('请勾选版权提示')
				} else if(this.title != "" && this.audioSRC != "" && this.imgOneSrc != "" && this.checked != "" && this.editor != "" && this.isAgreemnet == true && this.textarea!="") {
					if(this.Articleid != "") { //编辑
						this.sendEditInfo(isDraft);
					} else { //创建新文章
						this.sendInfo(isDraft);
					}
				}

			},
			cancle() {
				this.$router.go(-1)
			},
			sendInfo(isDraft) {//发送新建文章数据
				var audioL=parseInt($("#audio")[0].duration);
				var duration=parseInt(audioL/60)+"'"+(audioL-parseInt(audioL/60)*60)+'"';
				var TOKEN = localStorage.getItem("TOKEN")
				debugger
				var articleInfo = {
					"ipid": this.ipId,
					"title": this.title,
					"voiceurl": this.audioSRC,
					"duration" : duration,
					"pic": this.imgOneSrc,
					"tags": "生命阶段>青年期",
					"original": this.checked,
					"Summary": this.textarea,
					"author": this.editor,
					"submit": isDraft
				}
				this.$http.post("https://api.lotusdata.com/ip/v1/voice/", articleInfo, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						if(res.data.code == "0") {
							console.log("语音上传成功")
							//this.$router.push({path:"/contentEdit/manageContent/listAll",query:{ipId:this.ipId}})
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			sendEditInfo(isDraft) { //发送编辑后图文数据
				var TOKEN = localStorage.getItem("TOKEN")
				var tags = [];
				for(var i = 0; i < this.chosedLebals.length; i++) {
					tags.push(this.chosedLebals[i].name)
				}
				//console.log(tags.join("|"))
				var articleInfo = {
					"title": this.title,
					"content": this.editorContent,
					"pic": this.imgOneSrc,
					"tags": tags.join("|"),
					"original": this.checked,
					"Summary": this.textarea,
					"author": this.editor,
					"submit": isDraft
				}
				this.$http.put("https://api.lotusdata.com/ip/v1/article/" + this.Articleid, articleInfo, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						if(res.data.code == 0) {
							//console.log("编辑文章成功")
							//alert("编辑文章成功")
							this.$router.push({path:"/contentEdit/manageContent/listAll",query:{ipId:this.ipId}})
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			getRadio0(value){
				this.fromEdit="责任编辑"
			},
		}

	}
</script>

<style lang="scss" scoped>
	.editTitle {
		height: 75px;
	}
	
	#editor-container {
		margin-bottom: 20px;
	}
	
	.iptContent{
		width: 660px;
		height: 35px;
		border: 1px solid #ccc;
		padding: 0 10px;
		font-size: 16px;
	}
	.publishTitle {
		padding: 30px 0 5px 0;
	}
	/*.selectContainer{
		.selectCon{
			display: inline-block;
			border: 1px solid #ccc;
			padding: 3px 15px;
			margin-right: 20px;
		}
	}*/
	.audioContainer{
		padding: 5px 10px;
		width: 660px;
		border: 1px solid #ccc;
	}
	.textarea {
		width: 660px;
		height: 180px;
		resize: none;
		border: 1px solid #ccc;
		padding: 15px 20px;
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
	
	.ipLebals {
		width: 960px;
		border: 1px solid #ccc;
		padding: 20px;
		overflow: hidden;
		.left img {
			width: 25px;
		}
		.lebalsContainer {
			margin-left: 20px;
			width: 850px;
			.chosed {
				li {
					display: inline-block;
					padding: 0 0 10px 0;
					margin: 0 5px;
					border-bottom: 4px solid #fff;
				}
			}
		}
	}
	
	.radioIpt {
		margin-bottom: 20px;
		font-size: 20px;
	}
	
	.editor {
		border-bottom: 1px solid #DDDDDD;
	}
	
	.agreement {
		input {
			vertical-align: middle;
		}
		margin: 20px 0 50px;
		color: #c96c54;
	}
	
	.toolbar {
		border: 1px solid #ccc;
	}
	
	#div2 {
		height: 600px;
	}
	/*图片上传控件*/
	.marginTop{
		/*margin-top: 25px;*/
	}
	.uploadA {
		width: 100px;
		height: 30px;
		overflow: hidden;
		position: relative;
		/*line-height: 25px;*/
		#formTwo .uploadIpt,
		#formOne .uploadIpt {
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
	
	.delete {
		width: 15px!important;
		cursor: pointer;
	}
	.upLoadAudiospan{
		color: #fff; font-size: 13px;margin-top: 2px;
	}
	.paddingRepair {
		background: #6dc5a3!important;
		color: #fff!important;
	}
	audio{
		width: 350px;
		height: 35px;
		vertical-align: sub;
	}
</style>