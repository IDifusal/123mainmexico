<template>
    <section id="food-menu" class="food-menu section-space">
        <div class="container">
            <div class="row g-24 mb-55 mb-sm-50 mb-xs-40 align-items-lg-end align-items-center">
                <div class="col-xl-6">
                    <div class="section__title-wrapper text-center text-xl-start">
                        <span class="section__subtitle justify-content-start mb-10 mb-xs-5 wow clip-a-z">Food
                            Menu</span>
                        <h2 class="section__title mb-0 title-animation">Our Delicious Foods</h2>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div
                        class="d-flex justify-content-xl-end mt-xs-10 mt-sm-10 mt-md-10 mt-lg-10 justify-content-center">
                        <div class="food-menu__tab masonary-menu">
                            <button @click="filterMenu('all')" :class="{ active: selectedCategory === 'all' }">All
                                Food</button>
                            <button @click="filterMenu('breakfast')"
                                :class="{ active: selectedCategory === 'breakfast' }">Breakfast</button>
                            <button @click="filterMenu('lunch')"
                                :class="{ active: selectedCategory === 'lunch' }">Lunch</button>
                            <button @click="filterMenu('dinner')"
                                :class="{ active: selectedCategory === 'dinner' }">Dinner</button>
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
                                    <a href="#" class="food-menu__item-media">
                                        <img :src="item.image" class="img-fluid" :alt="item.name">
                                    </a>

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
                            <img src="http://123mainmexico.com/wp-content/uploads/2024/08/DSC08067.png"
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
                </div>
            </div>

            <nuxt-link to="/shop" class="rr-btn rr-btn__red">
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
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Menu Data with Real Descriptions
const menuItems = ref([
    {
        name: 'Grilled Octopus',
        category: 'dinner',
        price: '$29.99',
        description: 'Grilled with butter house, potato, salad, and chef house adobo.',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'
    },
    {
        name: 'Aguachiles',
        category: 'lunch',
        price: '$19.99',
        description: 'Shrimp cooked in lime juice and your choice of sauce: Traditional green, Mango, Red, Mixed.',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'
    },
    {
        name: 'Molcajete del Mar',
        category: 'dinner',
        price: '$48.00',
        description: 'Grilled shrimp, tilapia, and mojarra frita topped with chef sauce.',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'
    },
    {
        name: 'Paella',
        category: 'breakfast',
        price: '$39.99',
        description: 'Yellow rice in paella style with a mix of seafood.',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'
    },
    {
        name: 'Fried Fish',
        category: 'lunch',
        price: '$22.99',
        description: 'Fried whole fish with your choice of house spicy sauce.',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'
    },
    {
        name: 'Pasta Alfredo con Camarón',
        category: 'dinner',
        price: '$35.00',
        description: 'Pasta in Alfredo cream sauce with shrimp.',
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/placeholder.png'
    }
]);

const sideDishes = ref([
    {
        name: 'Braised Short Ribs',
        description: 'Grilled ribs cooked to perfection with a savory sauce.',
        price: '$15.00',
    },
    {
        name: 'Roasted Vegetable Platter',
        description: 'A variety of roasted vegetables served with a light seasoning.',
        price: '$22.00',
    },
    {
        name: 'Classic Caesar Salad',
        description: 'Crisp romaine lettuce, parmesan, and house-made Caesar dressing.',
        price: '$58.00',
    },
    {
        name: 'Szechuan Beef Stir-Fry',
        description: 'Beef stir-fried with Szechuan spices and vegetables.',
        price: '$78.00',
    },
    {
        name: 'Vegan Buddha Bowl',
        description: 'A colorful mix of fresh vegetables, grains, and a light dressing.',
        price: '$63.00',
    },
    {
        name: 'Herb-Crusted Salmon',
        description: 'Salmon fillet crusted with fresh herbs, served with a lemon butter sauce.',
        price: '$18.00',
    }
]);

const selectedCategory = ref('all');

const filterMenu = (category) => {
    selectedCategory.value = category;
};

const filteredMenu = computed(() => {
    if (selectedCategory.value === 'all') {
        return menuItems.value;
    }
    return menuItems.value.filter(item => item.category === selectedCategory.value);
});
</script>