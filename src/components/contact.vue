<template>
    <div class="contact">
        <div class="contact-search">
            <input class="searchInput"  v-model="search"  />
            <img class="searchIcon" src="../assets/report-search.png" @click="search">
        </div>

        <ul>
            <li class="list-row-first">
                <div class="list-title">管理员</div>
                <div class="list-count">
                    <div class="list-count-num">0</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">张三张三</div>
                <div class="list-count">
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import * as api from '../api'

    export default {
        name: "contact",
        components: {

        },
        data() {
            return {
                detailData: {}
            }
        },

        computed: {

        },
        methods: {

            async getDetail() {
                let res = await api.statisticsPersion()
                this.detailData = res.data.data
                console.log(res.data);
            }
        },
        async mounted() {
            document.title = '任务明细'
            //await this.getStatus()
            await this.getDetail()
        },
        // mounted() {
        // 	document.title = '任务明细'
        // 	this.getDetail()
        //
        // }
    }
</script>

<style lang="stylus">
    img
        width 100%
        height: 100%

   .contact
        .contact-search
            margin 0.2rem
            border 1px solid #0f345c
            .searchInput
                width calc(100% - 0.9rem)
                height 0.9rem
                line-height 0.9rem
                border 0
                box-sizing border-box
                padding-left 0.2rem
            .searchIcon
                display block
                float right
                height 0.9rem
                line-height 0.9rem
                width 0.5rem
                border 0
                font-size 0.2rem
                padding 0 0.2rem
        .list-row-first
            height .86rem
            line-height .86rem
            border-bottom 1px solid #e0e0e0
            box-sizing border-box
            padding 0 0.3rem 0 0.3rem
            color #333
            background-color #fff
        .list-row
            height .86rem
            line-height .86rem
            border-bottom 1px solid #e0e0e0
            box-sizing border-box
            padding 0 0.3rem 0 0.3rem
            color #333
            background-color #fff
            .list-title
                font-size 0.3em
                height 0.86rem
                line-height 0.86rem
                float left
                width 60%
                color #6d6d6d

            .list-count
                height 1rem
                float right
                width 40%
                display flex
                align-items center
                .list-count-num
                    font-size 0.26rem
                    height 1rem
                    line-height 1rem
                    width calc( 100% - 0.38rem)
                    margin-right 0.2rem
                    overflow hidden
                    float left
                    text-align right
                .list-count-icon
                    height 0.3rem
                    width 0.18rem
                    display block
                    float right

</style>