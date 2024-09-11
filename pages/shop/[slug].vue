<template>
    <main>
        <!-- Breadcrumb area start  -->
        <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
            <div class="breadcrumb__background"
            v-background
                data-background="https://123mainmexico.com/images/Mexican-Food-01-123-Main-Mexico.png"></div>
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-12">
                        <div class="breadcrumb__content text-center">
                            <h2 class="breadcrumb__title color-white title-animation">
                                {{ product?.name }}
                            </h2>

                            <div class="breadcrumb__menu">
                                <nav>
                                    <ul>
                                        <li><span>
                                                <nuxt-link to="/">Home

                                                </nuxt-link></span></li>
                                        <li class="active"><span>
                                                {{ product?.name }}
                                            </span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <span class="breadcrumb__big-title">Shop Details</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb area start  -->

        <!--shop-details-->
        <section class="shop-details mb-45 section-space__top">
            <div class="container">
                <div class="row g-24 align-items-center">
                    <div class="col-lg-6">
                        <div class="shop-details__thumb">
                            <img class="img-fluid"
                                :src="product?.images[0]?.src || 'https://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'"
                                alt="not found">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="shop-details__info">
                            <div class="shop-details__inner">
                                <h3 class="title mb-20" style="font-size: 24px;">
                                    {{ product?.name }}
                                </h3>
                                <div class="shop-details__rating mb-10">
                                    <ul class="shop-details__rating-list">
                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                        <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                    </ul>
                                </div>
                                <h6 class="price">
                                    <span class="old-price">$ {{ product?.price }}</span>
                                </h6>
                                <p class="desc" v-html="product?.description"></p>
                                <div class="shop-details__btn-wrap">
                                    <div class="shop-details__quantity-group">
                                        <input type="number" class="input-text qty text" name="quantity"
                                            v-model="quantity" min="1" max="100" step="1" autocomplete="off">
                                        <div class="shop-details__quantity-control">
                                            
                                            <span class="plus" @click="updateQuantity('plus')">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M8 15h8l-4-7"/></svg>
                                            </span>
                                            <span class="minus"
                                            @click="updateQuantity('minus')"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M8 9h8l-4 7"/></svg>
                                            </span>
                                        </div>
                                    </div>

                                    <button class="rr-btn-solid">
                                        <span @click="addToCart(product)" class="btn-wrap">
                                            <span class="text-one">Add To Cart</span>
                                            <span class="text-two">Add To Cart</span>
                                        </span>
                                    </button>

                                    <button class="rr-btn-solid" v-if="productAdded">
                                        <router-link to="/shop/cart">
                                            <span class="btn-wrap">
                                                <span class="text-one">View Cart</span>
                                                <span class="text-two">View Cart</span>
                                            </span>
                                        </router-link>
                                    </button>                                    
                                </div>
                                <!-- <ul class="shop-details__list">
                                    <li>SKU:17</li>
                                    <li>Categories: <a href="blog-details.html">Light Bulb</a>, <a
                                            href="blog-details.html">Table</a></li>
                                    <li>Tags: <a href="blog-details.html">Iluminate</a>, <a
                                            href="blog-details.html">Textured</a></li>
                                </ul> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--shop-details-->

        <!--shop-description-->

        <!--shop-description-->
    </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/productsStore'

const product = ref(null)
const quantity = ref(1)
const route = useRoute();
const productsStore = useProductsStore();
const productAdded = ref(false);
const fetchProduct = async () => {
  const slug = route.params.slug
  product.value = await productsStore.getProductBySlug(slug)
  if (!product.value) {
    await productsStore.fetchProducts()
    product.value = await productsStore.getProductBySlug(slug)
  }
}
const updateQuantity = (type) => {
  if (type === 'plus') {
    quantity.value++
  } else if (type === 'minus' && quantity.value > 1) {
    quantity.value--
  }
}
const addToCart = (product) => {
    window.open("https://www.clover.com/online-ordering/123-main-mexico-pineville")
    // productAdded.value = true;
//   productsStore.addToCart({ ...product, quantity: quantity.value })
}

onMounted(() => {
  fetchProduct()
})

watch(() => route.params.slug, async (newSlug, oldSlug) => {
  if (newSlug !== oldSlug) {
    product.value = null
    await fetchProduct()
  }
})
</script>
