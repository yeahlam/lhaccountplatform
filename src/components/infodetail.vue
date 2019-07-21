<template>
	<div class="infodetail">
		<!--		<div class="title">请提交违规场景信息，仅用于网格员审核</div>-->
		<div class="swiperBox">
			<swiper :options="swiperOption" ref="mySwiper" class="swiperBoxMain">
				<!-- slides -->
				<swiper-slide class="swiperItem">
					<img src="../assets/timg.jpg" alt="">
				</swiper-slide>
				<swiper-slide class="swiperItem">
					<img src="../assets/timg.jpg" alt="">
				</swiper-slide>
				<swiper-slide class="swiperItem">
					<img src="../assets/timg.jpg" alt="">
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>

		</div>
		<div class="detail">
			<div class="row">
				<div class="title">
					<div class="red-dot"></div>
					违规楼层信息
				</div>
				<div class="text">
					楼主姓名：张三<br/>
					楼层地址：xxxxxxxx<br/>
					问题描述：{{problemData.description}}
				</div>
			</div>

		</div>
		<div class="btn">
			<div class="finished">问题已完成</div>
			<div class="notyet">问题未完成</div>
		</div>
	</div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import * as api from '../api'

    export default {
        name: "infodetail",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },
                detailData: {}
            }
        },

        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            problemData() {
                return this.detailData[0] || {}
            },
			resolveData(){
                return this.detailData[1] || {}
            }
        },
        methods: {
            async getDetail() {
                let res = await api.houseNoticeDetail(this.$route.query.problemNumber)
                this.detailData = res.data.data
                console.log(res.data);
            }
        },
        mounted() {
            this.getDetail()

        }
    }
</script>

<style lang="stylus">
	img
		width 100%
		height: 100%

	.thumbs
		.swiper-button-white
			background-color #d2d2d2

	.infodetail
		.gallery-thumbs
			height: 0.67rem

		.swiperBox
			height: auto
			margin-top: 0.2rem

		.swiperBoxMain
			.swiperItem
				overflow: hidden
				border-radius 0.1rem
				background yellow

			.swiper-slide
				width: 50% !important;
				margin: 0 25%;

			.swiper-slide-prev
				right: -42%;

			.swiper-slide-next
				left: -42%;

			.swiper-pagination-bullet-active
				background #fff

			.swiper-pagination-bullet-active
				width: 0.24rem
				border-radius 0.12rem
				background #b81c24

		.title
			text-align center
			color #01204c
			font-size 0.3rem
			padding-top 0.3rem
			padding-bottom 0.4rem

		.detail
			border-top 1px solid #d2d2d2

			.row
				border-radius 0.1rem
				margin 0.3rem
				box-shadow 0 0 10px rgba(0, 0, 0, 0.2)

				.text
					color #b2b2b2
					font-size 0.26rem
					line-height 0.46rem
					margin 0 0.4rem
					padding-bottom 0.6rem
					padding-top 0.3rem

				.title
					color #333
					height 0.7rem
					line-height 0.7rem
					font-size 0.3rem
					margin 0 0.4rem
					display flex
					align-items center
					border-bottom 1px solid #d2d2d2
					padding-bottom 0.1rem

					.red-dot
						width 0.1rem
						height 0.1rem
						border-radius 50%
						background-color #ff0000
						margin-right 0.2rem

					.green-dot
						width 0.1rem
						height 0.1rem
						border-radius 50%
						background-color #41c400
						margin-right 0.2rem


		.btn
			margin 0 0.8rem
			display flex
			align-items center
			justify-content space-between

			.finished
				width 2.46rem
				height 0.7rem
				border-radius 0.1rem
				border 1px solid #01214f
				line-height 0.7rem
				color #fff
				font-size 0.3rem
				background-color #01214f
				text-align center

			.notyet
				width 2.46rem
				height 0.7rem
				border-radius 0.1rem
				border 1px solid #01214f
				line-height 0.7rem
				color #01214f
				font-size 0.3rem
				background-color #fff
				text-align center


</style>