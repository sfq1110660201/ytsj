<template>
	<div class="recoverKeywords" :style="{height:het+'px'}">
		<header class="recoverHeader">
			<span class="recover left ">找回密码</span>
			<span class="reset right bord">重置密码</span>
		</header>
		<section>
			<input maxlength="11" type="password" id="" value="" placeholder="重置密码" />
			<input type="password" id="" value="" placeholder="确认密码" />
			<button class="nextBtn">确认</button>
		</section>
	</div>
</template>

<script>
    
    export default {
        data(){
            return{
                het:0,
            }
        },
        mounted() {
			this.$nextTick(function() {
				this.het = window.screen.availHeight-115; //屏幕可视区域高	
			})
		},
        components: {
           
        }
        
    }
</script>

<style lang="scss" scoped>
	.recoverKeywords {
		width: 396px;
		margin: 0 auto;
		/*background: #31B0D5;*/
		.recoverHeader {
			overflow: hidden;
			.recover,
			.reset {
				font-size: 25px;
				padding-bottom: 15px;
			}
			.recover {
				margin-left: 10px;
			}
			.reset {
				margin-right: 10px;
			}
			.bord {
				color: #4781ea;
				border-bottom: 2px solid #4781ea;
			}
		}
		section {
			margin-top: 20px;
			border: 1px solid #d1d1d1;
			position: relative;
			padding-bottom: 20px;
			background: #fff;
			input{
				border: 0;
				display: block;
				height: 69px;
				width: 100%;
				padding: 0 10px 0 20px;
				font-size: 20px;
				border-bottom: 1px solid #d1d1d1;
			}
			/*.getTxt{
				position: absolute;
				right: 0;
				top: 69px;
				height: 69px;
				border-left: 1px solid #d1d1d1;
				line-height: 69px;
				font-size: 20px;
				padding: 0 15px;
				color: #4781ea;
			}*/
			.nextBtn{
				display: block;
				width: 120px;
				margin: 0 auto;
				color: #fff;
				background:#4781ea ;
				padding: 5px 0;
				margin-top: 40px;
				border-radius: 3px;
			}
		}
	}
	
	
</style>