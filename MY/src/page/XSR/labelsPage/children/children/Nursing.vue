<template>
	<div>
		<li   class="shop_li">
			
			<hgroup class="shop_right">	
				<h5 class="fee_distance">
					<section class="fee">
						<dfn v-for=" nursing in nursings">
							<span class="lebels" v-on:click="sendMsg(nursing)">{{nursing.name}}</span>
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
        	nursings:[
        		{name:"面部"},
        		{name:"毛发"},
        		{name:"身体"},
        		{name:"口腔"},
        		{name:"女性"},
        		{name:"清洁"}
        	]
        	
        }
   },
    components: {
    	
    },
    methods: {
		sendMsg(lebal){
			this.$emit("listenNursingEvent",lebal.name)
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