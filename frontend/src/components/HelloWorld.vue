<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-row>
    <el-button type="primary">Primary</el-button>
  </el-row>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
