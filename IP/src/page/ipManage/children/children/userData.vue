<template>
	<div style="">
		<section class="form-horizontal bottomLine" role="form">
			<div class="form-group">
				<p class="col-sm-2 col-xs-2 textLeft control-label" for="password4">用户</p>
				<div class="col-sm-10 col-xs-10 uploadImgContent">
					{{companyName}}
				</div>
			</div>
			<div class="form-group">
				<p class="col-sm-2 col-xs-2 textLeft control-label" for="password4">医图ID</p>
				<div class="col-sm-10 col-xs-10 uploadImgContent">
					{{enterpriseId}}
				</div>
			</div>
		</section>
		<section class="form-horizontal" role="form">
			<div class="form-group">
				<p class="col-sm-2 col-xs-2 textLeft control-label" for="password4">企业LOGO</p>
				<div class="col-sm-10 col-xs-10 uploadImgContent">
					<img class="ipLogo" :src="imgOneSrc"/>
					<div class="upLoadImg">
						<p class="upLoadImgDescription">图片格式必须为：png、jpg、jpeg、jif;图片不可大于2M</p>
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
			<div class="form-group marginRepair">
				<p class="col-sm-2 col-xs-2 textLeft control-label"> </p>
				<div class="col-sm-2 col-xs-2">
					<input type="button" class="btn btn-default form-control colorRepair" value="保存" @click="submitImg"/>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				wid:0,
				imgOneSrc:"",
				isImgTypeOne:"",
				companyName:"",
				enterpriseId:"",
				
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight; //屏幕可视区域高	
				this.setWid();
				this.enterpriseId=this.$route.query.enterpriseId;
				this.getEnterpriseData();
				
			})
		},
		methods: {
			setWid() {
				this.wid = document.body.clientWidth - 349; //屏幕可视区域高
				
			},
			getEnterpriseData(){
				var TOKEN = localStorage.getItem("TOKEN")
				//var ENTERPRISEID=localStorage.getItem("ENTERPRISEID");
				//console.log(ENTERPRISEID)
				this.$http.get("https://api.lotusdata.com/ip/v1/enterprise/"+this.enterpriseId, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res.data.data)
						var enterpriseData=res.data.data
						this.companyName=enterpriseData.Companyname;
						//this.enterpriseId=enterpriseData.Enterpriseid;
						this.imgOneSrc=enterpriseData.Logopic;
					},
					function() {
						console.log("获取TOKEN失败")
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
				var TOKEN = localStorage.getItem("TOKEN") //获取token
				var form = document.getElementById('formOne');
				var Filedata = new FormData(formOne);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': TOKEN }
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
			submitImg(){
				var TOKEN = localStorage.getItem("TOKEN")
				var ENTERPRISEID=localStorage.getItem("ENTERPRISEID");
				var data = {
					"filed": "logopic",
					"data": this.imgOneSrc
				}
				this.$http.put("https://api.lotusdata.com/ip/v1/enterprise/"+ENTERPRISEID, data, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
//						/console.log(res)
					},
					function() {
						console.log("数据请求失败")
					}
				)
			}
		},
		watch: {
			wid: "setWid"
		}
	}
</script>

<style lang="scss" scoped>
.form-horizontal{padding-left: 82px;}
	.bottomLine{margin-bottom: 20px;border-bottom: 1px solid #e6e9ea;}
	.control-label{padding-top: 0;}
	.infoShow{
		padding: 20px 100px;
		border-bottom: 1px solid #e6e9ea;
	}
	.warned{color: #f8534c;font-size: 13px;}
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
	/*图片上传控件*/
	.uploadA {
		width: 100px;
		height: 30px;
		overflow: hidden;
		position: relative;
		#formOne .uploadIpt,{
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