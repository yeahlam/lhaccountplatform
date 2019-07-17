<template>
	<div class="video">
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
				<!--			<div class="swiper-button-prev" slot="button-prev"></div>-->
				<!--			<div class="swiper-button-next" slot="button-next"></div>-->
				<!--			<div class="swiper-scrollbar" slot="scrollbar"></div>-->
			</swiper>
			<div class="swiper-pagination" slot="pagination"></div>

		</div>
		<div class="videoListBox">
			<div class="viedoItem" v-for="(item,index) in newsList" :key="index">
				<div class="left">
					<img src="../assets/timg.jpg" alt="">
				</div>
				<div class="right">
					<div class="title">习近平阿萨德加凉开水金坷垃撒娇的卡拉建设路口家属楼贾老师</div>
					<div class="playtime">0次播放</div>
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

	.videoListBox
		margin-top: 0.32rem

		.viedoItem
			display flex
			padding 0.26rem
			border-top 1px solid #ddd
			height: 2rem

			.left
				img
					width: 3rem
					height: 2rem
				position: relative
				margin-right: 0.26rem

			.right
				flex 1
				position: relative

			.title
				line-height 0.5rem
				font-size 0.32rem
				font-weight bold
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;

			.playtime
				font-size 0.3rem
				position: absolute
				left: 0
				bottom: 0

	.video
		.swiperBox
			height: 3.6rem
			margin-top: 0.2rem

			.toCenter
				display flex
				align-items center
				justify-content center
				margin-top: 4px

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

			.swiper-pagination
				width: 100%

				.swiper-pagination-bullet
					margin 0 4px

				.swiper-pagination-bullet-active
					background #00204e

</style>