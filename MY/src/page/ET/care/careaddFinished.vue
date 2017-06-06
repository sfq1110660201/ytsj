 <template>
  <div class="addfinished_page">
        <head-top head-title="关心"></head-top>
        <ul class="headNav">
    		<div class="headNavContainer">
    			<li v-for="(label,index) in labels" @click=getContent(index)>{{label.labelName}}</li>
	    		
    		</div>
    		<div class="addPlus" @click="edit()">
    			+
    		</div>
    	</ul>
    	<section  v-if="" class="contentContainer">
    		<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill='bool' ref="loadmore">
				<router-link to="/ETparagraph" class="shop_li"  tag='li' v-for="labelList in labelLists" >
					
					<hgroup class="shop_right">
						<header class="shop_detail_header">
							<h4 class="" class="shop_title ellipsis premium">{{labelList.title}}</h4>
						</header>
						
						<h5 class="fee_distance">
							<section class="fee">
								<span>{{labelList.froms}} </span>
								<span class="segmentation">|</span>
								<span>{{labelList.time}}</span>
								<span class="segmentation">|</span>
								<span @click="shareInfo()">分享</span>
							</section>
							
						</h5>
					</hgroup>
					<section v-if="">
						<img src="/static/MY/img/cbd.jpg" class="shop_img" style="">
					</section>
				</router-link>
				<div slot="top" class="mint-loadmore-top">
		      		<span class="topload" v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
		      		<span class="topload" v-show="topStatus === 'loading'" v-text="load"></span>
		    	</div>
		    	<div slot="bottom" class="mint-loadmore-bottom">
		      		<span class="bottomload" v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">正在加载...</span>
		      		<!--<span v-show="bottomStatus === 'loading'" >loading2...</span>-->
		    	</div>
	 		</mt-loadmore>
			
		</section>
        <foot-guide></foot-guide>
        <mt-popup v-model="popupVisible"  popup-transition="popup-fade" position="bottom"> 
        	<div class="shareContent" :style="{width: wid+'px'}">
        		<header class="articleShare">分享文章</header>
        		<ul class="sharePath">
        			<li><img class="shareImg" src="static/MY/img/weichatLogin.png"/><span>微信好友</span></li>
        			<li><img class="shareImg" src="static/MY/img/share_weichat.png"/><span>微信朋友圈</span></li>
        			<li><img class="shareImg" src="static/MY/img/share_qq.png"/><span>qq好友</span></li>
        			<li><img class="shareImg" src="static/MY/img/share_weibo.png"/><span>微博</span></li>
        		</ul>
        		<ul class="shareParts">
        			<li><img class="shareImg" src="static/MY/img/copy.png"/><span>复制链接</span></li>
        			<li><img class="shareImg" src="static/MY/img/shoucang.png"/><span>收藏</span></li>
        			<li><img class="shareImg" src="static/MY/img/jubao.png"/><span>举报</span></li>
        		</ul>
        		<p class="cancle" @click="cancle()">取消</p>
        	</div>
        </mt-popup>
    </div>
</template>

<script>
    import headTop from 'src/components/header/head_ET'
//  import alertTip from 'src/components/common/alertTip'
	import footGuide from 'src/components/footer/footGuide_ET'
	import { Popup } from 'mint-ui'
    export default {
      data(){
            return{
                labels:[],
                labelLists:[],
                pageIndex:0,
                topStatus: '',
				bottomStatus:"",
				load:"",
				bool:false,
				allLoaded:false,
				popupVisible:false,
				wid:0
            }
      },
        components: {
            headTop,
            footGuide,
            Popup
        },
        methods: {
        	getData(){
        		
        	},
        	loadTop(){//下拉刷新执行的方法
				//this.$router.push({path:"/msite/recommend"})
				this.labelLists=[];
				this.getContent(this.pageIndex);
				console.log(this.pageIndex)
				this.$refs.loadmore.onTopLoaded();
			},
			loadBottom(){//上拉刷新执行的方法
				//this.labelLists=[];
				this.getContent(this.pageIndex);
				console.log(this.pageIndex)
				this.$refs.loadmore.onBottomLoaded();
				//this.allLoaded=true//数据已经完全获取完结
			},
			handleTopChange(status) {
				//console.log(status)
				this.load="Loading..."
	        	this.topStatus = status;
	      	},
	      	handleBottomChange(status){
	      		//console.log(status)
	      		//this.load="Loading2..."
	      		this.bottomStatus = status;
	      	},
           	getContent(index){
           		this.pageIndex=index
           		this.$http.get("static/addLabels.json").then(
					function(res){
						//console.log(res.data)
						var listData=res.data
						this.labelLists=listData[index].labelList
					},
					function(){
						console.log("数据请求失败")
					}
				)
           	},
           	edit(){
           		this.$router.push("/ETedit")
           	},
           	shareInfo(e){
				e = e || window.event;  
			    if(e.stopPropagation) { //非IE阻止冒泡方法  
			        e.stopPropagation();  
			    } else {  
			        e.cancelBubble = true; //IE阻止冒泡方法  
			    }
			    console.log(this.$route.path)///msite/recommend
			    
			    var wid=window.screen.width;
			    this.wid=wid
			    this.popupVisible=true
			},
			cancle(){
			this.popupVisible=false
			}
        },
        mounted(){
			this.$nextTick(function(){
				this.$http.get("static/addLabels.json").then(
					function(res){
						//console.log(res.data)
						var listData=res.data
						for(var i=0;i<listData.length;i++){
							this.labels.push({
								labelName:listData[i].labels,
							})
						}
						this.labelLists=listData[0].labelList
					},
					function(){
						console.log("数据请求失败")
					}
				)
			})
		},
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
  
    .addfinished_page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        z-index: 202;
        padding-top: 1.95rem;
    }
    .shop_li{
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.6rem 0.4rem;
	}
	.shop_img{
		@include wh(3.7rem, 2.7rem);
		display: block;
		margin-right: 0.4rem;
	}
	.shop_right{
		flex: auto;
		.shop_detail_header{
			@include fj;
			align-items: center;
			.shop_title{
				width: 10.5rem;
				color: #333;
				padding-top: .01rem;
				@include font(0.65rem, 0.65rem, 'PingFangSC-Regular');
				font-weight: 700;
			}
		}

		.fee_distance{
			margin-top: 0.82rem;
			@include fj;
			@include sc(0.5rem, #666);
			.fee{
				@include sc(0.5rem, #666);
			}
		}
	}
    .entertip{width: 80%;margin: 0 auto;font-size: 0.5rem;}
    /*头部导航栏*/
	.headNav{width: 100px;padding: 0 2.5rem 3px .6rem;width: 100%;position: fixed;top: 0;z-index: 10; overflow: hidden;background: #f8f8fa;padding-top: 1.95rem;border-bottom:0.025rem solid #f1f1f1;}
	.headNavContainer{white-space: nowrap; overflow-x: scroll;}
	.headNavContainer li{display: inline-block; width: 24%;text-align: center;font-size: 0.7em;}
    .contentContainer{padding-top: 1.6rem;background-color: #fff;padding-bottom: 2rem;}
    .addPlus{position: absolute;right: .7rem;top: 2.25rem; width: .9rem;text-align: center; height: .9rem;line-height: .8rem; color: #fff;background: #ff9191;border-radius: 100%;font-weight: 600;}
    .router-link-active{color: #ff9191;}
    .topload,.bottomload{color: #A9ACB1;font-size: .6rem;}
    
    /*弹出框*/
    .shareContent{height: 11.6rem;padding-top: .5rem;padding-bottom: .5rem;}
    .articleShare{text-align: center;font-size: .7rem;font-weight: 600;}
    .sharePath{border-bottom: 1px solid #ddd;padding: .5rem 0;}
    .sharePath li{display: inline-block;width: 23%;text-align: center;}
    .shareImg{width: 2rem;display: inline-block;}
    .sharePath li span{display: block; font-size: 0.3rem;font-weight: 600;}
    .shareParts{width: 70%;margin: 0 auto;padding: .5rem 0;}
    .shareParts li{width: 31%;display: inline-block;text-align: center;}
    .shareParts li span{display: block; font-size: 0.3rem;font-weight: 600;}
    .cancle{width: 100%;height: 2rem;line-height: 2rem;text-align: center;border: 1px solid #ddd;font-size: .8rem;}
</style>
