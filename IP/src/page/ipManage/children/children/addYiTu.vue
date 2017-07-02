<template>
	<div class="addContent">
		<section class="addModel">
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label">医图号名称</p>
					<div class="col-sm-5 col-xs-5">
						<input type="text" class="form-control" v-model.trim="ipName" @blur="isRepeatName(ipName)" />
						<p class="form-control-static warned" v-text="isNameRepeat"></p>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label">医图号logo</p>
					<div class="col-sm-10 col-xs-10 uploadImgContent">
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
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label">二维码</p>
					<div class="col-sm-10 col-xs-10 uploadImgContent">
						<img class="ipLogo" :src="imgTwoSrc" />
						<div class="upLoadImg">
							<p class="upLoadImgDescription">二维码图片要求清晰，最大2M，200*200像素</p>
							<a href="javascript:void(0);" class="uploadA btn btn-default">
								<span>选择图片</span>
								<form id="formTwo">
									<input class="uploadIpt" type="file" name="Filedata" v-on:change="iptTwoChange" />
								</form>
							</a>
							<p class="form-control-static warned" v-text="isImgTypeTwo"></p>
						</div>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label">医图号简介</p>
					<div class="col-sm-5 col-xs-5">
						<textarea class="form-control textarea" v-model.trim="ipIntroduction"></textarea>
						<p class="form-control-static warned" v-text="introductionTip"></p>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label">医图号描述</p>
					<div class="col-sm-2 col-xs-2">
						<select class="form-control" v-model="ipDescriptionA">
							<option>测试数据00</option>
							<option>测试数据01</option>
							<option>测试数据02</option>
						</select>
						<p class="form-control-static warned" v-text="descriptionTip"></p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<select class="form-control" v-model="ipDescriptionB">
							<option>测试数据10</option>
							<option>测试数据11</option>
							<option>测试数据12</option>
						</select>
					</div>
				</div>
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label">医图号类型</p>
					<div class="col-sm-2 col-xs-2">
						<select class="form-control" v-model="ipType">
							<option>企业</option>
							<option>医生</option>
							<option>医疗机构</option>
						</select>
						<p class="form-control-static warned" v-text="typeTip"></p>
					</div>
				</div>
				<div class="form-group marginRepair">
					<p class="col-sm-2 col-xs-2 textLeft control-label"> </p>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="提交" @click="submit" />
					</div>
					<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="返回" />
					</div>
				</div>
			</form>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				het: 0,
				isNameRepeat: "",
				isImgTypeOne: " ",
				isImgTypeTwo: " ",
				introductionTip: "",
				descriptionTip: "",
				typeTip: "",
				imgOneSrc: "",
				imgTwoSrc: "",

				ipName: "",
				ipIntroduction: "", //ip简介
				ipDescriptionA: "", //ip描述
				ipDescriptionB: "", //ip描述
				ipType: "", //ip类型

				isSubmit: true, //判断是否可以提交数据
				enterpriseId:"",
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight; //屏幕可视区域高
				this.enterpriseId=this.$route.query.enterpriseId;
			})
		},
		methods: {
//			getToken() { //获取非用户TOKEN
//				this.$http.get("https://api.lotusdata.com/v1/buser/token", {
//					params: {
//						username: "uuapp.li@qq.com",
//						password: "123123",
//						refreshtoken: 0
//					}
//				}).then(
//					function(res) {
//						var TOKEN = res.data.token;
//						localStorage.setItem("TOKEN", 'JWT ' + TOKEN)
//						//console.log(localStorage.getItem("TOKEN"))
//					},
//					function() {
//						console.log("获取TOKEN失败")
//					}
//				)
//			},
			isRepeatName(value) { //判断IPname是否重名
				var TOKEN = localStorage.getItem("TOKEN")
				var data = {
					"filed": "ipname",
					"data": value
				}
				this.$http.post("https://api.lotusdata.com/ip/v1/reg/checkdata", data, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						var isRepeatNum = res.data.data;
						if(isRepeatNum == 1) { //已存在
							this.isNameRepeat = "*名称检测已被注册，请使用新名称"
							this.ipName = ""
							//this.isSubmit = false
						} else if(isRepeatNum == 0) { //不存在
							this.isNameRepeat = " "
							//this.isSubmit = true
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
					this.isImgTypeOne = "*图片不符合要求"
				}
			},
			sendimgOne() {
				var token = localStorage.getItem("token") //获取token
				console.log(TOKEN)
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
			iptTwoChange: function(e) { //判断并加载二维码
				e.preventDefault();
				var files = e.target.files;
				var data = new FormData();
				data.append('avatar', files[0]);
				var imgFile = files[0];
				var imgType = imgFile.name.substring(imgFile.name.indexOf(".") + 1, imgFile.name.length); //获取图片格式
				var imgSize = imgFile.size; //获取图片大小
				if(imgType == "png" || imgType == "jpg" || imgType == "gif" || imgType == "jpeg") {
					if(imgSize < 2 * 1024 * 1024) {
						this.isImgTypeTwo = " ";
						this.sendimgTwo();
					} else {
						this.isImgTypeTwo = "*图片大小超出2M"
					}
				} else {
					this.isImgTypeTwo = "*图片不符合要求"
				}
			},
			sendimgTwo() {
				var token = localStorage.getItem("token") //获取token
				var form = document.getElementById('formTwo');
				var Filedata = new FormData(formTwo);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': token }
				}).then(
					function(res) {
						var newSrc = res.data.data
						this.imgTwoSrc = newSrc;
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			submit() { //添加IP数据
				//debugger
				console.log(this.ipName, this.imgOneSrc, this.imgTwoSrc, this.ipIntroduction, this.ipDescriptionA, this.ipDescriptionB, this.ipType)
				if(this.ipName == "") {
					this.isNameRepeat = "请输入医图号名称"
				} else if(this.imgOneSrc == "") {
					this.isImgTypeOne = "请添加医图号logo图片"
				} else if(this.imgTwoSrc == "") {
					this.isImgTypeTwo = "请添加二维码图片"
				} else if(this.ipIntroduction == "") {
					this.introductionTip = "请填写医图号简介"
				} else if(this.ipDescriptionA == "") {
					this.descriptionTip = "请选择医图号描述"
				} else if(this.ipDescriptionB == "") {
					this.descriptionTip = "请选择医图号描述"
				} else if(this.ipType == "") {
					this.typeTip = "请选择医图号类型"
				} else if(this.ipName != "" && this.imgOneSrc != "" && this.imgTwoSrc != "" && this.ipIntroduction != "" && this.ipDescriptionA != "" && this.ipDescriptionB != "" && this.ipType != "") {
					var TOKEN = localStorage.getItem("TOKEN")
					var data = {
						"ipname": this.ipName,
						"summary": this.ipIntroduction,
						"pic": this.imgOneSrc,
						"tags": this.ipDescriptionA + "|" + this.ipDescriptionB,
						"qrcode": this.imgTwoSrc,
						"iptype": this.ipType
					}
					this.$http.post("https://api.lotusdata.com/ip/v1/ipm", data, {
						headers: { 'Authorization': TOKEN }
					}).then(
						function(res) {
							console.log(res)
							if(res.body.message=="success"){
								console.log("提交新的IP数据成功")
								this.$router.push({path:"/ipContent/yiTu/myYiTu",query:{enterpriseId:this.enterpriseId}})
							}
						},
						function() {
							console.log("数据请求失败")
						}
					)
				}
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.addContent {
		padding-left: 82px;
		.addModel {
			overflow: hidden;
			.form-horizontal {
				.form-group {}
			}
		}
	}
	
	.warned {
		color: #f8534c;
		font-size: 13px;
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
	
	.textarea {
		height: 130px;
		resize: none;
	}
	
	.form-group {
		margin-bottom: 20px;
	}
	
	.marginRepair {
		margin-top: 40px;
	}
	
	.paddingRepair {
		background: #6dc5a3!important;
		color: #fff!important;
	}
	/*图片上传控件*/
	.uploadA {
		width: 100px;
		height: 30px;
		overflow: hidden;
		position: relative;
		#formOne .uploadIpt,
		#formTwo .uploadIpt {
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