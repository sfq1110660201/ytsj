<template>
	<div class="setting">
		<h3 class="applicaTip">我的医图号领域：母婴健康综合
			<!--<mt-switch class="switched right" v-model="switchVal" @change="getBool"></mt-switch>-->
		</h3>
		<ul class="applicasCon">
			<li>
				<span>相关医图号</span>
				<span>数据流入</span>
				<span>数据流出</span>
			</li>
			<li>
				<span>
					宝宝净水
				</span>
				<span>
					<mt-switch class="singleSwitch"></mt-switch>
				</span>
				<span>
					<mt-switch class="singleSwitch"></mt-switch>
				</span>
				
			</li>
		</ul>
		<ul class="pagination right">
			<li class="btn btn-default btn-sm kakCol" @click="minus" v-if='pageNumber!=1'>◀</li>
			<li class="pageNumber">&nbsp;{{pageNumber}}/{{pageNum}}&nbsp;</li>
			<li class="btn btn-default btn-sm kakCol" @click="addPageNum">▶</li>
			<input type="text" maxlength="2" v-model="num" class="pageNumberIpt" />
			<li class="btn btn-default btn-sm" @click="">转跳</li>
		</ul>
	</div>
</template>

<script>
	import { Switch } from 'mint-ui';
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
				
			}
		},
		components: {
			Switch
		},
		mounted() {
			this.$nextTick(function() {
				
			})
		},
		methods: {
			goSetting(){
				this.isSettingShow=false;
				this.setting=true;
				this.iscontShow=true;
				this.contact=false;
			},
			goContact(){
				this.isSettingShow=true;
				this.setting=false;
				this.iscontShow=false;
				this.contact=true;
			},
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
	.setting{
			.applicaTip{
				overflow: hidden;
			}
			.applicasCon{
				margin: 30px 0;
				li{
					overflow:hidden;
					/*width: 850px;*/
					span{
						float: left;
						width: 33%;
						text-align: center;
						padding: 10px 0;
						border: 1px solid #ddd;
						height: 45px;
						.singleSwitch{
							display: inline-block;
							margin-top: -2px;
						}
					}
				}
			}
			.pagination {
				margin: 5px 0;
				overflow: hidden;
				height: 30px;
				margin-right: 13px;
				.btn {
					padding: 3px 2px;
				}
				.pageNumberIpt {
					width: 40px;
					border-radius: 3px;
					padding: 0 5px;
					text-align: center;
					border: 1px solid #ced2d9;
					position: relative;
					top: 2px;
				}
				
				.kakCol {
					color: #576477;
				}
				
				.pageNumber {
					position: relative;
					top: 2px;
				}
			}
		}
</style>