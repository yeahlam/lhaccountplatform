<template>
	<div>
		<span>首页,点击按钮调转到相关页面</span>
		<div>
			<button>
				<router-link class="button" to="/report">我要报告</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/search">搜索</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/news">新闻列表</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/video">视频列表</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/userCenter">用户中心</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/collection">收藏</router-link>
			</button>
		</div>
	</div>

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>