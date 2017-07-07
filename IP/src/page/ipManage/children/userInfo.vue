<template>
	<div class="yituMiddleContent">
		<div class="modelLeft" :style="{height:het+'px'}">
			<router-link :to="{ path:'/ipContent/userInfo/userData',query:{enterpriseId:enterpriseId} }" tag='li' class="modelTabs" :class="{activeLi:$route.path.indexOf('userData') !== -1}">用户资料</router-link>
			<router-link :to="{ path:'/ipContent/userInfo/accountSecurity',query:{enterpriseId:enterpriseId} }" tag='li' class="modelTabs" :class="{activeLi:$route.path.indexOf('accountSecurity') !== -1}">账户安全</router-link>
		</div>
		<div class="modelRight">
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
				//console.log(this.wid)
			}
		},
		watch: {
			wid: "setWid"
		}
	}
</script>

<style lang="scss" scoped>
	.yituMiddleContent {
		margin-left: 310px;
		min-width: 1220px;
		.modelLeft {
			float: left;
			background: #282c37;
			/*width: 243px;*/
			width: 204px;
			min-height: 894px;
			padding: 80px 18px 0 18px;
			position:fixed;
			left:106px;
			top:0;
			.modelTabs {
				cursor: pointer;
				color: #7e8998;
				padding-left: 14px;
				margin-bottom: 10px;
			}
		}
		.modelRight {
			width: 80%;
			margin-top: 87px;
			padding-top: 50px;
			float: left;
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