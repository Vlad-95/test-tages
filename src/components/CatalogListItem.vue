<script setup>
import { ref } from 'vue';
import { useCartStore } from '../stores/useCartStore';
import { useFavsStore } from '../stores/useFavsStore';

// Stores
const cartStore = useCartStore();
const favsStore = useFavsStore();

// Props
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

// State
const addedToCart = ref(cartStore.getItemInCart(props.item.id) ? true : false);
const addedToFavs = ref(favsStore.getItemInFavs(props.item.id) ? true : false);

// Methods
const addToCart = (id) => {
  addedToCart.value = !addedToCart.value;

  addedToCart.value ? cartStore.addToCart(id) : cartStore.removeFromCart(id);
};

const addToFavs = (id) => {
  addedToFavs.value = !addedToFavs.value;
  addedToFavs.value ? favsStore.addToFavs(id) : favsStore.removeFromFavs(id);
};
</script>

<template>
  <div
    class="catalog-list__item"
    :data-id="item.id">
    <div
      v-if="item.price.old_price"
      class="catalog-list__item-label">
      Скидка
    </div>
    <div class="catalog-list__item-image">
      <img
        :src="item.image.url"
        alt="" />
    </div>
    <div class="catalog-list__item-content">
      <div class="catalog-list__item-id">{{ item.code }}</div>
      <div class="catalog-list__item-name">{{ item.name }}</div>
      <div class="catalog-list__item-prices">
        <div
          v-if="item.price.old_price"
          class="catalog-list__item-price catalog-list__item-price_old">
          {{ parseInt(item.price.old_price) }} &#8381;
        </div>
        <div class="catalog-list__item-price catalog-list__item-price_current">
          {{ parseInt(item.price.current_price) }} &#8381;
        </div>
      </div>

      <div class="catalog-list__item-actions">
        <button
          type="button"
          class="catalog-list__item-btn catalog-list__item-btn_basket"
          :class="{ added: addedToCart }"
          @click="() => addToCart(item.id)">
          <svg v-if="addedToCart">
            <use xlink:href="/img/sprite.svg#basket-added"></use>
          </svg>
          <svg v-else>
            <use xlink:href="/img/sprite.svg#basket"></use>
          </svg>
        </button>

        <button
          type="button"
          class="catalog-list__item-btn catalog-list__item-btn_like"
          :class="{ added: addedToFavs }"
          @click="() => addToFavs(item.id)">
          <svg>
            <use xlink:href="/img/sprite.svg#like"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog-list__item {
  border: 1px solid #eeeeee;
  position: relative;
}

.catalog-list__item-label {
  position: absolute;
  left: 0;
  top: 9px;
  background-color: rgb(var(--red));
  color: rgb(var(--white));
  font-family: var(--SFProDisplay);
  font-weight: 600;
  font-size: 14px;
  padding: 3px 16px;
}

.catalog-list__item-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 257px;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
}

.catalog-list__item-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 13px 12px 2px;
}

.catalog-list__item-id {
  width: 100%;
  font-size: 10px;
  text-transform: uppercase;
  color: #888888;
  margin-bottom: 10px;
}

.catalog-list__item-name {
  width: 100%;
  color: rgb(var(--black));
  font-weight: 500;
  margin-bottom: 3px;
}

.catalog-list__item-prices {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 9px;
}

.catalog-list__item-price {
  font-size: 16px;

  &.catalog-list__item-price_old {
    text-decoration: line-through;
    color: #888888;
  }

  &.catalog-list__item-price_current {
  }
}

.catalog-list__item-actions {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 0 10px;
}

.catalog-list__item-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 36px;
  height: 36px;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  & svg {
    width: 22px;
    height: 22px;
    fill: rgb(var(--black));
  }

  &.catalog-list__item-btn_basket.added {
    & svg {
      fill: rgb(var(--green));
    }
  }

  &.catalog-list__item-btn_like.added {
    & svg {
      fill: rgb(var(--red));
    }
  }
}

@media screen and (max-width: 1200px) {
  .catalog-list__item-prices {
    width: 100%;
  }

  .catalog-list__item-actions {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
