<template>
	<div class="userTable" >
		<table class="table table-bordered" v-if="$route.path.indexOf('Phone') == -1 && $route.path.indexOf('Mail') == -1 && $route.path.indexOf('Password') == -1 ">
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
	          <td>您的登陆邮箱&nbsp;<span class="colGray">{{emailName}}</span></td>
	          <td><router-link to="/ipContent/userInfo/accountSecurity/testMail" tag='li' class="edit">编辑与修改</router-link></td>
	        </tr>
	        <tr>
	          <td><img class="littleIcon" src="/static/img/nav_btn_renzheng@2x.png"/>&nbsp;登陆密码</td>
	          <td>互联网账号存在风险，建议定期修改密码确保账户安全</td>
	          <td><router-link to="/ipContent/userInfo/accountSecurity/testPassword" tag='li' class="edit">编辑与修改</router-link></td>
	        </tr>
	        <tr>
	          <td><img class="littleIcon" src="/static/img/nav_btn_renzheng@2x.png"/>&nbsp;手机绑定</td>
	          <td>您已绑定手机&nbsp;<span class="colGray">{{userPhone}}</span></td>
	          <td><router-link to="/ipContent/userInfo/accountSecurity/testPhone" tag='li' class="edit">编辑与修改</router-link></td>
	        </tr>
	      </tbody>
	   </table>
	   <router-view></router-view>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				userPhone:"",
				emailName:""
			}
		},
		components: {

		},
//		computed:mapGetters({//vuex获取值
//			emailName:'getEmail',
//         phoneNum:"getPhone"
//     	}),
		mounted() {
			this.$nextTick(function() {
				var phoneNum=localStorage.getItem("phoneNum")
				this.userPhone = phoneNum.substr(0, 3) + "****" + phoneNum.substr(7, 4)
				this.emailName=localStorage.getItem("emailName")
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
	.colGray{
		color: #828384;
	}
</style>