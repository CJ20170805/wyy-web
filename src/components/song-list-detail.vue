<template>
    <div class="wrap">
      {{  $route.params.songListId }}
    </div>
</template>
<script>
export default {
    data() {
        return {
           listDetail: {}
        }
    },
    created() {
    //    let that = this
    //    this.$http('http://120.79.162.149:3000/playlist/detail?id=24381616')
    //    .then(function(data) {
    //       that.listDetail = data.data.result
    //    }).catch(function(err) {
    //       console.log(err)
    //   })     
    },
    methods: {
    }  
}
</script>
<style lang="less">

</style>
