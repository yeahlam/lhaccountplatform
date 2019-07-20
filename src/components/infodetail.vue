<template>
	<div class="infodetail">
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
		<div class="">

		</div>
	</div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "infodetail",
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