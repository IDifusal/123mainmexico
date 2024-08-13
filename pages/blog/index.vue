<template>
    <main>
        <!-- Breadcrumb area start  -->
        <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
            <div class="breadcrumb__background"
            v-background
                data-background="https://html.rrdevs.net/delish/assets/imgs/breadcrumb/page-header-1.png"></div>
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-12">
                        <div class="breadcrumb__content text-center">
                            <h2 class="breadcrumb__title color-white title-animation">Latest News</h2>
                            <div class="breadcrumb__menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="/">Home</a></span></li>
                                        <li class="active"><span>Latest News</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <span class="breadcrumb__big-title">News Insights</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb area end  -->

        <!-- blog area start  -->
        <section class="blog-4 section-space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8">
                        <div class="blog-4__left" v-if="blogs.length">
                            <div v-for="post in blogs" :key="post.id" class="blog-4__item section-bg-2 mb-30">
                                <div class="blog-4__item-thumb">
                                    <a :href="'/blog/' + post.slug" class="blog-4__item-thumb-img">
                                        <img :src="post.featured_image_src" class="img-fluid" alt="image not found">
                                    </a>
                                    <ul class="blog-4__item-tag">
                                        <li><a :href="'/category/' + post.category">{{ post.category }}</a></li>
                                    </ul>
                                </div>
                                <div class="blog-4__item-content">
                                    <ul class="blog-4__item-meta mb-15">
                                        <li><i class="fa-regular fa-calendar"></i>{{ new
                                            Date(post.date).toLocaleDateString() }}</li>
                                        <li><a :href="'/author/' + post.author_slug"><i
                                                    class="fa-regular fa-user"></i>by {{ post.author_name }}</a></li>
                                    </ul>
                                    <h4 class="blog-4__item-content-title text-uppercase fw-bold mb-15">
                                        <nuxt-link :to="'/blog/' + post.slug">{{ post.title.rendered }}</nuxt-link>
                                    </h4>
                                    <p class="blog-4__item-content-p mb-20" v-html="post.excerpt.rendered"></p>
                                    <a :href="'/blog/' + post.slug" class="readmore">Read Details <i
                                            class="fa-regular fa-angles-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <p>No blog posts available.</p>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="blog-4__right sidebar-rr-sticky">
                            <div class="sidebar">
                                <div class="sidebar__widget section-bg-2">
                                    <div class="sidebar__widget-search">
                                        <div class="search__bar">
                                            <input type="text" id="search" placeholder="Enter Keyword"
                                                v-model="searchQuery">
                                            <button @click="searchPosts">
                                                <i class="fa-regular fa-magnifying-glass"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <recent-posts/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- blog area end  -->
    </main>
    <!-- Body main wrapper end -->

    <!-- cta area start -->
    <!-- cta area end -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useBlogStore } from '@/stores/blogStore';
import { storeToRefs } from 'pinia';

const blogStore = useBlogStore();
const { blogs, loading } = storeToRefs(blogStore);

onMounted(() => {
    blogStore.fetchPosts();
});
</script>