<template>
  <div class=" bg-secondary odd:bg-whity group snap-center relative flex justify-center h-full align-baseline"
    ref="element">
    <div class="w-3/4 my-auto">
      <h1 class="md:text-3xl mb-2 text-2xl font-semibold">{{ props.project.name }}</h1>
      <p class=" md:text-lg mb-1">{{ project.description }}</p>
      <div class="gap-x-2 md:text-lg flex flex-row flex-wrap mb-2">
        <p class="font-semibold">Languages :</p>
        <span v-for="language in project.language" :key="language"
          class="bg-whity group-odd:bg-secondary px-2 py-1 cursor-pointer">{{ language }}</span>
      </div>
      <div class="gap-x-2 gap-y-1 md:text-lg flex flex-row flex-wrap mb-2" v-if="project.libraryFramework.length !== 0">
        <p class="font-semibold">Library or framework :</p>
        <span v-for="item in project.libraryFramework" :key="item" class="bg-primary text-whity px-2 py-1 cursor-pointer">
          {{ item }}
        </span>
      </div>
      <!-- Github Link -->
      <div class="flex justify-end gap-2">
        <a :href="project.github"><img src="~/assets/icons/github-icon.svg" class=" w-8 h-8" alt="Github icon"
            target="_blank"></a>
        <a :href="project.link" v-if="project.link"><img src="~/assets/icons/redirect-icon.svg" class="w-8 h-8"
            alt="Redirect icon" target="_blank"></a>
      </div>
    </div>
    <div class="group-first:block hidden">
      <ArrowButton class="bg-primary text-whity left-1/2 bottom-5 animate-bounce absolute" />
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