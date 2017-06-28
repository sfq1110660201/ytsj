<template>

	<div class="yituContainer">
		<section>
			<span class="logoTitle">医图视界健康数据链AI平台</span>
			<div class="dropdown dropdown_con">
				<button class="btn dropdown-toggle con1" id="dropdownMenu1" data-toggle="dropdown">
					<!--<img src="static/image/robot.png" alt="###">-->
					{{this.emailName}}
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
			<router-link :to="{ path:'/ipContent/yiTu/myYiTu',query:{enterpriseId:enterpriseId} }" tag='li' class="modelTabs" :class="{active:$route.path.indexOf('yiTu') !== -1}">医图号</router-link>
			<router-link :to="{path:'/ipContent/userInfo/userData',query:{enterpriseId:enterpriseId}}" tag='li' class="modelTabs" :class="{active:$route.path.indexOf('userInfo') !== -1}">用户信息</router-link>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				het: 0,
				enterpriseId: "",
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight; //屏幕可视区域高
				//this.getToken();
				//console.log(localStorage.getItem("enterpriseId"))
				this.enterpriseId = localStorage.getItem("enterpriseId")
				console.log(this.EnterpriseId)
			})
		},
		computed:mapGetters({//vuex获取值
           emailName:'getEmail',
           EnterpriseId:"getEnterpriseId"
       	}),
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
				text-align: center;
				line-height: 103px;
				color: #fff;
			}
		}
	}
	
	.active {
		background: #65cea7;
	}
</style>