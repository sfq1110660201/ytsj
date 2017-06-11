<template>

	<div class="yituContainer">
		<section>
			<span class="logoTitle">医图视界健康数据链AI平台</span>
			<div class="dropdown dropdown_con">
				<button class="btn dropdown-toggle con1" id="dropdownMenu1" data-toggle="dropdown">
					<!--<img src="static/image/robot.png" alt="###">-->
					yitushijie@163.com
					<span class="caret"></span>
				</button>
				<ul class="dropdown-menu dropdown_menu" role="menu" aria-labelledby="dropdownMenu1">
					<li>
						<a href="##">用户中心</a>
					</li>
					<li>
						<a href="###">我的消息</a>
					</li>
					<li>
						<a href="###">账号安全</a>
					</li>
					<!--<li role="presentation" class="divider"></li>-->
					<li>
						<a href="###">订单管理</a>
					</li>
					<li>
						<a href="###">退出</a>
					</li>

				</ul>
			</div>
		</section>
		<div class="models" :style="{height:het+'px'}">
			<router-link to="/ipContent/yiTu/myYiTu" tag='li' class="modelTabs">医图号</router-link>
			<router-link to="/ipContent/userInfo/userData" tag='li' class="modelTabs">用户信息</router-link>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					het: 0,
				}
			},
			components: {

			},
			mounted() {
				this.$nextTick(function() {
					this.het = window.screen.availHeight; //屏幕可视区域高
					//console.log( window.screen.availHeight,window.screen.height)

				})
			},
			methods: {

			},
			watch: {

			}
	}
</script>

<style lang="scss" scoped>
	.yituContainer {
		overflow: hidden;
		position: relative;
		min-width: 1326px;
		section {
			height: 87px;
			/*position: absolute;*/
			/*top: 0;*/
			margin-left: 350px;
			background: #fff;
			position: relative;
			border-bottom: 1px solid #e4e7e9;
			.logoTitle {
				position: absolute;
				left: 20px;
				top: 10px;
				font-weight: bold;
				/*font-family: pictos;*/
				font-size: 36px;
				color: #919cab;
			}
			.dropdown_con {
				position: absolute;
				right: 50px;
				.con1 {
					height: 85px;
					background: #fff;
				}
				.dropdown_menu {
					min-width: 170px!important;
					/*li{padding-left: 10px;}*/
					li {
						padding: 0, 20px;
					}
				}
			}
		}
		.models {
			margin-top: -87px;
			/*padding-top: 87px;*/
			float: left;
			width: 106px;
			min-height: 894px;
			/*color: #fff;*/
			/*height: 500px;*/
			background: #313541;
			.modelTabs {
				width: 106px;
				height: 103px;
				border-bottom: 1px solid #28A4C9;
				text-align: center;
				line-height: 103px;
				color: #fff;
			}
		}
	}
</style>