<!-- dynamic建造动态 -->
<template>
 <div class='container-dynamic'>
 <div class='wrapper'>
   {{data}}
 </div>
 </div>
</template>

<script type='textecmascript-6'>
export default {
 data() {
   return {
 data: 'dynamic建造动态'
   }
 },

}

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-dynamic
  width 100%
  height 100%
</style>