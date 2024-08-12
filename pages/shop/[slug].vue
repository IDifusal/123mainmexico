<template>
    <main>
        <!-- Breadcrumb area start  -->
        <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
            <div class="breadcrumb__background"
                data-background="https://html.rrdevs.net/delish/assets/imgs/breadcrumb/page-header-1.png"></div>
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
                                :src="product?.images[0]?.src || 'https://html.rrdevs.net/delish/assets/imgs/shop-details/shop-details-1.jpg'"
                                alt="not found">
                            <span class="sale">Sale</span>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="shop-details__info">
                            <div class="shop-details__inner">
                                <h3 class="title mb-20">
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

                                <nuxt-link to="/shop/cart">
                                        View Cart
                                        </nuxt-link>
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
        <section class="shop-description section-space__bottom">
            <div class="container">
                <ul class="nav tab-navigation" id="product-tab-navigation" role="tablist">
                    <li role="presentation">
                        <button class="active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
                            role="tab" aria-controls="home" aria-selected="true">Description</button>
                    </li>
                </ul>
                <div class="tab-content" id="product-tab-content">
                    <div class="tab-pane fade show active description" id="home" role="tabpanel"
                        aria-labelledby="home-tab">
                        <div class="shop-description__content" v-html="product?.description">

                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="product-table__wrapper">
                            <table class="table product-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Size</th>
                                        <th scope="col">Calories</th>
                                        <th scope="col">Total Fat (g)</th>
                                        <th scope="col">Protein (g)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Small</td>
                                        <td>150-200</td>
                                        <td>5-8</td>
                                        <td>3-5</td>
                                    </tr>
                                    <tr>
                                        <td>Medium</td>
                                        <td>200-250</td>
                                        <td>8-12</td>
                                        <td>5-7</td>
                                    </tr>
                                    <tr>
                                        <td>Large</td>
                                        <td>250-300</td>
                                        <td>12-15</td>
                                        <td>7-9</td>
                                    </tr>
                                    <tr>
                                        <td>Extra Large</td>
                                        <td>300-350</td>
                                        <td>15-20</td>
                                        <td>9-12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade review" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="row product-review g-24">
                            <div class="col-xl-5">
                                <div class="review-item__wrap d-flex flex-column mb-xs-30 mb-sm-30 mb-md-30 mb-lg-30">
                                    <div class="review-item">
                                        <div class="review-item_thumb">
                                            <img src="https://html.rrdevs.net/delish/assets/imgs/shop-details/review-list-1.jpg"
                                                alt="img">
                                        </div>
                                        <div class="review-item_content">
                                            <div class="review-item_content-top">
                                                <div class="review-item_content-top-left">
                                                    <h5 class="name">Eleanor Fant</h5>
                                                    <span>06 March, 2023</span>
                                                </div>

                                                <ul class="review">
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <p class="mb-0">Designed very similarly to the nearly double priced Galaxy
                                                tab S6, with the only removal being.</p>
                                        </div>
                                    </div>
                                    <div class="review-item">
                                        <div class="review-item_thumb">
                                            <img src="https://html.rrdevs.net/delish/assets/imgs/shop-details/review-list-2.jpg"
                                                alt="img">
                                        </div>
                                        <div class="review-item_content">
                                            <div class="review-item_content-top">
                                                <div class="review-item_content-top-left">
                                                    <h5 class="name">Sabbir Dev</h5>
                                                    <span>06 March, 2023</span>
                                                </div>

                                                <ul class="review">
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                    <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                                </ul>
                                            </div>
                                            <p class="mb-0">Designed very similarly to the nearly double priced Galaxy
                                                tab S6, with the only removal being.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7">
                                <div class="review-form-wrap">
                                    <h4 class="title mb-24">Review this product</h4>
                                    <span class="publish mb-10 d-block">Your email address will not be published.
                                        Required fields are marked *</span>
                                    <div class="review-box">
                                        <span>Your ratings :</span>
                                        <ul class="review">
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                            <li><i class="fa-sharp fa-solid fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div class="contact-us-message__form mt-40">
                                        <div class="row g-20">
                                            <div class="col-xl-12">
                                                <div class="contact-us-message__form-input">
                                                    <input name="text" id="text" type="text" placeholder="Your name">
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="contact-us-message__form-input">
                                                    <input name="email" id="email1" type="email"
                                                        placeholder="Email Address">
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="contact-us-message__form-input">
                                                    <textarea name="comment" id="comment" cols="30" rows="10"
                                                        placeholder="Comment"></textarea>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <button class="rr-btn-solid">
                                                    <span class="btn-wrap">
                                                        <span class="text-one">Submit</span>
                                                        <span class="text-two">Submit</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    productAdded.value = true;
  productsStore.addToCart({ ...product, quantity: quantity.value })
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
