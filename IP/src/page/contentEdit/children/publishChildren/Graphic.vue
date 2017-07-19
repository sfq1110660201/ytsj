<template>
	<div>
		<div class="editTitle">
			<input class="editTitleIpt" v-model.trim="title" maxlength="30" type="text" placeholder="文章标题  （5-30字）" style="display: block;height: 75px;width: 100%;font-size: 25px;padding-left: 25px;" />
		</div>
		<!--<div id="editor-container" style="height: 700px;">-->
		<div id="editor-trigger" style="height: 700px;">
			<!--<div v-html="editorContent"></div>-->
		</div>
		<!--</div>-->

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
		<p class="publishTitle">摘要</p>
		<textarea class="textarea" v-model.trim="textarea" placeholder="选填，如不填写会默认抓取正文前54个字"></textarea>
		<p class="publishTitle">标签选择</p>
		<div class="ipLebals">
			<div class="left">
				<img src="/static/IP/img/addIP_03.png" />
			</div>
			<div class="lebalsContainer left">
				<ul class="lebals">
					<li class="firstLebal" v-for="lebal in lebals" :data-id="lebal.index" @mouseover="setLebalIndex(lebal)">{{lebal.name}}
						<li class="secLebal"></li>
					</li>
				</ul>
				<ul class="secondLebals" v-if="">
					<li v-if="lebalIndex==0" v-for="item in secLebals0" @click="getSecTag(item)">{{item}}</li>
					<li v-if="lebalIndex==1" v-for="item in secLebals1" @click="getSecTag(item)">{{item}}</li>
					<li v-if="lebalIndex==2" v-for="item in secLebals2" @click="getSecTag(item)">{{item}}</li>
					<li v-if="lebalIndex==3" v-for="item in secLebals3" @click="getSecTag(item)">{{item}}</li>
					<li v-if="lebalIndex==4" v-for="item in secLebals4" @click="getSecTag(item)">{{item}}</li>
					<li v-if="lebalIndex==5" v-for="item in secLebals5" @click="getSecTag(item)">{{item}}</li>
					<li v-if="lebalIndex==6" v-for="item in secLebals6" @click="getSecTag(item)">{{item}}</li>
				</ul>

			</div>
		</div>
		<p class="publishTitle">已选标签</p>
		<div class="ipLebals">
			<div class="left">
				<img src="/static/IP/img/addIP_06.png" />
			</div>
			<div class="lebalsContainer left">
				<ul class="chosed">
					<li v-for="item in choosingLebal">{{item}}<img class="delete" src="/static/IP/img/delete.png" @click='deleteLebal(item)' /></li>
				</ul>

			</div>
		</div>
		
		<p class="publishTitle">来源内容</p>
		<div class="radioIpt"><input type="radio" name="isproto" value="原创" v-model="checked" @change="getRadio0('原创')"/>&nbsp;原创&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="isproto" value="转载" v-model="checked" @change="getRadio1('转载')"/>&nbsp;转载</div>
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
					<input type="button" class="btn btn-default form-control right paddingRepair" @click="submit('0')" value="保存草稿" />
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	import 'src/plugins/wangEditor.js'
	import 'src/style/wangEditor.css'

	export default {
		data() {
			return {
				ipId: "",
				Articleid: "",
				het: 0,
				editorContent: '',
				title: "",
				imgOneSrc: "",
				isImgTypeOne: "",
				checked: "",
				lebalIndex: 0,
				lebals:[],				
				secLebals0: [],
				secLebals1: [],
				secLebals2: [],
				secLebals3: [],
				secLebals4: [],
				secLebals5: [],
				secLebals6: [],
				firstLebal: "生理阶段",
				choosingLebal: [],
				textarea: "",
				editor: "",
				isAgreemnet: false,
				fromEdit:"责任编辑",
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.ipId = this.$route.query.ipId
				this.getTags();
				if(this.$route.query.Articleid) {
					this.Articleid = this.$route.query.Articleid;
					this.editArticle();
				} else {
					this.Articleid == "";
					this.setWangEditor()
				}
			})
		},
		methods: {
			getTags() {
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/basicdic/tags", {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						if(res.data.code == "0") {
							var tagList = res.data.data;
							//console.log(tagList)
							for(var i = 0; i < tagList.length; i++) {
								this.lebals.push({
									index: i,
									name: tagList[i].master,
									isbool: true
								})
							}
							for(var i = 0; i < tagList[0].detail.length; i++) {
								this.secLebals0.push(tagList[0].detail[i])
							}
							for(var i = 0; i < tagList[1].detail.length; i++) {
								this.secLebals1.push(tagList[1].detail[i])
							}
							for(var i = 0; i < tagList[2].detail.length; i++) {
								this.secLebals2.push(tagList[2].detail[i])
							}
							for(var i = 0; i < tagList[3].detail.length; i++) {
								this.secLebals3.push(tagList[3].detail[i])
							}
							for(var i = 0; i < tagList[4].detail.length; i++) {
								this.secLebals4.push(tagList[4].detail[i])
							}
							for(var i = 0; i < tagList[5].detail.length; i++) {
								this.secLebals5.push(tagList[5].detail[i])
							}
							for(var i = 0; i < tagList[6].detail.length; i++) {
								this.secLebals6.push(tagList[6].detail[i])
							}
						}

					},
					function() {
						console.log("数据请求失败")
					}
				)

			},
			setWangEditor(res) {
				var self = this;
				var TOKEN = localStorage.getItem("TOKEN")
				var editor = new wangEditor('editor-trigger');
				editor.onchange = function() {
					// onchange 事件中更新数据
					self.editorContent = editor.$txt.html();
				};
				editor.config.uploadImgUrl = 'https://api.lotusdata.com/v1/file/editorupload'
				editor.config.uploadImgFileName = 'Filedata'

				editor.config.withCredentials = false
				editor.config.uploadHeaders = {
					'Authorization': TOKEN
				}
				editor.create();
				if(res != "" && res != undefined) {
					editor.$txt.html(res)
				}

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
				//console.log(this.firstLebal)
			},
			getSecTag(item) {
				var testRepeat = this.choosingLebal.join("/");
				if(testRepeat.indexOf(this.firstLebal + ">" + item) == -1) {
					this.choosingLebal.push(this.firstLebal + ">" + item)
				}
			},
			deleteLebal(item) {
				var index=this.arrSearch(this.choosingLebal, item);
				this.choosingLebal.splice(index,1)
			},
			arrSearch(data, key) {//返回特定字符在数组中的位置
				var m = data.length
				for(var i = 0; i < m; i++) {
					if(data[i] == key){
						return i
					} 
				}
			},
			submit(isDraft) {
				if(this.title == "") {
					alert("标题为空，请填写标题")
				} else if(this.editorContent == "") {
					alert("请添加编辑内容")
				} else if(this.imgOneSrc == "") {
					alert("请选择图文封面")
				} else if(this.choosingLebal.length == 0) {
					alert("请选择标签")
				} else if(this.checked == "") {
					alert("请选择原创类型")
				} else if(this.editor == "") {
					alert("请填写责任编辑")
				} else if(this.isAgreemnet == false) {
					alert('请勾选版权提示')
				} else if(this.title != "" && this.editorContent != "" && this.imgOneSrc != "" && this.choosingLebal.length > 0 && this.checked != "" && this.editor != "" && this.isAgreemnet == true) {
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
			sendInfo(isDraft) { //发送新建文章数据
				var TOKEN = localStorage.getItem("TOKEN")
				var tags = [];
				for(var i = 0; i < this.choosingLebal.length; i++) {
					tags.push(this.choosingLebal[i])
				}
				var articleInfo = {
					"ipid": this.ipId,
					"title": this.title,
					"content": this.editorContent,
					"pic": this.imgOneSrc,
					"tags": tags.join("|"),
					"original": this.checked,
					"Summary": this.textarea,
					"author": this.editor,
					"submit": isDraft
				}
				this.$http.post("https://api.lotusdata.com/ip/v1/article/", articleInfo, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						if(res.data.code == "0") {
							//alert("新建文章数据成功")
							this.$router.push({path:"/contentEdit/manageContent/listAll",query:{ipId:this.ipId}})
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
				for(var i = 0; i < this.choosingLebal.length; i++) {
					tags.push(this.choosingLebal[i])
				}
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
			editArticle() { //获取文章数据
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/article/" + this.Articleid, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) { 
						if(res.data.code==0){
							//console.log(res)
							var editArticleData = res.data.data;
							this.title = editArticleData.articledata.Title;
							this.editorContent = editArticleData.articledata.Content;
							this.imgOneSrc = editArticleData.articledata.Pic;
							this.textarea = editArticleData.articledata.Summary;
							this.editor = editArticleData.articledata.Author;
							for(var i = 0; i < editArticleData.articletags.length; i++) {
								this.choosingLebal.push(editArticleData.articletags[i].Tagshow)
							}
							this.checked = editArticleData.articledata.Original;
							this.setWangEditor(this.editorContent);
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
			getRadio1(value){
				this.fromEdit="文章来源"
			}
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
	
	.publishTitle {
		padding: 30px 0 5px 0;
	}
	
	.textarea {
		width: 960px;
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
			.lebals {
				margin-bottom: 10px;
				li {
					display: inline-block;
					padding: 0 0 10px 0;
					margin: 0 5px;
					border-bottom: 4px solid #fff;
				}
			}
			.secondLebals {
				li {
					display: inline-block;
					padding: 0 0 15px 0;
					margin: 0 6px;
					color: #959595;
				}
			}
			.chosed {
				li {
					display: inline-block;
					padding: 0 0 10px 0;
					margin: 0 5px;
					border-bottom: 4px solid #fff;
				}
			}
			.lebals li:hover {
				border-bottom: 4px solid #6dc5a3;
			}
			.secondLebals li:hover {
				color: #000000;
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
	
	.uploadA {
		width: 100px;
		height: 30px;
		overflow: hidden;
		position: relative;
		/*line-height: 25px;*/
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
	
	.paddingRepair {
		background: #6dc5a3!important;
		color: #fff!important;
	}
</style>