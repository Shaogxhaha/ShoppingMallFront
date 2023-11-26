<script setup lang="ts">
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore();
//在页面初始化得到category 使用pinia进行状态管理 将两次请求变成一次请求
onMounted(() => {
  categoryStore.getCategory()
})

</script>
<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>