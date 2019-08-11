<template>
	<div class="message">
		<div class="nav-box" v-if="!isLZ">
			<div class="nav-tab" :class="{on:status=='0'}" data-nav='0' @click="navbar">待办问题</div>
			<div class="nav-tab" :class="{on:status=='1'}" data-nav='1' @click="navbar">待办审核</div>
		</div>
		<div class="problem" :class="{mt:!isLZ}"  v-if="status==0">
			<div class="noData" v-if="listData.length==0">暂无数据</div>
			<div class="message-list" v-for="(item,index) in listData" :key="index">
				<div class="head">
					<div class="head-title">任务通知</div>
					<div class="date">{{moment(item.createTime).format('YYYY/MM/DD')}}</div>
				</div>
				<div class="message-text">
					{{item.description}}
				</div>
				<div class="btn-box">
					<div class="status" v-if="item.status==0">&lt;&lt;待处理</div>
					<div class="status" v-if="item.status==-1">&lt;&lt;已撤销</div>
					<div class="status" :class="{ing:true}" v-if="item.status==1">&lt;&lt;处理中</div>
					<div class="status" :class="{ing:true}" v-if="item.status==2">&lt;&lt;结果待确认</div>
					<div class="status" :class="{ed:true}" v-if="item.status==3">&lt;&lt;已完成</div>
					<div class="status" :class="{ing:true}" v-if="item.status==4">&lt;&lt;处理不通过</div>
					<div class="btn" @click="gotoDetail(item)">查看详情</div>
				</div>
			</div>
		</div >
		<div class="apply-list" :class="{mt:!isLZ}" v-if="status==1">
			<div class="noData" v-if="applyList.length==0">暂无数据</div>
			<div class="apply-item" v-for="(item,index) in applyList" :key="index">
				<div class="top-info">
					<div class="logo"><img src="../assets/applyLogo.png" alt=""></div>
					<div class="apply-title">{{item.roleName}}申请</div>
					<div class="apply-time">{{moment(item.createTime).format('YYYY/MM/DD')}}</div>
				</div>
				<div class="bottom-info">
					<div class="header">
						<img :src="IMGURL+item.pictureUrl" alt="">
					</div>
					<div class="right">
						<div class="detail-box">
							<div class="detail-text">
								<div class="detail-row">姓名：{{item.name}}</div>
								<div class="detail-row">电话号码：{{item.phoneNumber}}</div>
								<div class="detail-row">身份证号：{{item.cardId}}</div>
							</div>
						</div>
						<div class="detail-box-button-group">
							<div class="button-group">
								<div class="button primary mr20" @click="auditStatus(1,item.id)">确认通过</div>
								<div class="button" @click="auditStatus(0,item.id)">取消通过</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>



	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
    import * as api from '../api'
	import {IMGURL} from "../config";
    import moment from 'moment'

    export default {
        name: "message",
        data() {
            return {
				IMGURL,
                listData: [],
				applyList:[],
				status:'0'
            }
        },
		computed: {
			isLZ() {
				//是否楼长
				return ['楼长'].includes(this.$store.getters.getUserInfo.roleName)
			}
		},
        methods: {
            moment,
			async getNoticesDeal() {
                let res = await api.noticesDeal(this.status)
				if(this.status=='0'){
					this.listData = res.data.data
				}else {
					this.applyList = res.data.data
				}
                console.log(res.data);
            },
			// 审核申请
			async auditStatus(status,id) {
				try {
					await api.auditStatus({
						status:status,
						id:id
					})
					Toast('提交成功')
					this.getNoticesDeal()
					//刷新
				} catch (e) {
					Toast('提交失败')
				}

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
			navbar(e){
            	this.status=e.target.dataset.nav;
				this.getNoticesDeal();
			}
        },
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '待办任务'
            this.getNoticesDeal()
        }
    }
</script>

<style scoped lang="stylus">

	.message
		.nav-box
			position fixed
			left 0
			top 0
			width 100%
			height 1rem
			.nav-tab
				width 50%
				text-align center
				height 1rem
				font-size 0.3rem
				color #333
				line-height 1rem
				float left
				box-sizing border-box
				border-bottom 2px solid #eee
				&.on
					color #2d66a4
					border-bottom 2px solid #2d66a4
			:first-child
				border-right 2px solid #eee

		.problem
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


		.apply-list
			.apply-item
				margin 0.24rem 0.2rem 0
				height: 3.2rem
				background #f7f7f7
				border-radius 0.1rem
				position: relative
				.bottom-info
					position: absolute
					left 0.3rem
					right 0.3rem
					top 1.03rem
					display flex
					.header
						width: 1.52rem
						height: 1.92rem
					.right
						flex 1
						.detail-box
							display flex
							height:0.86rem
							overflow: hidden
							.detail-label
								font-size 0.28rem
								font-weight bold
								margin-right 0.26rem
								margin-left: 0.28rem
								.detail-text
									margin-left 0.4rem
									margin-bottom 0.2rem
									.detail-row
										font-size 0.26rem
										line-height 0.32rem
										width 100%
										overflow hidden
										text-overflow ellipsis
										white-space nowrap
						.detail-box-button-group
							float right
							.button
								width: 1.6rem
								height: 0.7rem
								border 0.1rem
								color #fff
								background #adb6c4
								display inline-block
								border-radius 0.1rem
								font-size 0.26rem
								line-height 0.7rem
								text-align center
								&.primary
									background #01214f
				.top-info
					position: absolute
					left: 0.3rem
					right 0.3rem
					top: 0.2rem
					display flex
					align-items center
					.apply-title
						font-weight bold
						color black
					.logo
						width: 0.62rem
						height: 0.62rem
						border-radius 50%
						background #01214f
						margin-right 0.2rem
					.apply-time
						margin-right 0
						margin-left auto
						font-size 0.22rem
						color #999999
				.mr20
					margin-right 0.1rem

		.mt
			margin-top 1.1rem
		.noData
			width 100%
			text-align center
</style>