 <template>
  	<div class="contentEdit">
        <div class="content">
        	<header class="contentHeader">
        		<img class="logoOne left" src="/static/img/logoOne.png"/>
        		<span class="logoTitle left">医图号</span>
        		<router-link class="backCompany left" to="" >我的企业</router-link>
        		<span class="userName right">睿妈涨姿势</span>
        		<img class="userImg right" src="/static/img/dasdad.png"/>
        		<img class="email right" src="/static/img/email.png"/>
        	</header>
        	<section id="editPart">
        		<div class="editOperate left">
        			<router-link to="/contentEdit/homePage" class="editItem" tag="li" >●&nbsp;主页</router-link>
					<router-link to="/contentEdit/publish/Graphic" class="editItem" tag="li" >●&nbsp;发表</router-link>
        			<div class="editItem">
        				●&nbsp;管理
        				<router-link to="" class="secondaryItem" tag="li" >内容管理</router-link>
        			</div>
        			<div class="editItem">
        				●&nbsp;数据统计
        				<router-link to="" class="secondaryItem" tag="li" >用户增长</router-link>
        				<router-link to="" class="secondaryItem" tag="li" >内容分析</router-link>
        				<router-link to="" class="secondaryItem" tag="li" >兴趣统计</router-link>
        			</div>
        			<div class="editItem">
        				●&nbsp;设置
        				<router-link to="" class="secondaryItem" tag="li" >医图号信息</router-link>
        			</div>
        		</div>
        		<div class="editContent left">
        			<router-view></router-view>
        		</div>
        	</section>
        </div>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
               
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
   	.contentEdit{
   		background: #fff;
   		.content{
   			width: 1200px;
   			margin: 0 auto;
   			height: 500px;
   			/*background: rgba(23,32,32,.1);*/
   			.contentHeader{
   				padding: 10px 40px 10px 0;
   				border-bottom: 4px solid #d9dde5;
   				/*span{display: inline-block;}*/
   				overflow: hidden;
   				.logoOne{
   					width: 65px;
   					vertical-align: text-bottom;
   				}
   				.logoTitle{
   					font-size: 25px;
   					font-weight: bold;
   					color: #f9b83e;
   					margin:7px 0 0  12px;
   				}
   				.backCompany{
   					color: #fff;
   					background: #1e67ea;
   					padding: 3px 4px;
   					border-radius: 5px;
   					margin:16px 0  0 27px;
   					font-size: 11px;
   					/*margin-top: 10px;*/
   				}
   				.email{
   					width: 25px;
   					margin-top: 22px;
   					margin-right: 30px;
   				}
   				.userImg{
   					width: 36px;
   					height: 36px;
   					margin-top: 12px;
   					border-radius: 100%;
   					margin-right: 15px;
   				}
   				.userName{
   					margin-top: 15px;
   				}
   			}
   			#editPart{
   				/*overflow: hidden;*/
   				padding-top: 45px;
   				.editOperate{
   					width: 170px;
   					border-bottom:2px solid #e2e4e8 ;
   					.editItem{
   						padding: 25px 0 25px 5px;
   						border-top: 2px solid #e2e4e8 ;
   						color: #9b9b9b;
   						cursor: pointer;
   						.secondaryItem{
   							padding: 5px 0 5px 35px;
   							cursor: pointer;
   						}
   					}
   				}
   				.editContent{
   					width: 1030px;
   					padding-left: 70px;
   					padding-bottom: 100px;
   				}
   			}
   		}
   	}
</style>
