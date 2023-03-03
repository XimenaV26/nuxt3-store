<template>
  <div class="grid grid-cols-4 gap-5">
    <!-- prodcuts es el arreglo de products en data-->
    <div v-for="eachproduct in products" :key="eachproduct.id">
      <!-- Dentro va a estar el titulo del producto-->
      <ProductCard :product="eachproduct" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "@/interfaces/interfacesProductAPI";
definePageMeta({
  layout: "products",
});

//Fetch the products
const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);

useHead({
  title: "Nuxt store | Merch",
  meta: [
    {
      name: "Products of Nuxt store",
      content: "Nuxt merch",
    },
  ],
});
</script>
