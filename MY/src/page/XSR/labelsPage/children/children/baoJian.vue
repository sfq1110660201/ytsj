<template>
	<div>
		<li   class="shop_li">
			
			<hgroup class="shop_right">		
				<h5 class="fee_distance">
					<section class="fee">
						<dfn v-for="baojian in baojians">
							<span class="lebels" v-on:click="sendMsg(baojian)">{{baojian.name}}</span>
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
        	baojians:[
        		{name:"两性"},
        		{name:"推拿"},
        		{name:"拔罐"},
        		{name:"洗浴"},
        		{name:"针灸"},
        		{name:"保健操"}
        	]
        	
        }
   },
    components: {
    	
    },
    methods: {
		sendMsg(lebal){
			this.$emit("listenBaojianEvent",lebal.name)
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