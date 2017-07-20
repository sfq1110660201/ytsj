<template>
	<div class="yituContainer" v-show="ipContentShow">
		<section :style="{width:wid+'px'}">
			<div class="logoTitle">医图视界健康数据链AI平台</div>
			<div class="dropdown dropdown_con">
				<button class="btn dropdown-toggle con1" id="dropdownMenu1" data-toggle="dropdown">
					<!--<img src="static/image/robot.png" alt="###">-->
					{{emailName}}
					<span class="caret"></span>
				</button>
				<ul class="dropdown-menu dropdown_menu" role="menu" aria-labelledby="dropdownMenu1">
					<li>
						<router-link :to="{path:'/ipContent/yiTu/myYiTu',query:{enterpriseId:enterpriseId}}">用户中心</router-link>
					</li>
					<!--<li>
						<router-link to="">我的消息</router-link>
					</li>-->
					<li>
						<router-link :to="{path:'/ipContent/userInfo/accountSecurity',query:{enterpriseId:enterpriseId}}">账号安全</router-link>
					</li>
					<li role="presentation" class="divider"></li>
					<li>
						<router-link to="" @click.native="signOut">退出</router-link>
					</li>
					<!--<li>
						<a href="javascript:alert('清除成功');"> 清除缓存 </a>
					</li>-->
					
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
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				ipContentShow: false,
				wid: 0,
				het: 0,
				enterpriseId: "",
				emailName: "",
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				this.wid = window.screen.availWidth - 310; //屏幕可视区域高
				this.het = window.screen.availHeight; //屏幕可视区域高
				var TOKEN = localStorage.getItem("TOKEN");
				//debugger
				if(TOKEN) {
					this.testTOKEN(TOKEN);
					//this.emailName = localStorage.getItem("emailName")
					//this.enterpriseId = localStorage.getItem("enterpriseId")
				} else {
					this.$router.push({ path: "/login" })
				}
			})
		},
		methods: {
			testTOKEN(TOKEN) {
				var token = TOKEN.substr(4, TOKEN.length);
				this.$http.post("https://api.lotusdata.com/v1/buser/refreshtoken", { "token": token }, {}).then(
					function(res) {
						//console.log(res)
						if(res.data.code == "0") {
							var token = "JWT " + res.data.data;
							localStorage.setItem("TOKEN",token)
							this.ipContentShow=true;
							this.emailName = localStorage.getItem("emailName")
							this.enterpriseId = localStorage.getItem("enterpriseId")
						}else{
							this.$router.push({ path: "/login" })
						}

					},
					function() {
						console.log("数据请求失败")
					}
				)
			},
			signOut() { //tuichu
				localStorage.removeItem("TOKEN");
				localStorage.removeItem("emailName");
				localStorage.removeItem("enterpriseId");
				localStorage.removeItem("phoneNum");
				localStorage.removeItem("token");
				this.$router.push({ path: "/login" })
			}
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.yituContainer {
		/*overflow: hidden;*/
		position: relative;
		min-width: 1326px;
		section {
			height: 87px;
			/*position: absolute;*/
			/*top: 0;*/
			margin-left: 310px;
			background: #fff;
			/*position: relative;*/
			border-bottom: 1px solid #e4e7e9;
			position: fixed;
			z-index: 10000;
			top: 0;
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
			/*margin-top: -87px;*/
			float: left;
			width: 106px;
			min-height: 894px;
			background: #313541;
			position: fixed;
			left: 0;
			.modelTabs {
				cursor: pointer;
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