<template>
    <div class="report">
        <div class="header">
            <div class="type">
                <div class="type_title">问题类型</div>
                <div class="type_text">请选择</div>
            </div>
            <textarea class="detail" placeholder="（必填）请对爆料的问题进行描述。"></textarea>
            <div class="hide_name">
                <img src="">
                <div>匿名投诉</div>
            </div>
        </div>
        <div class="photo">
123
        </div>

    </div>
</template>

<script>
    export default {
        name: "report",
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title='我要举报'
        }
    }
</script>

<style scoped lang="stylus">
.report
    min-height 100vh
    background-color #f0f0f0

    .header
        height 3.5rem

    .type
        display flex
        align-items center
        margin-bottom 0.2rem

    .type_title
        color #6bb259
        font-size 0.28rem
        margin-left 0.28rem
        margin-right 0.2rem

    .type_text
        background-color #dcdcdc
        color #666
        height 0.5rem
        line-height 0.5rem
        font-size 0.28rem
        width 2.8rem
        text-align center
        border-radius 0.1rem

    .detail
        width calc( 100% - 0.56rem)
        margin 0 auto
        height 1.9rem;
        border 1px solid #b2b2b2
        color #b2b2b2
        font-size 0.32rem
        display block
        line-height 0.4rem
        border-radius 0.1rem
    
    .hide_name
        float right
        height 0.3rem
        display flex
        align-items center
        padding-right 0.28rem
        margin-top 0.22rem

        img
            width 0.24rem
            height 0.24rem
            background-color black
        div
            font-size 0.28rem
            line-height 0.3rem;
            padding-left 0.14rem


</style>