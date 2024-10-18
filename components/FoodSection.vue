<template>
  <section id="food-menu" class="food-menu section-space section-bg-1">
    <div class="">
      <div class="container">
        <div class="row g-24 mb-55 mb-sm-50 mb-xs-40 align-items-lg-end align-items-center">
          <div class="col-xl-12">
            <div class="section__title-wrapper text-center">
              <span class="section__subtitle justify-content-start mb-10 mb-xs-5 wow clip-a-z">Food Menu</span>
              <h2 class="section__title mb-0 title-animation">Our Delicious Dishes</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-24 flex-row flex-xl-row-reverse">
        <div class="col-xl-12">
          <div class="food-menu__item-wrapper">
            <div v-for="(slice, index) in slicedCategories" :key="index" class="mb-4">
              <Swiper :breakpoints="breakpoints" :modules="[SwiperAutoplay]" :slides-per-view="5" :space-between="24" loop
                :autoplay="{ delay: 3000, disableOnInteraction: false }" class="food-menu__slider">
                <SwiperSlide v-for="(item, idx) in slice" :key="idx" class="food-menu__item">
                  <div class="food-menu__item-media">
                    <template v-if="item.type === 'social'">
                      <a :href="item.url" target="_blank" class="food-menu__item-link" rel="noopener noreferrer">
                        <img
                          :src="item.image ? item.image.src : 'http://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'"
                          class="img-fluid image-categorie" :alt="item.name" style="min-height: 310px;" />
                        <div class="food-menu__item-overlay">
                          <span class="food-menu__item-text2"
                            style="border:1px solid white;padding:1rem;background-color:transparent;border-radius: 1rem;color:white;font-size: 2rem;font-weight: 700;">{{
                            item.name }}</span>
                        </div>
                      </a>
                    </template>
                    <template v-else>
                      <nuxt-link :to="{ path: `/shop/`, query: { category: item.slug } }" class="food-menu__item-link">
                        <img
                          :src="item.image ? item.image.src : 'http://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'"
                          class="img-fluid image-categorie" :alt="item.name" style="min-height: 310px;" />
                        <div class="food-menu__item-overlay">
                          <span class="food-menu__item-text2"
                            style="border:1px solid white;padding:1rem;background-color:transparent;border-radius: 1rem;color:white;font-size: 2rem;font-weight: 700;">{{
                            item.name }}</span>
                        </div>
                      </nuxt-link>
                    </template>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <nuxt-link to="shop" class="rr-btn rr-btn__red">
              <span class="hover-rl"></span>
              <span class="fake_hover"></span>
              <span class="btn-wrap">
                <span class="text-one">View Full Menu
                  <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg" alt="not found" />
                </span>
                <span class="text-two">View Full Menu
                  <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg" alt="not found" />
                </span>
              </span>
            </nuxt-link>
            <a href="https://123.espanglishmarketing.com/wp-content/uploads/2024/09/01-MENU-GENERAL-123_compressed.pdf"
              download class="rr-btn rr-btn__red md-ml-3">
              <span class="hover-rl"></span>
              <span class="fake_hover"></span>
              <span class="btn-wrap">
                <span class="text-one">Download Menu
                  <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg" alt="not found" />
                </span>
                <span class="text-two">Download Menu
                  <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg" alt="not found" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import { storeToRefs } from 'pinia';

const productsStore = useProductsStore();
const { categories } = storeToRefs(productsStore);

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
// Slice categories into four segments
const socialLinks = [
  { type: "social", name: 'Facebook', url: 'https://facebook.com', image: { src: "https://123.espanglishmarketing.com/wp-content/uploads/2024/10/460634908_122178304028137008_2197218850671998413_n.jpg" } },
  { type: "social", name: 'Instagram', url: 'https://instagram.com', image: { src: "https://123.espanglishmarketing.com/wp-content/uploads/2024/10/460634908_122178304028137008_2197218850671998413_n.jpg" } },
  { type: "social", name: 'TikTok', url: 'https://tiktok.com', image: { src: "https://123.espanglishmarketing.com/wp-content/uploads/2024/10/460634908_122178304028137008_2197218850671998413_n.jpg" } },
];

const slicedCategories = computed(() => {
  const itemsPerSlide = 5;
  const totalItems = categories.value.length + socialLinks.length;
  const numberOfSlides = Math.ceil(totalItems / itemsPerSlide);

  const combinedItems = [...categories.value, ...socialLinks];

  return Array.from({ length: numberOfSlides }, (v, i) =>
    combinedItems.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
  );
});

</script>

<style scoped>
.image-categorie {
  /* min-height: 100px !important; */
  /* max-height: 100px !important; */
  object-fit: cover;
}

.food-menu__item-media {
  position: relative;
}

.food-menu__item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(22, 57, 101, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.food-menu__item-media:hover .food-menu__item-overlay {
  opacity: 1;
}

.food-menu__item-text {
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
}
@media(min-width: 768px) {
  .md-ml-3{
    margin-left: 1rem;
  }
}
</style>