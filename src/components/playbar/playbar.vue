<template>
   <div id="playbar">
       <div class="p-main">
            <div class="p-btn">
                <span class="prev"></span>
                <span :class="cutBtnClass ? 'play' : 'pause' " @click="cutBtn"></span>
                <span class="next"></span>
            </div>
            <div class="p-control">
                <img src="http://p1.music.126.net/xM1CV0GvFpxzenqEbD-FkA==/18829136627866677.jpg" alt="">
            </div>
            <div class="p-right">
                <span class="bar-lock">
                    <i :class="lockCut ? 'lock-open' : 'lock-close'" @click="cutLock"></i>
                </span>
            </div>
       </div>
    </div>    
</template>
<script>
export default {
    data() {
        return {
          cutBtnClass: true,
          lockCut: true
        }
    },
    methods: {
       cutBtn() {
           this.cutBtnClass = !this.cutBtnClass
       },
       cutLock() {
           this.lockCut = !this.lockCut
       }
    }
}
</script>
<style lang="less">
   #playbar{
       width: 100%;
       height: 50px;
       background:url('../../assets/img/playbar.png');
       background-position: 0 -4px;
       position: relative;
        .p-main{
            width: 980px;
            height: 47px;
            margin: 0 auto;
            div{
                float: left;
                height: 50px;
            }
            .p-btn{
                width: 200px;
                height: 47px;
                padding-top: 9px;
                box-sizing: border-box;
                span{
                    display: inline-block;
                    background: url('../../assets/img/playbar.png') no-repeat;
                    vertical-align: middle;
                }
                .prev{
                    width: 28px;
                    height: 28px;
                    background-position: 0px -130px;
                }
                .prev:hover{  background-position: -30px -130px;}
                .play{
                    width: 36px;
                    height: 36px;
                    background-position: 0 -205px;
                }
                .play:hover{  background-position: -40px -205px;}
                .pause{
                    width: 36px;
                    height: 36px;
                    background-position: 0 -166px;
                }
                .pause:hover{  background-position: -40px -166px;}
                .next{
                    width: 28px;
                    height: 28px;
                    background-position: -82px -130px;
                }
                .next:hover{  background-position: -112px -130px;}
            }
            .p-control{
                width: 480px;
                img{
                    width: 35px;
                    height: 34px;
                    border-radius: 4px;
                }
            }
            .p-right{
                 width: 200px;
                 color: #ffffff;
                 .bar-lock{
                     display: inline-block;
                     width: 52px;
                     height: 67px;
                     background:url('../../assets/img/playbar.png');
                     background-position: 0 -386px;
                     position: absolute;
                     right: 20px;
                     bottom: -4px;
                    //  z-index: -55;
                     i{
                       display: block;  
                       height: 18px;
                       width: 18px;
                       margin-left: 22px;
                       background:url('../../assets/img/playbar.png') no-repeat;
                     }
                     .lock-open{
                        background-position: -80px -381px;
                           margin-left: 16px;
                      }
                      .lock-open:hover{
                        background-position: -80px -401px;
                           margin-left: 16px;
                      }
                     .lock-close{
                        background-position: -105px -381px;
                      }
                     .lock-close:hover{
                        background-position: -105px -401px;
                      }
                 }
            }
        }

   }
</style>
