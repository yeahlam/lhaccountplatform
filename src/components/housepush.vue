<template>
	<div class="housepush">
		<div class="photo">
			<div class="photo-icon">
                <div class="photo-box" @click="choosePic">
                    <img src="../assets/photo.png">
					<input type="file" style="display: none" ref="picinput" @change="inputChange">
                </div>
                <div class="photo-box" @click="choosePic">
                    <img src="../assets/add_picture.png">
                    <input type="file" style="display: none" ref="picinput" @change="inputChange">
                </div>
			</div>
			<div class="photo-list">
                <div class="photo-row" v-for="(item,index) in photoList" :key="index">
                    <img class="picture" :src="IMGURL+item" @click="imgClick($event)">
                    <img class="close-right" @click="delpic(index)" src="../assets/close_right.png">
                </div>
			</div>
		</div>
		<div class="report-section clearfix">
			<div class="section-title">详细地址</div>
			<input class="longInput"  v-model="address" />
		</div>
		<div class="report-section clearfix">
			<div class="section-title">租金(元/月)</div>
			<input class="longInput"  v-model="rent" />
		</div>
		<div class="report-section clearfix">
			<div class="section-title">联系人</div>
			<input class="longInput"  v-model="contact" />
		</div>
		<div class="report-section clearfix">
			<div class="section-title">联系电话</div>
			<input class="longInput"  v-model="phone" />
		</div>
		<div class="textarea-section clearfix">
			<div class="section-title">房屋介绍</div>
			<textarea  v-model="description"></textarea>
		</div>
		<div class="submit" @click="submit">发布房源</div>

	</div>
</template>

<script>
    import * as api from '../api'
    import {Toast} from 'mint-ui';
    import axios from 'axios'
    import url from '../urls'
    // import txmap2 from './txmap2'
    import {IMGURL} from "../config";

    export default {
        name: "housepush",
        data() {
            return {
                IMGURL,
				photoList: [],
                description: '', //房源介绍
				address:'',//详细地址
                phone: '', //手机号码
                rent: '', //每月租金
				contact: ''//联系人
            }
        },
        components: {

        },
        computed: {
            postModel() {
                return {
                    "description": this.description,
                    "address": this.address,
                    "phoneNum": this.phone,
                    "price": this.rent,
                    "relationName": this.contact,
					"pictureUrl": this.photoList,
                }

            }
        },
        methods: {
            imgClick(e) {
                let str = e.target.getAttribute('src')
				let url =window.location.origin+'/admin-console/'+str
                window.wx.previewImage({
                    current: url, // 当前显示图片的http链接
                    urls: [url]
                });
            },
            buildingItemClick(item){
                this.buildingsList=[]
				this.buildingName=item.name
				this.buildingId=item.id
                console.log(item);
            },
            // selectMap(data) {
            //     this.isShowMap = false
            //     this.address = data.poiaddress
            // },
			bulidingSelect(){
				this.isShowBuliding=true
			},
			submitBuliding(){
				this.isShowBuliding=false
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
				if (!this.postModel.description || !this.postModel.address || !this.postModel.phoneNum || !this.postModel.price || !this.postModel.relationName) {
					Toast('请把资料填写完整')
					return
				}
				if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
					Toast('请填写正确手机号码')
					return
				}
				try {
					let res = await api.submitHouse(this.postModel)
					if (res.data.code == -1) {
						Toast({
							message: res.data.msg
						});
					} else {
						Toast({
							message: '提交成功'
						});
						this.$router.replace({name: 'userCenter'})
					}
				} catch (e) {
					Toast('提交失败');
				}
			},
            typeSelect(item) {
                this.chooseType = item
                this.showChoose = false
            },
            delpic(index) {
                this.photoList.splice(index, 1)
            },
			//获取问题列表
			async getProblem() {
				let res = await api.getQuestionType(this.pid)
				if(this.pid==0){
					this.problemListPrimary = res.data.data

					//this.chooseProblemPrimary=res.data.data.id
					//this.pid=res.data.data[0].id
				}else{
					this.problemList = res.data.data
					this.chooseProblem='-1'
					console.log(this.problemList)
					//this.chooseProblem=res.data.data.id
				}
				console.log(res.data)
			},
			//选择问题
			changeProblemPrimary(event) {
            	let value=event.target.value
				console.log(value)
				if(value=='-1'){
					this.problemList = []
				}else{
					this.pid=value
					this.chooseProblemPrimary=value
					this.getProblem(this.pid)

				}
			},
			//二级问题选择
			changeProblem(event) {
				let value=event.target.value
				this.chooseProblem=value
			},
			//模糊搜索查询
			async search() {
				// if (!this.buildingName) {
				// 	Toast('请填写场所名称')
				// 	return
				// }
				try {
					let res = await api.buildings(this.buildingName)
					if (res.data.code == -1) {
						Toast({
							message: res.data.msg
						});
					} else {
						if(res.data.data.length){
							this.buildingsList=res.data.data
						}else{
                            Toast({
                                message: '没有查询到该楼层'
                            });
						}


					}

				} catch (e) {
					Toast('提交失败');
				}
			}
        },
        async mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '房源发布'
			// this.getBuildings()
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

	.housepush
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
			margin 0.2rem 0.2rem 0.2rem
			border 2px solid #7c8ca3
			border-radius 0.1rem
			display flex
			align-items center
			justify-content space-between
			height 1.66rem
			.photo-icon
				width 1.1rem
				padding 0 0.3rem
				.photo-box
					width 1.1rem
					height 0.58rem
					margin 0.1rem 0
					img
						width 100%
						height 100%
			.photo-list
				overflow-x auto
				width calc(100% - 1.6rem)
				white-space nowrap
				.photo-row
					position relative
					width 1.5rem
					height 1.14rem
					float left
					margin-right 0.2rem
					img.picture
						display block
						width 1.5rem
						height 1.14rem
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
		.clearfix:before,.clearfix:after
			content " "
			display table
		.clearfix:after
			clear both
		.report-section
			margin 0 0.2rem 0.2rem
			.text
				font-size 0.2rem
				color #333
				height 0.9rem
				line-height .9rem
				color #282828
				overflow: hidden
				text-overflow ellipsis
				width calc(100% - 1rem)
				white-space: nowrap;
				float left
				background-color #f5f5f5
				border-radius 0.1rem 0 0 0.1rem
			.get
				line-height 0.9rem
				height 0.9rem
				font-size 0.2rem
				color #2881e5
				float right
				width 1rem
				text-align center
				background-color #f5f5f5
				border-radius 0 0.1rem  0.1rem 0
			span
				display block
				width 1.5rem
				height 0.9rem
				line-height 0.9rem
				font-size 0.2rem
				color #333
				float left
				text-align center
			img
				width 0.5rem
				height 0.9rem
				display  block
				float left
				margin-left 0.2rem
			.seciton-input
				display block
				float left
				height 0.9rem
				line-height 0.9rem
				width calc(100% - 4.2rem)
				border 0
				background-color #f5f5f5
				font-size 0.2rem
				border-radius 0 0.1rem 0.1rem 0
				box-sizing border-box
				padding-left 0.3rem
				position relative
				.buildingInput
					display block
					height 0.9rem
					line-height 0.9rem
					width 100%
					border 0
					font-size 0.2rem
					background-color #f5f5f5
					position absolute
					top 0
					left 0
				.buildingName
					position absolute
					top 0.9rem
					left 0
					width 100%
					max-height 5rem
					overflow-y auto
					.bulidingLi
						width 100%
						height 0.7rem
						line-height 0.7rem
						background-color #fff
						font-size 0.2rem
						color #666
						text-align center
						border-bottom 1px solid #0162ab
			.longInput
				display block
				float left
				height 0.9rem
				line-height 0.9rem
				width calc(100% - 1.9rem)
				border 0
				background-color #f5f5f5
				font-size 0.2rem
				border-radius 0 0.1rem 0.1rem 0
				box-sizing border-box
				padding-left 0.3rem
			select
				display block
				float left
				height 0.9rem
				line-height 0.9rem
				width calc(100% - 1.9rem)
				border 0
				background-color #f5f5f5
				font-size 0.2rem
				border-radius 0 0.1rem 0.1rem 0
				box-sizing border-box
				padding-left 0.3rem
				background-color #f5f5f5

			.section-title
				width 1.9rem
				height 0.9rem
				border-radius 0.1rem
				background-color #e6e6e6
				color #333
				font-size 0.2rem
				line-height 0.9rem
				text-align center
				float left


		.textarea-section
			margin 0 0.2rem 0.2rem
			overflow hidden
			textarea
				display block
				float left
				height 2.9rem
				line-height 0.9rem
				width calc(100% - 1.9rem)
				border 0
				background-color #f5f5f5
				font-size 0.2rem
				border-radius 0 0.1rem 0.1rem 0
				box-sizing border-box
				padding-left 0.3rem
			.section-title
				width 1.9rem
				height 2.9rem
				border-radius 0.1rem
				background-color #e6e6e6
				color #333
				font-size 0.2rem
				line-height 2.9rem
				text-align center
				float left
		.location
			background-color #fff
			height 1.1rem
			display flex
			align-items center
			justify-content space-between
			width 100%
			padding 0 1rem 0 0.12rem
			box-sizing border-box



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
			background-color #fe7612
			border-radius 0.1rem
			text-align center
			margin 0.1rem auto 0

		.tips
			.tips-bg
				background-color rgba(0,0,0,0.7)
				width 100vw
				height 100vh
				position fixed
				top 0
				left 0
			.tips-buliding
				position fixed
				left 50%
				top 50%
				transform translate(-50% , -50%)
				background-color #ffffff
				border-radius 0.1rem
				padding 0.5rem 0.2rem
				select.tips-select
					display block
					height 0.9rem
					line-height 0.9rem
					width 80vw
					border 0
					background-color #f5f5f5
					font-size 0.2rem
					border-radius 0.1rem
					margin 0 auto 0.2rem
 				.tips-submit
					width 80vw
					height 0.9rem
					line-height 0.9rem
					font-size 0.36rem
					color #fff
					background-color #fe7612
					border-radius 0.1rem
					text-align center
					margin 0 auto 0
</style>
