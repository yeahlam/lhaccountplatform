<template>
	<div class="collection">
		<div class="newsListBox">
			<div class="newsItem" v-for="(item,index) in newsList" :key="index">
				<div class="left">
					<div class="title">撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势撒娇的离开家看见看架势</div>
					<div class="time">2019-09-09</div>
				</div>
				<div class="right">
					<img src="../assets/timg.jpg" alt="">
				</div>
			</div>

		</div>
	</div>
</template>

<script>
    export default {
        name: "collection",
		data(){
            return{
                newsList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11,]
            }
		},
        mounted() {
            document.title = '收藏'
        }
    }
</script>

<style scoped>

</style>