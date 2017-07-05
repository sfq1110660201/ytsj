<template>
	<div class="publishPage">
		<div class="container" style="padding-left: 0;">
			<ul class="nav nav-tabs" role="tablists">
				<li role="presentation" :class="{ active: isActive1}">
					<router-link :to="{path:'/contentEdit/publish/Graphic',query:{ipId:ipId}}" class="items" @click.native="checkOne">图文</router-link>
				</li>
				<li role="presentation" :class="{ active: isActive2}">
					<router-link :to="{path:'/contentEdit/publish/vedio',query:{ipId:ipId}}" class="items" @click.native="checkTwo">视频</router-link>
				</li>
				<li role="presentation" :class="{ active: isActive3}">
					<router-link :to="{path:'/contentEdit/publish/pictures',query:{ipId:ipId}}" class="items" @click.native="checkThree">图集</router-link>
				</li>
			</ul>
		</div>
		<div class="publishContent">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				het: 0,
				isActive1: true,
				isActive2: false,
				isActive3: false,
				ipId: "",
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.ipId = this.$route.query.ipId;
				//console.log(this.ipId)
			})
		},
		components: {

		},
		methods: {
			checkOne() {
				this.isActive1 = true;
				this.isActive2 = false;
				this.isActive3 = false;
			},
			checkTwo() {
				this.isActive1 = false;
				this.isActive2 = true;
				this.isActive3 = false;
			},
			checkThree() {
				this.isActive1 = false;
				this.isActive2 = false;
				this.isActive3 = true;
			}
		}

	}
</script>

<style lang="scss" scoped>
	.publishPage {
		/*overflow: hidden;*/
		/*width: 960px;*/
		ul {
			width: 945px;
			li {
				border-radius: 8px;
				.items {
					display: inline-block;
					color: #333;
					padding: 5px 15px;
				}
			}
		}
		.publishContent {
			margin-top: 28px;
			/*width: 100%;*/
			/*background: lightgoldenrodyellow;*/
			/*height: 400px;*/
		}
	}
</style>