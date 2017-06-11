<template>
	<div class="yituMiddleContent">
		<div class="modelLeft" :style="{height:het+'px'}">
			<router-link to="/ipContent/userInfo/userData" tag='li' class="modelTabs">用户资料</router-link>
			<router-link to="/ipContent/userInfo/accountSecurity" tag='li' class="modelTabs">账户安全</router-link>
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
				wid: 0
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight; //屏幕可视区域高	
				this.setWid()
			})
		},
		methods: {
			setWid() {
				this.wid = document.body.clientWidth - 349; //屏幕可视区域高
				console.log(this.wid)
			}
		},
		watch: {
			wid: "setWid"
		}
	}
</script>

<style lang="scss" scoped>
	.yituMiddleContent {
		margin-top: -87px;
		float: left;
		min-width: 1220px;
		.modelLeft {
			float: left;
			background: #282c37;
			/*width: 243px;*/
			width: 20%;
			min-height: 894px;
			padding: 80px 18px 0 18px;
			.modelTabs {
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
	
	.modelTabs:hover {
		color: #fff!important;
		background: #1f222d;
	}
</style>