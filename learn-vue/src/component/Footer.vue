<script setup>
//javascript Code
</script>

<template>
  <!--HTML-->
  <header>
    <p>Copyright :{{ name }}</p>
    <div v-html="name"></div>
  </header>
</template>

<style scoped>
header {
  background-color: aquamarine;
  color: brown;
}
</style>
