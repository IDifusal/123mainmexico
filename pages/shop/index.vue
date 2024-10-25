<template>
    <!-- Body main wrapper start -->
    <main>
        <!-- Breadcrumb area start  -->
        <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
            <div class="breadcrumb__background" v-background
                data-background="https://123.espanglishmarketing.com/wp-content/uploads/2024/08/DSC06581-1.jpg"></div>
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-12">
                        <div class="breadcrumb__content text-center">
                            <h2 class="breadcrumb__title color-white title-animation">Shop Page</h2>
                            <div class="breadcrumb__menu">
                                <nav>
                                    <ul>
                                        <li><span><nuxt-link to="/">Home</nuxt-link></span></li>
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
                    <div class="col-sm-12 col-lg-3">
                        <h3 class="display-2" style="font-weight: 500;">Categories </h3>
                        <ul class="list-two-columns-mobile">
                            <li>
                                <nuxt-link :to="{ path: '/shop/', query: { category: 'all' } }">
                                    All Products
                                </nuxt-link>
                            </li>
                            <li v-for="category in categories">
                                <nuxt-link :to="{ path: `/shop/`, query: { category: category.slug } }"
                                    class="food-menu__item-media">
                                    {{ category.name }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-lg-9 flex row">
                        <div>
                            
                            <h2 v-if="categoryFiltered !== '' " class="text-capitalize">
                                Category: {{categoryFiltered  }}
                            </h2>
                        </div>
                        <div v-for="product in filteredProducts" class=" col-md-4 col-sm-6">
                            <div class="food-menu-tab__item mb-24">
                                <nuxt-link :to="`/shop/${product.slug}`" class="food-menu-tab__item-media">
                                    <img :src="product.images[0] ? product.images[0].src : 'http://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'"
                                        class="img-fluid img-shop" :alt="product.name">
                                </nuxt-link>
                                <div class="food-menu-tab__item-text">
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
            </div>
        </section>
        <!-- shop area start -->

    </main>
    <!-- Body main wrapper end -->

    <!-- cta area start -->

    <!-- cta area start -->
</template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const productsStore = useProductsStore();
const { products, loading, categories } = storeToRefs(productsStore);
const route = useRoute();
const filteredProducts = ref([]);
const categoryFiltered = ref('');
const filterProducts = () => {
    const category = route.query.category;

    if (category) {
        const categoryDecoded = decodeURIComponent(category).toLowerCase();

        if (categoryDecoded === 'all') {
            filteredProducts.value = products.value;
            categoryFiltered.value = '';
            return;
        }

        categoryFiltered.value = categoryDecoded;
        filteredProducts.value = products.value.filter(product => {
            const matches = product.categories.some(cat => {
                const catNameNormalized = cat.name.toLowerCase().replace(/\s+/g, '-'); 
                return catNameNormalized === categoryDecoded;
            });
            return matches;
        });
    } else {
        filteredProducts.value = products.value;
    }
};

onMounted(() => {
    // productsStore.fetchProducts();
    filterProducts();
});

watch(
    () => route.query.category,
    () => {
        filterProducts();
    }
);

watch(
    () => products.value,
    () => {
        filterProducts();
    }
);
</script>

<style>
@media (min-width: 768px) {
    .img-shop {
    height: 315px !important;
    width: 315px !important;
    object-fit: cover;
}
}
.img-shop {
    height: 200px !important;
    width: 100% !important;
    object-fit: cover;
}
</style>