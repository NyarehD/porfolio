<template>
  <!-- Hero Section -->
  <div class="backgroundImg relative bg-center bg-no-repeat bg-cover">
    <div class="md:px-12 lg:px-16 md:space-y-8 flex flex-col justify-center h-screen px-8 py-3 mx-auto space-y-6">
      <span class="text-whity mix-blend-difference md:mix-blend-normal md:text-5xl text-4xl font-normal">OH, Hi
        There!</span>
      <div class="">
        <span class="md:text-9xl text-whity text-7xl md:mix-blend-normal mix-blend-difference">I'm </span>
        <span class="text-primary md:text-9xl mix-blend-difference text-7xl">Nyareh</span>
      </div>
      <div class="text-ellipsis md:w-3/4">
        <span class=" text-whity md:text-6xl md:mix-blend-normal mix-blend-difference text-4xl font-normal">Who's
          enthusiastic about </span>
        <span class="text-primary md:text-6xl mix-blend-difference md:mix-blend-normal text-4xl font-normal">web
          development</span>
      </div>
      <span class="md:text-4xl text-whity text-3xl">Learn more about my <NuxtLink :to="{ name: 'projects' }"
          class="project-link text-ternary before:bg-whity md:px-3 p-2">
          Projects
        </NuxtLink></span>
    </div>
  </div>
</template>
<script setup lang="ts">
  const route = useRoute();
</script>
<style lang="scss">
  .backgroundImg {
    background-image: url("~/assets/images/background.svg");
    background-attachment: fixed;
  }

  @mixin mixBlendModeEffect($transformScaleY, $transformOrigin) {
    position: relative;
    isolation: isolate;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      mix-blend-mode: difference;
      transition: transform 0.25s;
      transform: scaleY($transformScaleY);
      transform-origin: $transformOrigin;
    }

    &:focus {
      outline: none;
    }

    &:focus,
    &:hover {
      &::before {
        transform: none;
      }
    }
  }

  .project-link {
    @include mixBlendModeEffect(0, 0 50%)
  }
</style>
