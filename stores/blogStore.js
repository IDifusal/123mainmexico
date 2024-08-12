import { defineStore } from 'pinia';
import axios from 'axios';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    blogs: [],
    recentPosts: [],
    currentPost: null,
    loading: false,
  }),
  actions: {
    async fetchPosts() {
      if (this.blogs.length > 0) {
        return; 
      }
      this.loading = true;
      try {
        const response = await axios.get('https://123mainmexico.com/wp-json/wp/v2/posts?_embed');
        this.blogs = response.data.map(post => ({
          ...post,
          featured_image_src: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/600',
          author_name: post._embedded.author[0].name,
          author_slug: post._embedded.author[0].slug,
          category_name: post._embedded['wp:term'][0][0].name,
          category_slug: post._embedded['wp:term'][0][0].slug,
        }));
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        this.loading = false;
      }
    },
    async searchPosts(query) {
      this.loading = true;
      try {
        const response = await axios.get(`https://123mainmexico.com/wp-json/wp/v2/posts?search=${query}`);
        this.blogs = response.data.map(post => ({
          ...post,
          featured_image_src: post.featured_media ? post._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/600',
          author_name: post._embedded.author[0].name,
          author_slug: post._embedded.author[0].slug,
          category_name: post._embedded['wp:term'][0][0].name,
          category_slug: post._embedded['wp:term'][0][0].slug,
        }));
      } catch (error) {
        console.error('Error searching posts:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchRecentPosts() {
      this.loading = true;
      try {
        const response = await axios.get('https://123mainmexico.com/wp-json/wp/v2/posts?per_page=5');
        this.recentPosts = response.data.map(post => ({
          ...post,
          featured_image_src: post.featured_media ? post._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/150',
          author_name: post._embedded.author[0].name,
          author_slug: post._embedded.author[0].slug,
        }));
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(slug) {
      this.loading = true;
      try {
        const response = await axios.get(`https://123mainmexico.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        const postData = response.data[0];
        this.currentPost = {
          ...postData,
          featured_image_src: postData._embedded['wp:featuredmedia'] ? postData._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/600',
          author_name: postData._embedded.author[0].name,
          author_slug: postData._embedded.author[0].slug,
          tags: postData._embedded['wp:term'][1] || [],
        };
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
