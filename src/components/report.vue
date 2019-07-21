<template>
	<div class="report">
		<div class="header">
			<div class="type">
				<div class="type_title">问题类型</div>
				<div v-if="!chooseType.name" class="type_text" @click="chooseQuestionType">请选择</div>
				<div v-if="chooseType.name" class="type_text haveChoose" @click="chooseQuestionType">
					{{chooseType.name}}
				</div>
			</div>
			<textarea class="detail" placeholder="（必填）请对爆料的问题进行描述。" v-model="description"></textarea>
			<div class="hide_name">
				<img src="">
				<div>匿名投诉</div>
			</div>
		</div>
		<div class="photo">
			<div class="photo-list">
				<div class="photo-row">
					<img class="picture" src="../assets/add_picture.png">
					<img class="close-right" src="../assets/close_right.png">
				</div>

			</div>
			<div class="count">[0/5]</div>
		</div>
		<div class="tips">*点击“+”添加图片，点击“×”可删除图片，最多上传5张图片</div>
		<div class="location">
			<div class="text">点击右侧按钮进入地图进行定位</div>
			<div class="get">定位</div>
		</div>
		<div class="tips">*请详细描述方案发生位置，以便我们更快地核实处理案件</div>
		<div class="phone">
			<input class="text" placeholder="请填写您的手机号码以便反馈进度" v-model="phone">
		</div>
		<div class="tips">*联系方式将严格保密</div>
		<div class="submit" @click="submit">提交</div>
		<questionChoose class="questionChoose" v-if="showChoose" @select="typeSelect"></questionChoose>
	</div>
</template>

<script>
    import questionChoose from './problemclass'
    import * as api from '../api'
    import {Toast} from 'mint-ui';

    export default {
        name: "report",
        data() {
            return {
                showChoose: false, //是否显示类型选择
                chooseType: {}, //选择类型
                description: '', //问题描述
                phone: '' //手机号码
            }
        },
        components: {
            questionChoose
        },
        computed: {
            postModel() {
                return {
                    "description":  this.description,
                    "buildingId": 1,
                    "questionTypeId": this.chooseType.type,
                    "questionPosition": "门把",
                    "currentLocation": "测试",
                    "pictureUrl": "aa.png"
                }

            }
        },
        methods: {
            async submit() {
                try {
                    await api.submitQuestion(this.postModel)
                    Toast({
                        message: '提交成功'
                    });
                } catch (e) {
                    Toast('提交失败');
                }
            },
            chooseQuestionType() {
                this.showChoose = true
            },
            typeSelect(item) {
                this.chooseType = item
                this.showChoose = false
            }
        },
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '问题提交'
        }
    }
</script>

<style scoped lang="stylus">
	.questionChoose
		position: fixed
		left: 0
		top: 0
		right: 0
		bottom: 0
		background #fff
		z-index: 1

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
			background #dcdcdc url("../assets/down.png") no-repeat center right 0.2rem
			background-size auto 0.12rem
			color #666
			height 0.5rem
			line-height 0.5rem
			font-size 0.28rem
			width 2.8rem
			text-align center
			border-radius 0.1rem

			&.haveChoose
				background #dcdcdc

		.detail
			width calc(100% - 0.56rem)
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
				line-height 0.3rem
				padding-left 0.14rem

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
			margin-right calc((100% - 6rem) / 4)
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

		.location
			background-color #fff
			height 1.1rem
			display flex
			align-items center
			justify-content space-between
			width 100%
			padding 0 1rem 0 0.12rem
			box-sizing border-box

			.text
				font-size 0.32rem
				color #282828
				background url("../assets/location.png") no-repeat left center
				background-size 0.3rem 0.4rem
				height 0.42rem
				line-height 0.42rem
				padding-left 0.42rem
				color #282828

			.get
				line-height 0.42rem
				height 0.42rem
				font-size 0.32rem
				color #2881e5

		.phone
			background-color #fff
			height 1.1rem
			width 100%
			padding 0 0rem 0 0.12rem
			box-sizing border-box
			display flex
			align-items center

			.text
				font-size 0.32rem
				color #282828
				background url("../assets/location.png") no-repeat left center
				background-size 0.3rem 0.4rem
				height 0.42rem
				line-height 0.42rem
				padding-left 0.42rem
				display block
				border 0
				outline none
				color #282828
				width 100%

		.submit
			width 7.1rem
			height 0.9rem
			line-height 0.9rem
			font-size 0.36rem
			color #fff
			background-color #00204e
			border-radius 0.1rem
			text-align center
			margin 0.1rem auto 0


</style>