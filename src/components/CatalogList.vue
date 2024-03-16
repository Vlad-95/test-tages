<script setup>
import CatalogListItem from './CatalogListItem.vue';

// Props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="catalog-list">
    <div class="catalog-list__wrap">
      <CatalogListItem
        v-for="item in items"
        :key="item.id"
        :item="item" />
    </div>
  </div>
</template>

<style scoped>
.catalog-list {
  padding: 41px 0 103px;

  .catalog-list__wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 48px;
  }
}

@media screen and (max-width: 1200px) {
  .catalog-list {
    .catalog-list__wrap {
      gap: 20px;
    }
  }
}

@media screen and (max-width: 992px) {
  .catalog-list {
    .catalog-list__wrap {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (max-width: 768px) {
  .catalog-list {
    .catalog-list__wrap {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media screen and (max-width: 500px) {
  .catalog-list {
    .catalog-list__wrap {
      grid-template-columns: 1fr;
    }
  }
}
</style>
