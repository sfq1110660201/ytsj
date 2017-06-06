<template>
  	<div class="rating_page">
        <head-top head-title="收藏" go-back='true'></head-top>
        <div class="shoplist_container containerRepair">
			<ul  v-if="" class="pageBackground">
				<router-link to="/JKCSparagraph"  tag='li' v-for="recommend in recommends"  class="shop_li">
					<section v-if="screenWidth">
						<img src="static/MY/img/(1)_03.png" class="shop_img" style="">
					</section>
					<hgroup class="shop_right">
						<header class="shop_detail_header">
							<h4 class="" class="shop_title ellipsis premium">{{recommend.title}}</h4>
							
						</header>
						
						<h5 class="fee_distance">
							<section class="fee">
								<span>{{recommend.froms}} </span>
								<span class="segmentation">|</span>
								<span>{{recommend.time}}</span>
								<span class="segmentation">|</span>
								<span>分享</span>
							</section>
							
						</h5>
					</hgroup>
				</router-link>
			</ul>
			<p  class="empty_data">没有更多了</p>
			
			<footer class="loader_more" v-show="">正在加载更多...</footer>
			<div  style="background-color: red;"></div>
			
		</div>
        
    </div>
</template>

<script>
import headTop from 'src/components/header/head_JKCS'

export default {
	data(){
		return {
			screenWidth:true,
			offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
			shopListArr:[], // 店铺列表数据
			preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
			showBackStatus: false, //显示返回顶部按钮
			showLoading: true, //显示加载动画
			recommends:[]
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.$http.get("static/list.json").then(
				function(res){
					//console.log(res.data)
					var listData=res.data
					for(var i=0;i<listData.length;i++){
						this.recommends.push({
							title:listData[i].title,
							froms:listData[i].froms,
							time :listData[i].time
						})
					}
					
				},
				function(){
					console.log("数据请求失败")
				}
			)
		})
	},
	components: {
		headTop
	},

	methods: {

	},
	watch: {

	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
	.shoplist_container{
		background-color: #fff;
		padding-bottom: 2rem;
	}
	.shop_li{
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.6rem 0.4rem;
	}
	.shop_img{
		@include wh(3.7rem, 2.7rem);
		display: block;
		margin-right: 0.4rem;
	}
	.shop_right{
		flex: auto;
		.shop_detail_header{
			@include fj;
			align-items: center;
			.shop_title{
				width: 10.5rem;
				color: #333;
				padding-top: .01rem;
				@include font(0.65rem, 0.65rem, 'PingFangSC-Regular');
				font-weight: 700;
			}
			.shop_detail_ul{
				display: flex;
				.supports{
					@include sc(0.5rem, #999);
					border: 0.025rem solid #f1f1f1;
					padding: 0.04rem;
					border-radius: 0.08rem;
					margin-left: 0.05rem;
				}
			}
		}
		.rating_order_num{
			@include fj(space-between);
			height: 0.6rem;
			margin-top: 0.52rem;
			.rating_order_num_left{
				@include fj(flex-start);
				.rating_section{
					display: flex;
					.rating_num{
						@include sc(0.4rem, #ff6000);
						margin: 0 0.2rem;
					}
				}
				.order_section{
						@include sc(0.4rem, #666);
				}
			}
			.rating_order_num_right{
				display: flex;
				align-items: center;
				.delivery_style{
					font-size: 0.8rem;
					padding: 0.04rem 0.08rem 0;
					border-radius: 0.08rem;
					margin-left: 0.08rem;
					border: 1px;
				}
				.delivery_left{
					color: #fff;
					background-color: $blue;
					border: 0.025rem solid $blue;
				}
				.delivery_right{
					color: $blue;
					border: 0.025rem solid $blue;
				}
			}
		}
		.fee_distance{
			margin-top: 0.82rem;
			@include fj;
			@include sc(0.5rem, #666);
			.fee{
				@include sc(0.5rem, #666);
			}
			.distance_time{
				span{
					color: #999;
				}
				.order_time{
					color: $blue;
				}
				.segmentation{
					color: #ccc;
				}
			}
		}
	}
	.loader_more{
		@include font(0.6rem, 3);
		text-align: center;
	    color: #999;
	}
	.empty_data{
		@include sc(0.5rem, #666);
		text-align: center;
		line-height: 2rem;
	}
	.return_top{
		position: fixed;
		bottom: 3rem;
		right: 1rem;
		.back_top_svg{
			@include wh(2rem, 2rem);
		}
	}
	.loading-enter-active, .loading-leave-active {
		transition: opacity 1s
	}
	.loading-enter, .loading-leave-active {
		opacity: 0
	}
	.containerRepair{padding-top: 50px;background: #f5f5f5;}
	.pageBackground{background: #fff;}
</style>
