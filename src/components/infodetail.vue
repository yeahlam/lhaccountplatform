<template>
	<div class="infodetail">
<!--		&lt;!&ndash;		<div class="title">请提交违规场景信息，仅用于网格员审核</div>&ndash;&gt;-->
<!--		<div class="swiperBox" v-if="problemData.pictureUrl">-->
<!--			<swiper :options="swiperOption" ref="mySwiper" class="swiperBoxMain">-->
<!--				&lt;!&ndash; slides &ndash;&gt;-->
<!--				<swiper-slide class="swiperItem" v-for="item in problemData.pictureUrl" :key="item">-->
<!--					<img :src="IMGURL+item" alt="">-->
<!--				</swiper-slide>-->
<!--				&lt;!&ndash; Optional controls &ndash;&gt;-->
<!--				<div class="swiper-pagination" slot="pagination"></div>-->
<!--			</swiper>-->
<!--		</div>-->
<!--		<div class="detail">-->
<!--			<div class="row">-->
<!--				<div class="title">-->
<!--					<div class="red-dot"></div>-->
<!--					违规楼层信息-->
<!--				</div>-->
<!--				<div class="text">-->
<!--					楼主姓名：{{problemData.receiverName}} <br/>-->
<!--					楼层地址：{{problemData.buildingName}}<br/>-->
<!--					问题描述：{{problemData.description}}-->
<!--				</div>-->
<!--			</div>-->

<!--		</div>-->
<!--		<template v-if="answerData&&answerData.description">-->
<!--			<div class="swiperBox" v-if="answerData.pictureUrl">-->
<!--				<swiper :options="swiperOption" ref="mySwiper" class="swiperBoxMain">-->
<!--					&lt;!&ndash; slides &ndash;&gt;-->
<!--					<swiper-slide class="swiperItem" v-for="item in answerData.pictureUrl" :key="item">-->
<!--						<img :src="IMGURL+item" alt="">-->
<!--					</swiper-slide>-->

<!--					&lt;!&ndash; Optional controls &ndash;&gt;-->
<!--					<div class="swiper-pagination" slot="pagination"></div>-->
<!--				</swiper>-->

<!--			</div>-->
<!--			<div class="detail">-->
<!--				<div class="row">-->
<!--					<div class="title">-->
<!--						<div class="green-dot"></div>-->
<!--						楼层处理方案-->
<!--					</div>-->
<!--					<div class="text">-->
<!--						问题描述：{{answerData.description}}-->
<!--					</div>-->
<!--				</div>-->

<!--			</div>-->
<!--		</template>-->


		<div class="btn" v-show="isWGY&&realStatus==2">
			<div class="finished" @click="dealConfirm(1)">问题已完成</div>
			<div class="notyet" @click="dealConfirm(0)">问题未完成</div>
		</div>
		<div class="btn centerbtnbox" v-show="isLZ&&realStatus==0">
			<div class="finished" @click="receiveTask">接收任务</div>
		</div>
		<div class="btn centerbtnbox" v-show="isLZ&&realStatus==1">
			<div class="finished" @click="gotoComplete">处置任务</div>
		</div>
<!--		过往数据展示-->
		<div class="before">
			<div class="message-list" v-for="(item,index) in detailData" :key="index">
				<div class="head">
					<div class="head-title">任务通知</div>
					<div class="btn-box">
						<div class="status" v-if="item.status==0">&lt;&lt;待处理</div>
						<div class="status" v-if="item.status==-1">&lt;&lt;已撤销</div>
						<div class="status" :class="{ing:true}" v-if="item.status==1">&lt;&lt;处理中</div>
						<div class="status" :class="{ing:true}" v-if="item.status==2">&lt;&lt;结果待确认</div>
						<div class="status" :class="{ed:true}" v-if="item.status==3">&lt;&lt;已完成</div>
						<div class="status" :class="{ing:true}" v-if="item.status==4">&lt;&lt;处理不通过</div>
					</div>
				</div>
				<div class="message-text">
					<div class="text-row" >操作人：{{item.submitterName}}</div>
					<div class="text-row">事发场所：{{item.buildingName}}</div>
					<div class="text-row">事项类型1级：{{item.questionTypeFirstName}}</div>
					<div class="text-row">事项类型2级：{{item.questionTypeSecondName}}</div>
					<div class="text-row">所在部位：{{item.questionPosition}}</div>
					<div class="text-row-img" v-if="item.pictureUrl.length>0" >
						<div class="picture" v-for="item in item.pictureUrl" :key="item" >
							<img :src="IMGURL+item" alt="">
						</div>
					</div>
					<div class="text-row">问题描述：{{item.description}}</div>
					<div class="text-row" v-if="item.status>1">处理结果：{{item.description}}</div>
				</div>
				<div class="date">办理时间：{{moment(item.time).format('YYYY/MM/DD')}}</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import * as api from '../api'
    import {IMGURL} from "../config";
	import moment from 'moment'

    export default {
        name: "infodetail",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                IMGURL,
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },
                detailData: {},
                realStatus: 0,
				listData: [
					// {
					// 	time:1564752038000,
					// 	status:1,
					// 	questionTypeFirstName:'fkfjdkfjd',
					// 	questionTypeSecondName:'fdhsfkdjfd',
					// 	questionPosition:'sjfdjfd',
					// 	description:'问题描述问题描述问题描述问题描述问题描述问题',
					// 	buildingName:'dfjdfjdfjdk',
					// 	pictureUrl:[
					// 		'../assets/logo.jpg','../assets/photo.png',
					// 		'../assets/logo.jpg','../assets/photo.png'
					//
					// 	]
					// }
				],
            }
        },

        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            problemData() {
                return this.detailData[0] || {}
            },
            answerData() {
                return this.detailData[1] || {}
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
			moment,
            async dealConfirm(status) {
                try {
                    await api.dealConfirm({
                        status,
                        questionNumber: this.$route.query.problemNumber
                    })
                    Toast('提交成功')
                    this.$router.replace({name: 'userCenter'})
                    // await this.getStatus()
                    // await this.getDetail()
                } catch (e) {
                    Toast('提交失败')
                }

            },
            async getStatus() {
                let res = await api.notices(this.$store.getters.getUserInfo.roleId)
                this.realStatus = res.data.data.find(item => {
                    return item.problemNumber == this.$route.query.problemNumber
                }).status

            },
            gotoComplete() {
                this.$router.push({name: 'complete', query: {problemNumber: this.$route.query.problemNumber}})
            },
            async receiveTask() {
                try {
                    await api.exchangeStatus({
                        questionNumber: this.$route.query.problemNumber
                    })
                    Toast('接收任务成功')
                    this.$router.push({name: 'complete', query: {problemNumber: this.$route.query.problemNumber}})
                    // await this.getStatus()
                    // await this.getDetail()
                } catch (e) {
                    Toast('接收任务失败')
                }
            },
            async getDetail() {
                let res = await api.houseNoticeDetail(this.$route.query.problemNumber)
                //let res = await api.houseNoticeDetail('11a8aec4-6ff7-4020-9402-fbb99aad346c')
                this.detailData = res.data.data
				this.realStatus=res.data.data[0].status
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

	.thumbs
		.swiper-button-white
			background-color #d2d2d2

	.infodetail
		.btn
			margin 0 0.8rem
			display flex
			align-items center
			justify-content space-between
			position fixed
			left 0
			bottom 0.3rem
			height 0.7rem
			width calc(100% - 1.6rem)
			&.centerbtnbox
				justify-content center
			.finished
				width 2.46rem
				height 0.7rem
				border-radius 0.1rem
				border 1px solid #01214f
				line-height 0.7rem
				color #fff
				font-size 0.3rem
				background-color #01214f
				text-align center
				margin 0 0.1rem
			.notyet
				width 2.46rem
				height 0.7rem
				border-radius 0.1rem
				border 1px solid #01214f
				line-height 0.7rem
				color #01214f
				font-size 0.3rem
				background-color #fff
				text-align center
				margin 0 0.1rem
		.gallery-thumbs
			height: 0.67rem

		.swiperBox
			margin-top: 0.2rem

			.swiper-container
				height: 3.6rem

		.before
			width 100%
			padding-bottom 1.5rem
			.message-list
				margin 0.2rem
				border-radius 0.1rem
				background #f7f7f7
				position: relative
				padding 0.2rem 0 0.2rem
				.message-text
					margin 0.3rem 0.3rem
					.text-row
						color #333
						line-height 0.3rem
						font-size 0.24rem
						margin-bottom 0.1rem
					.text-row-img
						margin 0 0 0.2rem
						height 1.6rem
						overflow hidden
						.picture
							width 20%
							float left
							height 1.6rem
							box-sizing border-box
							padding 0 0.1rem
							img
								width 100%
								height 100%
				.head
					width 100%
					padding 0
					box-sizing border-box
					display flex
					align-items center
					justify-content space-between
					height 0.7rem
					.head-title
						background url("../assets/message.png") no-repeat center left
						background-size auto 100%
						height 0.6rem
						line-height 0.6rem
						padding-left 0.8rem
						color #333
						font-size 0.26rem
						margin-left 0.3rem
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



				.date
					line-height 0.6rem
					height 0.6rem
					font-size 0.26rem
					color #666
					width 100%
					padding-left 0.3rem
					box-sizing border-box


	.swiperBoxMain
		.swiperItem
			overflow: hidden
			border-radius 0.1rem
			background yellow

		.swiper-slide
			width: 50% !important;
			margin: 0 25%;

		.swiper-slide-prev
			right: -42%;

		.swiper-slide-next
			left: -42%;

		.swiper-pagination-bullet-active
			background #fff

		.swiper-pagination-bullet-active
			width: 0.24rem
			border-radius 0.12rem
			background #b81c24


	.detail
		border-top 1px solid #d2d2d2
		margin-top 0.2rem

		.row
			border-radius 0.1rem
			margin 0.3rem
			box-shadow 0 0 10px rgba(0, 0, 0, 0.2)

			.text
				color #b2b2b2
				font-size 0.26rem
				line-height 0.46rem
				margin 0 0.4rem
				padding-bottom 0.6rem
				padding-top 0.3rem

			.title
				color #333
				height 0.7rem
				line-height 0.7rem
				font-size 0.3rem
				margin 0 0.4rem
				display flex
				align-items center
				border-bottom 1px solid #d2d2d2
				padding-bottom 0.1rem

				.red-dot
					width 0.1rem
					height 0.1rem
					border-radius 50%
					background-color #ff0000
					margin-right 0.2rem

				.green-dot
					width 0.1rem
					height 0.1rem
					border-radius 50%
					background-color #41c400
					margin-right 0.2rem


</style>