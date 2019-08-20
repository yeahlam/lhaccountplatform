<template>
	<div class="complete">
		<div class="photo">
			<div class="photo-list">
				<div class="photo-row" v-for="(item,index) in photoList" :key="index">
					<img class="picture" :src="IMGURL+item" @change="inputChange">
					<img class="close-right" @click="delpic(index)" src="../assets/close_right.png">
				</div>
				<div class="photo-row" @click="choosePic" v-show="!(photoList.length>=5)">
					<img class="picture" src="../assets/add_picture.png" @click="imgClick($event)">
					<input type="file" style="display: none" ref="picinput" >
				</div>
			</div>
			<div class="count">[{{photoList.length}}/5]</div>
		</div>
		<div class="tips">*点击“+”添加图片，点击“×”可删除图片，最多上传5张图片</div>
		<div class="detail">
			<div class="row">
				<div class="title">
					违规楼层信息
				</div>

				<div class="textarea">
					<textarea placeholder="问题描述（200字以内）" maxlength="200" v-model="description"></textarea>
				</div>

			</div>

		</div>

		<div class="submit" @click="questionDeal">完成任务</div>
	</div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import axios from 'axios'
    import url from '../urls'
    import * as api from '../api'
    import {IMGURL} from "../config";

    export default {
        name: "complete",
        data() {
            return {
                IMGURL,
                photoList: [],
                description: '',
                name: '',
                currentLocation: ''
            }
        },
        computed: {
            postModel() {
                return {
                    "description": this.description,
                    "pictureUrl": this.photoList,
                    "questionNumber": this.$route.query.problemNumber
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
            async questionDeal() {
                if (!this.postModel.description) {
                    Toast('请把资料填写完整')
                    return
                }

                try {
                    await api.questionDeal(this.postModel)
                    Toast('提交成功')
                    this.$router.replace({name: 'userCenter'})
                } catch (e) {
                    Toast('提交失败')

                }
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
            delpic(index) {
                this.photoList.splice(index, 1)
            },
            async choosePic() {
                let picinput = this.$refs.picinput
                picinput.click()
            },
        },
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '通知'
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
			margin-right 0.2rem
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
				overflow: hidden

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