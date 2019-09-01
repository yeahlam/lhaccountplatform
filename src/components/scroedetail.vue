<template>
    <div class="count">
        <ul>
            <li class="list-row" @click="gotoDetail(item)" v-for="(item,index) in detailData" :key="index">
                <div class="list-title">{{item.createTime}}</div>
                <div class="list-count">
                   <div class="list-count-num">积分变动：{{item.integralChange}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </div>
                <div class="operateDescription">内容：{{item.operateDescription}}</div>
            </li>


        </ul>
    </div>
</template>

<script>
    import * as api from '../api'
    //import {Toast} from 'mint-ui';

    export default {
        name: "scroedetail",
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

            async getIntegrationDetail() {
                let res = await api.integrationDetail()
                this.detailData = res.data.data
                console.log(res.data);
            },
            gotoDetail(item) {
                this.$router.push({
                    name: 'infodetail',
                    query: {
                        problemNumber: item.problemNumber
                    }
                })
                console.log(item);
            },
        },
        async mounted() {
            document.title = '积分明细'
            await this.getIntegrationDetail()
        },
        // mounted() {
        // 	document.title = '积分明细'
        // 	this.getIntegrationDetail()
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
            line-height .86rem
            border-bottom 1px solid #e0e0e0
            box-sizing border-box
            padding 0 0.3rem 0 0.3rem
            color #333
            background-color #fff
            .operateDescription
                font-size 0.26rem
                height 0.86rem
                color  #6d6d6d
                width 100%
                padding-top  0.86rem
            .list-title
                font-size 0.26em
                height 0.86rem
                line-height 0.86rem
                float left
                width 50%
                color #6d6d6d
            .list-count
                height 0.86rem
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
                    display  none

</style>