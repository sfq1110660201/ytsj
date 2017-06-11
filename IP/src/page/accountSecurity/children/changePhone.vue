<template>
	<div>
		<form class="form_style">
        	<input type="text" name="cartNumber" maxlength="11" v-model="cartNumber" placeholder="输入手机号码">
        	<input type="text" name="passWord" maxlength="6" v-model="passWord" placeholder="输入验证码">
        	<!--<mt-button size="normal" type="danger">danger</mt-button>
        	<mt-button plain>获取验证码</mt-button>-->
        	<span class="getText">获取验证码</span>
        </form>
	</div>
</template>

<script>
	import  Button  from 'mint-ui';
	export default {
		data(){
            return{
    			cartNumber: null,
    			passWord: null,
    			showAlert: false,
    			alertText: null,
            }
        },
        components: {
            Button
        },
    }
</script>

<style lang="scss" scoped>
@import 'src/style/mixin';
	.form_style{
    	display: flex;
    	flex-direction: column;
    	position:relative;
    	input{
    		border-bottom: 1px solid #f5f5f5;
    		height: 2rem;
    		@include sc(.65rem, #999);
    		padding-left: .7rem;
    	}
    }
    .getText{display: inline-block;text-align: center;line-height: 2rem;border-radius:5px; width: 5rem;font-size: 0.5em;position: absolute;right: 0;top: 1.9rem;height: 2rem;color: #ff9191;border: 1px solid #ff9191;}
</style>