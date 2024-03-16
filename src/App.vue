<script setup>
import { onMounted, ref, watch } from 'vue';
import { useItemsFetch } from './composables/useItemsFetch';
import { useItemsFilter } from './composables/useItemsFilter';
import Breadcrumbs from './components/Breadcrumbs.vue';
import Sort from './components/Sort.vue';
import CatalogList from './components/CatalogList.vue';

const { items } = useItemsFetch();

const { filteredItems, filter } = useItemsFilter(items);

// watch(filteredItems, () => {
//   console.log(filteredItems);
// });
</script>

<template>
  <div class="wrapper">
    <Breadcrumbs />
    <div class="page-title">
      <h1>Комплекты стеллажных систем</h1>
    </div>
    <Sort :filter="filter" />
    <CatalogList
      v-if="items"
      :items="filteredItems" />
  </div>
</template>

<style scoped></style>
