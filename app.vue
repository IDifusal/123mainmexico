<template>
  <div>
    <Header />
    <NuxtPage />
    <section class="cta-2" v-background data-background="http://api.123mainmexico.com/wp-content/uploads/2024/08/DSC06413-1-2.jpg">
      <div class="container">
        <div class="row g-24">
          <div class="col-12">
            <div class="cta-2__content">
              <div class="cta-2__content-text">
                <span class="text-uppercase">Stay connected with us for the latest updates</span>
                <h3 class="text-uppercase title-animation">
                  Keep up with our latest news and events</h3>
              </div>
              <div class="footer-2__subscribe d-flex mt-30 mt-xs-25">
                                    <input type="text" placeholder="Email Address">
                                    <button type="submit" class="footer-2__subscribe-btn"><img src="https://html.rrdevs.net/delish/assets/imgs/icon/plane.svg" alt="not found"></button>
                                </div>
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