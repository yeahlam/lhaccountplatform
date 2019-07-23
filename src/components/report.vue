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
				<div class="photo-row" v-for="(item,index) in photoList" :key="index">
					<img class="picture" :src="item">
					<img class="close-right" @click="delpic(index)" src="../assets/close_right.png">
				</div>
				<div class="photo-row" @click="choosePic" v-show="!(photoList.length>=5)">
					<img class="picture" src="../assets/add_picture.png">
					<input type="file" style="display: none" ref="picinput" @change="inputChange">
				</div>

			</div>
			<div class="count">[{{photoList.length}}/5]</div>
		</div>
		<div class="tips">*点击“+”添加图片，点击“×”可删除图片，最多上传5张图片</div>
		<div class="location">
			<div class="text">{{address?address:'点击右侧按钮进入地图进行定位'}}</div>
			<div class="get" @click="isShowMap=true">定位</div>
		</div>
		<div class="tips">*请详细描述方案发生位置，以便我们更快地核实处理案件</div>
		<div class="phone phonelogo">
			<input class="text" placeholder="请填写您的手机号码以便反馈进度" v-model="phone">
		</div>
		<div class="tips">*联系方式将严格保密</div>
		<div class="phone">
			<select class="text" placeholder="选择具体楼层" v-model="chooseBuilding">
				<option :key="index" v-for="(item,index) in buildingsList" :value="item.id">{{item.name}}</option>
			</select>
		</div>
		<div class="tips">*请选择具体建筑</div>
		<div class="submit" @click="submit">提交</div>
		<questionChoose class="questionChoose" v-if="showChoose" @select="typeSelect"></questionChoose>
		<txmap2 v-show="isShowMap" @selectMap="selectMap"></txmap2>
	</div>
</template>

<script>
    import questionChoose from './problemclass'
    import * as api from '../api'
    import {Toast} from 'mint-ui';
    import axios from 'axios'
    import url from '../urls'
    import txmap2 from './txmap2'

    export default {
        name: "report",
        data() {
            return {
                photoList: [],
                showChoose: false, //是否显示类型选择
                chooseType: {}, //选择类型
                description: '', //问题描述
                phone: '', //手机号码
                isShowMap: false,
                address: '',//地址
                buildingsList: [], //楼层列表
                chooseBuilding: ''
            }
        },
        components: {
            questionChoose,
            txmap2
        },
        computed: {
            postModel() {

                return {
                    "description": this.description,
                    "buildingId": this.chooseBuilding,
                    "questionTypeId": this.chooseType.type,
                    "currentLocation": this.address,
                    "pictureUrl": this.photoList
                }

            }
        },
        methods: {

            selectMap(data) {
                this.isShowMap = false
                this.address = data.poiaddress

            },
            async inputChange() {

                let picinput = this.$refs.picinput
                if (this.photoList.length >= 5) {
                    picinput.value = ''
                    return
                }
                let formdata = new FormData();// 创建form对象
                formdata.append('file', picinput.files[0]);
                try {
                    let res = await axios.post(url.upLoadpicture, formdata, {
                        headers: {'Content-Type': 'multipart/form-data'}
                    })
                    this.photoList.push(res.data.data.path)
                    Toast('上传成功')
                } catch (e) {
                    Toast('上传失败')
                }
                picinput.value = ''

            },
            async choosePic() {
                let picinput = this.$refs.picinput
                picinput.click()
            },
            async submit() {
                try {
                    await api.submitQuestion(this.postModel)
                    Toast({
                        message: '提交成功'
                    });
                    this.$router.replace({name: 'userCenter'})
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
            },
            delpic(index) {
                this.photoList.splice(index, 1)
            }
        },
        async mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '问题提交'

            let res = await api.buildings()
            this.buildingsList = res.data.data
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
			overflow hidden
			margin 0 auto
			padding 0.1rem

		.photo-row
			position relative
			width 1.2rem
			height 1.64rem
			float left
			margin-right: 0.1rem

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
				overflow: hidden
				text-overflow ellipsis
				width: 5rem
				white-space: nowrap;

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
		.phonelogo
			.text
				background url("../assets/phone.png") no-repeat left center
				background-size 0.3rem 0.4rem
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
