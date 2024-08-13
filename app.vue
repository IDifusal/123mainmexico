<template>
  <div>
    <Header />
    <NuxtPage />
    <section class="cta-2" v-background data-background="https://html.rrdevs.net/delish/assets/imgs/cta-2/cta.jpg">
      <div class="container">
        <div class="row g-24">
          <div class="col-12">
            <div class="cta-2__content">
              <div class="cta-2__content-text">
                <span class="text-uppercase">Book A Table For Your and Family Members</span>
                <h3 class="text-uppercase title-animation">
                  Need A Table On Coffee House</h3>
              </div>
              <nuxt-link class="btn-book" to="/reservation">Book A Table</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
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