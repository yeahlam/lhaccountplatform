<template>
	<div class="userInfo">

		<div class="userInfoCard">
			<div class="userInfoCardDecoration">请登录</div>
			<div class="photo">
				<img src="../assets/nophoto.png" alt="">
			</div>
			<div class="userInfoTextBox">
				<div class="name">133548745</div>
				<div class="usertitle">用户</div>
				<div class="real-name">真实姓名:王茂
					<span class="age">29岁</span>
				</div>
			</div>
			<div class="tab-bar">
				<div class="userInfoDetail">电话号码:13455555555</div>
				<div class="userInfoDetail">身份证号:442000000000000000</div>
			</div>
		</div>
		<div class="info-row-box">
			<div class="info-row-item">
				紧急联系人:<span>张三</span>
			</div>
			<div class="info-row-item">
				紧急联系电话:<span>13488888888</span>
			</div>
			<div class="info-row-item">
				<img class="locationLogo" src="../assets/location.png" alt="">
				<span>广东省深圳市卡萨丁好看还是看哈是就</span>
			</div>
		</div>

	</div>
</template>

<script>
    export default {
        name: "userCenter",
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '个人中心'
        }
    }
</script>

<style scoped lang="stylus">
	.gridLogo
		width: 0.4rem
		height: 0.4rem

	.userInfo
		position: absolute
		left: 0
		right: 0
		top: 0
		bottom: 0
		background #f5f5f5


		.userInfoCard
			margin 0.26rem
			height 3.7rem
			background red
			border-radius 0.1rem
			background linear-gradient(to right, #0162ab, #73b7ed)
			position: relative

			.tab-bar
				position: absolute
				left: 0
				bottom: 0.2rem;
				color #fff
				margin-left: 0.36rem

				.userInfoDetail
					font-size 0.28rem
					line-height 0.5rem


			.userInfoCardDecoration
				width: 1.82rem
				height: 0.64rem
				background url("../assets/userInfoDesc2.png")
				background-size cover
				position: absolute
				right: 0
				top: 0.34rem
				font-size 0.28rem
				line-height 0.64rem
				text-align center
				color #3c2500

			.userInfoTextBox
				position: absolute
				top: 0.3rem
				left: 2rem
				right 0
				height: 2rem
				color #fff

				.real-name
					font-size 0.28rem
					margin-top: 0.6rem

					.age
						color #fff
						padding-left: 1rem

				.name
					font-size 0.4rem

				.usertitle
					margin-top: 0.16rem
					font-size 0.28rem

			.photo
				width: 1.5rem
				height: 1.94rem
				position: absolute
				left: 0.3rem
				top: 0.3rem
		.info-row-box
			margin 0 0.26rem
			.info-row-item
				padding-left: 0.3rem
				line-height 0.9rem
				font-size 0.3rem
				font-weight bold
				border-bottom 1px solid #808080
				color #333333
				.locationLogo
					width 0.3rem
					height: 0.42rem
					vertical-align middle
				span
					font-weight normal
					margin-left: 0.2rem




</style>