<template>
  <div class="card text-center">
    <img :src="product.image" alt="Product image" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
//Este product es el que esta en el componente en index

const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
}
.card:hover {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.24);
}

.btn {
  background-color: rgb(99, 178, 178);
  color: white;
  border-radius: 5px;
}
</style>
