import { computed, ref, watchEffect } from 'vue';

export function useItemsFilter(items) {
  const filter = ref({
    sort: null,
    materials: null,
  });

  const sortFilter = (list) => {
    if (filter.value.sort === 'asc') {
      return list
        .slice()
        .sort((a, b) => a.price.current_price - b.price.current_price);
    } else if (filter.value.sort === 'desc') {
      return list
        .slice()
        .sort((a, b) => b.price.current_price - a.price.current_price);
    }
  };

  const materialsFilter = (list) => {
    if (filter.value.materials === 1) {
      return list.slice().filter((item) => item.material === 1);
    } else if (filter.value.materials === 2) {
      return list.slice().filter((item) => item.material === 2);
    }
  };

  const filteredItems = computed(() => {
    let filteredList = items.value;

    if (filter.value.materials) {
      filteredList = materialsFilter(filteredList);
    }

    if (filter.value.sort) {
      filteredList = sortFilter(filteredList);
    }

    return filteredList;
  });

  return {
    filter,
    filteredItems,
  };
}
