<template>
<div class="header">

<el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">
        <a href="#">
        <img class="logo" src="@/assets/geekhall_logo_128.png" alt="" />
    </a>
    </el-menu-item>
    <!-- <el-sub-menu index="2">
      <template #title>Blog</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="2">博客</el-menu-item>
    <el-menu-item index="3">教程</el-menu-item>
    <el-menu-item index="4">登录</el-menu-item>
    <el-menu-item index="5">注册</el-menu-item>
  </el-menu>
</div>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex2,
      handleSelect,
    }
  },
})
</script>

<style scoped>
.logo{
    height: 80px;
}
</style>