 <template>
  	<div class="register">
        <ul class="registerHeader">
        	<img class="logoImg" src="/static/IP/img/logo.png"/>
        	<!--<img class="logoImg2" src="../../../static/img/logo1.png"/>-->
        	<router-link to="/register/registerName" tag="li" class="logRegister">注册</router-link>
        	<router-link to="/login" tag="li" class="logRegister">登录</router-link>
        </ul>
        <section class="registerContent">
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
				this.het = window.screen.availHeight; //屏幕可视区域高	
			})
		},
        components: {
           
        }
        
    }
</script>
  
<style lang="scss" scoped>
   	.register{
   		min-width: 1200px;
   		background: #dbdce0;
   		background: -webkit-radial-gradient(circle, #fff,#dbdce0); /* Safari 5.1 - 6.0 */
		background: -o-radial-gradient(circle,  #fff,#dbdce0); /* Opera 11.6 - 12.0 */
		background: -moz-radial-gradient(circle,  #fff,#dbdce0); /* Firefox 3.6 - 15 */
		background: radial-gradient(circle,  #fff,#dbdce0); /* 标准的语法 */
   		padding: 40px 65px;
   		.registerHeader{
   			.logoImg{
   				width: 200px;
   			}
   			.logRegister{
   				float: right;
   				margin-right: 30px;
   				cursor: pointer;
   				color: #4781ea;
   				font-size: 25px;
   			}
   		}
   		.registerContent{
   			width: 1068px;
   			margin: 0 auto;
   			/*height: 500px;*/
   			padding-top: 80px;
   		}
   	}
</style>
