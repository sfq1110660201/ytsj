 <template>
  	<div class="increaseContent">
        <div class="dataSummary">
        	<div class="dataSummaryTitle">
        		昨日关键指标
        	</div>
        	<div class="dataIndexs">
        		<div class="dataIndex border_R">
        			<p class="numberInfo center">{{newAddings}}</p>
        			<p class="dataDescription center">新增关注人数</p>
        		</div>
        		<div class="dataIndex border_R">
        			<p class="numberInfo center">{{cancleCares}}</p>
        			<p class="dataDescription center">取消注人数</p>
        		</div>
        		<div class="dataIndex border_R">
        			<p class="numberInfo center">{{netIncreases}}</p>
        			<p class="dataDescription center">净增关注人数</p>
        		</div>
        		<div class="dataIndex ">
        			<p class="numberInfo center">{{totalAddings}}</p>
        			<p class="dataDescription center">累计关注人数</p>
        		</div>
        	</div>
        </div>
        <section class="dataTabs">
        	<router-link :to="{path:'/contentEdit/userIncrease/newAdding',query:{ipId:ipId}}" tag='li' class="dataTab border_R " :class="{darkBak:$route.path.indexOf('newAdding') !== -1}">新增人数</router-link>
        	<router-link :to="{path:'/contentEdit/userIncrease/cancelCaring',query:{ipId:ipId}}" tag='li' class="dataTab border_R " :class="{darkBak:$route.path.indexOf('cancelCaring') !== -1}">取消关注人数</router-link>
        	<router-link :to="{path:'/contentEdit/userIncrease/addedCount',query:{ipId:ipId}}" tag='li' class="dataTab border_R " :class="{darkBak:$route.path.indexOf('addedCount') !== -1}">净增人数</router-link>
        	<router-link :to="{path:'/contentEdit/userIncrease/accumulative',query:{ipId:ipId}}" tag='li' class="dataTab border_R " :class="{darkBak:$route.path.indexOf('accumulative') !== -1}">累计人数</router-link>
        </section>
        <section>
        	<router-view></router-view>
        	
        </section>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                het:0,
                ipId: "",
                newAddings:"",//新增关注人数
                cancleCares:"",//取消注人数
                netIncreases:"",//净增关注人数
                totalAddings:"",//累计关注人数
            }
        },
        mounted() {
			this.$nextTick(function() {
				this.ipId = this.$route.query.ipId
				this.basicIpData();
				var date=new Date();
				var month=(date.getMonth()+1).toString().length<2 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
				var timeToday=date.getFullYear()+"-"+ month +'-'+date.getDate();
				//console.log(typeof timeToday)
				this.getTodayData(timeToday,timeToday);
				
				
			})
		},
        methods: {
           	basicIpData() {
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/ipm/static/"+this.ipId, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						//console.log(res)
						if(res.data.code==0){
							var addingData=res.data.data;
							//console.log(addingData)
							if(addingData.following==""){
								this.totalAddings="0"
							}else{
								this.totalAddings=addingData.following;
							}
						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			getTodayData(startdate,enddate){
				var TOKEN = localStorage.getItem("TOKEN")
				this.$http.get("https://api.lotusdata.com/ip/v1/ipm/static/usertrends/"+this.ipId, {
					params: {
						startdate:startdate,
						enddate:enddate
					},
					headers: { 'Authorization': TOKEN }
					
				}).then(
					function(res) {
						//console.log(res)
						if(res.data.code==0){
							var timeToday=res.data.data[0].data;
							//console.log(timeToday)
							if(timeToday.grow!=""){//新增
								this.newAddings=timeToday.grow
							}else{
								this.newAddings="0"
							}
							if(timeToday.unsubscribe!=""){//取关
								this.cancleCares=timeToday.unsubscribe
							}else{
								this.cancleCares="0"
							}
							if(timeToday.grow!="" && timeToday.unsubscribe!=""){
								if(timeToday.grow-timeToday.unsubscribe>=0){
									this.netIncreases=timeToday.grow-timeToday.unsubscribe;
								}else{
									this.netIncreases=0;
								}
							}else{
								this.netIncreases="0"
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
   .increaseContent{
   		.dataSummary{
   			/*height: 172px;*/
   			border:1px solid #ced2d9;
   			overflow:hidden;
   			.dataSummaryTitle{
   				background: #f4f5f9;
   				padding: 10px 0 10px 20px;
   				border-bottom: 1px solid #ced2d9;
   			}
   			.dataIndexs{
   				overflow: hidden;
   				padding: 29px 0 22px 0;
   				.dataIndex{
   					float: left;
   					width: 25%;
   					
   					.numberInfo{
   						font-size: 35px;
   						padding-bottom: 22px;
   						margin: 0;
   						color: #000;
   					}
   					.dataDescription{
   						color: #4a4949;
   						margin: 0;
   					}
   				}
   			}
   		}
   		.dataTabs{
   			border:1px solid #ced2d9;
   			border-radius: 3px;
   			display: inline-block;
   			margin: 30px 0;
   			overflow: hidden;
   			.dataTab{
   				float: left;
   				padding: 10px 25px;
   				cursor: pointer;
   			}
   		}
   }
   .border_R{
   		border-right: 1px solid #ced2d9;
   	}
   	.darkBak{
   		background: #576477;
   		color: #fff;
   	}
</style>
