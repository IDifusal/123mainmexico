<template>
    <main>
        <!-- Breadcrumb area start  -->
        <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
            <div class="breadcrumb__background" v-background data-background="https://123.espanglishmarketing.com/wp-content/uploads/2024/08/DSC06581-1.jpg"></div>
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-12">
                        <div class="breadcrumb__content text-center">
                            <h2 class="breadcrumb__title color-white title-animation">Cart Page</h2>
                            <div class="breadcrumb__menu">
                                <nav>
                                    <ul>
                                        <li><span>
                                                <nuxt-link to="/">Home</nuxt-link>
                                            </span></li>
                                        <li class="active"><span>Cart Page</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <span class="breadcrumb__big-title">Our Cart Page</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb area start  -->

        <!--cart-section-->
        <section class="cart section-space overflow-hidden">
            <div class="container">
                <div class="row g-24">
                    <div class="col-12">
                        <div class="table-content cart-table">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="product-remove"></th>
                                        <th class="product-name">Products</th>
                                        <th class="product-price"> Price</th>
                                        <th class="product-quantity">Quantity</th>
                                        <th class="product-subtotal">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in cart">
                                        <td class="product-remove">
                                            <button @click="removeFromCart(index)">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.63551 0L5.57196 4.07L2.57009 0H0.514019L4.68785 5.23286L0 11H2.05607L5.5514 6.39571L8.94393 11H11L6.43551 5.23286L10.6916 0H8.63551Z"
                                                        fill="#74787C" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td class="product__wrapper">
                                            <a class="product__thumbnail" href="shop-details.html">
                                                <img class="img-fluid"
                                                    :src="product?.images[0]?.src || 'https://placehold.co/600x400/000000/FFFFFF/png'"
                                                    alt="not found">
                                            </a>
                                            <div class="product__name">
                                                <span class="item">ITEM: #1</span>
                                                <h6 class="title"><a href="shop-details.html">
                                                        {{ product.name }}
                                                    </a>
                                                </h6>
                                            </div>
                                        </td>
                                        <td class="product__price"><span class="amount">$
                                                {{ product.price }}.00
                                            </span></td>
                                        <td class="product__quantity">
                                            <div class="product__quantity__group">
                                                <input type="number" class="input-text qty text" name="quantity"
                                                    :value="product.quantity" min="1" max="100" step="1"
                                                    autocomplete="off">
                                                <div class="product__quantity__control">
                                                    <span class="plus" @click="updateQuantity('plus')">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                            viewBox="0 0 24 24">
                                                            <path fill="black" d="M8 15h8l-4-7" />
                                                        </svg>
                                                    </span>

                                                    <span class="minus" @click="updateQuantity('minus')">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                            viewBox="0 0 24 24">
                                                            <path fill="black" d="M8 9h8l-4 7" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="product__subtotal">
                                            <span>$
                                                {{ product.price * product.quantity }}.00
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="cart__btn-wrap">
                                <div class="left-item">
                                    <!-- <input type="text" class="form-control" placeholder="Coupon Code">
                                    <button class="rr-btn-solid">
                                        <span class="btn-wrap">
                                            <span class="text-one">Apply Coupon</span>
                                            <span class="text-two">Apply Coupon</span>
                                        </span>
                                    </button> -->
                                </div>
                                <button class="rr-btn-solid">
                                    <span class="btn-wrap">
                                        <span class="text-one">Update Cart</span>
                                        <span class="text-two">Update Cart</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--cart-section-->

        <!--checkout-->
        <section class="checkout section-space__bottom overflow-hidden">
            <div class="container">
                <div class="row g-24">
                    <div class="col-xl-6">
                        <h3 class="mb-30">Cart Totals</h3>
                        <div class="checkout__wrapper mb-40">
                            <div class="checkout__top checkout__item">
                                <h6 class="title">Subtotal</h6>
                                <span class="price">$1100.00</span>
                            </div>
                            <div class="checkout__shipping checkout__item">
                                <h6 class="title">Shipping</h6>
                                <div class="checkout__right">
                                    <div class="checkout__option-wrapper">
                                        <div class="shipping-option">
                                            <input id="flat_rate" type="radio" name="shipping">
                                            <label for="flat_rate">Free Shipping</label>
                                        </div>
                                        <div class="shipping-option">
                                            <input id="local_pickup" type="radio" name="shipping">
                                            <label for="local_pickup">Flat Rate</label>
                                        </div>
                                        <div class="shipping-option">
                                            <input id="free_shipping" type="radio" name="shipping">
                                            <label for="free_shipping">Local Pickup</label>
                                        </div>
                                    </div>
                                    <p>Shipping options will be updated <br> during checkout</p>
                                    <span>Calculate Shipping</span>
                                </div>
                            </div>
                            <div class="checkout__total checkout__item">
                                <h6 class="title">Total</h6>
                                <span>$1100.00</span>
                            </div>
                        </div>
                        <div class="checkout-proceed">
                            <button type="submit" class="rr-btn-solid ">
                                <span class="btn-wrap">
                                    <span class="text-one">Proceed To Checkout</span>
                                    <span class="text-two">Proceed To Checkout</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--checkout-->
    </main>
</template>

<script setup>

import { useProductsStore } from '@/stores/productsStore';
import { storeToRefs } from 'pinia';
const productsStore = useProductsStore();
const { cart } = storeToRefs(productsStore);

const removeFromCart = (index) => {
    productsStore.removeFromCart(index);
}
</script>
