<template>
	<div>
		<li class="header_style common_style" @click="alertShow()">
            <span class="header_left">绑定第三方账号</span>
            <section class="header_right">
                <span>微信</span>  
                <svg fill="#ccc">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg> 
            </section>
        </li>
        
	</div>
</template>

<script>
	import  {MessageBox}  from 'mint-ui';
	export default {
		data(){
            return{
    			
            }
        },
       
        methods:{
        	alertShow(){
				//MessageBox.alert(message, title);
				MessageBox.confirm('确定执行此操作?','解绑微信').then(action => {
				  //点击确定执行
				  console.log(111)
				},action => {
				  //点击取消执行
				  //console.log(222)
				  return
				});
        	}
        }
    }
	
	
	
	
	
	
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
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
</style>