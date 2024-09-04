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
     staticItems :[
      {
        name: 'Fried Fish Red',
        category: 'appetizers',
        slug: 'fried-fish-red',
        price: '$12.99',
        description: null,
        image: 'https://api.123mainmexico.com/wp-content/uploads/2024/08/Fried-Fish-Red-Snapper-123-300x300.jpg',
        images:[
          {
            src: 'https://api.123mainmexico.com/wp-content/uploads/2024/08/Fried-Fish-Red-Snapper-123-300x300.jpg',
          }
        ]
      },
      {
        name: 'Huachinango House',
        category: 'appetizers',
        slug: 'huachinango-house',
        price: '$16.99',
        description: null,
        image: 'https://api.123mainmexico.com/wp-content/uploads/2024/08/Huachimango-House.jpg',
        images:[
          {
            src: 'https://api.123mainmexico.com/wp-content/uploads/2024/08/Huachimango-House.jpg',
          }
        ]
      },
      {
        name: 'Camarones Botaneros',
        category: 'appetizers',
        price: '$9.99',
        slug: 'camarones-botaneros',
        description: null,
        image: 'https://api.123mainmexico.com/wp-content/uploads/2024/08/Camarones-Botaneros.png',
        images:[
          {
            src: 'https://api.123mainmexico.com/wp-content/uploads/2024/08/Camarones-Botaneros.png',
          }
        ]
      },
      {
        name: 'Las costillas del patron',
        category: 'appetizers',
        slug: 'las-costillas-del-patron',
        price: '$12.99',
        description: null,
        image: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/Las-Costillas-del-Patron.jpg',
        images:[
          {
            src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/Las-Costillas-del-Patron.jpg',
          }
        ]
      },
      {
        name:"Molcajete del mar",
        category:"appetizers",
        slug:"molcajete-del-mar",
        price:"$39.99",
        image:"http://api.123mainmexico.com/wp-content/uploads/2024/08/Molcajete-del-mar.jpg",
        images:[
          {
            src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/Molcajete-del-mar.jpg',
          }
        ]
      },
      {
        name:"Molcajete House",
        slug:"molcajete-house",
        category:"appetizers",
        price:"$39.99",
        image:"http://api.123mainmexico.com/wp-content/uploads/2024/08/Molcajete-House.png",
        images:[
          {
            src: 'http://api.123mainmexico.com/wp-content/uploads/2024/08/Molcajete-House.png',
          }
        ] 
      }
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
      if (this.products.length > 0) {
        return; 
      }      
      this.products = this.staticItems;
     
        this.loading = true;
        try {
          const response = await axios.get('https://api.123mainmexico.com/wp-json/wc/v3/products?_embed&filter[limit]=-1', {
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
