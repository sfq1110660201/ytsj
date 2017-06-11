<template>
	<div class="userTable" >
		<table class="table table-bordered" v-if="$route.path.indexOf('Phone') == -1 && $route.path.indexOf('Mail') == -1 ">
	      <thead>
	        <tr>
	          <th>名称类型</th>
	          <th>当前状态</th>
	          <th>操作</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr>
	          <td> <img class="littleIcon" src="/static/img/nav_btn_renzheng@2x.png"/>&nbsp;登陆邮箱</td>
	          <td>您的登陆邮箱13752679323@163.com</td>
	          <td><router-link to="/ipContent/userInfo/accountSecurity/testPhone" tag='li' class="edit">编辑与修改</router-link></td>
	        </tr>
	        <tr>
	          <td><img class="littleIcon" src="/static/img/nav_btn_renzheng@2x.png"/>&nbsp;登陆密码</td>
	          <td>互联网账号存在风险，建议定期修改密码确保账户安全</td>
	          <td><router-link to="/ipContent/userInfo/accountSecurity/changeAnotherPhone" tag='li' class="edit">编辑与修改</router-link></td>
	        </tr>
	        <tr>
	          <td><img class="littleIcon" src="/static/img/nav_btn_renzheng@2x.png"/>&nbsp;手机绑定</td>
	          <td>您已绑定手机13752679323</td>
	          <td><router-link to="/ipContent/userInfo/accountSecurity/testMail" tag='li' class="edit">编辑与修改</router-link></td>
	        </tr>
	      </tbody>
	   </table>
	   <router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		components: {

		},
		mounted() {
			this.$nextTick(function() {
				
			})
		},
		methods: {
			
		},
		watch: {
			wid: "setWid"
		}
	}
</script>

<style lang="scss" scoped>
	.userTable{padding-left: 82px;}
	tr{height: 63px!important;}
	th,td{padding: 0!important; text-align: center;line-height: 63px!important;}
	.edit{text-decoration: underline;}
	.littleIcon{width: 15px;}
</style>