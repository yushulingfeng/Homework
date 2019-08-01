<template>
  <div>
    <div>订单页</div>
    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="To('home')">首页</van-tabbar-item>
      <van-tabbar-item icon="search" @click="To('order')">订单</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="To('mine')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
     data() {
    return {
      active: 1
    };
  },
  methods: {
    To(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>
