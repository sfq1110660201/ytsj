<template>
	<div class="applicaYuContainer">
		<div class="applicaTabs">
			<router-link :to="{path:'/ipContent/flowServe/applicaYu/applicaSetting',query:{enterpriseId:enterpriseId}}" tag="ul" class="applicaMains left" :class="{btnLight:$route.path.indexOf('applicaSetting') !== -1}" >应用域设置</router-link>
			<router-link :to="{path:'/ipContent/flowServe/applicaYu/applicaContant',query:{enterpriseId:enterpriseId}}" tag="ul" class="applicaMains left" :class="{btnLight:$route.path.indexOf('applicaContant') !== -1}" >应用域关系</router-link>
		</div>
		<!--第一页面-->
		<router-view></router-view>
		
		<!--第二页面-->
		
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				setting:true,
				contact:false,
				switchVal:false,
				pageNumber: 1,
				pageNum:5,
				num:"",
				isSettingShow:false,
				iscontShow:true,
				enterpriseId:"",
				
			}
		},
		components: {
			
		},
		mounted() {
			this.$nextTick(function() {
				this.enterpriseId=this.$route.query.enterpriseId;
			})
		},
		methods: {
			
			getBool(){
				console.log(this.switchVal)
			},
			minus() { //点击分页栏减1
				if(this.pageNumber > 1) {
					--this.pageNumber
					this.pageCount=this.pageCount-10;
				}
			},
			addPageNum() { //点击分页栏加1
				if(this.pageNumber < this.pageNum) {
					//console.log(this.pageCount)
					++this.pageNumber
					this.pageCount=this.pageCount+10;
				}
			},
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	.applicaYuContainer{
		padding-left: 40px;
		.applicaTabs{
			width: 220px;
			overflow: hidden;
			.applicaMains{
				cursor: pointer;
				width: 50%;
				padding: 15px 15px;
				color: #fff;
				
				background: rgba(101,206,167,.7);
			}
			.btnLight{
				background: #65cea7;
			}
		}
		
		
	}
</style>