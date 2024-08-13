<template>
    <section id="blog" class="blog section-space">
      <div class="container">
        <div class="row g-24 mb-70 mb-sm-50 mb-xs-40 align-items-lg-end align-items-center">
          <div class="col-xl-6">
            <div class="section__title-wrapper text-center text-xl-start">
              <span class="section__subtitle justify-content-start mb-10 mb-xs-5 wow clip-a-z">Our Blog Posts</span>
              <h2 class="section__title mb-0 title-animation">Latest News Insights</h2>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="d-flex justify-content-xl-end mt-xs-10 mt-sm-10 mt-md-10 mt-lg-10 justify-content-center">
              <nuxt-link to="/blog" class="rr-btn wow clip-a-z mb-15">
                <span class="hover-rl"></span>
                <span class="fake_hover"></span>
                <span class="btn-wrap">
                  <span class="text-one">VIEW ALL POSTS <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-1.svg" alt="not found"></span>
                  <span class="text-two">VIEW ALL POSTS <img src="https://html.rrdevs.net/delish/assets/imgs/icon/arrow-right-1.svg" alt="not found"></span>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
  
        <div class="row g-24 mb-minus-24" v-if="!loading">
          <div v-for="(blog, index) in blogs" :key="index" class="col-xl-4 col-md-6">
            <div class="blog__item mb-24">
              <div class="blog__item-media">
                <nuxt-link :to="`/blog/${blog.slug}`">
                  <img :src="blog.featured_image_src" class="img-fluid" :alt="blog.title">
                </nuxt-link>
                <div class="blog__item-date">{{ formatDate(blog.date, 'DD MMM') }}</div>
              </div>
  
              <div class="blog__item-content">
                <div class="blog__item-content__top">
                  <div class="blog__item-meta-tags d-flex flex-wrap">
                    <nuxt-link v-for="(tag, index) in blog.tags" :key="index" :to="`/tag/${tag.slug}`">{{ tag.name }}</nuxt-link>
                  </div>
                  <h6 class="mt-15">
                    <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title.rendered }}</nuxt-link>
                  </h6>
                </div>
                <div class="blog__item-content__bottom">
                  <div class="blog__item-content__bottom-text">
                    <nuxt-link :to="`/blog/${blog.slug}`">
                      <img src="https://html.rrdevs.net/delish/assets/imgs/blog/comment.png" alt="not found">
                      <span>{{ blog.comments }} Comments</span>
                    </nuxt-link>
                  </div>
                  <nuxt-link :to="`/blog/${blog.slug}`" class="blog__item-content__bottom-readmore">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 1C7.7 1 14 1 17 1M17 1V10.5M17 1L1 17" stroke="#74787C" stroke-width="2"/>
                    </svg>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div v-else class="text-center">
          <p>Loading blog posts...</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useBlogStore } from '@/stores/blogStore';
  import { storeToRefs } from 'pinia';
  
  const blogStore = useBlogStore();
  const { blogs, loading } = storeToRefs(blogStore);

  function formatDate(dateString, format = 'DD MMM') {
  const options = {};

  if (format.includes('DD')) options.day = '2-digit';
  if (format.includes('MMM')) options.month = 'short';
  if (format.includes('YYYY')) options.year = 'numeric';

  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

  onMounted(() => {
    blogStore.fetchPosts();
  });
  </script>
  