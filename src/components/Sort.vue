<script setup>
import { ref, onMounted } from 'vue';
import { getMaterials } from '../api/api';

// Props
const props = defineProps({
  filter: {
    type: Object,
    required: true,
  },
});

const materialsSelectOptions = ref([]);

onMounted(() => {
  // Получаем данные материалов
  getMaterials().then((data) => {
    materialsSelectOptions.value = data.map((item) => {
      return {
        label: item.name,
        id: item.id,
      };
    });
  });
});
</script>

<template>
  <form class="sort">
    <div class="sort__row">
      <div class="sort__item">
        <p class="sort__item-name">Сортировать по</p>
        <label class="sort__item-label">
          <!-- <select
            class="sort__item-select select"
            name=""
            id="">
            <option value="">По возрастанию</option>
            <option value="">По убыванию</option>
          </select> -->
          <v-select
            class="sort__item-select"
            placeholder="Выберите"
            v-model="props.filter.sort"
            :options="[
              { label: 'По возрастанию', id: 'asc' },
              { label: 'По убыванию', id: 'desc' },
            ]"
            :reduce="(item) => item.id">
          </v-select>
        </label>
      </div>

      <div class="sort__item">
        <p class="sort__item-name">Материал</p>
        <label class="sort__item-label">
          <!-- <select
            class="sort__item-select select"
            name=""
            id="">
            <option value="">Металл</option>
            <option value="">Дерево</option>
          </select> -->
          <v-select
            class="sort__item-select"
            placeholder="Выберите"
            v-model="props.filter.materials"
            :reduce="(item) => +item.id"
            :options="materialsSelectOptions">
          </v-select>
        </label>
      </div>
    </div>
  </form>
</template>

<style scoped>
.sort {
  .sort__row {
    display: flex;
    align-items: flex-start;
    gap: 0 24px;
  }

  .sort__item {
    width: 100%;
    max-width: 288px;
  }

  .sort__item-name {
    font-size: 12px;
    font-family: var(--SFProDisplay);
    color: #4f4f4f;
    padding-left: 16px;
    margin: 0;
    margin-bottom: 7px;
  }
}

@media screen and (max-width: 576px) {
  .sort {
    .sort__row {
      flex-direction: column;
      gap: 24px 0;
    }

    .sort__item {
      max-width: none;
    }
  }
}
</style>
