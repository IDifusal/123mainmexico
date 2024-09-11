import { defineStore } from 'pinia';
import axios from 'axios';
const customerKey = "ck_622d1f051ab98a1ec869d2e9aa4a666dab340076";
const customerSecret = "cs_b90ab687c558829dea4273a1c0d12f0221d83b53";
export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    loading: false,
    cart:[],
    
  }),
  actions: {
    removeFromCart(index){
      this.cart.splice(index, 1)
    },
    getTotalCart(){
      return this.cart.reduce((acc, product) => acc + product.price, 0)
    },
    addToCart(product) {
      const cartItem = this.cart.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += product.quantity; 
      } else {
        this.cart.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    async getProductBySlug(slug){
        const productFound = this.products.find(product => product.slug === slug);
        return productFound
    },
    async fetchProducts() {
      if (this.products.length > 0) {
        return; 
      }      
      this.loading = true;
      try {
        const batchSize = 10;  // Number of products per request
        const totalBatches = 10; // Total number of requests (3 * 10 = 30)
        
        for (let i = 0; i < totalBatches; i++) {
          const response = await axios.get(`https://api.123mainmexico.com/wp-json/wc/v3/products?_embed&per_page=${batchSize}&page=${i + 1}`, {
            auth: {
              username: customerKey,
              password: customerSecret,
            },
          });
          
          // Logging each product's details and appending them to the products array
          this.products = [
            ...this.products,
            ...response.data.map(product => (
              console.log("PRODUCT DETAILS", product),
              { ...product }
            ))
          ];
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
    
  },
});
