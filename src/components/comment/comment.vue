<template>
    <div class="comment">
        <div class="comment-block">
            <div class="comment-title">
                <span class="c-1">评论</span>
                <span class="c-2">共条{{commentCount}}评论</span>
            </div>
            <div class="comment-main">
                <div class="cm-1">
                    <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt="" width="50px" height="50px;">
                </div>
                 <div class="cm-2">
                     <textarea name="comment-area" cols="78" rows="5" placeholder="评论"></textarea>
                     <div class="square"></div>
                 </div>
                 <div class="cm-3">
                    <i class="face"></i>
                    <i class="aite"></i>
                    <span class="com-btn">评论</span>
                    <span class="com-num">140</span>
                </div>
            </div>
            <div class="comment-list" v-if="commentList.hotComments[0]">
                <div class="list-title">
                    <span>精彩评论</span>
                </div>
                <div class="list-content">
                    <dl>
                        <dd v-for="item in commentList.hotComments" :key="item.userId">
                            <span class="user-icon"><img :src="item.user.avatarUrl" alt="" width="50px" height="50px"></span>
                            <p class="comm-content"> 
                                <i class="comm-username">{{item.user.nickname}}</i>:
                                 {{filterN(item.content)}}
                                <span class="comm-handle">
                                    <span class="handle-time">{{toStandard(item.time)}}</span>
                                    <span class="handle-like">
                                        <i @mouseover= 'likeOver' @mouseout= 'likeOut'></i>
                                        <span :class="underL">({{item.likedCount}})</span>
                                    </span>
                                    <span class="comm-line">|</span>
                                    <span class="comm-reply">回复</span>
                                 </span>    
                            </p>     
                         </dd>
                    </dl>
                </div>
            </div>
            <div class="comment-list comment-new">
                <div class="list-title">
                    <span>最新评论({{commentList.total}})</span>
                </div>
                <div class="list-content">
                    <dl>
                        <dd v-for="item in commentList.comments" :key="item.userId">
                            <span class="user-icon">
                                <img :src="item.user.avatarUrl" alt="" width="50px" height="50px">
                            </span>
                            <p class="comm-content"> 
                                <i class="comm-username">{{item.user.nickname}}</i>:
                                 {{filterN(item.content)}}
                                <span class="comm-handle">
                                    <span class="handle-time">{{toStandard(item.time)}}</span>
                                    <span class="handle-like">
                                        <i @mouseover= 'likeOver' @mouseout= 'likeOut'></i>
                                        <span :class="underL">({{item.likedCount}})</span>
                                    </span>
                                    <span class="comm-line">|</span>
                                    <span class="comm-reply">回复</span>
                                 </span>    
                            </p>     
                         </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['songListId', 'commentCount'],
    data() {
        return {
           commentList: {},
           underL: ''
        }
    },
    created() {
     let that = this
     this.$http('http://120.79.162.149:3000/comment/playlist?id=' + this.songListId)
        .then(function(result) {
           if (result.data.code === 200) {
                 that.commentList = result.data
            } else {
                return false
            }  
        }).catch(function (error) {
            console.log(error)            
        })
    },
    methods: {
        toStandard(ms) {
            let s = ms / 1000
            let m = s / 60
            let h = m / 60
            let eh = Math.floor(h % 24) + 8
            let em = Math.floor(m % 60)
            if (eh < 10) {
                eh = '0' + eh
            }
            if (em < 10) {
                em = '0' + em
            } 
            return eh + ':' + em
        },
        likeOver() {
            this.underL = 'addLine'
        },
        likeOut() {
             this.underL = ''
        },
        filterN(text) {
           // const arr = []
            // for (let i = 0; i < text.length; i++) {
            //     arr.push(text[i])
            // }
           let t2 = text.replace('/n', '<br>')
          return t2
        }
    }
}
</script>
<style lang="less">
   .addLine{text-decoration: underline} 
   .comment{
        .comment-block{
            margin-top: 40px;
            .comment-title{
                height: 30px;
                border-bottom: 2px solid #c20c0c;
                span{float: left;}
                .c-1{
                    font-size: 18px;
                }
                .c-2{
                    font-size: 12px;
                    line-height: 30px;
                    margin-left: 20px;
                }
            }
            .comment-main{
                .cm-1{
                    width: 54px;
                    float: left;
                }
                .cm-2{
                    height: 94px;
                    margin-top: 24px;
                    position: relative;
                    textarea{
                        float: right;
                        resize: none;
                    }
                    .square{
                           position: absolute;
                           left: 67px;
                           top: 20px;
                           width: 8px;
                           height: 8px;
                           border-left: 1px solid #999999;
                           border-top: 1px solid #999999;
                           background-color: #ffffff;
                           transform: rotate(-45deg);
                    }
                }
                .cm-3{
                    width: 570px;
                    height: 30px;
                    float: right;
                    i{
                        float: left;
                        height: 18px;
                        width: 18px;
                        margin: 2px 6px 0 0;
                        background: url('../../assets/img/icon.png') no-repeat;
                    }
                    .face{background-position: -40px -490px;}
                    .aite{background-position: -60px -490px;}      
                    }
                    span{
                        float: right;
                        width: 46px;
                        height: 25px;
                        line-height: 25px;
                        }
                    .com-num{
                        font-size: 13px;
                        color: #888888;
                    }
                    .com-btn{
                         background: url('../../assets/img/button.png') no-repeat;
                         background-position: -84px -65px;
                         color: #ffffff;
                         font-size: 13px;
                    }
                    .com-btn:hover{
                         background-position: -84px -95px;
                    }
            }
            .comment-list{
              margin-top: 50px;
              .list-title{
                  height: 20px;
                  span{
                      float: left;
                      font-size: 13px;
                      font-weight: bold;
                      }
                      border-bottom: 1px solid #999999;    
              }
              .list-content{
                  dl{
                      dd{
                        margin: 0;
                        border-bottom: 1px dashed #d9d9d9;
                        span{display:inline-block;}
                        .user-icon{
                            float: left;
                            margin-right: 12px;
                        }
                        .comm-content{
                            font-size: 12px;
                            text-align: left;
                            padding-left: 50px;
                            .comm-username{
                                color: #0c73c2;
                                font-size: 14px;
                                font-style: normal;
                            }
                            .comm-username{
                                width: 60px;
                                height: 16px;
                            }
                            .comm-handle{
                                margin-top: 14px;
                                width: 570px;
                                height: 16px;
                                .handle-time{
                                    width: 40px;
                                    padding-left: 0px;
                                    font-size: 13px;
                                    color: #999999;
                                }
                                .handle-like{
                                    i{
                                        display: inline-block;
                                        width: 15px;
                                        height: 14px;
                                        background: url('../../assets/img/icon2.png') no-repeat;
                                        background-position: -150px 0;
                                        vertical-align: top;
                                        margin-left: 420px;
                                    }
                                    i:hover{ 
                                         background-position: -150px -20px;
                                         }
                                    span{
                                        font-size: 13px;
                                    }
                                    span:hover{
                                        text-decoration: underline;
                                    }
                                }
                                .comm-line{margin:0 8px;}
                                .comm-reply:hover{text-decoration: underline;}
                            }
                        }
                      }
                  }
              }
            }
        }
    }
</style>
