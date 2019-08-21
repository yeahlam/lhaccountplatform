<template>
	<div class="userInfo">

		<div class="userInfoCard" :class="[roleType]">
			<div class="userInfoCardDecoration">{{userInfo.roleName}}</div>
			<div class="photo">
				<img :src=IMGURL+headerImg>
			</div>
			<div class="userInfoTextBox">
				<div class="name">{{userInfo.name}}</div>
<!--				<div class="usertitle">用户</div>-->
			</div>
			<div class="tab-bar">
				<div class="userInfoDetail">电话号码:{{userInfo.phoneNum}}</div>
				<div class="userInfoDetail">身份证号:{{userInfo.card}}</div>
			</div>
		</div>
<!--		<div class="info-row-box">-->
<!--			<div class="info-row-item">-->
<!--				紧急联系人:<span>张三</span>-->
<!--			</div>-->
<!--			<div class="info-row-item">-->
<!--				紧急联系电话:<span>13488888888</span>-->
<!--			</div>-->
<!--			<div class="info-row-item">-->
<!--				<img class="locationLogo" src="../assets/location.png" alt="">-->
<!--				<span>广东省深圳市卡萨丁好看还是看哈是就</span>-->
<!--			</div>-->
<!--		</div>-->

		<div @click="jobCancel(id)" class="cancel">取消任职</div>

	</div>
</template>

<script>

	import 'swiper/dist/css/swiper.css'
	import * as api from '../api'
	import {Toast} from 'mint-ui';
	import {IMGURL} from "../config";
	import axios from 'axios'

	let defaultImg = require('../assets/nophoto.png')

    export default {
        name: "userinfo",
		data() {
			return {
				IMGURL,
				detailData: {},
				id:'',
				userInfo:{}
			}
		},
		computed: {
			headerImg() {
				return this.userInfo.pictureUrl ? this.userInfo.pictureUrl : defaultImg
			},
			roleType() {
				if (this.userInfo.roleName === '超级管理员') {
					return 'supermanager'
				}
				if (this.userInfo.roleName === '管理员') {
					return 'manager'
				}
				return 'executer'
			},

		},
		methods:{
			async jobCancel(id) {
				try {
					await api.jobCancel({
						id:id
					})
					Toast('提交成功')
					//刷新
				} catch (e) {
					Toast('提交失败')
				}

			},
			async getUserInfo(id) {
				let res = await api.getUserInfo(id)
				console.log(res.data.data);
				this.userInfo = res.data.data

			},

		},
		async mounted() {
			document.title = '详细资料'
			// this.id=this.$route.query.id
			this.id=this.$route.query.id
			await this.getUserInfo(this.$route.query.id)
			console.log(this.id)
		},
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
			box-shadow 0px 2px 10px rgba(0,0,0,0.5)
			&.manager
				background linear-gradient(to right, #970203, #c32700)

			&.supermanager
				background linear-gradient(to right, #9e7a3e, #debc7e)

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
				line-height 0.7rem
				text-align center
				color #fff

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



		.cancel{
			font-size 0.3rem
			border-radius 0.1rem
			background-color #0162ab
			color #fff
			display block
			width 2rem;
			height 0.8rem
			line-height 0.8rem
			text-align center
			position fixed
			right .5rem
			bottom 0.5rem
		}

</style>