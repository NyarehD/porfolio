<template>
  <nav class="bg-priBg sticky top-0 z-20" ref="navbar">
    <div class="md:px-12 lg:px-16 flex justify-between px-8 py-3">
      <div class="">
        <img src="~/assets/images/logo.png" alt="" class="h-12">
      </div>
      <div class="md:block hidden">
        <ul class="md:space-x-2 lg:space-x-5 flex justify-between">
          <NavLink :route-name="route.name">Home</NavLink>
          <NavLink :route-name="route.name" to="projects">Projects</NavLink>
          <NavLink :route-name="route.name" to="about">About</NavLink>
        </ul>
      </div>
      <div class="md:hidden flex flex-col justify-center">
        <button @click="isNavShown = !isNavShown"
          class="text-whity ring-1 hover:ring-primary ring-whity px-3 py-2 rounded-md"
          :class="{ 'ring-primary': isNavShown }">
          <NavHam class="h-8" />
        </button>
      </div>
    </div>
  </nav>
  <!-- This is collapsed navbar options in small device -->
  <Transition name="slide">
    <div class="bg-priBg md:hidden z-10 px-8 py-3" v-if="isNavShown">
      <ul class="lg:space-x-5 flex flex-col w-full mx-auto space-y-2 align-baseline">
        <NavLink :route-name="route.name">Home</NavLink>
        <NavLink :route-name="route.name" to="projects">Projects</NavLink>
        <NavLink :route-name="route.name" to="about">About</NavLink>
      </ul>
    </div>
  </Transition>
</template>
<script setup lang="ts">

  let isNavShown = ref(false);
  let route = useRoute();
</script>
<style lang="scss">
  .slide-enter-active,
  .slide-leave-active {
    transform: translateY(0);
    transition: 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-100%);
    transition: 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }
</style>