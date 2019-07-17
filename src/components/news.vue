<template>
	<div class="news">
		<div class="swiperBox">
			<swiper :options="swiperOption" ref="mySwiper" class="swiperBox">
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
				<!--			<div class="swiper-button-prev" slot="button-prev"></div>-->
				<!--			<div class="swiper-button-next" slot="button-next"></div>-->
				<!--			<div class="swiper-scrollbar" slot="scrollbar"></div>-->
			</swiper>
		</div>
		<div class="newsListBox">
			<div class="newsItem" v-for="(item,index) in newsList" :key="index">
				<div class="left">
					<div class="title">撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势</div>
					<div class="time">2019-09-09</div>
				</div>
				<div class="right">
					<img src="../assets/timg.jpg" alt="">
				</div>
			</div>

		</div>
	</div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "home",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },
                newsList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11,]
            }
        },

        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            gotoSearch: function () {
                this.$router.replace('search')
            }
        }
    }
</script>

<style lang="stylus">
	img
		width 100%
		height: 100%

	.newsListBox
		margin-top: 0.32rem

	.newsItem
		display flex
		margin-left: 0.2rem
		padding 0.36rem 0
		border-top 1px solid #ddd
		height: 1.44rem
		margin-right: 0.2rem

		.left
			flex 1
			position: relative

			.time
				color #ccc
				position: absolute
				left: 0
				bottom: 0
			margin-right: 0.3rem

		.right
			width 1.78rem
			height 1.42rem


		.title
			line-height 0.5rem
			font-size 0.32rem
			font-weight bold
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;

	.swiperBox
		height: 3.6rem
		margin-top: 0.2rem

		.swiperItem
			overflow: hidden
			border-radius 0.1rem
			background yellow


		.swiper-slide
			width: 85% !important;
			margin: 0 7.5%;

		.swiper-slide-prev
			right: -12%;

		.swiper-slide-next
			left: -12%;

		.swiper-pagination-bullet-active
			background #fff

		.swiper-pagination-bullet-active
			width: 0.24rem
			border-radius 0.12rem
			background #b81c24

</style>