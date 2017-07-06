<template>
	<div class="addContent">
		<section class="addModel">
			<form class="form-horizontal" role="form">
				<div class="form-group">
					<p class="col-sm-2 col-xs-2 textLeft control-label">医图号名称</p>
					<div class="col-sm-5 col-xs-5">
						<input type="text" class="form-control" maxlength="16" v-model.trim="ipName" @blur="isRepeatName(ipName)" />
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
						<select class="form-control" v-model="ipDescriptionA" @change="chooseLebals1">
							<option :value="item.index" v-for="item in lebalsOne">{{item.name}}</option>
						</select>
						<p class="form-control-static warned" v-text="descriptionTip"></p>
					</div>
					<div class="col-sm-2 col-xs-2">
						<select class="form-control" v-model="ipDescriptionB" @click="chooseLebals2">
							<option v-for="item in lebals[lebalIndex]">{{item.name}}</option>
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
					<!--<div class="col-sm-2 col-xs-2">
						<input type="button" class="btn btn-default form-control paddingRepair" value="返回" />
					</div>-->
				</div>
			</form>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ipId:"",
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
				ipDescriptionA: "0", //ip描述
				ipDescriptionB: "综合", //ip描述
				ipType: "", //ip类型

				isSubmit: true, //判断是否可以提交数据
				enterpriseId:"",
				lebalIndex:0,
				lebalsOne:[{
					index:0,
					name:"母婴健康"
				},{
					index:1,
					name:"饮食养生"
				},{
					index:2,
					name:"保健疗养"
				},{
					index:3,
					name:"两性生活"
				}],
				lebals:[[
					{name:"综合"},
					{name:"孕产指南"},
					{name:"科学哺育"},
					{name:"辣妈"},
					{name:"早教"},
					{name:"孕品"},
				],[
					{name:"综合"},
					{name:"营养饮食"},
					{name:"饮食禁忌"},
					{name:"菜谱"},
					{name:"食物相克"},
					{name:"食物热量"},
					{name:"中医食疗"},
				],[
					{name:"综合"},
					{name:"滋阴补肾"},
					{name:"其他"},
					{name:"美容"},
					{name:"加肥"},
					{name:"补血"},
					{name:"营养不良"},
					{name:"补钙"},
					{name:"补脾"},
					{name:"养肺"},
				],[
					{name:"综合"},
					{name:"青春期"},
					{name:"性生活"},
					{name:"同性生活"},
					{name:"两性用品"},
				]]
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight; //屏幕可视区域高
				this.enterpriseId=this.$route.query.enterpriseId;
				this.ipId=this.$route.query.ipId;
				this.getIpData();
			})
		},
		methods: {
			chooseLebals1(e){
				var e=event;
				//console.log(e.target.value)
				//console.log(e.target.dataid)
				this.lebalIndex=e.target.value
			},
			chooseLebals2(e){
				var e=event;
				//console.log(e.target.value)
			},
			getIpData(){
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/ipm/" + this.ipId, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						if(res.data.code=="0"){
							var ipData=res.data.data;
							this.ipName=ipData.Ipname;
							this.imgOneSrc=ipData.Pic;
							this.imgTwoSrc=ipData.Qrcode;
							this.ipIntroduction=ipData.Summary;
							this.ipType=ipData.Iptype;
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
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
					if(this.ipDescriptionA==0){
						var ipDescriptionA="母婴健康"
					}else if(this.ipDescriptionA==1){
						var ipDescriptionA="饮食养生"
					}else if(this.ipDescriptionA==2){
						var ipDescriptionA='保健疗养'
					}else if(this.ipDescriptionA==3){
						var ipDescriptionA="两性生活"
					}
					//console.log(this.ipName, this.imgOneSrc, this.imgTwoSrc, this.ipIntroduction, ipDescriptionA, this.ipDescriptionB, this.ipType)
					var data = {
						"ipname": this.ipName,
						"summary": this.ipIntroduction,
						"pic": this.imgOneSrc,
						"tags": ipDescriptionA + "|" + this.ipDescriptionB,
						"qrcode": this.imgTwoSrc,
						"iptype": this.ipType
					}
					this.$http.put("https://api.lotusdata.com/ip/v1/ipm/"+this.ipId, data, {
						headers: { 'Authorization': TOKEN }
					}).then(
						function(res) {
							//console.log(res)
							if(res.body.message=="success"){
								this.descriptionTip=""
								alert("医图号设置成功")
								//this.$router.push({path:"/ipContent/yiTu/myYiTu",query:{enterpriseId:this.enterpriseId}})
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