<template>
    <div class="sidebar__widget section-bg-2">
      <h4 class="sidebar__widget-title">Recent Posts</h4>
      <div class="sidebar-post__wrapper">
        <div v-for="(blog, index) in blogs" :key="index" class="sidebar__widget-post">
          <a :href="'/blog/' + blog.slug" class="sidebar__widget-post__thum">
            <img :src="blog.featured_image_src" class="img-fluid" alt="image not found">
          </a>
          <div class="sidebar__widget-post__content">
            <ul class="sidebar__widget-post__content-meta">
              <li>
                <a :href="'/blog/' + blog.slug">
                  <i class="fa-light fa-circle-user"></i>
                  by {{ blog.author }}
                </a>
              </li>
            </ul>
            <a :href="'/blog/' + blog.slug">
              <h5 class="sidebar__widget-post__content-title">{{ blog.title.rendered }}</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
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
  