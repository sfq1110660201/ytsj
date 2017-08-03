<template>
	<div class="contact">
		<h3 class="applicaTip">
			<mt-switch class="switched right"></mt-switch>
		</h3>
		<ul class="contactCon">
			<li>
				<span class="contactItem item-span">选择应用域</span>
				<span class="contactOperate item-span">
					<div class="operateCon">
						<span class="operateWord left">选择应用域</span>
			    		<div class="input-group left">
			    			<select class="form-control">
								<option >163.com</option>
								<option >qq.com</option>
								<option >162.ocm</option>
							</select>
			    		</div>
					</div>
			    						    
				</span>
			</li>
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
			
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
		.contact{
			.applicaTip{
				overflow: hidden;
				.switched{
					margin-right: 13px;
				}
			}
			.contactCon{
				li{
					overflow: hidden;
					.item-span{
						float: left;
						border: 1px solid #ddd;
						text-align: center;
						padding: 10px 0;
						height: 65px;
						
					}
					.contactItem{
						width: 30%;
						line-height: 42px;
					}
					.contactOperate{
						width: 70%;
						text-align: right;
						.operateCon{
							margin-right: 50px;
							border: 1px solid #65cea7;
							border-radius: 5px;
							margin-top: 5px;
							display: inline-block;
							overflow:hidden;
							.operateWord{
								padding: 5px 12px;
								height: 34px;
								border: 1px solid #ddd;
							}
						}
					}
				}
			}
		}
</style>