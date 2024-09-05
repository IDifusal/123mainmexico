<template>
    <section id="food-menu" class="food-menu section-space">
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
                    <div
                        class="d-flex justify-content-xl-end mt-xs-10 mt-sm-10 mt-md-10 mt-lg-10 justify-content-center">
                        <div class="food-menu__tab masonary-menu">
                            <button @click="filterMenu('all')" :class="{ active: selectedCategory === 'all' }">All
                                Food</button>
                            <button @click="filterMenu('appetizers')"
                                :class="{ active: selectedCategory === 'appetizers' }">Appetizers</button>
                            <button @click="filterMenu('lunch')"
                                :class="{ active: selectedCategory === 'lunch' }">Lunch</button>
                            <button @click="filterMenu('bar')"
                                :class="{ active: selectedCategory === 'bar' }">Bar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-24 flex-row flex-xl-row-reverse">
                <div class="col-xl-8">
                    <div class="food-menu__item-wrapper">
                        <div class="row g-10 grid">
                            <div v-for="(item, index) in filteredMenu" :key="index"
                                :class="['col-lg-4 col-sm-6 grid-item', item.category]">
                                <div class="food-menu__item">
                                    <nuxt-link :to="`/shop/${item.slug}`" class="food-menu__item-media">
                                        <img :src="item.image" class="img-fluid" :alt="item.name">
                                    </nuxt-link>

                                    <div class="food-menu__item-text">
                                        <ul class="rating">
                                            <li v-for="i in 5" :key="i"><i class="fa-solid fa-star"></i></li>
                                        </ul>
                                        <h6>{{ item.name }}</h6>
                                        <p>{{ item.description }}</p>
                                        <span class="price">{{ item.price }}</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div class="col-xl-4">
                    <div class="food-menu__price-nav">
                        <div class="food-menu__price-nav__media">
                            <img src="/images/DSC08041123.png"
                                class="img-fluid" alt="image not found">
                        </div>

                        <ul class="food-menu__price-nav__list">
                            <li v-for="(item, index) in sideDishes" :key="index">
                                <div class="text">
                                    <h6>{{ item.name }}</h6>
                                    <p class="mb-0">{{ item.description }}</p>
                                </div>
                                <span class="price">{{ item.price }}</span>
                            </li>
                        </ul>                        
                    </div>
                    <nuxt-link to="shop" class="rr-btn rr-btn__red">
                                <span class="hover-rl"></span>
                                <span class="fake_hover"></span>
                                <span class="btn-wrap">
                                    <span class="text-one">
                                        View Full Menu
                                        <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg"
                                            alt="not found" />
                                    </span>
                                    <span class="text-two">
                                        View Full Menu
                                        <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-2.svg"
                                            alt="not found" />
                                    </span>
                                </span>
                    </nuxt-link>                       
                </div>
            </div>         
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Menu Data with Real Descriptions
const menuItems = ref([
  {
    name: 'Fried Fish Red',
    category: 'appetizers',
    slug: 'fried-fish-red',
    price: '$12.99',
    description: null,
    image: '/images/Fried-Fish-Red-Snapper-123-300x300.jpg'
  },
  {
    name: 'Huachinango House',
    category: 'appetizers',
    slug: 'huachinango-house',
    price: '$16.99',
    description: null,
    image: '/images/Huachimango-House.jpg'
  },
  {
    name: 'Camarones Botaneros',
    category: 'appetizers',
    price: '$9.99',
    slug: 'camarones-botaneros',
    description: null,
    image: '/images/Camarones-Botaneros.png'
  },
  {
    name: 'Las costillas del patron',
    category: 'appetizers',
    slug: 'las-costillas-del-patron',
    price: '$12.99',
    description: null,
    image: '/images/Las-Costillas-del-Patron.jpg'
  },
  {
        name:"Molcajete del mar",
        category:"appetizers",
        slug:"molcajete-del-mar",
        price:"$39.99",
        image:"/images/Molcajete-del-mar.jpg",
        images:[
          {
            src: '/images/Molcajete-del-mar.jpg',
          }
        ]
      },
      {
        name:"Molcajete House",
        slug:"molcajete-house",
        category:"appetizers",
        price:"$39.99",
        image:"/images/Molcajete-House.png",
        images:[
          {
            src: '/images/Molcajete-House.png',
          }
        ] 
      },
  {
    name: 'Aguachiles',
    category: 'lunch',
    price: '$19.99',
    description: 'Shrimp cooked in lime juice with your choice of sauce.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Paella',
    category: 'lunch',
    price: '$48.00',
    description: 'Traditional Spanish dish with a mix of seafood and yellow rice.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Molcajete del mar',
    category: 'lunch',
    price: '$39.99',
    description: 'Grilled shrimp, tilapia, and mojarra frita topped with chef sauce.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Filete fish 123',
    category: 'lunch',
    price: '$22.00',
    description: 'Grilled fish filet served with a house sauce.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Arrachera',
    category: 'lunch',
    price: '$24.00',
    description: 'Grilled skirt steak served with house sides.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Hartford Court Chardonnay Rrv',
    category: 'bar',
    price: '$60.00',
    description: 'Elegant wine with rich flavors.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Jordan Cabernet Sauvignon',
    category: 'bar',
    price: '$105.00',
    description: 'A full-bodied wine with notes of dark fruit.',
    image: '/images/placeholder.png'
  },
  {
    name: 'La Crema Pinot Noir Willamette',
    category: 'bar',
    price: '$35.00',
    description: 'Delicate and smooth, perfect for any occasion.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Long Island iced tea',
    category: 'bar',
    price: '$13.99',
    description: 'Rum, tequila, vodka, gin, triple sec, sour mix, and splash of coke.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Mojito',
    category: 'bar',
    price: '$12.99',
    description: 'White rum, leaves of mint, club soda, lime juice, and sugar.',
    image: '/images/placeholder.png'
  },
  {
    name: 'Skinny Margarita',
    category: 'bar',
    price: '$14.99',
    description: 'Low-calorie margarita made with fresh lime juice and agave nectar.',
    image: '/images/placeholder.png'
  }
]);


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