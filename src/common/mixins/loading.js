
export default {
  methods: {
    // 有赞加载  调用：this.load() //调用加载中蒙层  this.$toast.clear() //关闭加载中蒙层 
    load() {
      this.$toast.loading({
        duration: 12000, // 0为持续展示，设置时间则限时
        forbidClick: true, // 禁用背景点击
        mask: true,
        loadingType: 'spinner',
        message: '加载中...'
      });
    },
    //等待中
    Waiting() {
      this.$toast.loading({
        duration: 12000, // 0为持续展示，设置时间则限时
        forbidClick: true, // 禁用背景点击
        mask: true,
        loadingType: 'spinner',
        message: '等待中...'
      });
    },
    //模型加载中
    modelLoading() {
      this.$toast.loading({
        duration: 12000, // 0为持续展示，设置时间则限时
        forbidClick: true, // 禁用背景点击
        mask: true,
        loadingType: 'spinner',
        message: '加载模型...'
      });
    },
  }
}
