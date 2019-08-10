<template>
	<div class="apply-list">
		<div class="apply-item">
			<div class="top-info">
				<div class="logo"><img src="../assets/applyLogo.png" alt=""></div>
				<div class="apply-title">楼长申请</div>
				<div class="apply-time">2019/07/24</div>
			</div>
			<div class="bottom-info">
				<div class="header">
					<img src="../assets/nophoto.png" alt="">
				</div>
				<div class="right">
					<div class="detail-box">
						<div class="detail-text">
							<div class="detail-row">姓名：aaaa</div>
							<div class="detail-row">电话号码：13126480101</div>
							<div class="detail-row">身份证号：440111111111111111</div>
						</div>
					</div>
					<div class="detail-box-button-group">
						<div class="button-group">
							<div class="button primary mr20">确认通过</div>
							<div class="button">取消通过</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="apply-item">
			<div class="top-info">
				<div class="logo"><img src="../assets/applyLogo.png" alt=""></div>
				<div class="apply-title">楼长申请</div>
				<div class="apply-time">2019/07/24</div>
			</div>
			<div class="bottom-info">
				<div class="header">
					<img src="../assets/nophoto.png" alt="">
				</div>
				<div class="right">
					<div class="detail-box">
						<div class="detail-label">详细资料</div>
						<div class="detail-text">

						</div>
					</div>
					<div class="detail-box-button-group">
						<div class="button-group">
							<div class="button primary mr20">确认通过</div>
							<div class="button">取消通过</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "applyList",
        mounted() {
            document.title = '申请通知'
        }
    }
</script>

<style lang="stylus">
	.mr20
		margin-right 0.1rem
	.button
		width: 1.6rem
		height: 0.7rem
		border 0.1rem
		color #fff
		background #adb6c4
		display inline-block
		border-radius 0.1rem
		font-size 0.26rem
		line-height 0.7rem
		text-align center
		&.primary
			background #01214f

	.apply-list
		.apply-item
			margin 0.24rem 0.2rem 0
			height: 3.2rem
			background #f7f7f7
			border-radius 0.1rem
			position: relative
			.bottom-info
				position: absolute
				left 0.3rem
				right 0.3rem
				top 1.03rem
				display flex
				.header
					width: 1.52rem
					height: 1.92rem
				.right
					flex 1
					.detail-box
						.detail-label
							font-size 0.28rem
							font-weight bold
							margin-right 0.26rem
							margin-left: 0.28rem
						.detail-text
							margin-left 0.4rem
							margin-bottom 0.2rem
							.detail-row
								font-size 0.26rem
								line-height 0.32rem
								width 100%
								overflow hidden
								text-overflow ellipsis
								white-space nowrap
					.detail-box-button-group
						float right
						.apply-job
							color #8f0000
							font-size 0.22rem
							width: 1.36rem
							align-self  flex-end
			.top-info
				position: absolute
				left: 0.3rem
				right 0.3rem
				top: 0.2rem
				display flex
				align-items center
				.apply-title
					font-weight bold
					color black
				.logo
					width: 0.62rem
					height: 0.62rem
					border-radius 50%
					background #01214f
					margin-right 0.2rem
				.apply-time
					margin-right 0
					margin-left auto
					font-size 0.22rem
					color #999999
</style>