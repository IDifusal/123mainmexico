<template>
  <div>
    <Header />
    <NuxtPage />
    <section class="cta-2" v-background
      data-background="http://api.123mainmexico.com/wp-content/uploads/2024/08/DSC06413-1-2.jpg">
      <div class="container">
        <div class="row g-24">
          <div class="col-12">
            <div class="cta-2__content">
              <div class="cta-2__content-text">
                <span class="text-uppercase">Stay connected with us for the latest updates</span>
                <h3 class="text-uppercase title-animation">Keep up with our latest news and events</h3>
              </div>
              <div class="footer-2__subscribe d-flex mt-30 mt-xs-25">
                <input type="text" placeholder="Email Address">
                <button type="submit" class="footer-2__subscribe-btn"><img
                    src="https://html.rrdevs.net/delish/assets/imgs/icon/plane.svg" alt="not found"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { useJsonld } from '#jsonld';

useHead({
  title: '123 Main Mexico Gastrobar',
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/fav-cion.png',
    },
    {
      rel: 'canonical',
      href: 'http://123mainmexico.com'
    }
  ],
  meta: [
    {
      name: 'canonical',
      content: 'http://123mainmexico.com'
    }
    ,
    { name: 'description', content: '123 Main Mexico offers a delicious variety of coastal Mexican dishes and chef specialties like ribs' }
  ],
})

import { onMounted } from 'vue';
import { useBlogStore } from '@/stores/blogStore';
import { useProductsStore } from '@/stores/productsStore';
import { useAsyncData } from 'nuxt/app';

const productsStore = useProductsStore();
const blogStore = useBlogStore();
onMounted(() => {
  // productsStore.fetchProducts();
  blogStore.fetchPosts();
});

// const { data: productsData, pending: productsLoading, error: productsError } = await useAsyncData('products', async () => {
//   await productsStore.fetchProducts();
//   return productsStore.products;
// });

// // Fetch blog posts using useAsyncData
// const { data: blogData, pending: blogLoading, error: blogError } = await useAsyncData('blog', async () => {
//   await blogStore.fetchPosts();
//   return blogStore.posts;
// });

const restaurant = {
  name: '123 Main Mexico',
  description: "We bring the flavors of Mexico's coast to Charlotte in a space that's all about good vibes and great food",
  url: 'https://www.123mainmexico.com',
  logo: 'https://www.123mainmexico.com/images/123-MAIN-MEXICO-logo-transparente.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Pineville',
    addressRegion: 'NC',
    postalCode: '28134',
    addressCountry: 'US',
  },
  telephone: '(704) 889-1236',
  email: 'reservations@123mainmexico.com',
  openingHours: [
    'Su-Th 10:00-22:00',
    'Fr-Sa 10:00-00:00'
  ],
  sameAs: [
    'https://www.facebook.com/123mainmexico',
    'https://www.instagram.com/123mainmexico',
  ],
};

// Use JSON-LD
useJsonld({
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: restaurant.name,
  description: restaurant.description,
  url: restaurant.url,
  logo: restaurant.logo,
  address: restaurant.address,
  telephone: restaurant.telephone,
  email: restaurant.email,
  openingHours: restaurant.openingHours,
  sameAs: restaurant.sameAs,
});
</script>
