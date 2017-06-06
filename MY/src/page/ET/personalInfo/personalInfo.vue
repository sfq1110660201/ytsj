 <template>
  <div class="rating_page">
        <head-top head-title="个人信息" go-back='true'>
        	<span class="saveLebals" slot="save" @click="save">保存</span>
        </head-top>
        <section v-if="userInfo">
            <section class="vip_prerogative" style="margin-top: 10px;">
                <router-link to="" class="header_style paddingRepair">
                    <span class="header_left">头像</span>
                    <form  id="form">
                    	<input type="file" name="Filedata" value="" id="imgUpLoad" @click.stop="" @change="upLoadImg"/>
                    </form>
                    <section class="header_right">
                        <img class="userImg" :src="userImg"/>
                        <!--<svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> -->
                    </section>
                </router-link>
                <router-link to="" class="header_style">
                    <span class="header_left">昵称</span>
                    <section class="header_right">
                    	<input class="nickName" type="text" v-model="nameValue" maxlength="6"/>
                        <!--<span>dasd</span>-->  
                        <!--<svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> -->
                    </section>
                </router-link>
                <router-link to="" class="header_style" @click.native="changeSex" >
                    <span class="header_left">性别</span>
                    <section class="header_right">
                    	<span id="newSex">{{userSex}}</span>
                        <!--<select id="newSex" style="">
							<option>男</option>
							<option>女</option>
						</select> -->
                        <!--<svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> -->
                    </section>
                </router-link>
                <router-link to="" class="header_style">
                    <span class="header_left">生日</span>
                    <section class="header_right" @click="getDate">
                        <span v-text="dateValue"></span>  
                        <!--<svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> -->
                    </section>
                </router-link>
            </section>
            <!--性别选择控件-->
            <mt-popup v-model="popupVisible" position="bottom" :style="{width: wid+'px'}">
            	<div class="determineSex" @click="determineSex">确定</div>
			  	<mt-radio style="padding: .5rem .5rem;"
 			 		align="right"
  					v-model="userSex"
  					:options="options">
				</mt-radio>
			</mt-popup>
            <!--日期选择控件-->
            <mt-datetime-picker
            	ref="picker"
			  	v-model="pickerVisible"
			  	:startDate="startDate"
			  	type="date"
			  	@confirm="handleConfirm">
			</mt-datetime-picker>
        </section>
    </div>
</template>

<script>
    import headTop from 'src/components/header/head_ET'
    import { DatetimePicker } from 'mint-ui'
    import { Popup } from 'mint-ui';
    import { Radio } from 'mint-ui';

    export default {
      data(){
            return{
            	userInfo:true,
            	nameValue:"",
            	pickerVisible:"",
            	startDate:new Date(1950,0,1),
            	dateValue:"未知",
            	userImg:"",
    			userSex:"",
    			popupVisible:false,
    			sexvalue:"男",
    			options:[
					  {
					    label: '男',
					    value: '男'
					  },
					  {
					    label: '女',
					    value: '女'
					  }
    			],
    			wid:0,
    			headers:{'Authorization':localStorage.getItem("TOKEN")},
    			src:""
            }
        },
        mounted(){
            this.setUserInfo();
            this.wid =  document.body.clientWidth;//屏幕可视区域宽度
            //console.log(this.wid)
        },
        components: {
            headTop,
            DatetimePicker,
            Popup,
            Radio,
        },
        methods: {
        	upLoadImg(){
        		this.sendData()
        	},
        	getCookie(name){//获取制定名称cookie值
				var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
				if(arr=document.cookie.match(reg))
				return unescape(arr[2]);
				else
				return null;
			},
			setUserInfo(){//获取用户信息
				var TOKEN = localStorage.getItem("TOKEN")//TOCKEN
				//console.log(TOKEN)
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
						this.userImg=userInfo.Headimgurl;
						this.nameValue=userInfo.Nickname;
						this.userSex=userInfo.Sex;
//						if(sex==1){
//							this.userSex="男"
//						}else if(sex==2){
//							this.userSex="女"
//						}else if(sex==0){
//							this.userSex="未知"
//						}
					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
        	getDate(){
        		this.openPicker();
        	},
        	openPicker() {//date控件显示
        		this.$refs.picker.open();
      		},
            handleConfirm(){//点击date控件确定事件
            	var date=this.pickerVisible
            	var newDateYear=String(date.getFullYear());
            	var newMonth=(String((date.getMonth()+1))).length==1 ? "0"+String((date.getMonth()+1)) : String((date.getMonth()+1));
            	var newDay=(String(date.getDate())).length==1 ? "0"+String(date.getDate()) : String(date.getDate());
            	this.dateValue=newDateYear+"-"+newMonth+"-"+newDay
            },
            changeSex(){
            	this.popupVisible=true
            },
            sendData(){//更换用户头像
            	var TOKEN = localStorage.getItem("TOKEN") //获取token
				//console.log(TOKEN)
				var form = document.getElementById('form');  
				var Filedata = new FormData(form);
				this.$http.post("https://api.lotusdata.com/v1/file/standardupload", Filedata, {
					headers: { 'Authorization': TOKEN }
				}).then(
					function(res) {
						console.log(res)
						this.userImg=res.data.data;
						
					},
					function() {
						console.log("数据请求失败")
					}
				)
           },
            save(){
            	
            },
            determineSex(){
            	this.popupVisible=false
            }
        },
        watch: {
			sexvalue:"aa"
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
            .nickName{text-align: right;padding-right: 10px;font-size: .6rem;color:#999}
            span{
                @include sc(.6rem, #999);
                margin-right: 10px;
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
    .userImg{width: 60px;height: 60px; border-radius: 100%;margin-right:5px;}
    .saveLebals{position:absolute;right: .3rem; top: .5rem;font-size: .8rem;color: #fff;font-weight: 600;}
    .mint-cell-wrapper{background-image: none;}
    .determineSex{text-align: right;font-size: 16px;padding-right: 2rem;border-bottom: 1px solid #eaeaea;height: 1.8rem;line-height: 1.8rem;color: #26a2ff;}
    #imgUpLoad{width: 9rem;height: 2rem;opacity: 0;}
</style>
