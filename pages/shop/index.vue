<template>
<!-- Body main wrapper start -->
<main>
    <!-- Breadcrumb area start  -->
    <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
        <div class="breadcrumb__background" 
        v-background data-background="https://html.rrdevs.net/delish/assets/imgs/breadcrumb/page-header-1.png"></div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content text-center">
                        <h2 class="breadcrumb__title color-white title-animation">Shop Page</h2>

                        <div class="breadcrumb__menu">
                            <nav>
                                <ul>
                                    <li><span><a href="index.html">Home</a></span></li>
                                    <li class="active"><span>Shop Page</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <span class="breadcrumb__big-title">Our Shop Page</span>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->

    <!-- shop area start -->
    <section class="shop section-bg-2 section-space">
        <div class="container">
            <div class="row g-24 mb-minus-24">
                <div v-for="product in products" class="col-xl-3 col-md-4 col-sm-6">
                    <div class="food-menu-tab__item mb-24">
                        <nuxt-link :to="`/shop/${product.slug}`"
                        class="food-menu-tab__item-media">
                            <img :src="product.images[0]? product.images[0].src : 'http://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'" class="img-fluid" :alt="product.name">
                        </nuxt-link>
                        <div class="food-menu-tab__item-text">
                            <ul class="rating">
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                                <li> <i class="fa-solid fa-star"></i></li>
                            </ul>
                            <h6 class="food-menu-tab__item-text-title">
                                <nuxt-link :to="`/shop/${product.slug}`">
                                {{ product.name }}
                                </nuxt-link>
                        </h6>

                            <span class="price">${{ product.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- shop area start -->

</main>
<!-- Body main wrapper end -->

<!-- cta area start -->

<!-- cta area start -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { products, loading } = storeToRefs(productsStore);

onMounted(() => {
  productsStore.fetchProducts();
});
</script>