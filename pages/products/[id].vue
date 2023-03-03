<!-- /products/:id (cualquier id)-->
<template>
  <div>
    <Head>
      <Title>Nuxt store | {{ product?.title }}</Title>
      <Meta name="description" :content="product?.description" />
    </Head>
    <!--<p>Product details for {{ id }}</p>-->

    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
import { Product } from "~~/interfaces/interfacesProductAPI";
//Este id debe machar con el nombre [id].vue
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

//obtener el producto. Este es para obtener el detalle de cada producto
const { data: product } = await useFetch<Product>(uri);

//Asegurarnos que el producto existe
if (!product.value) {
  throw createError({
    statusCode: 400,
    statusMessage: "Product not found",
    fatal: true,
  });
}

//Esta pagina va autilizar el layout de products
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
