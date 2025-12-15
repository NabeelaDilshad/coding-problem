<script setup>
import { ref } from "vue";
import ProductList from "./ProductList.vue";
import Cart from "./Cart.vue";

const p1 = ref([
  {
    id: 1,
    name: "iPhone 15",
    price: 75000,
    category: "Mobile",
  },
  {
    id: 2,
    name: "Samsung G S23",
    price: 68000,
    category: "Mobile",
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 65000,
    category: "Mobile",
  },
]);

const p2 = ref([
  {
    id: 4,
    name: "MacBook Air M2",
    price: 115000,
    category: "Laptop",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    price: 98000,
    category: "Laptop",
  },
  {
    id: 6,
    name: "HP Pavilion",
    price: 72000,
    category: "Laptop",
  },
]);

const p3 = ref([
  {
    id: 7,
    name: "Sony Headphones",
    price: 12000,
    category: "Accessories",
  },
  {
    id: 8,
    name: "Apple Watch",
    price: 42000,
    category: "Accessories",
  },
  {
    id: 9,
    name: "Logitech Mouse",
    price: 2500,
    category: "Accessories",
  },
]);

const cartList = ref([]);

const addToCardFromChild = (data) => {
  cartList.value.push(data);
};
</script>

<template>
  <h1>Shopping App</h1>
  <ProductList :products="p1" @addCart="addToCardFromChild" />
  <ProductList :products="p2" @addCart="addToCardFromChild" />
  <ProductList :products="p3" @addCart="addToCardFromChild" />

  <hr />
  <h1>CART</h1>
  <Cart :carts="cartList" />
</template>
