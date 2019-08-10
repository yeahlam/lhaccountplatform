<template>
	<div class="userCenter">
		<div v-if="false" class="tips-box">
			<div class="tips-box-text">你的</div>
			<div class="tips-close"></div>
		</div>
		<div class="userInfoCard" :class="[roleType]">
			<div class="userInfoCardDecoration">{{userInfo.roleName}}</div>
			<div class="photo" @click="headerClick">
				<img :src=IMGURL+headerImg>
				<input type="file" ref="headerInput" style="display: none;" @click="inputChange">
			</div>
			<div class="userInfoTextBox">
				<div class="name">{{userInfo.name}}</div>
				<div class="usertitle"></div>
				<div class="myScore">我的积分
					<span class="score">{{userInfo.integration}}</span>
				</div>
			</div>
			<div class="tab-bar">
				<div class="tab-bar-item" @click="gotoMessage">
					<div class="num">{{notice.waitDealNum}}</div>
					<div class="item-name">待办任务</div>
				</div>
<!--				<div v-if="!isManager" class="tab-bar-item" @click="gotoApplyMessage">-->
<!--					<div class="num">{{notice.noticeNum}}</div>-->
<!--					<div class="item-name">通知</div>-->
<!--				</div>-->
<!--				<div v-if="!isManager" class="tab-bar-item center-item">-->
<!--					<div class="num">{{notice.dynamicNum}}</div>-->
<!--					<div class="item-name">动态</div>-->
<!--				</div>-->
				<div  class="tab-bar-item center-item"  @click="gotoAllFile">
					<div class="num">{{notice.totalNum}}</div>
					<div class="item-name">案件查询</div>
				</div>
				<div class="tab-bar-item">
					<div class="num">{{notice.collectNum}}</div>
					<div class="item-name">收藏</div>
				</div>
			</div>
		</div>
		<div class="navigationBox">
			<div class="navigation-item" v-if="isWGY" @click="gotoreport">
				<div class="icon"><img src="../assets/guide.png"></div>
				<div class="navigation-title">问题提交</div>
			</div>
			<div class="navigation-item" v-if="isManager || isWGY" @click="message">
				<div class="icon"><img src="../assets/guide.png"></div>
				<div class="navigation-title">汇总统计</div>
			</div>
			<div class="navigation-item" v-if="isLZ" @click="gotoshop">
				<div class="icon"><img src="../assets/scorShop.png"></div>
				<div class="navigation-title">积分商城</div>
			</div>

			<!--            <div class="navigation-item">-->
			<!--                <div class="icon"><img src="../assets/scorShop.png"></div>-->
			<!--                <div class="navigation-title">积分商城</div>-->
			<!--                <div class="arror-right"></div>-->
			<!--            </div>-->
			<!--            <div class="navigation-item">-->
			<!--                <div class="icon"><img src="../assets/content.png"></div>-->
			<!--                <div class="navigation-title">网格长联系方式</div>-->
			<!--                <div class="arror-right"></div>-->
			<!--            </div>-->
			<!--            <div class="navigation-item">-->
			<!--                <div class="icon"><img src="../assets/guide.png"></div>-->
			<!--                <div class="navigation-title">使用指南</div>-->
			<!--                <div class="arror-right"></div>-->
			<!--            </div>-->
			<!--            <div class="navigation-item">-->
			<!--                <div class="icon"><img src="../assets/news.png"></div>-->
			<!--                <div class="navigation-title">网格咨询</div>-->
			<!--                <div class="arror-right"></div>-->
			<!--            </div>-->
		</div>
	</div>
</template>

<script>
    import * as api from '../api'
    import {IMGURL} from "../config";
    import axios from 'axios'

    let defaultImg = require('../assets/nophoto.png')
    import url from '../urls'
    import {Toast} from 'mint-ui';

    export default {
        name: "userCenter",
        data() {
            return {
                IMGURL,
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
            },
            isWGY() {
                //是否网格员
                return ['网格员'].includes(this.$store.getters.getUserInfo.roleName)
            },
            isLZ() {
                //是否楼长
                return ['楼长'].includes(this.$store.getters.getUserInfo.roleName)
            }
        },
        methods: {
            async inputChange() {

                let picinput = this.$refs.headerInput

                let formdata = new FormData();// 创建form对象
                formdata.append('file', picinput.files[0]);
                try {
                    let res = await axios.post(url.exchangePicture, formdata, {
                        headers: {'Content-Type': 'multipart/form-data'}
                    })
                    this.userInfo.phoneUrl = res.data.data.path
                    Toast('上传成功')

                } catch (e) {
                    Toast('上传失败')
                }
                picinput.value = ''

            },
            headerClick() {
                this.$refs.headerInput.click()
            },
            message() {
            },
            async getstatisticsNotice() {
                let res = await api.statisticsNotice()
                this.notice = res.data.data
                console.log(res.data);
            },
            gotoMessage() {
                console.log(123)
                this.$router.push({name: 'message'})
            },
            gotoAllFile() {
                this.$router.push({name: 'allFile'})
            },
            gotoreport() {
                this.$router.push({name: 'report'})
            },
			gotoshop() {
				this.$router.push({name: 'shop'})
			}
        },
        async mounted() {
            //组建一进入就好u会调用这个方法
            document.title = 'navigation-item个人中心'
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
			width 100%
			background #fff
			height calc(100vh - 5.3rem)

			.navigation-item
				width 44%
				margin 0 3% 0.4rem
				float left
				height 1.54rem
				display flex
				align-items center
				box-shadow 0 0 5px rgba(0,0,0,0.3)
				border-radius 0.1rem
				.icon
					width: 0.5rem
					height: 0.5rem
					border-radius 50%
					background #00204e
					margin:0 0.2rem
				.navigation-title
					width calc(100% - 0.9rem)
					text-align center
					line-height:0.9rem
					overflow hidden
					color #0b67b2
					font-size 0.34rem
		.navigation-item:ntb-child(2n+1)
			clear both


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