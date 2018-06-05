<template>
    <div class="wrap">
        <div class="hR-topbar">
            <span class="hR-title">热门推荐</span>
            <span>华语</span>
            <span>流行</span>
            <span>摇滚</span>
            <span>民谣</span>
            <span>电子</span>
            <span class="more">更多</span>
        </div>
        <div class="hR-content">
            <ul>
                <li v-for="(item,index) in hotRecom" :key="item.id" @click="gotoDetail">
                    <span v-if="index < 8">
                       <router-link :to="{path: '/listDetail', query: {songId: item.id}}">
                            <img :src="item.picUrl"  :title="item.name">
                       </router-link>
                        <span class="play-count">
                            {{ countSwitch(item.playCount) }} 
                            <span v-if="ifGreater(item.playCount)">万</span> 
                        </span>
                    </span>
                    <span v-if="index < 8">
                        <p>{{item.name}}</p>
                    </span>
                </li>        
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
       return {
          hotRecom: []
       }
    },
    components: {
    },
    created() {
        let that = this
        this.$http('http://120.79.162.149:3000/personalized')
        .then(function(data) {
            console.log(data)
            that.hotRecom = data.data.result
        }).catch(function(err) {
            console.log(err)
        })
    },
    methods: {
        countSwitch(count) {
           let num = Math.floor(count)
           if (num < 10000) {
               return num 
           } else {
               let tenThou = num.toString()
               return tenThou.slice(0, tenThou.length - 4)
           }     
        },
        ifGreater(count) {
            if (count > 10000) {
                return true
            } else {
                return false
            }
        },
        gotoDetail() {
            // alert(1)
           // this.$router.push({name: 'songlistDetail', params: {a: 1, b: 2}})
        }
    }
}
</script>
<style lang="less">
    .wrap{
        width: 730px;
        min-width: 730px;
        height: 523px;
        overflow: hidden;
        padding: 10px;
        // background-color: red;
        .hR-topbar{
            float: left;
            margin-left: 20px;
            .hR-title{
              font-size: 22px;
            }
            .more{
               
            }
        }
        .hR-content{
            float: left;
            ul{
              height: 450px;
              padding: 0;
                li{
                    float: left;
                    width: 25%;
                    height: 220px;
                    position: relative;      
                    span{
                        font-size: 16px;
                        img{
                            width: 140px;
                            height: 140px;
                            border: 1px solid #cccccc;
                        }
                        .play-count{
                            width: 140px;
                            height: 27px;
                            background-color: rgba(38, 38, 38, 0.6);
                            position: absolute;
                            left: 21px;
                            bottom: 78px;
                            color: #ffffff;
                            line-height:27px;
                            font-size: 14px;
                        }
                        .img-goto{
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
