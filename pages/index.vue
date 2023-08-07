<template>
  <!-- Hero Section -->
  <div class="backgroundImg relative bg-center bg-no-repeat bg-cover">
    <div class="md:px-12 lg:px-16 md:space-y-8 flex flex-col justify-center h-screen px-8 py-3 mx-auto space-y-6">
      <span class="text-whity mix-blend-difference md:mix-blend-normal md:text-5xl text-4xl font-normal">OH, Hi
        There!</span>
      <div class="">
        <span class="md:text-9xl text-whity text-7xl">I'm </span>
        <span class="text-primary md:text-9xl mix-blend-difference text-7xl">Nyareh</span>
      </div>
      <div class="text-ellipsis md:w-3/4">
        <span class=" text-whity md:text-7xl text-4xl font-normal">Who's learning to be </span>
        <span class="text-primary md:text-7xl text-4xl font-normal">a web developer</span>
      </div>
    </div>
    <ArrowButton class="text-secondary animate-bounce bottom-4 bg-secBg absolute left-0 right-0" />
    </div>
  </div>
</template>
<script setup lang="ts">
  const route = useRoute();
</script>
<style lang="scss">
  .backgroundImg {
    background-image: url("~/assets/images/background.svg");
  }
</style>
