<template>
	<div class="shop">
		<div v-if="false" class="tips-box">
			<div class="tips-box-text">你的</div>
			<div class="tips-close"></div>
		</div>
		<div class="userInfoCard" :class="[roleType]">
			<div class="userInfoCardDecoration">{{userInfo.roleName}}</div>
			<div class="photo">
				<img :src=IMGURL+headerImg>
			</div>
			<div class="userInfoTextBox">
				<div class="name">{{userInfo.name}}</div>
				<div class="usertitle"></div>
				<div class="myScore">我的积分
					<span class="score">{{userInfo.integration}}</span>
				</div>
			</div>
			<div class="sceow-btn-box">
				<div class="btn-scroe-detail" @click="gotoScroedetail">积分明细</div>
				<div class="btn-change-detail" @click="gotoExchangeList">积分兑换记录</div>
			</div>
		</div>
		<div class="shop-center">
			<div class="shop-title"><div class="b-left"></div>热门兑换<div class="b-right"></div></div>
			<div class="product">
					<div class="product-detail" @click="isShowBigPhoto(item)" v-for="(item,index) in listData" :key="index">
						<img :src="IMGURL+item.pictureUrl">
						<div class="produc-title">
							<div class="product-name">{{item.name}}</div>
							<div class="product-score">{{item.exchangeIntegral}}积分</div>
						</div>
					</div>

			</div>
		</div>

		<div class="product-pop" v-if="showProduct">
			<div class="product-content">
				<img class="product-photo" :src="IMGURL+produceDetail.pictureUrl" />
				<div class="produc-title1">
					<div class="product-name1">{{produceDetail.name}}</div>
					<div class="product-score1">{{produceDetail.exchangeIntegral}}积分</div>
				</div>
				<div class="change">
					<div class="submit" @click="submit">确定</div>
					<div class="cancel" @click="close">取消</div>
				</div>
				<div class="product-main">
					{{produceDetail.introduce}}
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import * as api from '../api'
	import {IMGURL} from "../config";
	import {Toast} from 'mint-ui';
	// import axios from 'axios'
	// import url from '../urls'

	let defaultImg = require('../assets/nophoto.png')

	export default {
		name: "shop",
		data() {
			return {
				IMGURL,
				listData: {},
				showProduct:false,
				produceDetail:{}
			}
		},
		computed: {
			userInfo() {
				return this.$store.getters.getUserInfo
			},
			headerImg() {
				return this.userInfo.phoneUrl ? this.userInfo.phoneUrl : defaultImg
			},
			roleType() {
				if (this.$store.getters.getUserInfo.roleName === '超级管理员') {
					return 'supermanager'
				}
				if (this.$store.getters.getUserInfo.roleName === '管理员') {
					return 'manager'
				}
				return 'executer'
			},
			isManager() {
				//是否管理员
				return ['超级管理员', '管理员'].includes(this.$store.getters.getUserInfo.roleName)
			},
			isWGY() {
				//是否网格员
				return ['网格员'].includes(this.$store.getters.getUserInfo.roleName)
			},
			isLZ() {
				//是否楼长
				return ['楼长'].includes(this.$store.getters.getUserInfo.roleName)
			}
		},
		methods: {

			message() {
			},
			async getGift() {
				let res = await api.giftList()
				this.listData = res.data.data
				console.log(res.data);
			},
			gotoScroedetail() {
				this.$router.push({name: 'scroedetail'})
			},
			gotoExchangeList() {
				this.$router.push({name: 'exchangeList'})
			},
			isShowBigPhoto(item){
				this.produceDetail=item
				this.showProduct=true
			},
			close(){
				this.showProduct=false
			},
			async submit() {
				this.showProduct=false
				try {
					await api.exchangeGift({
						id:this.produceDetail.id
					})
					Toast('兑换成功')
					await this.getGift()
				} catch (e) {
					Toast('兑换失败')
				}

			},
		},
		async mounted() {
			//组建一进入就好u会调用这个方法
			document.title = '积分商城'
			await this.getGift()
		}
	}
</script>

<style scoped lang="stylus">
	.gridLogo
		width: 0.4rem
		height: 0.4rem

	.shop
		position: absolute
		/*left: 0*/
		/*right: 0*/
		/*top: 0*/
		/*bottom: 0*/
		min-height 100vh
		background #f5f5f5


		.userInfoCard
			margin 0.26rem
			height 3.7rem
			background red
			border-radius 0.1rem
			background linear-gradient(to right, #0162ab, #73b7ed)
			position: relative
			box-shadow 0px 2px 10px rgba(0, 0, 0, 0.5)

			&.manager
				background linear-gradient(to right, #970203, #c32700)

			&.supermanager
				background linear-gradient(to right, #9e7a3e, #debc7e)
			.sceow-btn-box
				position absolute
				bottom 0.3rem
				right 0.2rem
				.btn-scroe-detail
					float left
					font-size .3rem
					color #ffffff
					background-color #00214e
					border-radius 0.1rem
					padding 0.26rem 0.3rem
					margin-right 0.32rem
					border 1px solid #00214e
				.btn-scroe-detail:nth-child(2n+1)
					clear both
				.btn-change-detail
					float left
					font-size .3rem
					color #00214e
					background-color #fff
					border-radius 0.1rem
					padding 0.26rem 0.3rem
					margin-right 0.32rem
					border 1px solid #00214e




			.tab-bar
				position: absolute
				left: 0
				bottom: 0.38rem;
				width: 100%
				color #fff
				text-align center
				display flex

				.tab-bar-item
					width 33.3%
					float: left
					height: 0.6rem
					font-size 0.3rem

					.num
						position: relative
						top: -0.1rem
						height: 0.3rem

					.item-name
						position: relative
						bottom -0.1rem

					&.center-item
						border 1px solid #64a1d2
						border-top 0
						border-bottom 0

			.userInfoCardDecoration
				width: 1.82rem
				height: 0.64rem
				background url("../assets/userInfoCardDecoration.png")
				background-size cover
				position: absolute
				right: 0
				top: 0.34rem
				font-size 0.28rem
				line-height 0.7rem
				text-align center
				color #3c2500

			.userInfoTextBox
				position: absolute
				top: 0.3rem
				left: 2rem
				width: 2.9rem
				height: 2rem
				color #fff

				.myScore
					font-size 0.24rem
					margin-top: 0.6rem
					color #6cffff

					.score
						color #fff

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

		.shop-center
			width 100%
			overflow hidden
			.shop-title
				position relative
				font-size 0.26rem
				color #402c00
				height 0.3rem
				line-height 0.3rem
				width 1.5rem
				margin 0 auto
				text-align center
				.b-left
					position absolute
					width 1.7rem
					height 1px
					top 50%
					transform translateY(-50%)
					left -110%
					background-color #aaacab
				.b-right
					position absolute
					width 1.7rem
					height 1px
					top 50%
					transform translateY(-50%)
					right -110%
					background-color #aaacab

			.product
				width 100vw
				.product-detail
					width 50vw
					float left
					img
						width 3.2rem
						height 3.2rem
						display block
						margin 0.2rem auto
						background-color #fff
					.produc-title
						width 3.2rem
						margin 0 auto
						.product-name
							font-size 0.3rem
							color #402a01
							line-height 0.32rem
							float left
							width calc(100% - 1.2rem)
							overflow hidden
							text-overflow ellipsis
							white-space nowrap

						.product-score
							font-size 0.22rem
							line-height 0.32rem
							color #c51f21
							float right
							width 1.2rem
							overflow hidden
							text-overflow ellipsis
							white-space nowrap
							text-align right

		.product-pop
			.product-content
				position fixed
				top 0
				left 0
				width 100vw
				height 100vh
				background-color #ffffff
				overflow auto
				.product-photo
					display block
					margin 0.3rem auto
					width 6.1rem
					height 6.1rem
					background-color #ffffff
				.produc-title1
					width 6.1rem
					margin 0 auto 0.3rem
					height 0.32rem
					.product-name1
						font-size 0.3rem
						color #402a01
						line-height 0.32rem
						float left
						width calc(100% - 0.9rem)
						overflow hidden
						text-overflow ellipsis
						white-space nowrap

					.product-score1
						font-size 0.22rem
						line-height 0.32rem
						color #c51f21
						float right
						width 0.9rem
						overflow hidden
						text-overflow ellipsis
						white-space nowrap


				.product-main
					margin 0.3rem 0.3rem 0
					color #333

				.change
					overflow hidden

					.submit
						float right
						font-size .3rem
						color #ffffff
						background-color #00214e
						border-radius 0.1rem
						padding 0.26rem 0.3rem
						margin-right 0.32rem
						border 1px solid #00214e

					.cancel
						float right
						font-size .3rem
						color #00214e
						background-color #fff
						border-radius 0.1rem
						padding 0.26rem 0.3rem
						margin-right 0.32rem
						border 1px solid #00214e









</style>