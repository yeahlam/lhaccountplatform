<template>
    <div class="complete">
        <div class="photo">
            <div class="photo-list">
                <div class="photo-row">
                    <img class="picture" src="../assets/add_picture.png">
                    <img class="close-right" src="../assets/close_right.png">
                </div>
                <div class="photo-row">
                    <img class="picture" src="../assets/add_picture.png">
                    <img class="close-right" src="../assets/close_right.png">
                </div>
                <div class="photo-row">
                    <img class="picture" src="../assets/add_picture.png">
                    <img class="close-right" src="../assets/close_right.png">
                </div>
                <div class="photo-row">
                    <img class="picture" src="../assets/add_picture.png">
                    <img class="close-right" src="../assets/close_right.png">
                </div>
                <div class="photo-row">
                    <img class="picture" src="../assets/add_picture.png">
                    <img class="close-right" src="../assets/close_right.png">
                </div>
            </div>
            <div class="count">[0/5]</div>
        </div>
        <div class="tips">*点击“+”添加图片，点击“×”可删除图片，最多上传5张图片</div>
        <div class="detail">
            <div class="row">
                <div class="title">
                    违规楼层信息
                </div>
                <div class="section">
                    <div class="input-title">楼长姓名</div>
                    <input class="input" placeholder="">
                </div>
                <div class="section">
                    <div class="input-title">楼层地址</div>
                    <input class="input" placeholder="">
                </div>
                <div class="textarea">
                    <textarea placeholder="问题描述（200字以内）" maxlength="200"></textarea>
                </div>

            </div>

        </div>

        <div class="submit">完成任务</div>
    </div>
</template>

<script>
    export default {
        name: "complete",
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title='通知'
        }
    }
</script>

<style scoped lang="stylus">
.complete
    min-height 100vh
    background-color #fff


    .photo-row:last-child
        margin-right 0
    .photo
        background-color #fff
        width 100%
        padding-top 0.3rem
    .photo-list
        width calc(100% - 0.28rem)
        overflow hidden
        margin 0 auto
    .photo-row
        position relative
        width 1.2rem
        height 1.64rem
        margin-right calc((100% - 6rem)/4)
        float left
        img.picture
            display block
            width 1.2rem
            height 1.64rem
            position absolute
            top 0
            left 0

        img.close-right
            display block
            width 0.42rem
            height 0.42rem
            position absolute
            top 0
            right 0
    .count
        text-align right
        padding 0.48rem 0.2rem 0.12rem 0
        font-size 0.28rem
        color #666
    .tips
        font-size 0.24rem
        color #808080
        line-height 0.24rem
        padding 0.2rem 0rem 0.3rem 0.12rem
        text-align left

    .detail
        .row
            border-radius 0.1rem
            margin 0.3rem
            .textarea
                border 1px solid #eaeaea
                margin 0.2rem 0.7rem
                textarea
                    display block
                    line-height 0.6rem
                    height 3.41rem
                    color #333
                    margin 0 0.3rem
                    border 0
                    width calc(100% - 0.6rem)
                    outline none

            .section
                line-height 0.6rem
                margin 0 0.7rem
                border 1px solid #eaeaea
                display flex
                justify-content space-between
                align-items center
                margin-top 0.2rem
                .input-title
                    line-height 0.6rem
                    font-size 0.26rem
                    width 1.5rem
                    color #b2b2b2
                    padding-left 0.3rem
                .input
                    border 0
                    color #333
                    font-size 0.26rem
                    line-height 0.6rem
                    display block
                    width calc(100% - 2rem)
                    text-align right
                    outline none
                    margin-right 0.2rem

            .title
                color #333
                height 0.7rem
                line-height 0.7rem
                font-size 0.3rem
                margin 0 0 0 0.7rem


    .submit
            width 5rem
            height 0.7rem
            line-height 0.7rem
            font-size 0.3rem
            color #fff
            background-color #f27612
            border-radius 0.1rem
            text-align center
            margin 0.1rem auto 0







</style>