 <template>
  	<div class="increaseContent">
        <div class="dataSummary">
        	<div class="dataSummaryTitle">
        		昨日关键指标
        	</div>
        	<div class="dataIndexs">
        		<div class="dataIndex border_R">
        			<p class="numberInfo center">200</p>
        			<p class="dataDescription center">新增关注人数</p>
        		</div>
        		<div class="dataIndex border_R">
        			<p class="numberInfo center">200</p>
        			<p class="dataDescription center">取消注人数</p>
        		</div>
        		<div class="dataIndex border_R">
        			<p class="numberInfo center">200</p>
        			<p class="dataDescription center">净增关注人数</p>
        		</div>
        		<div class="dataIndex ">
        			<p class="numberInfo center">200</p>
        			<p class="dataDescription center">累计关注人数</p>
        		</div>
        	</div>
        </div>
        <section class="dataTabs">
        	<router-link to="/contentEdit/userIncrease/newAdding" tag='li' class="dataTab border_R darkBak" >新增人数</router-link>
        	<router-link to="/contentEdit/userIncrease/cancelCaring" tag='li' class="dataTab border_R " >取消关注人数</router-link>
        	<router-link to="/contentEdit/userIncrease/addedCount" tag='li' class="dataTab border_R " >净增人数</router-link>
        	<router-link to="/contentEdit/userIncrease/accumulative" tag='li' class="dataTab border_R " >累计人数</router-link>
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
            }
        },
        mounted() {
			this.$nextTick(function() {
				
			})
		},
        components: {
           
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
   						margin-bottom: 22px;
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
