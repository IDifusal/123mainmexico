<template>
    <div id="preloader"  v-if="isLoading">
        <div class="preloader-close">x</div>
        <div class="rr-restaurant">
            <div class="loading-wrapper">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.235 35.235"
                    style="enable-background:new 0 0 35.235 35.235;" xml:space="preserve">
                    <g>
                        <g id="b103_soup">
                            <path id="cap"
                                d="M26.776,12.687H19.25c0.68,0,1.233-0.553,1.233-1.234s-0.554-1.23-1.233-1.23h-3.078c-0.68,0-1.232,0.549-1.232,1.23
                            s0.553,1.234,1.232,1.234H8.645c-2.094,0-3.828,1.877-4.165,3.875h26.464C30.605,14.563,28.871,12.687,26.776,12.687z" />
                            <path id="body" d="M31.005,18.677v-0.352H4.479H4.417H0v1.762h4.417v10.918c0,2.338,1.894,4.229,4.228,4.229h18.132
                            c2.336,0,4.229-1.891,4.229-4.229V20.439h4.229v-1.762H31.005z" />
                            <path class="smell" id="elem-1" d="M11.24,4.235c0.123,0.162,0.254,0.318,0.391,0.465l0.341,0.342c0.216,0.217,0.417,0.434,0.577,0.629
                            c0.08,0.098,0.146,0.191,0.195,0.268c0.047,0.076,0.09,0.135,0.1,0.223c0.012,0.094-0.037,0.221-0.133,0.348
                            c-0.096,0.125-0.23,0.246-0.387,0.367c0.186,0.072,0.389,0.096,0.605,0.07c0.215-0.025,0.451-0.121,0.648-0.326
                            c0.195-0.205,0.304-0.508,0.321-0.775c0.019-0.27-0.022-0.514-0.083-0.734c-0.123-0.438-0.327-0.793-0.545-1.119
                            c-0.109-0.16-0.244-0.322-0.34-0.447c-0.096-0.113-0.185-0.229-0.266-0.344c-0.33-0.459-0.561-0.873-0.647-1.359
                            c-0.09-0.492,0.01-1.121,0.307-1.842c-0.771,0.162-1.457,0.807-1.681,1.709c-0.111,0.445-0.087,0.934,0.032,1.363
                            C10.793,3.511,11.002,3.897,11.24,4.235z" />
                            <path class="smell" id="elem-2" d="M15.809,4.235C15.932,4.397,16.064,4.553,16.2,4.7l0.34,0.342c0.216,0.217,0.416,0.434,0.58,0.629
                            c0.077,0.098,0.143,0.191,0.193,0.268c0.049,0.076,0.09,0.135,0.098,0.223c0.013,0.094-0.035,0.221-0.131,0.348
                            c-0.095,0.125-0.23,0.246-0.389,0.367c0.188,0.072,0.392,0.096,0.607,0.07c0.214-0.025,0.453-0.121,0.648-0.326
                            c0.197-0.205,0.304-0.508,0.322-0.775c0.019-0.27-0.021-0.514-0.082-0.734c-0.125-0.438-0.33-0.793-0.548-1.119
                            c-0.107-0.16-0.243-0.322-0.339-0.447c-0.094-0.113-0.185-0.229-0.264-0.344c-0.331-0.459-0.563-0.873-0.649-1.359
                            c-0.09-0.49,0.008-1.119,0.304-1.84c-0.77,0.162-1.455,0.807-1.678,1.709c-0.111,0.445-0.088,0.934,0.031,1.363
                            C15.363,3.511,15.568,3.897,15.809,4.235z" />
                            <path class="smell" id="elem-3" d="M19.972,4.235c0.122,0.162,0.253,0.318,0.39,0.465l0.341,0.342c0.216,0.217,0.415,0.434,0.577,0.629
                            c0.08,0.098,0.146,0.191,0.195,0.268c0.047,0.076,0.088,0.135,0.1,0.223c0.013,0.094-0.037,0.221-0.133,0.348
                            c-0.095,0.125-0.23,0.246-0.389,0.367c0.188,0.072,0.392,0.096,0.605,0.07c0.215-0.025,0.453-0.121,0.65-0.326
                            c0.195-0.205,0.303-0.508,0.32-0.775c0.02-0.27-0.021-0.514-0.082-0.734c-0.123-0.438-0.326-0.793-0.545-1.119
                            c-0.109-0.16-0.244-0.322-0.34-0.447c-0.096-0.113-0.186-0.229-0.266-0.344c-0.33-0.459-0.561-0.873-0.646-1.359
                            c-0.091-0.492,0.009-1.121,0.304-1.842c-0.77,0.162-1.457,0.807-1.679,1.709c-0.11,0.445-0.087,0.934,0.032,1.363
                            C19.524,3.511,19.731,3.897,19.972,4.235z" />
                        </g>
                        <g id="Capa_1_128_">
                        </g>
                    </g>
                </svg>
                <div class="loading-text">
                    <h2>Loading...</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- preloader end -->

    <!-- preloader start -->
    <div class="loading-form">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
    <!-- preloader end -->

    <!-- Backtotop start -->
    <div id="scroll-percentage">
        <span id="scroll-percentage-value"></span>
    </div>
    <!-- Backtotop end -->

    <!-- Offcanvas area start -->
    <div class="fix">
        <div class="offcanvas__area">
            <div class="offcanvas__wrapper">
                <div class="offcanvas__content">
                    <div class="offcanvas__top d-flex justify-content-between align-items-center">
                        <div class="offcanvas__logo">
                            <nuxt-link to="/">
                                <img src="https://html.rrdevs.net/delish/assets/imgs/logo/logo.svg"
                                    alt="logo not found">
                            </nuxt-link>
                        </div>
                        <div class="offcanvas__close">
                            <button class="offcanvas-close-icon animation--flip">
                                <span class="offcanvas-m-lines">
                                    <span class="offcanvas-m-line line--1"></span><span
                                        class="offcanvas-m-line line--2"></span><span
                                        class="offcanvas-m-line line--3"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-menu fix"></div>
                    <div class="offcanvas__social">
                        <h4 class="offcanvas__title mb-20">Subscribe & Follow</h4>
                        <p class="mb-30">The scallops were perfectly cooked, tender, and flavorful, paired beautifully
                            with a creamy risotto and seasonal vegetables. The presentation was artful, showcasing the
                            chef's attention to detail.</p>
                        <ul class="header-top-socail-menu d-flex">
                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i></a></li>
                            <li><a href="https://vimeo.com/"><i class="fa-brands fa-vimeo-v"></i></a></li>
                        </ul>
                    </div>
                    <div class="offcanvas__btn">
                        <div class="header__btn-wrap">
                            <nuxt-link to="/reservation" class="rr-btn__header d-sm-none mb-10 w-100">
                                <span class="hover-rl"></span>
                                <span class="fake_hover"></span>
                                <span class="btn-wrap">
                                    <span class="text-one">Book A Table <img
                                            src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg"
                                            alt="not found"></span>
                                    <span class="text-two">Book A Table <img
                                            src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg"
                                            alt="not found"></span>
                                </span>
                            </nuxt-link>
                            <a href="https://themeforest.net/user/rrdevs/portfolio" class="rr-btn__header w-100">
                                <span class="hover-rl"></span>
                                <span class="fake_hover"></span>
                                <span class="btn-wrap">
                                    <span class="text-one">Purchase Now <img
                                            src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg"
                                            alt="not found"></span>
                                    <span class="text-two">Purchase Now <img
                                            src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg"
                                            alt="not found"></span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas__overlay"></div>
    <div class="offcanvas__overlay-white"></div>
    <!-- Offcanvas area start -->

    <!-- Header area start -->
    <header>
        <div id="header-sticky" class="header__area header-1">
            <div class="container">
                <div class="header__top d-none d-xl-block">
                    <div class="row g-24">
                        <div class="col-xxl-6 col-4">
                            <div class="last_no_bullet">
                                <ul class="header__top-menu d-flex">
                                    <li>Mon-Sun: 9:00 am - 10:00 pm</li>
                                    <!-- <li>Thurs-Sat: 11a-10p</li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-8">
                            <div class="last_no_bullet">
                                <ul class="header__top-menu d-flex justify-content-end">
                                    <li><a
                                            href="mailto:reservations@123mainmexico.com">reservations@123mainmexico.com</a>
                                    </li>
                                    <li><a href="tel:(704)889-1236">(704) 889-1236</a></li>
                                    <li><a href="https://maps.app.goo.gl/DUPQZVP1dsFNFwph6">123 Main St, Pineville, NC
                                            28134</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mega__menu-wrapper p-relative">
                    <div class="header__main">
                        <div class="header__logo">
                            <nuxt-link to="/">
                                <div class="logo">
                                    <img src="/images/123-MAIN-MEXICO-logo-transparente.png"
                                        alt="123 Main Mexico" width="150">
                                </div>
                            </nuxt-link>
                        </div>

                        <div class="mean__menu-wrapper d-none d-lg-block">
                            <div class="main-menu">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li class="has-mega-menu">
                                            <nuxt-link to="/">Home</nuxt-link>
                                        </li>
                                        <li class="has-dropdown">
                                            <nuxt-link >Restaurant</nuxt-link>
                                            <ul class="submenu">
                                                <li>
                                                    <nuxt-link to="/about-us">About Us</nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/gallery">Gallery</nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <nuxt-link to="/shop">Menu</nuxt-link>
                                            <ul class="submenu">
                                                <li>
                                                    <nuxt-link to="/shop">Shop</nuxt-link>
                                                </li>                                                
                                                <li>
                                                    <nuxt-link to="/shop/cart">Cart</nuxt-link>
                                                </li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li class="">
                                            <nuxt-link to="/blog">Blog</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/contact">
                                                contact
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div class="header__right">
                            <div class="header__action d-flex align-items-center">
                                <div class="header__btn-wrap d-none d-sm-inline-flex">
                                    <nuxt-link to="/reservation" class="rr-btn__header">
                                        <span class="hover-rl"></span>
                                        <span class="fake_hover"></span>
                                        <span class="btn-wrap">
                                            <span class="text-one">Book A Table <img
                                                    src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg"
                                                    alt="not found"></span>
                                            <span class="text-two">Book A Table <img
                                                    src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right.svg"
                                                    alt="not found"></span>
                                        </span>
                                    </nuxt-link>
                                </div>

                                <div class="header__hamburger ml-20 d-xl-none">
                                    <div class="sidebar__toggle">
                                        <a class="bar-icon" href="javascript:void(0)">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useUiStore } from '~/stores/uiStore';
import { storeToRefs } from 'pinia';
const uiStore = useUiStore();
const {isLoading} = storeToRefs(uiStore);
</script>
