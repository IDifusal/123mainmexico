<template>
    <main>
      <!-- Breadcrumb area start  -->
      <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
        <div class="breadcrumb__background" v-background data-background="https://api.123mainmexico.com/wp-content/uploads/2024/08/DSC06581-1.jpg"></div>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-12">
              <div class="breadcrumb__content text-center">
                <h2 class="breadcrumb__title color-white title-animation">Gallery Page</h2>
  
                <div class="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><a href="index.html">Home</a></span></li>
                      <li class="active"><span>Gallery Page</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
  
              <span class="breadcrumb__big-title">Food Gallery</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Breadcrumb area start  -->
  
      <!--  food-gallery-->
      <section class="food-gallery section-space section-bg-4" v-background data-background="https://html.rrdevs.net/delish/assets/imgs/food-gallery/bg.png">
        <div class="container">
          <div class="row g-24 mb-minus-24">
            <div v-for="(image, index) in images" :key="index" class="col-lg-4 col-md-6">
              <div class="food-gallery__item mb-24">
                <div class="food-gallery__item-media">
                  <img :src="image.src" :alt="image.alt" @click="openLightbox(image.src)" />
                </div>
                <div class="food-gallery__item-hover">
                  <a href="javascript:void(0)" class="food-gallery__item-hover-icon" @click="openLightbox(image.src)">
                    <i class="fa-regular fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div v-if="lightboxOpen" class="lightbox">
          <div class="lightbox-content">
            <img :src="lightboxImage" alt="Lightbox Image" />
            <button @click="closeLightbox">Close</button>
          </div>
        </div>
      </section>
      <!--  food-gallery-->
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  

  const images = ref([
    {
      src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-1.jpeg',
      altText: 'Project 1',
    },
    {
      src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-2.jpeg',
      altText: 'Project 2',
    },
    {
      src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-3.jpeg',
      altText: 'Project 3',
    },
    {
      src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-4.jpeg',
      altText: 'Project 4',
    },
    {
      src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/galery-5.jpeg',
      altText: 'Project 1',
    },    
    {
      src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-6.jpeg',
      altText: 'Project 2',
    },    
    {
      src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/gallery-7.jpeg',
      altText: 'Project 2',
    },      
  ]);
  
  
  const lightboxOpen = ref(false);
  const lightboxImage = ref('');
  
  function openLightbox(imageSrc) {
    lightboxImage.value = imageSrc;
    lightboxOpen.value = true;
  }
  
  function closeLightbox() {
    lightboxOpen.value = false;
    lightboxImage.value = '';
  }
  </script>
  
  <style scoped>
  .lightbox {
    z-index: 99999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-content {
    position: relative;
  }
  
  .lightbox img {
    max-width: 90%;
    max-height: 90%;
  }
  
  .lightbox button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  