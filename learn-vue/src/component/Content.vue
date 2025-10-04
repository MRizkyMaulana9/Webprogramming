<template>
  <section>
    <h1>Content</h1>
  </section>
  <p>{{ number }}</p>
  <div class="buttons">
    <button @click="Add">Add</button>
    <button @click="Minus" :disabled="number == 0">Minus</button>
    <button @click="Reset">Reset</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const number = ref(0);

const Add = () => {
  number.value++;
};

const Minus = () => {
  number.value--;
};

const Reset = () => {
  number.value = 0;
};
</script>

<style scoped>
.buttons button {
  margin: 10px;
  padding: 10px;
  background-color: aqua;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.buttons button:hover {
  background-color: aquamarine;
  transform: translateY(-2y);
}

.buttons button:disabled {
  background-color: grey;
}

p {
  font-size: 20px;
  text-align: center;
}
</style>
