<script setup>
import { computed } from "vue";
const props = defineProps(["carts"]);

const totalcarts = computed(() => {
  return props.carts.length;
});

const totalPrice = computed(() => {
  return props.carts.reduce((acc, item) => {
    acc = acc + item.price;
    return acc;
  }, 0);
});
</script>

<template>
  <div>
    <p>your selected items</p>
    <template v-for="cart in props.carts" :key="cart.id">
      <li>{{ cart.name }}</li>
    </template>
    <p style="color: red">total selected items : {{ totalcarts }}</p>
    <p style="color: green">Total Price : {{ totalPrice }}</p>
  </div>
</template>
