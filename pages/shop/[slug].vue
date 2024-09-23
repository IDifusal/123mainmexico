<template>
    <main>
        <!-- Breadcrumb area start  -->
        <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
            <div class="breadcrumb__background" v-background
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
                    <div class="col-lg-6" @mousemove="handleMouseMove" @mouseleave="resetZoom" @click="openLightbox">
                        <div class="shop-details__thumb">
                            <img class="img-fluid"
                                :src="product?.images[0]?.src || 'https://123.espanglishmarketing.com/wp-content/uploads/2024/08/placeholder.png'"
                                :alt="product?.name" @mouseover="zoomIn" @mouseleave="zoomOut" :style="thumbStyle" />
                        </div>

                        <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
                            <button class="close-button" @click.stop="closeLightbox">✖</button>
                            <img :src="product?.images[0]?.src || 'https://123.espanglishmarketing.com/wp-content/uploads/2024/08/placeholder.png'"
                                :alt="product?.name" />
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    viewBox="0 0 24 24">
                                                    <path fill="white" d="M8 15h8l-4-7" />
                                                </svg>
                                            </span>
                                            <span class="minus" @click="updateQuantity('minus')">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                    viewBox="0 0 24 24">
                                                    <path fill="white" d="M8 9h8l-4 7" />
                                                </svg>
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
        <div class="extra-products ">
            <div class="row g-24 flex-row flex-xl-row-reverse">
                <div class="col-xl-12">
                    <div class="food-menu__item-wrapper pt-5">
                        <h3 class="text-center text-uppercase title-animation display-4">
                            Pair your order with our specials
                        </h3>
                        <div class="row g-10 grid mt-5">
                            <div v-for="(item, index) in featuredProducts" :key="index"
                                :class="['col-lg-3 col-sm-6 grid-item', item.category]">
                                <div class="food-menu__item">
                                    <nuxt-link :to="`/shop/${item.slug}`" class="food-menu__item-media">
                                        <img :src="item.images[0] ? item.images[0].src : 'http://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'"
                                            class="img-fluid img-categorie" :alt="item.name">
                                    </nuxt-link>

                                    <div class="food-menu__item-text">
                                        <ul class="rating">
                                            <li v-for="i in 5" :key="i"><i class="fa-solid fa-star"></i></li>
                                        </ul>
                                        <h6>{{ item.name }}</h6>
                                        <!-- <p>{{ item.description }}</p> -->
                                        <span class="price">${{ item.price }}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--shop-description-->
    </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/productsStore'

import { storeToRefs } from 'pinia';
const productsStore = useProductsStore();
const { products, loading } = storeToRefs(productsStore);

const product = ref(null)
const quantity = ref(1)
const route = useRoute();
const productAdded = ref(false);

const isLightboxOpen = ref(false);
const zoomLevel = ref(1);


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

const featuredProducts = computed(() => {
    return products.value.filter(product => product.featured).slice(0, 4);
});

watch(() => route.params.slug, async (newSlug, oldSlug) => {
    if (newSlug !== oldSlug) {
        product.value = null
        await fetchProduct()
    }
})

const thumbStyle = computed(() => ({
  transition: 'transform 0.2s',
  transform: `scale(${zoomLevel.value})`,
  cursor: 'pointer'
}));

const zoomIn = () => {
  zoomLevel.value = 1.2; // adjust zoom level as necessary
};

const zoomOut = () => {
  zoomLevel.value = 1;
};

const handleMouseMove = (event) => {
  const img = event.currentTarget.querySelector('img');
  const rect = img.getBoundingClientRect();
  const x = event.clientX - rect.left; // x position within the img
  const y = event.clientY - rect.top; // y position within the img
  const xPercent = (x / rect.width) * 30;
  const yPercent = (y / rect.height) * 30;

  img.style.transform = `scale(${zoomLevel.value}) translate(-${xPercent}%, -${yPercent}%)`;
};

const resetZoom = () => {
  zoomOut();
};

const openLightbox = () => {
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};

// Handle Escape key to close lightbox
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});

</script>
<style scoped>
.shop-details__thumb {
    overflow: hidden;
    position: relative;
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.lightbox img {
    max-width: 90%;
    max-height: 90%;
}

</style>
