<template>
  <div>
    <el-container>
      <el-aside width="auto"> <commonAside /> </el-aside>
      <el-container>
        <el-header><commonHeader /></el-header>
        <commonTag />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import commonAside from "../components/CommonAside.vue";
import commonHeader from "../components/CommonHeader.vue";
import commonTag from "../components/CommonTag.vue";
export default {
  components: {
    commonAside,
    commonHeader,
    commonTag,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
</style>
