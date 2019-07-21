<template>
    <div class="userCenter">
        <div v-if="false" class="tips-box">
            <div class="tips-box-text">你的</div>
            <div class="tips-close"></div>
        </div>
        <div class="userInfoCard" :class="[roleType]">
            <div class="userInfoCardDecoration">{{userInfo.roleName}}</div>
            <div class="photo">
                <img :src=headerImg>
            </div>
            <div class="userInfoTextBox">
                <div class="name">{{userInfo.name}}</div>
                <div class="usertitle">用户</div>
                <div class="myScore">我的积分
                    <span class="score">{{userInfo.integration}}</span>
                </div>
            </div>
            <div class="tab-bar">
                <div v-if="isManager" class="tab-bar-item" @click="gotoApplyList">
                    <div class="num">{{notice.noticeNum}}</div>
                    <div class="item-name">申请通知</div>
                </div>
                <div v-if="!isManager" class="tab-bar-item" @click="gotoApplyMessage">
                    <div class="num">{{notice.noticeNum}}</div>
                    <div class="item-name">通知</div>
                </div>
                <div v-if="!isManager" class="tab-bar-item center-item">
                    <div class="num">{{notice.dynamicNum}}</div>
                    <div class="item-name">动态</div>
                </div>
                <div v-if="isManager" class="tab-bar-item center-item">
                    <div class="num">
                        <img class="gridLogo" src="../assets/logo.png" alt="">
                    </div>
                    <div class="item-name">网格管理</div>
                </div>
                <div class="tab-bar-item">
                    <div class="num">{{notice.collectNum}}</div>
                    <div class="item-name">收藏</div>
                </div>
            </div>
        </div>
        <div class="navigationBox">
            <div class="navigation-item">
                <div class="icon"><img src="../assets/scorShop.png"></div>
                <div class="navigation-title">积分商城</div>
                <div class="arror-right"></div>
            </div>
            <div class="navigation-item">
                <div class="icon"><img src="../assets/content.png"></div>
                <div class="navigation-title">网格长联系方式</div>
                <div class="arror-right"></div>
            </div>
            <div class="navigation-item">
                <div class="icon"><img src="../assets/guide.png"></div>
                <div class="navigation-title">使用指南</div>
                <div class="arror-right"></div>
            </div>
            <div class="navigation-item">
                <div class="icon"><img src="../assets/news.png"></div>
                <div class="navigation-title">网格咨询</div>
                <div class="arror-right"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as api from '../api'

    let defaultImg = require('../assets/nophoto.png')
    export default {
        name: "userCenter",
        data() {
            return {
                notice: {}
            }
        },
        computed: {
            userInfo() {
                return this.$store.getters.getUserInfo
            },
            headerImg() {
                return this.userInfo.phoneUrl ? this.userInfo.phoneUrl : defaultImg
            },
            roleType() {
                if (this.$store.getters.getUserInfo.roleName === '超级管理员') {
                    return 'supermanager'
                }
                if (this.$store.getters.getUserInfo.roleName === '管理员') {
                    return 'manager'
                }
                return 'executer'
            },
            isManager() {
                //是否管理员
                return ['超级管理员', '管理员'].includes(this.$store.getters.getUserInfo.roleName)
            }
        },
        methods: {
            async getstatisticsNotice() {
                let res = await api.statisticsNotice()
                this.notice = res.data.data
                console.log(res.data);
            },
            gotoApplyList() {
                this.$router.push({name: 'applyList'})
            },
            gotoApplyMessage() {
                this.$router.push({name: 'message'})
            }
        },
        async mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '个人中心'
            await this.getstatisticsNotice()
        }
    }
</script>

<style scoped lang="stylus">
    .gridLogo
        width: 0.4rem
        height: 0.4rem

    .userCenter
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        background #f5f5f5

        .tips-box
            width 100%
            background #fdf3f4
            height 0.6rem
            padding 0 0.28rem
            box-sizing border-box
            display flex
            justify-content space-between
            align-items center

            .tips-close
                width 0.28rem
                height 0.28rem
                background url("../assets/tips-close.png")
                background-size 100% 100%

            .tips-box-text
                height 0.6rem
                line-height 0.6rem
                color #7d2b31
                font-size 0.26rem
                width calc(100% - 0.28rem)

        .navigationBox
            margin 0.3rem
            background #fff
            height calc(100vh - 5.3rem)

            .navigation-item
                padding 0.2rem 0.1rem 0.2rem
                border-bottom 1px solid #cacccc
                display flex
                align-items center
                margin 0 0.26rem

                .icon
                    width: 0.5rem
                    height: 0.5rem
                    border-radius 50%
                    background #00204e
                    margin-right: 0.2rem

                .arror-right
                    background url("../assets/arrow.jpg")
                    background-size cover
                    width: 0.18rem
                    height: 0.3rem
                    margin-right 0
                    margin-left auto

        .userInfoCard
            margin 0.26rem
            height 3.7rem
            background red
            border-radius 0.1rem
            background linear-gradient(to right, #0162ab, #73b7ed)
            position: relative
            box-shadow 0px 2px 10px rgba(0, 0, 0, 0.5)

            &.manager
                background linear-gradient(to right, #970203, #c32700)

            &.supermanager
                background linear-gradient(to right, #9e7a3e, #debc7e)


            .tab-bar
                position: absolute
                left: 0
                bottom: 0.38rem;
                width: 100%
                color #fff
                text-align center
                display flex

                .tab-bar-item
                    width 33.3%
                    float: left
                    height: 0.6rem
                    font-size 0.3rem

                    .num
                        position: relative
                        top: -0.1rem
                        height: 0.3rem

                    .item-name
                        position: relative
                        bottom -0.1rem

                    &.center-item
                        border 1px solid #64a1d2
                        border-top 0
                        border-bottom 0

            .userInfoCardDecoration
                width: 1.82rem
                height: 0.64rem
                background url("../assets/userInfoCardDecoration.png")
                background-size cover
                position: absolute
                right: 0
                top: 0.34rem
                font-size 0.28rem
                line-height 0.7rem
                text-align center
                color #3c2500

            .userInfoTextBox
                position: absolute
                top: 0.3rem
                left: 2rem
                width: 2.9rem
                height: 2rem
                color #fff

                .myScore
                    font-size 0.24rem
                    margin-top: 0.6rem
                    color #6cffff

                    .score
                        color #fff

                .name
                    font-size 0.4rem

                .usertitle
                    margin-top: 0.16rem
                    font-size 0.28rem

            .photo
                width: 1.5rem
                height: 1.94rem
                position: absolute
                left: 0.3rem
                top: 0.3rem

</style>