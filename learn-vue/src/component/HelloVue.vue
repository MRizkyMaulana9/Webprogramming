<script setup>
//javascript Code
const name = "<b>Evan You</b>";
</script>

<template>
  <!--HTML-->
  <header>
    <h1>HelloVue</h1>
    <p>Programmer :{{ name }}</p>
    <div v-html="name"></div>
  </header>
</template>

<style scoped>
header {
  background-color: aquamarine;
  color: brown;
}
</style>
