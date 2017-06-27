<template>
    <div>
    	<!--头部-->
    	<head-top signin-up='msite' >
    		<img slot="logo" src="/static/img/muyinglogo.png" class="logoImg"/>
    		<span class="logoTitle" slot="msite-title">母婴传说</span>
			<input type="search" id="searchInput" slot="search" class="infoSearch" placeholder="搜索"   @focus="search()"/>
    	</head-top>
    	<!--头部导航-->
    	<ul class="headNav">
    		<div class="headNavContainer">
    			<li><router-link to="/msite/recommend" :class="{ lightColor:$route.path.indexOf('recommend') !== -1 }" >推荐</router-link> </li>
	    		<li><router-link to="/msite/beforepregnant/diet" :class="{ lightColor:$route.path.indexOf('beforepregnant') !== -1 }">孕前</router-link></li>
	    		<li><router-link to="/msite/pregnanting/diet" :class="{ lightColor:$route.path.indexOf('pregnanting') !== -1 }">孕中</router-link></li>
	    		<li><router-link to="/msite/recovery/diet" :class="{ lightColor:$route.path.indexOf('recovery') !== -1 }">恢复</router-link></li>
    		</div>
    	</ul>
    	<div class="list_container">
	    	<router-view :searchValue="middleValue" ></router-view>
	    	
    	</div>
    	<!--搜索模态窗-->
    	<div v-if="popupVisible" class="modelSearch">
    		
		  	<div class="searchContent" :style="{width: wid+'px',height:het+'px'}">
		  		<!--<div style="height: 2rem;width: 1rem;background: #fff;"></div>-->
		  		<section id="search">
			  		<div class="mint-searchbar-inner search_input">
			  			<i class="mintui mintui-search" style="padding-top: .15rem;"></i>
			  			<input type="search" v-focus placeholder="搜索" class="mint-searchbar-core" style="padding-left: .6rem;line-height: 1rem;" v-model="searchValue" @keydown.enter="enter(searchValue)"/>
			  		</div>
			  		<p class="search_cancle" @click='cancle'>取消</p>
		  		</section>
		  		<section class="hotSearch">热门搜索</section>
		  		<ul class="lebals">
		  			<li class="hotLebals" v-for="hotword in hotwords" @click="enter(hotword.name)">{{hotword.name}}</li>
		  			
		  		</ul>
		  	</div>
		</div>
		<!--首次选择标签模态窗-->
		<div id="userLebals" v-if="isUserLebal">
			<div class="profile_page">
		        <head-top  :head-title="profiletitle" >
		        	<span class="saveLebals" slot="save" @click="save">保存</span>
		        </head-top>
		        
		        <section class="lebalContent">
		            <p class="littleTip">关注一些你感兴趣的话题吧！</p>
		            <div class="manyLebals">
		            	<div class="singleLebal" v-for="(lebal,index) in lebals">
		            		<span class="lebalChoice" :class="{chosed:lebal.isChosed}" @click="choiceLebals(lebal,index)">{{lebal.name}}</span>
		            	</div>
		            </div>
		            
		        </section>
		        <section class="choiceBtn">
		        	<span @click="goNextPage">跳过</span>
		        	<span @click="focusAll">全部关注</span>
		        </section>
		    </div>
		</div>
		
		<!--底部导航栏-->
    	<foot-guide v-if="footShow"></foot-guide>
    </div>    
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
import { Popup } from 'mint-ui';
import { Search } from 'mint-ui';
import Vue from 'vue'
// 注册一个全局自定义指令 v-focus
Vue.directive('focus',{
    //将绑定元素插入到 DOM 中
    inserted:function(el){
        // 聚焦元素
        el.focus();
    }
})
new Vue({
    el:''
})


export default {
	data(){
        return {
        	footShow:true,
        	searchValue:"",
            middleValue:"",
            popupVisible:false,//模态窗可视布尔值
            wid:0,
            het:0,
            hotwords:[],
            isUserLebal:false,//判断标签模态窗
            profiletitle: '热门话题推荐',
            lebals:[
            	{name:"孕前",isChosed:true},//isChosed判断标签是否被选中
            	{name:"孕中",isChosed:false},
            	{name:"孕后",isChosed:false},
            	{name:"孕前",isChosed:false},
            	{name:"辅食",isChosed:false},
            	{name:"保健",isChosed:false},
            	{name:"食谱",isChosed:false},
            	{name:"新生儿期",isChosed:false},
            	{name:"幼儿期",isChosed:false},
            	{name:"婴儿期",isChosed:false},
            	{name:"中餐",isChosed:false},
            	{name:"西餐",isChosed:false},
            	{name:"粗粮",isChosed:false},
            	{name:"营养调理",isChosed:false},
            	{name:"饮食禁忌",isChosed:false},
            	{name:"宝宝辅食",isChosed:false},
            	{name:"面部",isChosed:false},
            	{name:"毛发",isChosed:false},
            	{name:"身体",isChosed:false},
            	{name:"口腔",isChosed:false},
            	{name:"女性",isChosed:false},
            	{name:"清洁",isChosed:false},
            	{name:"两性",isChosed:false},
            	{name:"推拿",isChosed:false},
            	{name:"拔罐",isChosed:false},
            	{name:"洗浴",isChosed:false},
            	{name:"针灸",isChosed:false},
            	{name:"保健操",isChosed:false},
            ],
            labelsData:[],
            postLebals:[],
            searchLebals:[],//储存用户所选择标签
            weChatId:""//用户微信Id
        }
   },
    components: {
    	headTop,
    	footGuide,
    	Popup,
    	Search
    },
    mounted() {
		this.$nextTick(function() {
			this.wid =  document.body.clientWidth;//屏幕可视区域宽度
			this.het = document.body.clientHeight;//屏幕可视区域高
			this.getToken();
			
		})
	},
    methods: {
    	getToken() {
			this.$http.get("https://api.lotusdata.com/v1/buser/token", {
				params: {
					username: "uuapp.li@qq.com",
					password: "123123",
					refreshtoken: 0
				}
			}).then(
				function(res) {
					var TOKEN = res.data.token;
					localStorage.setItem("TOKEN", 'JWT ' + TOKEN)
					this.getIsNew();//获取微信isNew参数
					
				},
				function() {
					console.log("数据请求失败")
				}
			)
		},
		search(value){
            this.popupVisible=true;
            this.getHotWords()
		},
		cancle(){
			this.popupVisible = false
			this.searchValue=""
		},
		enter(value){//模态窗搜索回车
			//debugger
			this.$router.push({path:"/msite/recommend"})
			this.middleValue=value
			this.popupVisible = false
			this.searchValue=""
		},
		getCookie(name){//获得指定名称cookie值
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
			else
			return null;
		},
		getIsNew(){//依据isNew参数判断标签选择页面是否显示
			var TOKEN = localStorage.getItem("TOKEN")
			document.cookie="WxOAuth2Token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTg1ODI3OTcsInVzZXJuYW1lIjoib2RCalB3MjVZZ3hVRkwyYmVoVGtTQXU2WlVDRSJ9.0Y60Lt_cU1acgiSlQBXOiiglVwDPDAHV-am9LqiZWEY"
			var WxOAuth2Token=this.getCookie("WxOAuth2Token")//cookie值
			this.$http.get("https://api.lotusdata.com/v1/wx/userinfo", {
				params: {
					wxtoken: WxOAuth2Token,
				},
				headers: { 'Authorization': TOKEN }
			}).then(
				function(res) {
					var userInfo=res.data.data;
					var Isnew=userInfo.Isnew;
					console.log(Isnew,this.weChatId)
					if(Isnew==0){
						this.isUserLebal=true;
						this.weChatId=userInfo.Userid
						console.log(Isnew,this.weChatId)
					}else{
						this.isUserLebal=false;
					}
					
				},
				function() {
					console.log("数据请求失败")
				}
			)
		},
		getHotWords(){//获取搜索热词
			var TOKEN = localStorage.getItem("TOKEN")
			this.$http.get("https://api.lotusdata.com/v1/article/hotwords", {
				params: {
					start: 0,
					limit: 10
				},
				headers: { 'Authorization': TOKEN }
			}).then(
				function(res) {
					var listData=res.data.data
					//console.log(listData)
					if(listData!=null){
						for(var i = 0; i < listData.length; i++) {
							this.hotwords.push({
								name:listData[i].Words
							})
						}
					}
					
				},
				function() {
					console.log("数据请求失败")
				}
			)
		},
		choiceLebals(label,index){//点击标签将所选标签加入标签数组
			//console.log(value)
			label.isChosed=!label.isChosed
			if(label.isChosed==true){//将亮色标签添加进labelsData数组
    			this.labelsData.push({"labelName":label.name})
    			
    		}else if(label.isChosed==false){//将该亮色标签从数组中删除
    			for(var i=0;i<this.labelsData.length;i++){
    				if(this.labelsData[i].labelName==label.name){
    					this.labelsData.splice(i,1)
    				}
    			}
    		}
    		//console.log(this.labelsData)
		},
		goNextPage(){//跳过
			//this.$router.push({path: '/meInfoprofile'})
			this.isUserLebal=false;
		},
		focusAll(){//关注全部
			this.postLebals=[]
			var labelsData=this.lebals
			for(var i=0;i<labelsData.length;i++){
				this.postLebals.push(labelsData[i].name)
			}
			for(var i=0;i<this.lebals.length;i++){//将所有标签返回暗色
				this.lebals[i].isChosed=false
			}
			var searchLebals=this.postLebals.join("|");
			this.searchLebals=searchLebals
			console.log(searchLebals)
			this.labelsData=[]
			this.isUserLebal=false;
		},
		save(){//点击保存保存亮色按钮图标值
			this.postLebals=[]
			var labelsData=this.labelsData
			for(var i=0;i<labelsData.length;i++){
				this.postLebals.push(labelsData[i].labelName)
			}
			for(var i=0;i<this.lebals.length;i++){//将所有标签返回暗色
				this.lebals[i].isChosed=false
			}
			var searchLebals=this.postLebals.join("|");
			this.searchLebals=searchLebals
			console.log(searchLebals)
			this.postUserLebals()
			this.labelsData=[]
		},
		postUserLebals(){//保存用户关注标签
			var TOKEN = localStorage.getItem("TOKEN")
			var lebals={
				tags:this.searchLebals
			}
			console.log(lebals)
			this.$http.post("https://api.lotusdata.com/v1/cuser/followtags/"+this.weChatId, lebals, {
				headers: { 'Authorization': TOKEN }
			}).then(
				function(res) {
					console.log(this.searchLebals)
					this.enter(this.searchLebals)
					this.isUserLebal=false;
					
				},
				function() {
					console.log("数据请求失败")
				}
			)
		}
    },
    watch:{
    	
    }
}

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
	.list_container{
		margin-top: 3.4rem;
		border-top: 0.025rem solid $bc;
		background-color: #fff;
		height: 100%;
	}
	.profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
	/*头部导航栏*/
	.logoImg{width: 1.6rem;margin:.2rem 0 1rem .3rem}
	.logoTitle{font-size: .8rem;font-weight: 600;color: #fff;position: absolute;top: .5rem;left: 2.5rem;}
	.headNav{width: 100px;padding: 0 10px 3px 10px;width: 100%;position: fixed;top: 0;z-index: 10; overflow: hidden;background: #f8f8fa;padding-top: 1.95rem;}
	.headNavContainer{white-space: nowrap; overflow-x: scroll;}
	.headNavContainer li{display: inline-block; width: 24%;text-align: center;font-size: 0.7em;}
	.lightColor{color: #ff9191;}
	.infoSearch{height: 1.2rem;line-height: 1.2rem; width: 7rem; padding: .2rem .5rem;border-radius: .2rem;position: absolute;right: .5rem;top: .45rem;padding-top: .3rem;}
	.modelSearch{position: fixed;top: 0;left: 0;background: #fff;z-index: 9999;}
	.searchContent{padding: .3rem .6rem 1rem .6rem; font-size: .7rem;}
	#search{overflow: hidden;}
	.search_input{height: 1.3rem; float: left; width: 80%;background: rgba(156,155,156,.1);margin-bottom: .5rem;border-radius: .3rem;}
	.search_input input{background: rgba(215,215,216,0);}
	.search_cancle{float: right;width: 20%;text-align: center;color: #2a90d1;line-height: 1.2rem;}
	.hotSearch{padding: .5rem .5rem;border-top: 1px solid #e7e7e7;}
	.lebals{overflow: hidden;border-top:1px solid #e7e7e7;}
	.hotLebals{padding: .5rem .5rem;color:#8f8f94;float: left;width: 49%;border-bottom: 1px solid #e7e7e7;}
	
	/*标签选择模态窗*/
	#userLebals{position: fixed;top: 0;left: 0;background: #fff;z-index: 9999;}
	.saveLebals{position:absolute;right: .3rem; top: .5rem;font-size: .8rem;color: #fff;font-weight: 600;}
    .lebalContent{position: relative;top: 1.95rem; background: #fff;padding: .5rem .5rem;}
    .littleTip{text-align: center;font-size: .6rem;}
    .manyLebals{padding: 1rem .7rem 0;height: 21rem;overflow: hidden;overflow-y: scroll;margin-top: 1rem;}
    .singleLebal{display: inline-block;width: 33%;text-align: left;margin-bottom: 1rem;}
    .lebalChoice{border: 1px solid #ff9191;border-radius: 1rem;font-size: .6rem;padding: .2rem .8rem;color:#ff9191 ;}
    .chosed{background: #ff9191;color: #fff;}
    .choiceBtn{width: 100%;position: fixed;bottom: 0;background: #fff;padding: 1rem .8rem  1.5rem;}
    .choiceBtn span{float: right;display: inline-block;font-size: .7rem;margin-right: 1rem;color: #666;}
</style>
