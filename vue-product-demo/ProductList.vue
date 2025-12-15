<script setup>
import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";
const props = defineProps(["products"]);
const emit = defineEmits(["addCart"]);

onMounted(() => {
  console.log("props", props);
});

const addToCard = (selectedProduct) => {
  emit("addCart", selectedProduct);
};
</script>
<template>
  <div class="cardContainer">
    <template v-for="(product, index) in props.products" :key="product.id">
      <div class="card">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.category }}</p>
        <button @click="addToCard(product)">ADD TO CARD</button>
      </div>
    </template>
  </div>
  <div></div>
</template>

<style>
.cardContainer {
  display: flex;
  justify-content: space-evenly;
  background-color: bisque;
}

.card {
  height: 150px;
  width: 150px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: aquamarine;
  margin-top: 12px;
  text-align: center;
}
</style>
