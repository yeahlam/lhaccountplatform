<template>
    <div class="count">
        <ul>
            <li class="list-row" v-if="detailData.submitStatisticsNum">
                <div class="list-title">提交的问题汇总</div>
                <div class="list-count">
                   <div class="list-count-num">{{detailData.submitStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row" v-if="detailData.auditStatisticsNum">
                <div class="list-title">已处理的审核总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.auditStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row" v-if="detailData.buildStatisticsNum">
                <div class="list-title">管理的建筑物数量</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.buildStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row" v-if="detailData.waitDealQuestionStatisticsNum">
                <div class="list-title">待处理的问题总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.waitDealQuestionStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row" v-if="detailData.totalBindStatisticsNum">
                <div class="list-title">提的审核总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalBindStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">待处理的审核总数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.waitDealBindStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">总的楼层数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalBuildStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">总的网格员数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalGridmemberStatisticsNum}}</div>
                    <img class="list-count-icon" src="../assets/arrow.jpg">
                </div>
            </li>
            <li class="list-row">
                <div class="list-title">总的楼长数</div>
                <div class="list-count">
                    <div class="list-count-num">{{detailData.totalBuildingManagerStatisticsNum}}</div>
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
        .list-row
            background url("../assets/message.png") no-repeat center left 0.2rem
            background-size 0.4rem 0.4rem
            height 1rem
            line-height 1rem
            border-bottom 1px solid #0162ab
            box-sizing border-box
            margin  0 0.4rem
            padding 0 0.2rem 0 0.7rem
            color #333
            .list-title
                font-size 0.26rem
                height 1rem
                line-height 1rem
                float left
                width 60%
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
                    display none

</style>