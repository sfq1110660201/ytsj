 <template>
  <div class="rating_page">
        <head-top head-title="添加关心" go-back='true'>
        	<span slot="edit" class="save" @click="save">保存</span>
        	
        </head-top>
        <section class="familyChoice">
            
            <section class="vip_prerogative" style="margin-top: 10px;">
                
                <router-link to="" class="header_style">
                    <span class="header_left">昵称</span>
                    <section class="header_right">
                        <select  id="callName" prompt="请选择标签" v-model="callName">
							  <option>爸爸</option>
							  <option>妈妈</option>
							  <option >爷爷</option>
							  <option >奶奶</option>
							  <option>外公</option>
							  <option>外婆</option>
						</select> 
                        <svg fill="#ccc">
                            <use xmlns:xlink="http://www.w3 .org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg> 
                    </section>
                </router-link>
              
                 
            </section>
            <section class="labelsContainer">
                <span class="lebels" :class="{isPink:label.bool}"  v-for="(label,index) in labels" @click="storageLabeLabel(label,index)">{{label.name}} </span>
            </section> 
            
        </section>
        <!--<transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>-->
    </div>
</template>

<script>
    import headTop from 'src/components/header/head_JKCS'
    // import {mapState, mapMutations} from 'vuex'
//  import {getOrderList} from 'src/service/getData'

    export default {
      data(){
            return{
            	userInfo:true,
            	callName:"爸爸",
            	labels:[{
            		name:"中餐",
            		bool:false
            	},{
            		name:"西餐",
            		bool:false
            	},{
            		name:"粗粮",
            		bool:false
            	},{
            		name:"中餐",
            		bool:false
            	},{
            		name:"营养调理",
            		bool:false
            	},{
            		name:"饮食禁忌",
            		bool:false
            	},{
            		name:"宝宝辅食",
            		bool:false
            	},{
            		name:"面部",
            		bool:false
            	},{
            		name:"毛发",
            		bool:false
            	},{
            		name:"身体",
            		bool:false
            	},{
            		name:"口腔",
            		bool:false
            	},{
            		name:"女性",
            		bool:false
            	},{
            		name:"清洁",
            		bool:false
            	}],
    			labelsData:[]       
    
            }
        },
        components: {
            headTop,
        },
        methods: {
        	//点击标签
        	storageLabeLabel(label,index){
        		label.bool=!label.bool
        		if(label.bool==true){//将亮色标签添加进labelsData数组
        			this.labelsData.push({"labelName":label.name})
        			
        		}else if(label.bool==false){//将该亮色标签从数组中删除
        			for(var i=0;i<this.labelsData.length;i++){
        				if(this.labelsData[i].labelName==label.name){
        					this.labelsData.splice(i,1)
        				}
        			}
        		}
        		console.log(this.labelsData)
        	},
        	//保存按钮
           	save(){
	           	var choseLabels=this.labelsData
	           	if(this.labelsData.length>0){//将用户选择标签上传
	           		this.$http.post("url",choseLabels).then(
			            function () {// 处理成功的结果
			               
			            },function () {// 处理失败的结果
			            	console.log("用户标签上传失败")
			        });
	           	}
	           	this.$router.push("/JKCScareaddFinished")
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
        
    }
    
    .header_style{
        @include fj;
        background-color: #fff;
        line-height: 2rem;
        border-bottom: 1px solid #f5f5f5;
        padding-right: .7rem;
        .header_left{
            @include sc(.7rem, #ff9191);
        }
        .header_right{
            display: flex;
            align-items: center;
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
    .familyChoice{margin-top: 1rem;}
    .labelsContainer{width: 100%;padding:1rem;background: #fff;}
    .labelsContainer span{font-size: 0.6rem;padding: 0 0.5rem;border-right: 1px solid #ddd;}
    /*.labelsContainer .segmentation{color: #ddd;}*/
   	#callName{font-size: 0.6rem;}
   	.save{position: absolute;color: #fff;font-size: .8rem;right: 0.3rem;top: 0.6rem;font-weight: 600;}
   	.isPink{color: #ff9191;}
</style>
