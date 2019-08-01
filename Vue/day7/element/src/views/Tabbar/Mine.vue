<template>
  <div>
    <div>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
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
      active: 2
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

