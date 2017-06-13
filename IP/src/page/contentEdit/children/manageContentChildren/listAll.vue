<template>
	<div>
		<div class="listItem">
			<section class="listItemL left">
				<p>宝宝成长的第一道坎-离乳<span class="original">原创</span></p>
				<p>
					<span class="isReview">已审核</span>
					<span class="publishtime marginLRepair">2012-12-12 12:12</span>
					<span class="editor marginLRepair">编辑:&nbsp;张三</span>
					<span class="reviewer marginLRepair">审核人：&nbsp;张三</span>
					<select class="operation marginLRepair">
						<option value="">操作</option>
						<option value="">修改</option>
						<option value="">删除</option>
						<option value="">发布</option>
					</select>
				</p>
				<p>
					<span class="readerCount ">阅读：21</span>
					<span class="thumbs marginLRepair">点赞：999</span>
					<span class="comment marginLRepair">评论：0</span>
				</p>
			</section>
			<section class="listItemR right">
				<img class="listItemPic" src="/static/img/(1)_05.png" />
			</section>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.listItem {
		padding: 30px 25px 18px 20px;
		border-bottom: 2px solid #e6e6e6;
		overflow: hidden;
		.listItemL {
			.original {
				margin-left: 15px;
				padding: 2px 8px;
				font-size: 10px;
				color: #c3c3c3;
				border: 1px solid #c3c3c3;
				border-radius: 3px;
			}
			.isReview{
				font-size: 10px;
				padding: 2px 8px;
				color: #fff;
				background: #fc8675;
				border-radius: 3px;
			}
			
			.operation{
				color: #6dc5a3;
			}
		}
		.listItemR {
			.listItemPic {
				width: 112px;
				height: 70px;
			}
		}
	}
	.marginLRepair{
		margin-left: 25PX;
	}
</style>