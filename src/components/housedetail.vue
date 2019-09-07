<template>
	<div class="housedetail">
<!--        <div class="swiperBox" v-if="problemData.pictureUrl">-->
        <div class="swiperBox">
            <swiper :options="swiperOption" ref="mySwiper" class="swiperBoxMain">
                <!-- slides -->
                <swiper-slide class="swiperItem" v-for="item in houseData.pictureUrl" :key="item">
                    <img :src="IMGURL+item" alt="" >
                </swiper-slide>
                <!-- Optional controls -->

<!--                <swiper-slide class="swiperItem">-->
<!--                    <img :src="IMGURL+houseData.pictureUrl" alt=""  @click="imgClick($event)">-->
<!--                </swiper-slide>-->

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="address">
            {{houseData.address}}
        </div>
        <div class="rent">￥{{houseData.price}}<span>元/月</span></div>
        <div class="content">联系人：{{houseData.relationName}}</div>
        <div class="content"> 联系电话：{{houseData.phoneNum}}</div>
        <div class="introduce">
            <div class="introduce-title">房屋介绍</div>
            <div class="introduce-detail">
                {{houseData.description}}
            </div>
        </div>
        <a class="phone" :href="'tel:' + houseData.phone">拨打电话：{{houseData.phoneNum}}</a>

	</div>
</template>

<script>
    import * as api from '../api'
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import {IMGURL} from "../config";


    export default {
        name: "housedetail",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                houseData:{},
                IMGURL,
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },
            }
        },

        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },

        },
        methods: {
            async getDetail() {
                let res = await api.houseDetail(this.$route.query.houseNumber)
                this.houseData = res.data.data
                console.log(res.data);
            },
            imgClick(e) {
                let str = e.target.getAttribute('src')
                let url =window.location.origin+'/admin-console/'+str
                window.wx.previewImage({
                    current: url, // 当前显示图片的http链接
                    urls: [url]
                });
            },
        },
        async mounted() {
			document.title = '房屋详情'
            //await this.getStatus()
            await this.getDetail()
        },
        // mounted() {
        // 	document.title = '房屋详情'
		// 	this.getDetail()

		// }
	}
</script>

<style lang="stylus">
    .housedetail
        width 100%
        .address
            font-size 0.36rem
            font-weight bold
            color #333
            margin 0.3rem 0.3rem 0
            padding-bottom 0.2rem
            border-bottom 1px solid #ccc
        .rent
            font-size 0.36rem
            font-weight bold
            color red
            margin 0.3rem 0.3rem 0
            span
                font-size 0.2rem
                font-weight normal
        .content
            font-size 0.36rem
            font-weight bold
            color #333
            margin 0.3rem 0.3rem 0
        .introduce
            margin 0.3rem 0.3rem 0
            padding-bottom 1rem
            .introduce-title
                font-size 0.36rem
                font-weight bold
                color #333
                padding-bottom 0.2rem
                border-bottom 1px solid #ccc
            .introduce-detail
                font-size 0.32rem
                color #666
                padding 0.2rem 0
        .phone
            font-size 0.3rem
            color #fff
            background-color #0f345c
            border-radius 0.1rem
            position fixed
            left 50%
            height 0.8rem
            line-height 0.8rem
            bottom 0.2rem
            transform translateX(-50%)
            width 80%
            text-align center
            text-decoration none

    .swiperBoxMain
        .swiperItem
            overflow: hidden
            border-radius 0.1rem
            background #fff

        .swiper-slide
            width 100vw
            height 100vw

        .swiper-slide-prev
            right:0;

        .swiper-slide-next
            left: 0;

        .swiper-pagination-bullet-active
            background #fff

        .swiper-pagination-bullet-active
            width: 0.24rem
            border-radius 0.12rem
            background #b81c24

</style>