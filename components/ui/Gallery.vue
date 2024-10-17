<template>
    <section class="our-project section-space__top">
      <div class="container">
        <div class="row g-24 mb-70 mb-sm-50 mb-xs-40 align-items-lg-end align-items-center">
          <div class="col-xl-6">
            <div class="section__title-wrapper text-center text-xl-start">
              <span class="section__subtitle justify-content-start mb-10 mb-xs-5 wow clip-a-z">View Our Projects</span>
              <h2 class="section__title mb-0 title-animation">Our Food Gallery</h2>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex justify-content-xl-end mt-xs-20 mt-sm-20 mt-md-20 mt-lg-20 justify-content-center">
              <!-- No custom navigation buttons here -->
            </div>
          </div>
        </div>
      </div>
  
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="5"
        :space-between="24"
        loop
        :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
        :breakpoints="breakpoints"
        class="our-project__slider"
      >
        <SwiperSlide v-for="(project, index) in projects" :key="index">
          <div class="our-project__item">
            <div class="our-project__item-media" @click="openLightbox(project.image)">
              <img :src="project.image" :alt="project.altText">
            </div>
            <div class="our-project__item-hover">
              <a @click.prevent="openLightbox(project.image)" class="our-project__item-hover-icon popup-image">
                <i class="fa-regular fa-eye"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  
      <!-- Lightbox Overlay -->
      <div v-if="lightboxVisible" class="lightbox" @click="closeLightbox">
        <img :src="currentImage" alt="Lightbox Image">
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 24,
  },
}
  const projects = ref([
    {
      image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-1.jpeg',
      altText: 'Project 1',
    },
    {
      image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-2.jpeg',
      altText: 'Project 2',
    },
    {
      image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-3.jpeg',
      altText: 'Project 3',
    },
    {
      image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-4.jpeg',
      altText: 'Project 4',
    },
    {
      image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/galery-5.jpeg',
      altText: 'Project 1',
    },    
    {
      image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-6.jpeg',
      altText: 'Project 2',
    },    
    {
      image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-7.jpeg',
      altText: 'Project 2',
    },      
  ]);
  
  const lightboxVisible = ref(false);
  const currentImage = ref('');
  
  const openLightbox = (image) => {
    currentImage.value = image;
    lightboxVisible.value = true;
  };
  
  const closeLightbox = () => {
    lightboxVisible.value = false;
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .lightbox img {
    max-width: 90%;
    max-height: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    transition: all 0.3s ease;
  }
.our-project__item-media img{
    width:100%;
    height: 335px;
    object-fit: cover;
}

  </style>
  