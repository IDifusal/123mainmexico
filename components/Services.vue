<template>
    <section class="our-service section-space section-bg-1" v-background
        data-background="https://html.rrdevs.net/delish/assets/imgs/service/service-bg.png">
        <div class="container">
            <div class="row g-24">
                <div class="col-12">
                    <div class="section__title-wrapper text-center mb-70 mb-sm-50 mb-xs-40">
                        <span class="section__subtitle justify-content-center mb-10 mb-xs-5 wow clip-a-z">
                            Our Services
                        </span>
                        <h2 class="section__title mb-10 mb-xs-5 title-animation">
                            Our Restaurant Service
                        </h2>
                        <div class="dot-shpae wow clip-a-z">
                            <img class="img-fluid"
                                src="https://html.rrdevs.net/delish/assets/imgs/section-title/dot-shape.svg"
                                alt="not found" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-24 mb-minus-24">
                <div v-for="(service, index) in services" :key="index" class="col-xl-4 col-md-6">
                    <div class="our-service__item white-bg mb-24">
                        <nuxt-link :to="service.link" class="our-service__item-media d-block mb-30">
                            <img :src="service.image" :alt="service.alt" class="img-fluid" />
                        </nuxt-link>

                        <div class="our-service__item-content">
                            <h5 class="mb-15 text-uppercase">
                                <nuxt-link :to="service.link" v-html="service.title"></nuxt-link>
                            </h5>
                            <p class="mb-30">{{ service.description }}</p>

                            <nuxt-link :to="service.link" class="rr-btn rr-btn__red">
                                <span class="hover-rl"></span>
                                <span class="fake_hover"></span>
                                <span class="btn-wrap">
                                    <span class="text-one">
                                        Read More
                                        <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg"
                                            alt="not found" />
                                    </span>
                                    <span class="text-two">
                                        Read More
                                        <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg"
                                            alt="not found" />
                                    </span>
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        title: 'Live Entertainment Shows',
        description: 'At 123 Main Mexico, we believe that a meal should be more than just a time to eat.',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-12-at-16.09.06.jpeg',
        alt: 'Wedding Service Image',
        link: '',
    },
    {
        title: 'Party<br> Reservations',
        description: 'Celebrate in Style at 123 Main Mexico: Your Premier Event Venue in Pineville, NC',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-12-at-16.20.13.jpeg',
        alt: 'Buffet Service Image',
        link: '',
    },
    {
        title: 'Buffet <br>Service',
        description: 'At 123 Main Mexico, we believe that dining should be an experience that satisfies',
        image: 'https://html.rrdevs.net/delish/assets/imgs/service/our-service__item-3.jpg',
        alt: 'Party Service Image',
        link: '',
    },
]);
</script>