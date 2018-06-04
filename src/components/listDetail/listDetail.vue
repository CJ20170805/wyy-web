<template>
    <div id="listDetail">
        <p>list-detail: </p>
        <dl v-for="item in songList.tracks" :key="item.id">
            <dd>
                {{ item.name }}
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
           songId: '',
           songList: {}
        }
    },
    created() {
        let that = this
        this.songId = this.$route.query.songId
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
    }
}
</script>
<style lang="less">
</style>
