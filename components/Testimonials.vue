<template>
    <section class="client-testimonial section-space__top overflow-hidden">
      <div class="container">
        <div class="client-testimonial__bg leftRight" v-background data-background="https://html.rrdevs.net/delish/assets/imgs/client-testimonial/bg.png"></div>
        <div class="row g-24">
          <div class="col-12">
            <div class="section__title-wrapper text-center mb-70 mb-sm-50 mb-xs-40">
              <span class="section__subtitle justify-content-center mb-10 mb-xs-5 wow clip-a-z">Client Testimonial</span>
              <h2 class="section__title mb-10 mb-xs-5 title-animation">Our Customer Feedbacks</h2>
              <div class="dot-shpae wow clip-a-z">
                <img class="img-fluid" src="https://html.rrdevs.net/delish/assets/imgs/section-title/dot-shape.svg" alt="not found">
              </div>
            </div>
          </div>
        </div>
  
        <div class="row g-24">
          <div class="col-12">
            <Swiper
              :modules="[SwiperAutoplay, SwiperPagination]"
              :slides-per-view="2"
              :loop="true"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
              class="client-testimonial__slider"
            >
              <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
                <div class="client-testimonial__item">
                  <p class="mb-30">{{ testimonial.feedback }}</p>
  
                  <div class="client-testimonial__item__author d-flex align-items-center justify-content-between">
                    <div class="client-testimonial__item__author-media">
                      <img :src="testimonial.image" class="img-fluid" :alt="testimonial.name">
                    </div>
  
                    <div class="client-testimonial__item__author-text">
                      <h5>{{ testimonial.name }}</h5>
                      <span>{{ testimonial.title }}</span>
                    </div>
  
                    <div class="client-testimonial__item__author-icon">
                      <img src="https://html.rrdevs.net/delish/assets/imgs/client-testimonial/quite.png" class="img-fluid" alt="quote icon">
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const testimonials = ref([
    {
      name: 'David Blumberg',
      title: 'Local Guide · 760 reviews · 22,459 photos',
      feedback: 'New outstanding Mexican Restaurant. This is gourmet food, not the typical inexpensive Mexican place that has tacos and burritos and not much else. Extensive seafood menu, quite varied. Their decor is gorgeous too.',
      image: 'https://ui-avatars.com/api/?name=David+Blumberg'
    },
    {
      name: 'Jesse Nicole',
      title: '3 reviews · 4 photos',
      feedback: 'Great for a date night, but has a great sized patio too if you’re wanting family friendly vibes too! Drinks are perfectly balanced and taste SO good! Food is on point! We had a little bit of everything and we were amazed by the flavor!',
      image: 'https://ui-avatars.com/api/?name=Jesse+Nicole'
    },
    {
      name: 'Josselyn Elizondo',
      title: '1 review · 1 photo',
      feedback: 'Delicious food! Tacos were great and the horchata was delicious! Plates are huge! We both took half of the food to go. Fast-paced service and great servers. They are also pet friendly—they even got cool water. Thanks!',
      image: 'https://ui-avatars.com/api/?name=Josselyn+Elizondo'
    },
    {
      name: 'Doryz Vicens',
      title: '7 reviews · 3 photos',
      feedback: 'Wow definitivamente sus platillos muestran la delicia y elegancia de Mi lindo México! Me encanta este concepto completamente una experiencia diferente a la de los típicos restaurantes Mexicanos!',
      image: 'https://ui-avatars.com/api/?name=Doryz+Vicens'
    }
  ]);
  </script>
  
  