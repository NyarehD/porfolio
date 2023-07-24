<template>
  <div class="antialiased">
    <NavBar />
    <slot />
  </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue';
</script>
