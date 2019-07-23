export default function loadBMap(ak) {
	return new Promise(function(resolve, reject) {
		if (typeof window.qq !== 'undefined') {
			resolve(window.qq)
			return true
		}
		window.onBMapCallback = function() {
			resolve(window.qq)
		}
		let script = document.createElement('script')
		script.type = 'text/javascript'
		script.src =
			'https://map.qq.com/api/js?v=2.exp&key=' + ak + '&callback=onBMapCallback'
		script.onerror = reject
		document.head.appendChild(script)
	})
}




