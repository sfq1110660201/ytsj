 <template>
  <div class="download_page">
        <head-top head-title="关心" go-back='true'></head-top>
        <section class="dowload_container">
            <!--<img src='../../images/elmlogo.jpeg' class="logo_img">-->
            <p class="entertip">
            	<b>——</b>
            	 你还未添加关心的家人，请添加关心  
            	 <b>——</b>
            </p>
            <div class="determine" @click="addCare">添加关心</div>
            <p class="isLogin">未登录</p>
        </section>
        <!--<alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>-->
        <foot-guide></foot-guide>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
//  import alertTip from 'src/components/common/alertTip'
	import footGuide from 'src/components/footer/footGuide'
    export default {
      data(){
            return{
                system: null,
                showAlert: false,
                alertText: null,
            }
        },
        created(){
            //判断系统
            let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
            let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid) {
                this.system = 'Android';
            } else if (isIOS) {
                this.system = 'IOS';
            } else {
                this.system = 'pc';
            }
        },
        mixins: [],
        components: {
            headTop,
            footGuide
        },
        props:[],
        methods: {
            addCare(){
                this.$router.push("/XSRaddCare")
            }
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
  
    .download_page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /*background-color: #fff;*/
        z-index: 202;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .dowload_container{
        text-align: center;
        p{
            @include sc(.6rem, #b2b2b2);
            margin-bottom: 4rem;
            margin-top: 3em;
            font-weight: 600;
        }
        b{color: #b2b2b2;}
        .isLogin{text-align: center;color: #000;}
        .determine{
            background-color: #fbd7c9;
            @include sc(.7rem, #fff);
            text-align: center;
            margin: 0 auto;
            line-height: 5rem;
            border-radius: 100%;
            /*margin-top: 0.5rem;*/
           font-weight: 600;
            width: 5rem;
            height: 5rem;
        }
    }
    .entertip{width: 80%;margin: 0 auto;font-size: 0.5rem;}
    
</style>
