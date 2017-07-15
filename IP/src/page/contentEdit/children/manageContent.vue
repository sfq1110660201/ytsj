<template>
	<div class="contentList">
		<div class="listHeader">
			<div class="listHeaderL">
				我发表的
			</div>
			<div class="listHeaderR">
				<input class="searchIpt" type="text" placeholder="已发表文章关键词" />
			</div>
		</div>
		<div class="container">
			<ul class="nav nav-tabs" role="tablists">
				<li role="presentation" :class="{ active: isActive0}">
					<router-link :to="{path:'/contentEdit/manageContent/listAll',query:{ipId:ipId}}" class="items" @click.native="checkZero">全部</router-link>
				</li>
				<li role="presentation" :class="{ active: isActive1}">
					<router-link :to="{path:'/contentEdit/manageContent/listGraphic',query:{ipId:ipId}}" class="items" @click.native="checkOne">语音</router-link>
				</li>
				<li role="presentation" :class="{ active: isActive2}">
					<router-link :to="{path:'/contentEdit/manageContent/listVedio',query:{ipId:ipId}}" class="items" @click.native="checkTwo">链接</router-link>
				</li>
				<li role="presentation" :class="{ active: isActive3}">
					<router-link :to="{path:'/contentEdit/manageContent/listPictures',query:{ipId:ipId}}" class="items" @click.native="checkThree">图集</router-link>
				</li>
				<li class="pull_right">
					时间排序
					<span class="activeColor">↑↓</span>
				</li>
				<li class="pull_right" >
					<select @click="chooseMedicine()">
						<option :value="item.name" v-for="item in options">{{item.value}}</option>
					</select>
				</li>
				
			</ul>
		</div>
		<div class="listContainer">
			<router-view :child-review="review"></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive0: true,
				isActive1: false,
				isActive2: false,
				isActive3: false,
				ipId:"",
				options:[{
					value:"默认",
					name:"已审核/审核中/未通过/草稿"
				},{
					value:"已审核",
					name:"已审核"
				},{
					value:"审核中",
					name:"审核中"
				},{
					value:"未通过",
					name:"未通过"
				},{
					value:"草稿",
					name:"草稿"
				}],
				review:"",
			}
		},
		mounted() {
			this.$nextTick(function() {
				this.ipId=this.$route.query.ipId;
			})
		},
		components: {

		},
		methods: {
			checkZero() {
				this.isActive0 = true;
				this.isActive1 = false;
				this.isActive2 = false;
				this.isActive3 = false;
			},
			checkOne() {
				this.isActive0 = false;
				this.isActive1 = true;
				this.isActive2 = false;
				this.isActive3 = false;
			},
			checkTwo() {
				this.isActive0 = false;
				this.isActive1 = false;
				this.isActive2 = true;
				this.isActive3 = false;
			},
			checkThree() {
				this.isActive0 = false;
				this.isActive1 = false;
				this.isActive2 = false;
				this.isActive3 = true;
			},
			chooseMedicine(e){
				var e=event
				//console.log(e.target.value)
				this.review=e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.listHeader {
		overflow: hidden;
		.listHeaderL {
			float: left;
			width: 70px;
			border-top: 2px solid #6dc5a3;
			padding-top: 30px;
			color: #6dc5a3;
		}
		.listHeaderR {
			float: left;
			width: 886px;
			border-top: 2px solid #ced2d9;
			padding-top: 30px;
			text-align: right;
			.searchIpt {
				display: inline-block;
				border: 1px solid #d8dce4;
				border-radius: 5px;
				padding: 3px 10px;
				font-size: 12px;
			}
		}
	}
	
	.container {
		margin-top: 35px;
		padding-left: 0;
		ul {
			width: 960px;
			li {
				.items {
					display: inline-block;
					color: #333;
					padding: 5px 15px;
				}
			}
			.pull_right {
				float: right!important;
				margin-right:25px;
				margin-top: 5px;
			}
		}
	}
	.listContainer{
		/*margin-top: 35px;*/
		/*padding-left: 20px;*/
		height: 500px;
		/*background: beige;*/
	}
	.activeColor{color: #6dc5a3;font-weight: bold;}
</style>