<template>
  <section id="food-menu" class="food-menu section-space section-bg-1">
    <div class="container">
      <div class="row g-24 mb-55 mb-sm-50 mb-xs-40 align-items-lg-end align-items-center">
        <div class="col-xl-6">
          <div class="section__title-wrapper text-center text-xl-start">
            <span class="section__subtitle justify-content-start mb-10 mb-xs-5 wow clip-a-z">Food
              Menu</span>
            <h2 class="section__title mb-0 title-animation">Our Delicious Dishes</h2>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="d-flex justify-content-xl-end mt-xs-10 mt-sm-10 mt-md-10 mt-lg-10 justify-content-center">
            <div class="food-menu__tab masonary-menu">

            </div>
          </div>
        </div>
      </div>

      <div class="row g-24 flex-row flex-xl-row-reverse">
        <div class="col-xl-8">
          <div class="food-menu__item-wrapper">
            <div class="row g-10 grid">
              <div v-for="(item, index) in categoriesCompleted" :key="index"
                :class="['col-lg-3 col-sm-6 grid-item', item.category]">
                <div class="food-menu__item">
                  <nuxt-link v-if="item.type !== 'social'" :to="{ path: `/shop/`, query: { category: item.slug } }"
                    class="food-menu__item-media">
                    <img
                      :src="item.image ? item.image.src : 'http://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'"
                      class="img-fluid image-categorie" :alt="item.name">
                  </nuxt-link>
                  <a v-else :href="item.url" target="_blank" rel="noopener noreferrer" class="food-menu__item-media">
                    <img
                      :src="item.image ? item.image.src : 'http://api.123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'"
                      class="img-fluid image-categorie" :alt="item.name">
                  </a>
                  <div class="food-menu__item-text">
                    <h6>
                      <nuxt-link v-if="item.type !== 'social'" :to="{ path: `/shop/`, query: { category: item.slug } }">
                        {{ item.name }}
                      </nuxt-link>
                      <a v-else :href="item.url" target="_blank" rel="noopener noreferrer">
                        {{ item.name }}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="food-menu__price-nav">
            <div class="food-menu__price-nav__media">
              <img src="/images/DSC08041123.png" class="img-fluid" alt="image not found">
            </div>

            <ul class="food-menu__price-nav__list">
              <li v-for="(item, index) in categories" :key="index">
                <div class="text">
                <nuxt-link :to="{ path: `/shop/`, query: { category: item.slug } }">
                  <h6>{{ item.name }}</h6>
                  </nuxt-link>
                </div>
                <!-- <span class="price">{{ item.price }}</span> -->
              </li>
            </ul>
          </div>

          <div class="row ">
            <nuxt-link to="shop" class="rr-btn rr-btn__red">
            <span class="hover-rl"></span>
            <span class="fake_hover"></span>
            <span class="btn-wrap">
              <span class="text-one">
                View Full Menu
                <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg" alt="not found" />
              </span>
              <span class="text-two">
                View Full Menu
                <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg" alt="not found" />
              </span>
            </span>
          </nuxt-link>

          <a href="https://123.espanglishmarketing.com/wp-content/uploads/2024/09/01-MENU-GENERAL-123_compressed.pdf"
            download class="rr-btn rr-btn__red download-btn" >
            <span class="hover-rl"></span>
            <span class="fake_hover"></span>
            <span class="btn-wrap">
              <span class="text-one">
                Download Menu
                <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg" alt="not found" />
              </span>
              <span class="text-two">
                Download Menu
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
import { ref, onMounted, computed } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import { storeToRefs } from 'pinia';
const productsStore = useProductsStore();
const { products, loading, categories } = storeToRefs(productsStore);

const featuredProducts = computed(() => {
  return products.value.filter(product => product.featured).slice(0, 6);
});

const socialLinks = [
  { type: "social", name: 'Facebook', url: 'https://facebook.com', image: { src: "https://123.espanglishmarketing.com/wp-content/uploads/2024/10/123-facebook.png" } },
  { type: "social", name: 'Instagram', url: 'https://instagram.com', image: { src: "https://123.espanglishmarketing.com/wp-content/uploads/2024/10/123-instagram.png" } },
  { type: "social", name: 'TikTok', url: 'https://tiktok.com', image: { src: "https://123.espanglishmarketing.com/wp-content/uploads/2024/10/123-tiktok.png" } },
];

const categoriesCompleted = computed(() => {
  return [...categories.value, ...socialLinks];
});

const sideDishes = ref([
  {
    name: 'Fritura Marina ',
    description: 'Fried shrimp, calamari and octopus.',
    price: '$16.99',
  },
  {
    name: 'Empanadas de Camarón',
    description: 'Empanada dough filled with shrimp sauteed onions and pepper.',
    price: '$12.99',
  },
  {
    name: 'Roca Shrimp',
    description: 'Tempurized and covered in sweet and sour sauce',
    price: '$12.99',
  },
  {
    name: 'Cheese Dip (Melted Cheese)',
    description: 'Shrimps or Beans ',
    price: "$12.99"
  },
  {
    name: 'Guacamole (Fresh Made)',
    description: 'Shrimp or Chicharron',
    price: '$21.99',
  },
  {
    name: 'Chicharron Lonja',
    description: 'Fried Robalo pieces with chef sauce.',
    price: '$12.99',
  }
]);

const selectedCategory = ref('all');

const filterMenu = (category) => {
  selectedCategory.value = category;
};

const filteredMenu = computed(() => {
  if (selectedCategory.value === 'all') {
    return menuItems.value.slice(0, 6);
  }
  return menuItems.value.filter(item => item.category === selectedCategory.value);
});
</script>
<style scoped>
.image-categorie {
  min-height: 160px !important;
  max-height: 100px !important;
}
@media (max-width: 767px) {
  .image-categorie {
    min-height: 100px !important;
    max-height: 100px !important;
  }
  .food-menu__price-nav{
    display: none;
  }
}
@media (min-width: 575px) {
  .download-btn{
    margin-top: 20px;
  }
}
</style>