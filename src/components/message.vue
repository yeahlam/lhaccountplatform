<template>
    <div class="message">

        <div class="message-list">
            <div class="head">
                <div class="head-title">任务通知</div>
                <div class="date">2019/07/01</div>
            </div>
            <div class="message-text">
                科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）
            </div>
            <div class="btn-box">
                <div class="status">&lt;&lt;待处理</div>
                <div class="btn">接收任务</div>
            </div>

        </div>
        <div class="message-list">
            <div class="head">
                <div class="head-title">任务通知</div>
                <div class="date">2019/07/01</div>
            </div>
            <div class="message-text">
                科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）
            </div>
            <div class="btn-box">
                <div class="status ing">&lt;&lt;处理中</div>
                <div class="btn btn-ing">完成任务</div>
            </div>

        </div>
        <div class="message-list">
            <div class="head">
                <div class="head-title">任务通知</div>
                <div class="date">2019/07/01</div>
            </div>
            <div class="message-text">
                科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）科尔沁变了模样（在习近平新时代中国特色社会主义思想指引下——新时代新作为新篇章）
            </div>
            <div class="btn-box">
                <div class="status ed">&lt;&lt;已处理</div>
                <div class="btn btn-ed">任务完成</div>
            </div>

        </div>


    </div>
</template>

<script>
    import * as api from '../api'

    export default {
        name: "message",
        methods: {
            async getNotices() {
                let res = await api.notices(this.$store.getters.getUserInfo.roleId)
                console.log(res.data);
            }
        },
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '通知'
            this.getNotices()
        }
    }
</script>

<style scoped lang="stylus">

    .message


        .message-list
            margin 0.2rem
            border-radius 0.1rem
            background #f7f7f7
            position: relative
            padding 0.2rem 0 0
            height 3.24rem

            .btn-box
                display flex
                justify-content space-between
                align-items center
                height 0.7rem

                .btn
                    width 1.6rem
                    height 0.7rem
                    line-height 0.7rem
                    color #fff
                    font-size 0.3rem
                    border-radius 0.1rem
                    background-color #01214f
                    text-align center
                    margin-right 0.2rem

                    &.btn-ing
                        background-color #fe7612

                    &.btn-ed
                        background-color #adb6c4

                .status
                    width 2.14rem
                    height 0.66rem
                    line-height 0.66rem
                    color #fff
                    text-align center
                    background-color #7c8ca3
                    position relative

                    &.ing
                        background-color #dba47b

                    &.ed
                        background-color #adb6c4


            .message-text
                color #333
                line-height 0.3rem
                font-size 0.24rem
                margin 0.3rem 0.3rem
                height 0.9rem
                overflow hidden

                text-overflow -o-ellipsis-lastline
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 3
                -webkit-box-orient vertical


            .head
                width 100%
                padding 0rem 0.4rem 0 0.3rem
                box-sizing border-box
                display flex
                align-items center
                justify-content space-between

                .head-title
                    background url("../assets/message.png") no-repeat center left
                    background-size auto 100%
                    height 0.6rem
                    line-height 0.6rem
                    padding-left 0.8rem
                    color #333
                    font-size 0.26rem

                .date
                    line-height 0.6rem
                    height 0.6rem
                    font-size 0.26rem
                    color #9f9f9f


</style>