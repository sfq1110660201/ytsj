 <template>
  	<div class="download_page">
        <head-top head-title="我" go-back='true'></head-top>
    	<section class="logIn">
    		<div class="loginContent">
    			<input placeholder="请输入手机号" type="text" class="textPhone">
    		</div>
    		<div class="loginContent">
    			<input placeholder="请输入验证码" type="text" v-model="phoneText" class="textPassword">
    			<input value="获取验证码" type="button" class="textBtn" @click="getText">
    		</div>
    		<div class="loginContent">
    			<input value="登  录" type="button" class="loginBtn" @click="login()">
    		</div>
    		<!--<div class="loginContent">
    			<p class="forgetPsd">忘记密码</p>
    		</div>-->
    		<p class="entertip">
            	<b>——</b>
            	 使用社交账号登录 
            	 <b>——</b>
            </p>
            <div class="loginContent">
    			<img class="weiChatLogIn" src="/static/img/weichatLogin.png"/>
    		</div>
    		<div class="serviceArgument ">
    			<input type="checkbox" class="listCheckBox" v-model="isChecked" @click="getChecked(isChecked)"/>
            	<span style="color: #666;">已阅读</span>
            	<router-link :to="{ path: '/agreement'}" style="color: #ff9c9c;">用户服务与隐私协议</router-link>
    		</div>
    	</section>
        <foot-guide></foot-guide>
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
	import footGuide from 'src/components/footer/footGuide'
	import { Radio } from 'mint-ui';
	
    export default {
      data(){
            return{
                //userLogin:true,
                phoneText:"",
                isChecked:false
            }
      },
        components: {
            headTop,
            footGuide,
            Radio
        },
        methods: {
            trim(str){ //删除左右两端的空格
	　　             	return str.replace(/(^\s*)|(\s*$)/g, "");
	　　        },
            getChecked(status){
                console.log(status)
            },
            getText(){//获取短信验证码
            	var phoneText=this.trim(this.phoneText);
            	console.log(this.phoneText)
            },
            login(){
                var phoneText=this.trim(this.phoneText)
                var isChecked=this.isChecked
                if(phoneText!="" && isChecked==true){
                    var textData={
                        "phoneText":phoneText
                    }
                    this.$http.post("post_url",textData).then(
                        function () {// 处理成功的结果
                           
                        },function () {// 处理失败的结果
                            console.log("error")
                    })
                    this.$router.push({path: '/lebalChoice'})
                }
            }

        }
    }
</script>
  
<style lang="scss" scoped>
    .logIn{padding: 2rem 1rem 0 1rem;}
    .loginContent{margin-top: .7rem;overflow: hidden;}
    .textPhone{width: 100%;height: 1.8rem;border-radius: .9rem;padding-left: 1rem;border: 1px solid rgba(0,0,0,.2);}
    .textPassword{width: 65%;float: left;height: 1.8rem;border-radius: .9rem;padding-left: 1rem;border: 1px solid rgba(0,0,0,.2);}
    .textBtn{width: 30%;float: right;height: 1.8rem;border-radius: .9rem;background: #fff; border: 1px solid #ff9c9c ;color: #ff9c9c;}
    .loginBtn{width: 100%;height: 1.8rem;border-radius: .9rem;border: 1px solid rgba(0,0,0,.2);color: #666;border: 0;}
    .forgetPsd{text-align: center;font-size: .5rem; color: #b2b2b2;font-weight: 600;}
    .entertip{width: 90%;margin: 0 auto;font-size: 0.5rem;color: #b2b2b2;margin-top: 5em;font-weight: 600;text-align: center;}
    .entertip b{color: #b2b2b2;}
    .weiChatLogIn{display: block;width: 2rem;margin: 0 auto;margin-bottom: 3rem;}
    .serviceArgument{font-size: .6rem;color: #b2b2b2;font-weight: 600;text-align: center;margin-top: 3rem;}
</style>
