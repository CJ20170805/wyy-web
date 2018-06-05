<template>
    <div id="listDetail">
        <div class="block-left">
            <div class="list-top">
                <div class="songlist-pic">
                    <img :src="songList.coverImgUrl" width="208px" height="208px">
                </div>
                <div class="songlist-desc">
                    <div class="desc-1">   
                        <i class="songlist-icon"></i>
                        <span>{{songList.name}}</span>
                    </div>
                    <div class="desc-2">
                        <img :src="songList.creator.avatarUrl" width="35px" height="35px">
                        <span class="user-name">{{songList.creator.nickname}}</span>
                        <i class="user-sign"></i>
                        <span class="created-date">{{dateToString(songList.createTime)}}</span>
                        <span class="created-date">创建</span>
                    </div>
                    <div class="desc-3">
                        <span class="play">   
                           播放
                       </span>
                       <span class="add-play">
                       </span>
                        <span class="collect">({{toTenthous(songList.subscribedCount)}})</span>
                        <span class="share">({{songList.shareCount}})</span>
                        <span class="download">下载</span>
                        <span class="comment">({{songList.commentCount}})</span>
                    </div>
                    <div class="desc-4" >
                        <span>标签： </span>
                        <dl class="tags">
                            <dd v-for="item in songList.tags" :key='item'>{{item}}</dd>
                        </dl>
                    </div>
                    <div class="desc-5">
                        <span class="d5-title">
                            介绍： 
                            <span class="d5-content">{{songList.description}}</span>
                        </span>
                    </div>
                </div>
            </div>
            <dl>
                <dd v-for="item in songList.tracks" :key="item.id">
                {{ item.name }}
                </dd>
            </dl>
        </div>
        <div class="block-right">

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           songId: '',
           songList: {},
           listUrl: ''
        }
    },
    created() {
        let that = this
        this.songId = this.$route.query.songId
        this.listUrl = this.$route.query.listUrl
        this.$http('http://120.79.162.149:3000/playlist/detail?id=' + this.songId)
        .then(function(result) {
           if (result.data.code === 200) {
                 that.songList = result.data.result
            } else {
                return false
            }  
        }).catch(function (error) {
            console.log(error)            
        })
    },
    methods: {
        dateToString(ms) {
            let date = new Date(ms)
            let day = date.getDate()
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            return year + '-' + month + '-' + day 
        },
        toTenthous(num) {
            if (num > 10000 || num === 10000) {
                let num2 = num.toString()
                return num2.slice(0, num2.length - 4) + '万'
            } else {
               return num
            }
        }
    }
}
</script>
<style lang="less">
 #listDetail{
     width: 980px;
     margin: 0 auto;
    .block-left{
        float: left;
        width: 710px;
        .list-top{
            width: 710px;
            height: 233px;
            .songlist-pic{
                float: left;
                width: 216px;
                height: 216px;
                padding: 3px;
                border: 1px solid #999999;
                box-sizing: border-box;
                margin-right: 40px;
            }
            .songlist-desc{
                float: left;
                width: 410px;
                height: 233px;
                .songlist-icon{
                    display: block;
                    height: 24px;
                    width: 54px;
                    background: url('../../assets/img/icon.png') no-repeat;
                    background-position: 0 -245px;
                }
                .desc-1{
                    height: 30px;
                    i{
                        float: left;
                        margin-right: 8px;
                    }
                    span{
                        float: left;
                        font-size: 18px;
                    }
                }
                .desc-2{
                    height: 35px;
                    margin-top: 5px;
                    img{float: left}
                    span{
                        float: left;
                        line-height: 35px;
                        }
                    .user-name{
                        font-size:12px;
                        margin:0 3px 0 10px;
                    }
                    .created-date{
                        font-size: 12px;
                        color: #888888;
                    }   
                    .user-sign{
                        float: left;
                        width: 11px;
                        height: 15px;
                        margin-top: 10px;
                        margin-right: 15px;
                        background: url('../../assets/img/icon.png') no-repeat;
                        background-position: 0 0;
                    }
                }
                .desc-3{
                    height: 33px;
                    margin-top: 20px;
                    span{
                        float: left;
                        height: 31px;
                        width: 66px;
                        background: url('../../assets/img/button2.png') no-repeat;
                        line-height: 31px;
                        cursor: pointer;
                        font-size: 14px;
                    }
                    .play{
                    //    background-position: -44px -633px;
                       color: #ffffff;
                       text-indent: 1.3rem;
                       background: url('../../assets/img/button2.png') no-repeat;
                       background-position: -5px -633px;
                       border-radius: 3px 0 0 3px;
                    }
                    .play:hover{
                        background-position: -5px -719px;   
                    }
                    .add-play{
                        width: 31px;
                        height: 31px;
                        background-position: -5px -1588px;
                        border-left: 1px solid #888888;
                    }
                    .add-play:hover{
                        background-position: -45px -1588px;
                    }
                    .collect{
                        width: 75px;
                        height: 31px;
                        background-position: 0px -976px;
                        border-radius: 3px;
                        text-indent: 1.2rem;
                        line-height: 31px;
                        margin-left: 2px;
                    }
                    .collect:hover{
                         background-position: 0px -1062px;
                    }
                    .share{
                        width: 75px;
                        height: 31px;
                        background-position: 0px -1224px;
                        border-radius: 3px;
                        text-indent: 1.2rem;
                        line-height: 31px;
                        margin-left: 6px;
                    }
                     .share:hover{
                        background-position: 0px -1267px;
                     }
                    .download{
                        width: 60px;
                        height: 31px;
                        background-position: 0px -2760px;
                        border-radius: 3px;
                        text-indent: 1.2rem;
                        line-height: 31px;
                        margin-left: 6px;
                    }
                    .download:hover{
                        background-position: 0px -2804px;
                    }
                    .comment{
                        width: 75px;
                        height: 31px;
                        background-position: 0px -1464px;
                        border-radius: 3px;
                        text-indent: 1.4rem;
                        line-height: 30px;
                        margin-left: 6px;
                    }
                    .comment:hover{
                        background-position: 0px -1507px;
                    }
                }
                .desc-4{
                    margin-top: 20px;
                    span{float: left;font-size:14px;}
                    .tags{
                        height: 20px;
                        margin: 0;
                        float: left;
                        dd{
                            display: inline-block;
                            width: 50px;
                            height: 18px;
                            border-radius: 12px;
                            font-size: 12px;
                            color: #888888;
                            background-color: #f4f4f4;
                            border: 1px solid #999999;
                            margin-left: 8px;
                        }
                    }
                }
                .desc-5{
                    float: left;
                    margin-top: 10px;
                    text-align: left;
                    .d5-title{
                        float: left;
                        font-size:14px;
                          .d5-content{
                             font-size:13px;           
                             } 
                        }
                  
                }
            }
        }
    }
    .block-right{
        width: 270px;
        height: 800px;
        float: left;
        background-color: #888888;    
    }
 }
</style>
