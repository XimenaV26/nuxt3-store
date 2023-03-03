<template>
  <div>
    <h2>About</h2>
    <p>Esta es la pagina de about</p>
  </div>
  <div>{{ data }}</div>
</template>

<!--<script setup lang="ts">
const { data } = await useFetch("/api/nuxt?name=mario", {
  method: "post",
  body: {
    age: 30,
  },
});
</script>-->
<script setup lang="ts">
const { data } = await useFetch("/api/nuxt");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
