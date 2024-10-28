import { defineStore } from 'pinia';
import axios from 'axios';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    blogs: [],
    recentPosts: [],
    currentPost: null
  }),
  actions: {
    async fetchPosts() {
      if (this.blogs.length > 0) {
        return; 
      }
      try {
        const response = await axios.get('https://123.espanglishmarketing.com/wp-json/wp/v2/posts?_embed');

        // Clean up the response data
        const cleanedData = response.data.startsWith('l') ? response.data.slice(1) : response.data;
        
        // Parse the cleaned data
        this.blogs = JSON.parse(cleanedData).map(post => ({
          ...post,
          featured_image_src: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/600',
          author_name: post._embedded.author[0].name,
          author_slug: post._embedded.author[0].slug,
          category_name: post._embedded['wp:term'][0][0].name,
          category_slug: post._embedded['wp:term'][0][0].slug,
        }));
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      } 
    },
    async searchPosts(query) {
      try {
        // Search for the post in the local blogs array
        const localPost = this.blogs.find(post => 
          post.title.rendered.toLowerCase().includes(query.toLowerCase())
        );
    
        if (localPost) {
          // If found, set the current post and return
          this.currentPost = localPost;
          return;
        }
    
        // If not found, fetch from the API
        const response = await axios.get(`https://123.espanglishmarketing.com/wp-json/wp/v2/posts?search=${query}&_embed`);
        if (response.data.length > 0) {
          this.blogs = response.data.map(post => ({
            ...post,
            featured_image_src: post._embedded['wp:featuredmedia'] 
              ? post._embedded['wp:featuredmedia'][0].source_url 
              : 'https://via.placeholder.com/600',
            author_name: post._embedded.author[0].name,
            author_slug: post._embedded.author[0].slug,
            category_name: post._embedded['wp:term'][0][0].name,
            category_slug: post._embedded['wp:term'][0][0].slug,
          }));
    
          // Set the first post in the result as the current post
          this.currentPost = this.blogs[0];
        } else {
          console.warn('No posts found for this query.');
        }
      } catch (error) {
        console.error('Error searching posts:', error);
      }
    },    
    async fetchRecentPosts() {
      try {
        const response = await axios.get('https://123.espanglishmarketing.com/wp-json/wp/v2/posts?per_page=5');
        this.recentPosts = response.data.map(post => ({
          ...post,
          featured_image_src: post.featured_media ? post._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/150',
          author_name: post._embedded.author[0].name,
          author_slug: post._embedded.author[0].slug,
        }));
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    },
    async fetchPost(slug) {
      try {
        const response = await axios.get(`https://123.espanglishmarketing.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        
        // Clean the response data if necessary
        const cleanedData = Array.isArray(response.data) ? response.data : 
                             response.data.startsWith('l') ? JSON.parse(response.data.slice(1)) : 
                             JSON.parse(response.data);
    
        const postData = cleanedData[0];
        if (postData) {
          this.currentPost = {
            ...postData,
            featured_image_src: postData._embedded['wp:featuredmedia'] ? postData._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/600',
            author_name: postData._embedded.author[0].name,
            author_slug: postData._embedded.author[0].slug,
            tags: postData._embedded['wp:term'][1] || [],
          };
        } else {
          console.warn('No post found for the given slug.');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
    
  },
});
