<template>
    <div class="report">
        <div class="type">
            <div class="type_title">问题类型</div>
            <div class="type_text">请选择</div>
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
    .type
        display flex
        align-items center

    .type_title
        color #6bb259
        font-size 0.28rem

    .type_text
        background #fefefe
        color #666
        height 0.5rem
        line-height 0.5rem
        font-size 0.28rem
        width 2.8rem
        text-align center
</style>