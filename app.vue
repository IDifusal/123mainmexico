<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useBlogStore } from '@/stores/blogStore';
import { useProductsStore } from '@/stores/productsStore';
const blogStore = useBlogStore();
const productsStore = useProductsStore();
onMounted(() => {
  blogStore.fetchPosts();
  productsStore.fetchProducts();
});
</script>