<template>
	<div class="login">
		<img class="logo" src="../assets/logo.jpg">
		<div class="background">
			<div class="head">
				<div class="photo" @click="choosePic">
					<img class="photo" src="../assets/add_picture.png">
					<input type="file" style="display: none" ref="picinput" @change="inputChange">
				</div>

				<div class="head-input">
					<div class="section"><label>姓名</label><input v-model="name" placeholder="请输入真实姓名"/></div>
					<div class="section"><label>电话</label><input v-model="phoneNumber" placeholder="请输入电话号码"/></div>

				</div>
			</div>
			<div class="apply-info">
				<div class="apply-title">职位选择</div>
				<div class="apply-type">
					<div class="login-type " :class="{on:index==nowclick}"
						 @click="nowclick=index"
						 v-for="(item,index) in roleType" :key="index">{{item.name}}
					</div>
				</div>
			</div>
			<div class="apply-info">
				<div class="apply-title">管辖区域</div>
				<input class="apply-input" v-model="area" placeholder="请输入"/>
			</div>
			<div class="apply-info">
				<div class="apply-title">证件号码</div>
				<input class="apply-input" v-model="idNumber" placeholder="请输入"/>
			</div>
			<div class="apply-info">
				<div class="apply-title">紧急联系人</div>
				<input class="apply-input" v-model="emergencyFriendName" placeholder="请输入"/>
			</div>
			<div class="apply-info">
				<div class="apply-title">联系人电话</div>
				<input class="apply-input" v-model="emergencyFriendPhone" placeholder="请输入"/>
			</div>
			<div class="submit">开始审核</div>

		</div>


	</div>
</template>

<script>
    import axios from 'axios'
    import url from '../urls'
    import {Toast} from 'mint-ui';

    export default {
        name: "login",
        data() {
            // 1 2 3 4 分别对应 1 超级管理员，2 -管理员 3 -网格员 4 - 楼长 角色的4个id
            return {
                roleType: [
                    {name: '管理员', value: 2},
                    {name: '网格员', value: 3},
                    {name: '楼长', value: 4},
                ],
                nowclick: 0,
                name: '',
                phoneNumber: '',
                area: '',
                idNumber: '',
                emergencyFriendName: '',
                emergencyFriendPhone: '',
                pictureUrl: ''
            }
        },
        computed: {
            postModel() {
                return {
                    "name": this.name,
                    "roleId": this.roleType[this.nowclick].value,
                    "card": this.idNumber,
                    "phoneNumber": this.phoneNumber,
                    "pictureUrl": ""
                }
            }
        },
        methods: {
            async choosePic() {
                let picinput = this.$refs.picinput
                picinput.click()
            },
            async inputChange() {
                let picinput = this.$refs.picinput

                let formdata = new FormData();// 创建form对象
                formdata.append('file', picinput.files[0]);
                try {
                    let res = await axios.post(url.upLoadpicture, formdata, {
                        headers: {'Content-Type': 'multipart/form-data'}
                    })
                    this.pictureUrl=res.data.data.path
                    Toast('上传成功')
                } catch (e) {
                    Toast('上传失败')
                }
                picinput.value = ''
            }
        },
        mounted() {
            //组建一进入就好u会调用这个方法
            document.title = '登录'
        }
    }
</script>

<style scoped lang="stylus">

	.login

		.logo
			width 7.5rem
			height 1.84rem
			display block
			margin 0 auto
			padding 0.6rem 0

		.background
			background linear-gradient(to right, #0162ab, #73b7ed)
			border-radius 0.1rem
			width 7rem
			margin 0 auto
			padding 0.4rem 0.3rem
			box-sizing border-box

			.submit
				width 6.4rem
				height 0.9rem
				text-align center
				line-height 0.9rem
				background-color #fff
				border-radius 0.1rem
				font-size 0.36rem
				color #247cbf
				margin-top 1rem

			.head
				overflow hidden
				margin-bottom 0.2rem

				img
					width 1.5rem
					height 1.96rem
					display block
					float left

				.head-input
					.section
						float right
						display flex
						align-items center

						label
							font-size 0.36rem
							color #fff
							line-height 0.4rem

						input
							width 3.3rem
							background-color transparent
							border-width 0 0 1px 0
							outline none
							border-style solid
							border-color #fff
							margin-left 0.65rem
							line-height 0.4rem
							color #fff
							font-size 0.32rem

					.section:first-child
						padding 0.5rem 0 0.4rem 0

			.apply-info
				display flex
				align-items center
				justify-content space-between
				width 6.4rem
				height 0.8rem
				margin-bottom 0.2rem

				.apply-title
					font-size 0.32rem
					line-height 0.4rem
					color #fff

				.apply-input
					width 4.7rem
					background-color transparent
					border-width 0 0 1px 0
					outlintype none
					border-style solid
					border-color #fff
					line-height 0.4rem
					color #fff
					font-size 0.32rem

				.apply-type
					display flex
					align-items center
					justify-content space-around
					width 4.8rem


					.login-type
						width 1.4rem
						height 0.6rem
						line-height 0.6rem
						background-color #aed3f0
						font-size 0.32rem
						color #0f345c
						border-radius 0.1rem
						text-align center

						&.on
							background-color #fff


</style>