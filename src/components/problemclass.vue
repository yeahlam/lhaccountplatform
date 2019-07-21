<template>
	<div class="class">
		<div class="left">
			<div class="title">问题类型</div>

		</div>
		<div class="right">
			<div class="content" @click="select(item)" v-for="(item,index) in list" :key="index">{{item.name}}</div>
		</div>


	</div>
</template>

<script>
    import * as api from '../api'

    export default {
        name: "problemclass",
        data() {
            return {
                list: []
            }
        },
        methods: {
            select(item) {
                this.$emit('select', item)
            }
        },
        async mounted() {
            let res = await api.getQuestionType()
            this.list = res.data.data

        }
    }
</script>

<style scoped lang="stylus">
	.class
		.left
			width 1.8rem
			min-height 100vh
			background-color #f2f2f2
			float left

			.title
				width 1.8rem
				border-right 1px solid #e3e3e3
				box-sizing border-box
				height 0.7rem
				line-height 0.7rem
				color #666
				font-size 0.26rem
				padding-left 0.3rem
				overflow hidden

				&.on
					background-color #fff
					color #3a5e99
					border-right 0
					border-top 1px solid #e3e3e3
					border-bottom 1px solid #e3e3e3

		.right
			width calc(100% - 1.9rem)
			background-color #fff
			float right

			.content
				width 100%
				overflow hidden
				box-sizing border-box
				height 0.7rem
				line-height 0.7rem
				color #666
				font-size 0.26rem
				padding-left 0.3rem


</style>