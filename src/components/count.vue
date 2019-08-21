<template>
    <div class="count">
        <ul>
            <li class="list-row" v-if="detailData.submitStatisticsNum">
                <div class="list-title">提交的问题汇总</div>
                <div class="list-count">
                   <div class="list-count-num">{{detailData.submitStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row" v-if="detailData.auditStatisticsNum">
                <div class="list-title">已处理的审核总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.auditStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row" v-if="detailData.buildStatisticsNum">
                <div class="list-title">管理的建筑物数量</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.buildStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row" v-if="detailData.waitDealQuestionStatisticsNum">
                <div class="list-title">待处理的问题总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.waitDealQuestionStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row" v-if="detailData.totalBindStatisticsNum">
                <div class="list-title">提的审核总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalBindStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">待处理的审核总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.waitDealBindStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">总的楼层数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalBuildStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">总的网格员数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalGridmemberStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">总的楼长数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalBuildingManagerStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import * as api from '../api'

    export default {
        name: "count",
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

   .count
        min-height 100vh
        width 100%
        background-color #fafafc
        .list-row
            height .86rem
            line-height .86rem
            border-bottom 1px solid #e0e0e0
            box-sizing border-box
            padding 0 0.3rem 0 0.3rem
            color #333
            background-color #fff
            .list-title
                font-size 0.32em
                height 0.86rem
                line-height 0.86rem
                float left
                width 50%
                color #6d6d6d

            .list-count
                height 1rem
                float right
                width 50%
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
                    display none

</style>