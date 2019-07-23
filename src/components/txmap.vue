<template>
	<div id="mapContainer">
		<div id="container"></div>
		<div class="buttonbox">
			<div class="button primary mapbutton" @click="confirm">确定</div>

		</div>
	</div>
</template>

<script>
import loadBMap from '../loadmap'
import {Toast} from 'mint-ui';

export default {
	name: "txmap",
	data() {
		return {
			marker: '',
			JWD: '' //经纬度
		}
	},
	methods: {
		async init() {
			let that = this

			//设置地图中心点
			var myLatlng = new window.qq.maps.LatLng(39.916527, 116.397128);
			//定义工厂模式函数
			var myOptions = {
				zoom: 12,               //设置地图缩放级别
				center: myLatlng,      //设置中心点样式
				mapTypeId: window.qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
			}
			//获取dom元素添加地图信息
			let map = new window.qq.maps.Map(document.getElementById("container"), myOptions);

			let citylocation = new window.qq.maps.CityService({
				complete: function(result) {
					map.setCenter(result.detail.latLng);
				}
			});
			//调用searchLocalCity();方法    根据用户IP查询城市信息。
			citylocation.searchLocalCity();

			window.qq.maps.event.addListener(map, 'click', function(event) {
				var location = new window.qq.maps.LatLng(event.latLng.getLat(), event.latLng.getLng());
				that.JWD = `${event.latLng.getLat()},${event.latLng.getLng()}`
				if (this.marker) {
					this.marker.setMap(null);
				}
				this.marker = new window.qq.maps.Marker({
					position: location,
					map: map
				});

				//alert('您点击的位置为: [' + event.latLng.getLat() + ', ' +
				//	event.latLng.getLng() + ']');
			});
		},
		confirm() {
			if (!this.JWD) {
				Toast('请点击地图选择位置!')
			}else{
				this.$emit('select',this.JWD)
			}
		}

	},
	async mounted() {
		await loadBMap('GXUBZ-OXY6W-FHER4-RGQ4R-G3VM3-E2FM2')
		this.init()
	}
}
</script>

<style scoped lang="stylus">
.buttonbox
	position: absolute
	left: 0
	right: 0
	bottom: 1rem
	display flex
	justify-content center
#container
	position: absolute
	left: 0
	top: 0
	right: 0
	bottom: 2rem
</style>
