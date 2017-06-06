<template>
    <div class="profile_page">
        <head-top  :head-title="profiletitle"></head-top>
        <section>
            <section class="profile-number">
                <router-link to="/personalInfo" class="profile-link">
                    <span class="privateImage" >
                        <img class="privateImage-svg" :src="userImg"/>
                    </span>
                    <div class="user-info">
                        <p>{{username}}</p>
                    </div>
                    <span class="arrow">
                        <svg class="arrow-svg" fill="#bbb">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </router-link>
            </section>
            <section class="profile-1reTe">
                
                <!-- 我的收藏 -->
                <router-link to='/collection' class="myorder">
                    <aside>
                        <img class="colecttIcon" src="/static/MY/img/00I_07.png"/>
                    </aside>
                    <div class="myorder-div">
                        <span>&nbsp;&nbsp;我的收藏</span>
                        <span class="myorder-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </router-link>
                <!-- 账号安全 -->
                <router-link to='/accountSecurity' class="myorder">
                    <aside>
                        <img class="securtyIcon"  src="/static/MY/img/00_10.png"/>
                    </aside>
                    <div class="myorder-div">
                        <span>&nbsp;&nbsp;账号安全</span>
                        <span class="myorder-divsvg">
                            <svg fill="#bbb">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </router-link>
            </section>
        </section>
        <foot-guide></foot-guide>
        <!--<transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>-->
    </div>
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'

export default {
    data(){
        return{
            profiletitle: '我',
            username: '',   //用户名
            userImg:"",
        }
    },
    mounted(){
    	this.$nextTick(function() {
    		this.setUserInfo()
    	})
    },
    components:{
        headTop,
        footGuide,
    },
    methods:{
		getCookie(name){//获取制定名称cookie值
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
			else
			return null;
		},
		setUserInfo(){//获取用户信息
			var TOKEN = localStorage.getItem("TOKEN")//TOCKEN
			var WxOAuth2Token=this.getCookie("WxOAuth2Token")//cookie值
			this.$http.get("https://api.lotusdata.com/v1/wx/userinfo", {
				params: {
					wxtoken: WxOAuth2Token,
				},
				headers: { 'Authorization': TOKEN }
			}).then(
				function(res) {
					var userInfo=res.data.data;
					//console.log(userInfo)
					this.username=userInfo.Nickname
					this.userImg=userInfo.Headimgurl
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
   @import 'src/style/mixin';
	/*@import 'src/style/weui';*/
    .profile_page{
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
   .profile-number{
        padding-top:1.95rem;
        .profile-link{
            display:block;
            display:flex;
            box-align: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background:#fff;
            padding: .666667rem .3rem .666667rem .6rem;
            .privateImage{
                display:inline-block;
                @include wh(2.5rem,2.5rem);
                /*border-radius:50%;*/
                vertical-align:middle;
                .privateImage-svg{
                    background:$fc;
                    border-radius:50%;
                    @include wh(2.5rem,2.5rem);
                }
            }
            .user-info{
                margin-left:.48rem;
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                p{
                    font-weight:700;
                    @include sc(.8rem,#666);
                    .user-icon{
                        @include wh(0.5rem,0.75rem);
                        display:inline-block;
                        vertical-align:middle;
                        line-height:0.75rem;
                        .icon-mobile{
                            @include wh(100%,100%);
                        }
                    }
                }

            }
            .arrow{
                @include wh(.46667rem,.98rem);
                display:inline-block;
                svg{
                   @include wh(100%,100%);
                }
            }
        }
   }
   .profile-1reTe{
        margin-top:.4rem;
        background:$fc;
        .myorder{
            padding-left:1.6rem;
            display:flex;
            align-items: center;
            aside{
                @include wh(.7rem,.7rem);
                margin-left:-.866667rem;
                margin-right:.266667rem;
                display:flex;
                align-items: center;
                svg{
                    @include wh(100%,100%);
                }
            }
            .myorder-div{
                width:100%;
                border-bottom:1px solid #f1f1f1;
                padding:.433333rem .266667rem .433333rem 0;
                @include sc(.7rem,#333);
                display:flex;
                justify-content:space-between;
                span{
                    display:block;
                }
                .myorder-divsvg{
                    @include wh(.46667rem,.466667rem);
                    svg{
                        @include wh(100%,100%);
                    }
                }
            }
        }
        .myorder:nth-of-type(3) .myorder-div{
            border:0;
        }
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
    .securtyIcon,.colecttIcon{width: .8rem;}
</style>
