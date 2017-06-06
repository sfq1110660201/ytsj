 <template>
  <div class="rating_page">
        <head-top head-title="个人信息修改" go-back='true'></head-top>
        <section v-if="">
            
            <section class="vip_prerogative" style="margin-top: 10px;">
                <li class="header_style paddingRepair">
                    <span class="header_left">头像</span>
                    <section class="header_right">
                        <!--<span>会员说明</span>-->
                        <img class="userImg" src=""/>
                        <svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> 
                    </section>
                </li>
                <li  class="header_style">
                    <span class="header_left">昵称</span>
                    <section class="header_right">
                        <!--<span>dasd</span>-->
                        <input type="text" class="textRight" v-model="userName"/>
                        <svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> 
                    </section>
                </li>
                <li class="header_style">
                    <span class="header_left">性别</span>
                    <section class="header_right">
                        <input type="text" class="textRight" v-model="userSex" @focus="getSex()" placeholder="未填写"/> 
                        <svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> 
                    </section>
                </li>
                <div  v-show="sexShow">
                	<mt-radio
                  		align="left"
                  		v-model="userSex"
                  		:options="['男', '女']"
                  		v-bind:click="sexDisapper()">
                	</mt-radio>
                </div>
                
                <li  class="header_style">
                    <span class="header_left">生日</span>
                    <section class="header_right">
                        <input type="date" name="" class="textRight" value="" />
                        <svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> 
                    </section>
                </li>
                
                  
            </section>
        </section>
        
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import  Radio  from 'mint-ui';
    import { DatetimePicker } from 'mint-ui';
    // import {mapState, mapMutations} from 'vuex'
//  import {getOrderList} from 'src/service/getData'

    export default {
      data(){
            return{
            	userInfo:true,
            	userName:"张三",
            	userSex:"男",
                sexShow:false
               
    
            }
        },
        mounted(){
            
        },
        computed: {
//          ...mapState([
//              'userInfo', 
//          ]),
        },
        components: {
            headTop,Radio,DatetimePicker
        },
        methods: {
      		getSex(){
      			console.log(111)
      			this.sexShow=true
      		},
      		sexDisapper(){
      			console.log(222)
      			//this.sexShow=false
      		}
            // ...mapMutations([
            //     'ORDER_SUCCESS', 'BUY_CART'
            // ]),
            // buyCart(){
            //     this.ORDER_SUCCESS({order_id: '399525134200981325'});
            //     this.BUY_CART(20);
            //     this.$router.push('/confirmOrder/payment');
            // },
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
    /*.buy_for{
        @include sc(.6rem, #666);
        line-height: 2rem;
        padding-left: 0.7rem;
        span{
            font-weight: bold;
        }
    }*/
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
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
    .paddingRepair{padding-top: 10px;padding-bottom: 10px;}
    .userImg{width: 60px;height: 60px; border-radius: 30px;margin-right:15px;}
    /*.mint-radio-input .mint-radio-core{background-color: #4c0;border-color:#4c0;}*/
   .textRight{text-align: right;color: #999;}
   .mint-radio-input:checked + .mint-radio-core {background-color: #4c0!important;border-color: #4c0!important;}
</style>
