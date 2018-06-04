<template>
    <div class="wrap">
      {{  $route.query.songId }}
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style lang="less" scoped>
    body,html{
        position: absolute;
        left: 0;
        top: 0;   
        z-index: 22;     
        background-color: #666666;
    }
</style>
