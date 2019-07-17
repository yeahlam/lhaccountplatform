<template>
	<div>
		<span>首页,点击按钮调转到相关页面</span>
		<div>
			<button>
				<router-link class="button" to="/report">report</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/search">search</router-link>
			</button>
		</div>
		<div>
			<button>
				<router-link class="button" to="/news">news</router-link>
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