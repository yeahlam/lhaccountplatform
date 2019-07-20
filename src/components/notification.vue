<template>
    <div class="notification" v-if="isShow">
        <div class="textMessageArea">{{text}}</div>
        <div class="button-group">
            <div class="button primary mr20" @click="confirm">确定</div>
            <div class="button" @click="cancel">取消</div>
        </div>

    </div>

</template>

<script>
    export default {
        props: {
            text: {
                default: ''
            }
        },
        name: "notification",
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            toggleShow() {
                this.isShow = !this.isShow
            },
            cancel(){
                this.$emit('cancel')
            },
            confirm(){
                this.$emit('confirm')
            }
        }
    }
</script>

<style lang="stylus">
    .notification
        position: fixed
        left: 50%
        top 50%
        z-index 10
        transform translate(-50%, -50%)
        width: 6.4rem
        height: 3.4rem
        background #f5f5f5
        border-radius 0.1rem

        .textMessageArea
            font-size 0.42rem

        .button-group
            position: absolute
            left 2.6rem
            top 2.38rem

        .textMessageArea
            margin 1rem 0.2rem 0
            word-break break-all
</style>