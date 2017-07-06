<template>
	<div class="yituMiddleContent">
		<div class="modelLeft" :style="{height:het+'px'}">
			<router-link :to="{ path:'/ipContent/yiTu/myYiTu',query:{enterpriseId:enterpriseId} }"  tag='li' class="modelTabs" :class="{activeLi:$route.path.indexOf('myYiTu') !== -1}">我的医图号</router-link>
			<router-link :to="{path:'/ipContent/yiTu/addYiTu',query:{enterpriseId:enterpriseId}}" tag='li' class="modelTabs" :class="{activeLi:$route.path.indexOf('addYiTu') !== -1}">添加医图号</router-link>
		</div>
		<div class="modelRight" >
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				het: 0,
				wid: 0,
				enterpriseId:"",
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight; //屏幕可视区域高	
				this.setWid()
				this.enterpriseId = localStorage.getItem("enterpriseId")
			})
		},
		methods: {
			setWid() {
				this.wid = document.body.clientWidth - 349; //屏幕可视区域高
				
			}
		},
		watch: {
			wid: "setWid"
		}
	}
</script>

<style lang="scss" scoped>
	.yituMiddleContent {
		/*margin-top: -87px;*/
		/*padding-top: 87px;*/
		float: left;
		/*width: 150px;*/
		width: 1220px;
		/*height: 500px;*/
		/*background: #2AABD2;*/
		/*overflow: hidden;*/
		.modelLeft {
			float: left;
			background: #282c37;
			width: 204px;
			min-height: 894px;
			padding: 80px 18px 0 18px;
			position:fixed;
			left:106px;
			.modelTabs {
				color: #7e8998;
				padding-left: 14px;
				margin-bottom: 10px;
			}
		}
		.modelRight {
			width: 1100px;
			margin-top: 87px;
			padding-top: 50px;
			padding-bottom: 40px;
			margin-left: 310px;
			float: left;
			overflow-y: scroll!important;
		}
	}
	.activeLi{
		color: #fff!important;
		background: #1f222d;
	}
	.modelTabs:hover {
		color: #fff!important;
		background: #1f222d;
	}
</style>