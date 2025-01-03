// stores/productsStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import data from './products.json';
const customerKey = "ck_71358c45f6c31fcda764870e5ce08f3f78074f44";
const customerSecret = "cs_9b111592732b3c5500d567240eee4727688d9dd1";

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [
      ...data.map(product => {
        return {
          ...product,
          price: parseFloat(product.price).toFixed(2),
        };
      }).reverse()
    ],
    loading: false,
    cart: [],
    categories:[]
  }),
  actions: {
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    getTotalCart() {
      return this.cart.reduce((acc, product) => acc + (product.price * product.quantity || 0), 0);
    },
    addToCart(product) {
      const cartItem = this.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += product.quantity;
      } else {
        this.cart.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    async getProductBySlug(slug) {
      return this.products.find(product => product.slug === slug) || null; // Devuelve null si no se encuentra
    },
    async filterProductsByCategory(category) {
      return this.products.filter(product => product.categories.some(cat => cat.slug === category));
    },
    async fetchCategories() {
      this.loading = true;
      this.categories = []; 
      let allCategories = [];
      
      try {
        const pagesToFetch = 2; 
        const perPage = 10; 
    
        for (let page = 1; page <= pagesToFetch; page++) {
          const response = await axios.get(`https://123.espanglishmarketing.com/wp-json/wc/v2/products/categories?_embed&page=${page}&per_page=${perPage}`, 
            {
              auth: {
                username: customerKey,
                password: customerSecret,
              },
            }
          );
    
          // Clean the response data if necessary
          const filteredCategories = response.data.filter(category => category.name !== 'Uncategorized');
          allCategories = [...allCategories, ...filteredCategories]; 
        }
    
        this.categories = allCategories.sort((a, b) => a.menu_order - b.menu_order);        
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        this.loading = false; 
      }
    },
    
      
    async fetchProducts() {
      console.log('Fetching products...');
      if (this.products.length > 0) {
        return;
      }
      this.loading = true;
      try {
        const requests = [];
      
          const request = axios.get(`https://123.espanglishmarketing.com/wp-json/custom-api/v1/products`, {
            auth: {
              username: customerKey,
              password: customerSecret,
            },
          });
          requests.push(request); // Add each request to the array
    

        // Wait for all requests to complete
        const responses = await Promise.all(requests);

        // Process all responses
        responses.forEach(response => {
          this.products.push(...response.data.map(product => {
            return {
              ...product,
              price: parseFloat(product.price).toFixed(2), // Ensure price has two decimal points
            };
          }));
        });

      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.products.reverse(); // Invert the order of the products array after all products are fetched
        this.loading = false;
      }
    }

  },
});
