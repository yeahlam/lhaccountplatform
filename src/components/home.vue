<template>
    <div>
        <div>HOME页面</div>
        <button @click="gotoSearch">去搜索页面</button>
        <div class="testrem">rem测试</div>
    </div>
</template>

<script>

    export default {
        name: "home",
        methods:{
            gotoSearch:function () {
                this.$router.replace('search')
            }
        }
    }
</script>

<style scoped lang="stylus">
.testrem
    width 7.5rem
    background red
    height: 1rem
</style>