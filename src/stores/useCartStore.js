import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  addToCartLS,
  removeFromCartLS,
  getCartLS,
} from '../services/cartsAndFavsService';

export const useCartStore = defineStore('cart', () => {
  const cart = ref({ ...getCartLS() });

  const addToCart = (id) => {
    cart.value[id] = 1;
    addToCartLS(id);
  };

  const removeFromCart = (id) => {
    delete cart.value[id];
    removeFromCartLS(id);
  };

  const getItemInCart = (id) => {
    return cart.value[id];
  };

  return {
    addToCart,
    removeFromCart,
    getItemInCart,
  };
});
