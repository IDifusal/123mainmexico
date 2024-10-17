<template>
  <main v-if="post">
    <div class="breadcrumb__area breadcrumb-space overly theme-bg-secondary overflow-hidden">
      <div class="breadcrumb__background" 
      v-background
        :data-background="post.featured_image_src"></div>
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12">
            <div class="breadcrumb__content text-center">
              <h2 class="breadcrumb__title color-white title-animation">{{ post.title.rendered }}</h2>
              <div class="breadcrumb__menu">
                <nav>
                  <ul>
                    <li><span><router-link to="/">Home</router-link></span></li>
                    <li class="active"><span>Blog</span></li>
                  </ul>
                </nav>
              </div>
            </div>
            <span class="breadcrumb__big-title">News Insights</span>
          </div>
        </div>
      </div>
    </div>
    <section class="blog section-space" v-if="post">
      <div class="container">
        <div class="row">
          <div class="col-xl-8">
            <div class="blog__details">
              <div class="blog__details-thumb mb-35">
                <img :src="post.featured_image_src" class="img-fluid" alt="image not found">
              </div>

              <ul class="blog__details-meta mb-15">
                <li><i class="fa-regular fa-calendar"></i>{{ new Date(post.date).toLocaleDateString() }}</li>
                <li><a><i class="fa-regular fa-user"></i>by 123MainMexico</a></li>
              </ul>

              <div class="blog__details-content">
                <h4>{{ post.title.rendered }}</h4>

                <div v-html="post.content.rendered"></div>

                <!-- <blockquote>
                  <span class="icon"><img src="https://html.rrdevs.net/delish/assets/imgs/blog-details/quote.png"
                      alt="image not found"></span>
                  <p>“We offer competitive pricing and deliver exceptional value for your investment our goal is to help
                    you achieve the highest”</p>
                  <h5>William Benjamin</h5>
                  <span>Top Author</span>
                </blockquote> -->
              </div>

              <div
                class="blog__details-bottom mt-25 mb-xs-20 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between">
                <div class="blog__details-bottom-tags_wapper d-flex align-items-center">
                  <span>Tags</span>
                  <div class="blog__details-bottom-tags">
                    <a v-for="tag in post.tags" :key="tag.id" :href="'/tag/' + tag.slug">{{ tag.name }}</a>
                  </div>
                </div>

                <div class="share-social-media_wrapper">
                  <span>Social Icon</span>

                  <div class="share-social-media">
                    <a href="http://www.facebook.com/123mainmexico"><i class="fa-brands fa-facebook-f"></i></a>
                     
                    <a href="https://www.instagram.com/123mainmexico/"><i class="fa-brands fa-instagram"></i></a>
                    
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div class="col-xl-4">
            <div class="blog-4__right sidebar-rr-sticky">
              <div class="sidebar">
                <div class="sidebar__widget section-bg-2">
                  <div class="sidebar__widget-search">
                    <div class="search__bar">
                      <input type="text" id="search" placeholder="Enter Keyword">
                      <button>
                        <i class="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <recent-posts/>
                <div class="sidebar__widget section-bg-2">
                  <h4 class="sidebar__widget-title">Gallery</h4>
                  <div class="sidebar__widget-gallery">
                    <div class="gallery-photo">
                      <a class="popup-image"
                        href="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/big/gallery-1.png">
                        <img src="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/gallery-1.png"
                          class="img-fluid" alt="image not found">
                      </a>

                      <a class="popup-image"
                        href="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/big/gallery-2.png">
                        <img src="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/gallery-2.png"
                          class="img-fluid" alt="image not found">
                      </a>

                      <a class="popup-image"
                        href="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/big/gallery-3.png">
                        <img src="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/gallery-3.png"
                          class="img-fluid" alt="image not found">
                      </a>

                      <a class="popup-image"
                        href="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/big/gallery-4.png">
                        <img src="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/gallery-4.png"
                          class="img-fluid" alt="image not found">
                      </a>

                      <a class="popup-image"
                        href="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/big/gallery-5.png">
                        <img src="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/gallery-5.png"
                          class="img-fluid" alt="image not found">
                      </a>

                      <a class="popup-image"
                        href="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/big/gallery-6.png">
                        <img src="https://html.rrdevs.net/delish/assets/imgs/blog-4/gallery/gallery-6.png"
                          class="img-fluid" alt="image not found">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useBlogStore } from '@/stores/blogStore';
import { useUiStore } from '~/stores/uiStore';
const uiStore = useUiStore();
import { storeToRefs } from 'pinia';

const route = useRoute();
const blogStore = useBlogStore();
const { currentPost: post, loading } = storeToRefs(blogStore);

onMounted(() => {
  uiStore.setLoading(true);
  const slug = route.params.slug;
  blogStore.fetchPost(slug);
  uiStore.setLoading(false);
});
</script>