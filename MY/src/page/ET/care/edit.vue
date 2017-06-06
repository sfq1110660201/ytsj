 <template>
  <div class="rating_page">
        <head-top head-title="添加关心" go-back='true'>
        	<!--<span slot="edit" class="save" @click="save">保存</span>-->
        	
        </head-top>
        <section class="familyChoice">
            
            <section class="vip_prerogative" style="margin-top: 10px;">
                
                <router-link to="" class="header_style">
                    <span class="header_left">我的关心</span>
                    
                </router-link>
              
                 
            </section>
            <section class="labelsContainer">
                <ul>
					<router-link to="/ETaddCare" class="editPiece" v-for="label in labels"><mt-button class="edit" type="danger">编辑</mt-button><p class="editObj">{{label.labelName}}</p></router-link>
				</ul>
            </section> 
            
        </section>
        
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import { Button } from 'mint-ui';
    // import {mapState, mapMutations} from 'vuex'
//  import {getOrderList} from 'src/service/getData'

    export default {
      data(){
            return{
            	labels:[],
            	    
    
            }
        },
        components: {
            headTop,
            Button
        },
        methods: {
        	
        },
         mounted(){
			this.$nextTick(function(){
				this.$http.get("static/addLabels.json").then(
					function(res){
						//console.log(res.data)
						var listData=res.data
						for(var i=0;i<listData.length;i++){
							this.labels.push({
								labelName:listData[i].labels,
							})
						}
						//console.log(this.labels)
					},
					function(){
						console.log("数据请求失败")
					}
				)
			})
		},
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

    }



    .familyChoice{margin-top: 1rem;}
    .labelsContainer{width: 100%;padding:1rem;background: #fff;}
    .editPiece{display: inline-block;margin:0 .2rem .5rem;}
    .edit{background: #FBD7C9;width: 3rem;height: 3rem;border-radius: 100%;}
    .editObj{font-size: .6rem;text-align: center;margin-top: .2rem;font-weight: 600;color: #8f8f94;}


</style>
