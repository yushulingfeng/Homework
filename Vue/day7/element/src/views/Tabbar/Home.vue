<template name="component-name">
  <div>
    <van-cell :title="title" icon="location-o" />
    <!-- 搜索框 -->
    <van-search placeholder="搜索饿了么商家、商品名称" shape="square" background="#0085ff" v-model="value" />
    <!-- 轮播+宫格布局 -->
    <router-link to="/Details">
      <van-swipe indicator-color="rgb(254, 113, 0,.2)">
        <van-swipe-item>
          <van-grid>
            <van-grid-item
              v-for="(item,index) in entriesCompute"
              @click="To(index,item.name)"
              :key="index"
              :icon="item.image_hash"
              :text="item.name"
            />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid>
            <van-grid-item
              v-for="(item,index) in entriesCompute2"
              :key="index"
              :icon="item.image_hash"
              :text="item.name"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
    </router-link>
    <!-- 分割线 -->
    <div class="partitionLine">
      <van-divider
        :style="{ color: '#000', borderColor: '#000', padding: '0 16px',width:'135px',position: 'absolute',left: '50%',transform: 'translateX(-50%)',fontSize:'16px',fontWeight:'700'}"
      >推荐商家</van-divider>
    </div>
    <!-- 排序筛选 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1|newOptions" title="综合排序" />
      <van-dropdown-item v-model="value2" :options="option2" title="距离最近" />
      <van-dropdown-item v-model="value3" :options="option3" title="品质联盟" />
      <van-dropdown-item v-model="value4" :options="option4|newOptions4" title="筛选" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "广州市人民政府",
      value: "",
      entries: [],
      value1: 0,
      value2: "a",
      value3: "",
      value4: "",
      option1: [],
      option2: "",
      option3: "",
      option4: []
    };
  },
  methods: {
    onSearch() {},
    To(id) {
      this.$rotuer({
        name:'details',
        params:{id,name:'text'}
      });
    }
  },
  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d4003874dd8bf2c109edfe5/list/entries"
    );
    this.entries = data.data.entries;

    let data2 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402d2699acfe0359e01892/entries/filter"
    );
    this.option1 = data2.data.outside.inside_sort_filter;
    this.option4 = data2.data.bar.activity_types;
  },
  computed: {
    entriesCompute() {
      return this.entries.slice(0, 8);
    },
    entriesCompute2() {
      return this.entries.slice(8, 14);
    }
  },
  filters: {
    newOptions(option2) {
      let NewOptions = [];
      option2.forEach(element => {
        element.text = element.name;
        NewOptions.push(element);
      });
      return NewOptions;
    },
    newOptions4(option4) {
      let NewOptions = [];
      option4.forEach(element => {
        element.text = element.name;
        NewOptions.push(element);
      });
      return NewOptions;
    }
  }
};
</script>

<style scoped>
.van-cell {
  background: #0085ff;
}
.van-cell:not(:last-child)::after {
  border-bottom: 0;
}
.van-cell__title,
.van-icon {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
.van-field {
  background: #fff;
}
.partitionLine {
  position: relative;
  width: 100%;
  height: 55px;
  text-align: center;
}
</style>


