 <template>
  	<div class="homePage">
        <section class="homePageOne">
        	<div class="readInfo">
        		<div class="publishedInfo">
        			<router-link  :to="{path:'/contentEdit/publish/Graphic',query:{ipId:ipId}}" tag="section" class="publishedInfo_L left">
        				<!--<img class="publishedImg" src="/static/IP/img/dasdad.png"/>-->
        				<div class="publish">发表</div>
        			</router-link>
        			<section class="publishedInfo_R left">
        				<div class="readInfoOne left">
        					<div class="fansNumber center">
        						0
        					</div>
        					<div class="center">
        						粉丝
        					</div>
        				</div>
        				<div class="readInfoTwo left">
        					<div class="readeNumber center">
        						{{totalViews}}
        					</div>
        					<div class="center">
        						累计阅读量
        					</div>
        				</div>
        			</section>
        		</div>
        		<div class="readContent">
        			广告
        		</div>
        	</div>
        </section>
        <section class="homePageTwo">
        	公告
        </section>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                het:0,
                ipId:"",
                totalViews:0,
            }
        },
        mounted() {
			this.$nextTick(function() {
				this.ipId=this.$route.query.ipId;
				this.getUserInfo();
			})
		},
        components: {
           
        },
        methods:{
        	getUserInfo(){//获取IP基本统计信息
        		var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/ipm/static/" + this.ipId, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						if(res.data.code == 0) {
							var userData=res.data.data;
							if(userData.views!=""){
								this.totalViews=userData.views
							}else{
								this.totalViews=0;
							}
							
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
        	}
        }
        
    }
</script>
  
<style lang="scss" scoped>
   	.homePage{
   		padding-bottom: 32px;
   		.homePageOne{
   			padding-bottom: 32px;
   			border-bottom:2px solid #e2e4e8;
   			.readInfo{
   				overflow: hidden;
   				
   				.publishedInfo{
   					margin-bottom:32px;
   					overflow:hidden;
   					
   					.publishedInfo_L{
   						cursor: pointer;
   						height: 140px;
   						width: 200px;
   						background: #313541;
   						text-align: center;
   						padding-top: 35px;
   						.publishedImg{
   							display: inline-block;
   							width: 30px;
   							height: 30px;
   							border-radius: 100%;
   						}
   						.publish{
   							margin-top: 15px;
   							text-align: center;
   							color: #fff;
   						}
   					}
   					.publishedInfo_R{
   						margin-left: 45px;
   						height: 140px;
   						width: 714px;
   						background: #6dc5a3;
   						padding: 19px 0 28px 0;
   						.readInfoOne{
   							cursor: pointer;
   							width: 50%;
   							div{color: #fff;}
   							.fansNumber{
   								font-size: 25px;
   								padding: 18px 0;
   							}
   						}
   						.readInfoTwo{
   							cursor: pointer;
   							width: 50%;
   							div{color: #fff;}
   							border-left: 2px solid #8adec8;
   							.readeNumber{
   								font-size: 25px;
   								padding: 18px 0;
   							}
   						}
   					}
   				}
   				.readContent{
   					height: 125px;
   					background: #d2d2d2;
   				}
   			}
   		}
   		.homePageTwo{
   			padding: 25px 0;
   		}
   	}
</style>
