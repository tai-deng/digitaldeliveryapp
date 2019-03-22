<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "/assets/stylus/variable"
  #app
    background: $color-default-background
</style>

<style>
html,body,#app,#app>div,.is-vertical{
  height: 100%;
}
.van-nav-bar__text{
  font-size: 24px
}
</style>