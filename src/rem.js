(function () {
    function resi() {
        var width = document.documentElement.clientWidth / 7.5;
        let html = document.getElementsByTagName('html')[0]
        html.style.fontSize = width + 'px'
    }
    resi()
    window.addEventListener('resize', resi)
})();