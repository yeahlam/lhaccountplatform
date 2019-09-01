<template>
    <div class="count">
        <ul>
            <li class="list-row" v-for="(item,index) in detailData" :key="index">
                兑换商品：{{item.giftName}}<br />
                兑换日期：{{item.createTime}}<br />
                状态：{{item.status==0?'未兑换':'已兑换'}}<br />
            </li>
        </ul>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import * as api from '../api'

    export default {
        name: "exchangeList",
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
                let res = await api.exchangeGiftDetail()
                this.detailData = res.data.data
                console.log(this.detailData);
            }
        },
        // async mounted() {
        //     document.title = '任务明细'
        //     //await this.getStatus()
        //     await this.getDetail()
        // },
        mounted() {
        	document.title = '积分兑换记录'
        	this.getDetail()

        }
    }
</script>

<style lang="stylus">
    img
        width 100%
        height: 100%

   .count
        .list-row
            color #333
            background-color #fff
            border-radius 0.1rem
            margin 0.2rem
            border 1px solid #eee
            box-sizing border-box
            padding 0.2rem
            overflow hidden
            box-shadow 0 0px 3px rgba(0,0,0,0.3)
            line-height 0.8rem
            font-size 0.3rem
            color #333


</style>