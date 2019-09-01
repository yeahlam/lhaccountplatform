<template>
	<div class="house">
		<div class="house-list" v-for="(item,index) in listData" :key="index">
			<img :src="IMGURL+item.pictureUrl">
			<div class="house-detail">
				<div class="house-tag">{{item.address}}·{{item.houseType}}</div>
				<div class="house-tag red">{{item.price}}/月</div>
				<div class="house-tag">40m²·{{item.direction}}</div>

			</div>

		</div>

	</div>
</template>

<script>
	import * as api from '../api'
	import {IMGURL} from "../config";

	export default {
		name: "house",
		data() {
			return {
				IMGURL,
				listData: {},
			}
		},
		computed: {
		},
		methods: {
			async getHouseList() {
				let res = await api.houseList()
				this.listData = res.data.data
				console.log(res.data);
			},
		},
		async mounted() {
			//组建一进入就好u会调用这个方法
			document.title = '待租房源'
			await this.getHouseList()
		}
	}
</script>

<style scoped lang="stylus">
	.house
		.house-list
			margin 0.2rem
			display  flex
			justify-content space-between
			align-items center
			border-bottom 1px solid #ddd
			padding-bottom 0.3rem
			img
				width 2.6rem
				height 2rem
				display block
				background-color #fff
			.house-detail
				width calc(100% - 2.6rem)
				.house-tag
					width 100%
					text-align left
					box-sizing border-box
					padding-left 0.2rem
					color #595959
					overflow hidden
					line-height 0.5rem
					font-size 0.32rem
					&.red
						color red









</style>