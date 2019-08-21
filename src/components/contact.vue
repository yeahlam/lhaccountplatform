<template>
    <div class="contact">
        <div class="contact-search">
            <input class="searchInput"  v-model="searchContent" />
            <img class="searchIcon" src="../assets/report-search.png" @click="search">
        </div>
        <div v-for="(item,key1) in contactList" :key="key1">
            <div class="list-row-first" @click="showList(key1)" v-if="item.length>0" >
                <div class="list-title-first">{{mapping[key1]}}</div>
                <img class="list-icon-first" src="../assets/arrow.png">
            </div>
            <ul class="list"  v-if="nowkey==key1">
                <li class="list-row" v-for="(item2,index) in  item" :key="index" @click="gotoDetail(item2)">
                    <div class="list-title">{{item2.name}}</div>
                    <img class="list-count-icon" src="../assets/arrow.png">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import * as api from '../api'
    import axios from 'axios'

    export default {
        name: "contact",
        components: {

        },
        data() {
            return {
                contactList: {},
                searchContent:'',
                mapping:{
                    admin:'管理员',
                    gridmember:'网格员',
                    buildingmanager:'楼长'
                },
                nowkey:''
            }
        },

        computed: {

        },
        methods: {

            async getContact(info) {
                let res = await api.getContactList(info)
                console.log(res.data.data.admin);
                this.contactList = res.data.data

            },
            search(){
                this.nowkey=''
                console.log(this.searchContent)
                this.getContact(this.searchContent)
            },
            showList(index){
                console.log(index)
                if (this.nowkey == index) {
                    this.nowkey = ''
                }else{
                    this.nowkey = index

                }
            },
            gotoDetail(item) {
                this.$router.push({
                    name: 'userinfo',
                    query: {
                        id: item.id
                    }
                })
                console.log(item);
            }
        },
        mounted() {
        	document.title = '通讯录'
            this.getContact(this.searchContent)

        }
    }
</script>

<style lang="stylus">
    img
        width 100%
        height: 100%

   .contact
        .contact-search
            margin 0.2rem
            border 1px solid #0f345c
            .searchInput
                width calc(100% - 0.9rem)
                height 0.9rem
                line-height 0.9rem
                border 0
                box-sizing border-box
                padding-left 0.2rem
            .searchIcon
                display block
                float right
                height 0.9rem
                line-height 0.9rem
                width 0.5rem
                border 0
                font-size 0.2rem
                padding 0 0.2rem
       .list-row-first
           height .86rem
           line-height .86rem
           border-radius 0.1rem
           box-sizing border-box
           margin 0 0.3rem 0 0.3rem
           color #333
           padding 0 0.2rem
           background-color #f2f2f2
           font-size 0.3rem
           display flex
           align-items center
           justify-content space-between
           margin-bottom 0.3rem
           .list-title-first
               font-size 0.3rem
               color #333
           .list-icon-first
               height 0.3rem
               width 0.18rem
               transform rotate(90deg)
       .list
            .list-row
                height .86rem
                line-height .86rem
                border-bottom 1px solid #e0e0e0
                box-sizing border-box
                padding 0 0.2rem 0 0.2rem
                margin 0 0.3rem
                color #333
                background-color #fff
                display flex
                align-items center
                justify-content space-between
                .list-title
                    font-size 0.3em
                    height 0.86rem
                    line-height 0.86rem
                    width 60%
                    color #6d6d6d
                .list-count-icon
                    height 0.3rem
                    width 0.18rem
                    display block

</style>