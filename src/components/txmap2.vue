<template>
	<div id="container">
		<iframe id="mapPage" width="100%" height="100%" frameborder=0
				src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=GTHBZ-VW232-HLCU7-CB3DC-GM4WT-O2B7E&referer=myapp">
		</iframe>
	</div>
</template>

<script>


export default {
	name: "txmap",
	data() {
		return {}
	},
	methods: {},
	async mounted() {
		let that = this
		window.addEventListener('message', function(event) {
			// 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
			var loc = event.data;
			if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
				console.log('location', loc);
				that.$emit('selectMap',loc)
			}
		}, false);
	}
}
</script>

<style scoped lang="stylus">

#container
	position: absolute
	left: 0
	top: 0
	right: 0
	bottom: 0rem
</style>
