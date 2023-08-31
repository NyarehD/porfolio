<template>
  <NuxtLink :to="{ name: props.to, path: props.to || '/' }" prefetch
    :class="{ 'active text-primary before:bg-primary': isActive, 'text-whity before:bg-whity': !isActive }"
    class="nav-link hover:cursor-pointer md:px-3 p-2 text-lg">
    <slot />
  </NuxtLink>
</template>
<script setup lang="ts">

  let route = useRoute();

  let props = defineProps<{
    to?: string,
  }>();
  let isActive = computed(() => route.name === (props.to || "index"))

</script>
<style lang="scss" scoped>
  // mix blend mode effect in nav bar
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

  .nav-link.active {
    @include mixBlendModeEffect(0.05, 0 100%)
  }

  .nav-link {
    @include mixBlendModeEffect(0, 0 50%)
  }
</style>