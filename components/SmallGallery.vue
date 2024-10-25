<template>
    <div class="sidebar__widget section-bg-2">
      <h4 class="sidebar__widget-title">Gallery</h4>
      <div class="sidebar__widget-gallery">
        <div class="gallery-photo">
          <a
            v-for="(image, index) in images"
            :key="index"
            class="popup-image"
            @click.prevent="openLightbox(image.src)"
          >
            <img
              :src="image.src"
              class="img-fluid"
              :alt="image.altText"
            />
          </a>
        </div>
      </div>
  
      <!-- Lightbox -->
      <div v-if="lightboxVisible" class="lightbox" @click="closeLightbox">
        <img :src="lightboxImage" class="lightbox-image" @click.stop />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const images = ref([
    {
      src: 'https://123.espanglishmarketing.com/wp-content/uploads/2024/09/langosta-1-1.jpg',
      altText: 'Project 1',
    },
    {
      src: 'https://123.espanglishmarketing.com/wp-content/uploads/2024/09/guacamole-1-1.jpg',
      altText: 'Project 2',
    },
    {
      src: 'https://123.espanglishmarketing.com/wp-content/uploads/2024/09/DSC08041123-1-1.png',
      altText: 'Project 3',
    },
    {
      src: 'https://123.espanglishmarketing.com/wp-content/uploads/2024/09/Molcajete-House-1.png',
      altText: 'Project 4',
    },
    {
      src: 'https://123.espanglishmarketing.com/wp-content/uploads/2024/09/Huachimango-House-1.jpg',
      altText: 'Project 5',
    },    
    {
      src: 'https://123.espanglishmarketing.com/wp-content/uploads/2024/09/Fried-Fish-Red-Snapper-123-1.jpg',
      altText: 'Project 6',
    },    
  ]);
  
  const lightboxVisible = ref(false);
  const lightboxImage = ref('');
  
  function openLightbox(src) {
    lightboxImage.value = src;
    lightboxVisible.value = true;
  }
  
  function closeLightbox() {
    lightboxVisible.value = false;
  }
  </script>
  
  <style scoped>
  .gallery-photo .img-fluid {
    aspect-ratio: 1/1;
  }
  
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .lightbox-image {
    max-width: 90%;
    max-height: 90%;
  }
  </style>
  