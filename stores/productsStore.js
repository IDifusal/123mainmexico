import { defineStore } from 'pinia';
import axios from 'axios';
const customerKey = "ck_de595b1c5cc4f0f302e4938fd70e7a3879b49c2a";
const customerSecret = "cs_6880ab65c9638275d1da495ea98596cd048a5cf7";
export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    loading: false,
    cart:[],
     staticItems :[
      {
        name: 'Fried Fish Red',
        category: 'appetizers',
        slug: 'fried-fish-red',
        price: '$12.99',
        description: null,
        image: 'https://123mainmexico.com/wp-content/uploads/2024/08/Fried-Fish-Red-Snapper-123-300x300.jpg',
        images:[
          {
            src: 'https://123mainmexico.com/wp-content/uploads/2024/08/Fried-Fish-Red-Snapper-123-300x300.jpg',
          }
        ]
      },
      {
        name: 'Huachinango House',
        category: 'appetizers',
        slug: 'huachinango-house',
        price: '$16.99',
        description: null,
        image: 'https://123mainmexico.com/wp-content/uploads/2024/08/Huachimango-House.jpg',
        images:[
          {
            src: 'https://123mainmexico.com/wp-content/uploads/2024/08/Huachimango-House.jpg',
          }
        ]
      },
      {
        name: 'Camarones Botaneros',
        category: 'appetizers',
        price: '$9.99',
        slug: 'camarones-botaneros',
        description: null,
        image: 'https://123mainmexico.com/wp-content/uploads/2024/08/Camarones-Botaneros.png',
        images:[
          {
            src: 'https://123mainmexico.com/wp-content/uploads/2024/08/Camarones-Botaneros.png',
          }
        ]
      },
      {
        name: 'Las costillas del patron',
        category: 'appetizers',
        slug: 'las-costillas-del-patron',
        price: '$12.99',
        description: null,
        image: 'http://123mainmexico.com/wp-content/uploads/2024/08/Las-Costillas-del-Patron.jpg',
        images:[
          {
            src: 'http://123mainmexico.com/wp-content/uploads/2024/08/Las-Costillas-del-Patron.jpg',
          }
        ]
      },
    ]
    
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
      this.products = this.staticItems;
        if (this.products.length > 0) {
            return; 
          }
        this.loading = true;
        try {
          const response = await axios.get('https://123mainmexico.com/wp-json/wc/v3/products?_embed&filter[limit]=-1', {
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
