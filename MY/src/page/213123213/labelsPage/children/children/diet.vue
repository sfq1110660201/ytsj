<template>
	<div>
		<li   class="shop_li">
			
			<hgroup class="shop_right">
				<!--<header class="shop_detail_header">
					<h4 class="" class="shop_title lengthRepair ellipsis premium">孕前</h4>
					
				</header>-->
				
				<h5 class="fee_distance">
					<section class="fee">
						<dfn v-for="(diet,index) in diets">
							<span class="lebels" v-on:click="sendMsg(diet)">{{diet.name}}</span>
							<span class="segmentation">|</span>
						</dfn>
					</section>
					
				</h5>
			</hgroup>
		</li>
	</div>
</template>

<script>



export default {
	data(){
        return {
        	diets:[
        		{name:"中餐 "},
        		{name:"西餐"},
        		{name:"粗粮"},
        		{name:"营养调理"},
        		{name:"饮食禁忌"},
        		{name:"宝宝辅食"}
        	]
        	
        }
   },
    components: {
    	
    },
    methods: {
		sendMsg(lebal){
			this.$emit("listenDietEvent",lebal.name)
		}
    }
}

</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
	.shop_li{
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.6rem 0.4rem;
	}
	.shop_right{
		flex: auto;
		.fee_distance{
			margin-top: 0.52rem;
			@include fj;
			@include sc(0.5rem, #666);
			.fee{
				@include sc(0.5rem, #666);
				span{display: inline-block; color: #8f8f94;margin-bottom: 0.4rem;font-size: .6rem;}
				.lebels{padding: 0 0.5rem 0  0.5rem;}
			}
			
		}
	}
	
</style>