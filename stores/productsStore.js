import { defineStore } from 'pinia';
import axios from 'axios';
const customerKey = process.env.VITE_CUSTOMER_KEY;
const customerSecret = process.env.VITE_CUSTOMER_SECRET;
export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    loading: false,
    cart:[]
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
        cartItem.quantity += product.quantity; // Assuming product has a quantity property
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
            return; // Exit if blogs array already has content
          }
        this.loading = true;
        try {
          const response = await axios.get('https://123mainmexico.com/wp-json/wc/v3/products?_embed', {
            auth: {
              username: customerKey,
              password: customerSecret,
            },
          });
          this.products = response.data.map(product => (
            console.log("PRODUCT DETAILS", product),
            {
            ...product,
          }));
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          this.loading = false;
        }
      },
  },
});
