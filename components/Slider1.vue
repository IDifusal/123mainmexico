<template>
    <section id="banner" class="banner overflow-hidden">
      <Swiper
        v-if="thumbsSwiperReady"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperThumbs]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        :thumbs="{ swiper: thumbsSwiper }"
        @slideChange="onSlideChange"
        class="banner__slider"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="banner__item banner__item-overlay">
            <div class="banner__item-bg" v-background :data-background="slide.background"></div>
            <div class="container">
              <div class="row g-24">
                <div class="col-12">
                  <div class="banner__item-content text-center">
                    <h1 class="banner__item-title mb-45">
                      <span>{{ slide.title[0] }}</span>
                      {{ slide.title[1] }}
                      <span class="bar"><span>{{ slide.subtitle }}</span></span>
                    </h1>
                    <div class="banner__item-content-link">
                      <nuxt-link to="/reservation">Book a Table</nuxt-link>
                      <nuxt-link to="/shop">View Menu</nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  
      <Swiper
        ref="thumbsSwiper"
        :slides-per-view="3"
        :loop="true"
        @swiper="onThumbsSwiperInit"
        class="banner__thumbnail center-controlls"
      >
        <SwiperSlide v-for="(thumb, index) in thumbnails" :key="index">
          <div :class="['banner__thumbnail-item', { active: activeIndex === index }]">
            <img :src="thumb.src" :alt="thumb.alt" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  
  const slides = [
    {
      background: 'http://123mainmexico.com/wp-content/uploads/2024/08/Mexican-Food-01-123-Main-Mexico.png',
      title: ['Fresh Coastal Flavors Authentic', ' Mexican Experience'],
      subtitle: '123 Main Mexico',
    },
    {
      background: 'http://123mainmexico.com/wp-content/uploads/2024/08/Mexican-Food-02-123-Main-Mexico.png',
      title: ["Taste Mexico's", 'Best in Town'],
      subtitle: '123 Main Mexico',
    },
    {
      background: 'http://123mainmexico.com/wp-content/uploads/2024/08/Mexican-Food-03-123-Main-Mexico.png',
      title: ["⁠Discover Delicious", 'Mexican Flavors'],
      subtitle: '123 Main Mexico',
    }    
  ];
  
  const thumbnails = [
    {
      src: 'http://123mainmexico.com/wp-content/uploads/2024/08/DSC08067.png',
      alt: 'Thumbnail 1'
    },
    {
      src: 'http://123mainmexico.com/wp-content/uploads/2024/08/DSC08041123.png',
      alt: 'Thumbnail 2'
    },
    {
      src: 'http://123mainmexico.com/wp-content/uploads/2024/08/DSC08046123.png',
      alt: 'Thumbnail 3'
    }    
  ];
  
  // References and state
  const thumbsSwiper = ref(null);
  const thumbsSwiperReady = ref(false);
  const activeIndex = ref(0);
  
  function onThumbsSwiperInit(swiper) {
    thumbsSwiper.value = swiper;
    thumbsSwiperReady.value = true;
  }
  
  function onSlideChange(swiper) {
    activeIndex.value = swiper.activeIndex % thumbnails.length;
  }
  </script>
  
  <style scoped>
  .banner__thumbnail-item.active {
    border: 2px solid #ff6347; /* Example border color for active thumbnail */
  }
  .center-controlls{
    margin:0px;
    bottom:107px;
  }
  </style>
  