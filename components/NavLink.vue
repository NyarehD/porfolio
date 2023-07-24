<template>
  <li class="nav-link text-primary hover:cursor-pointer md:px-3 p-2 text-lg select-none"
    :class="{ 'active text-primary before:bg-primary': isActive, 'text-whity before:bg-whity': !isActive }">
    <NuxtLink :to="props.to">
      <slot />
    </NuxtLink>
  </li>
</template>
<script setup lang="ts">
  import { RouteRecordName } from '.nuxt/vue-router';

  let props = defineProps<{
    to: string,
    routeName: RouteRecordName | null | undefined
  }>();
  let isActive = props.routeName === props.to;
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