import { ref, onMounted } from 'vue';
import { getItems } from '../api/api';

export function useItemsFetch() {
  const items = ref(null);

  onMounted(() => {
    getItems().then((data) => {
      items.value = data;
    });
  });

  return {
    items,
  };
}
