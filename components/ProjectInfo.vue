<template>
  <div class=" bg-secondary odd:bg-whity group snap-center flex justify-center h-full align-baseline" ref="element">
    <div class="h-1/2 my-auto">
      <h1 class="text-2xl font-semibold">{{ props.project.name }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Project } from "~/types/project.type";

  const props = defineProps<{
    project: Project
  }>()

  let emits = defineEmits<{
    (event: 'currentId', id: number): void
  }>()

  const element = ref(null)
  useIntersectionObserver(element, ([{ isIntersecting }]) => {
    isIntersecting && emits("currentId", props.project.id);
  })
</script>

<style lang="scss" scoped></style>