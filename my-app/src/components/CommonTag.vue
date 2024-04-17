<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      :closable="item.name !== 'home'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList,
    }),
  },
  methods: {
    ...mapMutations(["closeTag"]),
    //点击tag跳转的功能
    changeMenu(item) {
      //路由跳转1 this.$router.push(具体路径)
      //路由跳转2传入一个对象的形式 this.$router.push(对象)
      this.$router.push({ name: item.name });
    },

    //点击tag删除的功能
    handleClose(item, index) {
      //调用vuex中的mutation方法1 this.$store.commit()
      //调用vuex中的mutation方法2 mapMutations
      this.closeTag(item);
      const length = this.tags.length;
      //删除之后的跳转逻辑
      //删除非当前页
      if (item.name !== this.$route.name) {
        return;
      }
      //删除当前页
      //表示删除的是最后一项
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        //删除中间页
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
