<template>
  <div class=" antialiased">
    <NavBar />
    <div class="mx-auto">
      <slot />
    </div>
  </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue';
</script>
