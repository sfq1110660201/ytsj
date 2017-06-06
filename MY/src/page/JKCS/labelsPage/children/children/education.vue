<template>
	<div>
		<li   class="shop_li">
			
			<hgroup class="shop_right">		
				<h5 class="fee_distance">
					<section class="fee">
						<dfn v-for="education in educations">
							<span class="lebels" v-on:click="sendMsg(education)">{{education.name}}</span>
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
        	educations:[
        		{name:"胎教 "},
        		{name:"心理辅导"},
        		{name:"育儿教育"},
        		{name:"洗浴"},
        		{name:"育儿心得"},
        		{name:"习惯养成"}
        	]
        	
        }
   },
    components: {
    	
    },
    methods: {
		sendMsg(lebal){
			this.$emit("listenEducation",lebal.name)
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