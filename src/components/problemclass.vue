<template>
	<div class="class">
		<div class="left">
			<div class="title">安全安全安全安全安全</div>
			<div class="title on">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
			<div class="title">安全</div>
		</div>
		<div class="right">
			<div class="content">安全</div>
		</div>




	</div>
</template>

<script>
    export default {
        name: "problemclass",
        mounted() {
            //组建一进入就好u会调用这个方法

        }
    }
</script>

<style scoped lang="stylus">
	.class
		.left
			width 1.8rem
			min-height 100vh
			background-color #f2f2f2
			float left
			.title
				width 1.8rem
				border-right 1px solid #e3e3e3
				box-sizing border-box
				height 0.7rem
				line-height 0.7rem
				color #666
				font-size 0.26rem
				padding-left 0.3rem
				overflow hidden
				&.on
					background-color #fff
					color #3a5e99
					border-right 0
					border-top 1px solid #e3e3e3
					border-bottom 1px solid #e3e3e3
		.right
			width calc(100% - 1.9rem)
			background-color #fff
			float right
			.content
				width 100%
				overflow hidden
				box-sizing border-box
				height 0.7rem
				line-height 0.7rem
				color #666
				font-size 0.26rem
				padding-left 0.3rem













</style>