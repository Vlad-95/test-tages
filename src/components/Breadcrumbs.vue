<script setup></script>

<template>
  <ol class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="javascript::">Главная</a>
    </li>
    <li class="breadcrumbs__item">
      <a href="javascript::">Системы хранения</a>
    </li>
    <li class="breadcrumbs__item">
      <span>Комплекты стеллажных систем</span>
    </li>
  </ol>
</template>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 31px 0;
  list-style: none;

  .breadcrumbs__item {
    &:not(:last-child) {
      &::after {
        content: '/';
        margin: 0 13px;
        color: rgba(var(--black), 0.5);
      }
    }

    a {
      color: rgba(var(--black), 0.5);
      text-decoration: none;
    }
  }
}
</style>
