<template>
  <nav class=" top-0 w-full" ref="navbar" :class="{ 'navBarHide': !windowScrollY, 'navBarAppear': windowScrollY }">
    <div class="md:px-12 lg:px-16 relative z-40 flex justify-between px-8 py-3"
      :class="{ 'bg-transparent': !windowScrollY, 'bg-priBg': windowScrollY || isNavShown }">
      <div class="">
        <NuxtLink to="/">
          <img src="~/assets/images/logo.png" alt="" class="h-12">
        </NuxtLink>
      </div>
      <div class="md:block hidden">
        <ul class="md:space-x-3 lg:space-x-6 flex justify-between">
          <NavLink :route-name="route.name">Home</NavLink>
          <NavLink :route-name="route.name" to="projects">Projects</NavLink>
          <NavLink :route-name="route.name" to="about">About</NavLink>
        </ul>
      </div>
      <div class="md:hidden flex flex-col justify-center">
        <button @click="isNavShown = !isNavShown"
          class="text-whity ring-1 hover:ring-primary px-3 py-2 duration-150 rounded-md"
          :class="{ 'ring-primary ring-2': isNavShown, 'ring-whity': !isNavShown }">
          <NavHam class="h-8" />
        </button>
      </div>
    </div>
    <!-- This is collapsed navbar options in small device -->
    <Transition name="slide">
      <div class=" md:hidden relative z-10 px-8 py-3"
        :class="{ 'bg-transparent': !windowScrollY, 'bg-priBg': windowScrollY || isNavShown }" v-show="isNavShown">
        <ul class="lg:space-x-5 flex flex-col w-full mx-auto space-y-2 align-baseline">
          <NavLink :route-name="route.name">Home</NavLink>
          <NavLink :route-name="route.name" to="projects">Projects</NavLink>
          <NavLink :route-name="route.name" to="about">About</NavLink>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
<script setup lang="ts">

  let isNavShown = ref(false);
  let route = useRoute();

  let router = useRouter();
  router.afterEach(() => isNavShown.value = false)

  let windowScroll = useWindowScroll();
  let windowScrollY = computed(() => {
    return windowScroll.y.value > 500;
  })
</script>
<style lang="scss">
  .slide-enter-active,
  .slide-leave-active {
    opacity: 1;
    transform: translateY(0);
    transition: 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-100%);
    transition: 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }

  .navBarAppear {
    transition: all 1s;
    position: fixed;
    animation-name: navBarAppear;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @keyframes navBarAppear {
    0% {
      top: -100%;
      opacity: 0;
    }

    100% {
      top: 0%;
      opacity: 1;
    }
  }

  .navBarHide {
    transition: all 1s;
    position: absolute;
    animation-name: navBarHide;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @keyframes navBarHide {
    0% {
      top: 0%;
      opacity: 1;
    }

    50% {
      top: -100%;
      opacity: 0;
    }

    100% {
      top: 0;
    }
  }
</style>