 <template>
  <div class="rating_page">
        <head-top :head-title="title" go-back='true'></head-top>
        <section v-if="$route.path=='/accountSecurity'">

           	<li class="header_style common_style" @click="goChangePhone()">
                <span class="header_left">绑定手机号</span>
                <section class="header_right">
                    <span>13752679323</span>  
                    <svg fill="#ccc">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg> 
                </section>
            </li>
            
            <li class="header_style common_style" @click="goChangeWeichat()">
                <span class="header_left">绑定第三方账号</span>
                <section class="header_right">
                    <span>微信</span>  
                    <svg fill="#ccc">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg> 
                </section>
            </li>
            
        </section>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import headTop from 'src/components/header/head_JKCS'
//  import {mapState, mapMutations} from 'vuex'
//  import {getOrderList} from 'src/service/getData'

    export default {
      data(){
            return{
            	userInfo:true,
            	title:"账户管理"
    
            }
       },
        components: {
            headTop,
        },
        methods: {
            goChangePhone(){
            	console.log(this.$route.path)
            	this.title="绑定第三方账号"
            	this.$router.push('/JKCSaccountSecurity/JKCSchangePhone');
            },
            goChangeWeichat(){
            	this.title="绑定第三方账号"
            	this.$router.push('/JKCSaccountSecurity/JKCSchangeWeichat');
            }
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
  
    .rating_page{
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .buy_for{
        @include sc(.6rem, #666);
        line-height: 2rem;
        padding-left: 0.7rem;
        span{
            font-weight: bold;
        }
    }
    .vip_prerogative{
        background-color: #fff;
        padding-left: .7rem;
        margin-bottom: 0.5rem;
        .vip_detail{
            display: flex;
            border-bottom: 1px solid #f5f5f5;
            padding: .8rem 0;
            .vip_detail_left{
                margin-right: .6rem;
                img{
                    @include wh(1.6rem, 1.8rem);
                }
            }
            .vip_detail_right{
                h4{
                    @include sc(.7rem, #333);
                    font-weight: normal;
                }
                p{
                    @include sc(.5rem, #999);
                }
            }
        }
    }

    .header_style{
        @include fj;
        background-color: #fff;
        line-height: 2rem;
        border-bottom: 1px solid #f5f5f5;
        padding-right: .7rem;
        .header_left{
            @include sc(.7rem, #333);
        }
        .header_right{
            display: flex;
            align-items: center;
            span{
                @include sc(.6rem, #999);
                margin-right: .2rem;
            }
            svg{
                @include wh(.5rem, .5rem);
            }
        }
    }
    .common_style{
        padding: 0 .7rem;
        margin-bottom: 0.5rem;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
