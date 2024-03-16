import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  addToFavsLS,
  removeFromFavsLS,
  getFavsLS,
} from '../services/cartsAndFavsService';

export const useFavsStore = defineStore('favs', () => {
  const favs = ref({ ...getFavsLS() });

  const addToFavs = (id) => {
    console.log('add');
    favs.value[id] = 1;
    addToFavsLS(id);
  };

  const removeFromFavs = (id) => {
    console.log('delete');
    delete favs.value[id];
    removeFromFavsLS(id);
  };

  const getItemInFavs = (id) => {
    return favs.value[id];
  };

  return {
    addToFavs,
    removeFromFavs,
    getItemInFavs,
  };
});
