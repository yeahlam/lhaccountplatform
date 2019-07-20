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
		<div>
			<button>
				<router-link class="button" to="/applyList">申请通知</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/userinfo">个人资料</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/message">通知</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/problemclass">问题分类</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/infodetail">问题详情</router-link>
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