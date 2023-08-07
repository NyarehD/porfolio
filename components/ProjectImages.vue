<template>
  <div class=" h-1/2 lg:h-auto bg-secBg lg:w-1/2 relative w-full">
    <Transition name="carousel">
      <NuxtImg :src="`/projects/${photos[currentPhotoId]}`" :alt="photos[currentPhotoId]" sizes="xs:700px xl:800px"
        fit="cover" class=" md:object-contain object-cover h-full mx-auto" />
    </Transition>
    <template v-if="props.photos.length > 1">
      <ArrowButton
        class="top-1/2 bg-primary text-whity left-5 hover:scale-105 absolute transition duration-100 rotate-90 -translate-y-full"
        @click="() => currentPhotoId > 0 && currentPhotoId--" />
      <ArrowButton
        class="top-1/2 bg-primary text-whity right-5 hover:scale-105 absolute transition duration-100 -rotate-90 -translate-y-full cursor-pointer"
        @click="() => currentPhotoId < props.photos.length - 1 && currentPhotoId++" />
      <div class="left-1/2 absolute bottom-0 flex -translate-x-1/2">
        <div v-for="(photo, i) in photos.length" :key="photo" class=" w-3 h-3 m-3 cursor-pointer"
          :class="{ 'bg-primary': i === currentPhotoId, 'bg-whity': i !== currentPhotoId }"
          @click="() => currentPhotoId = i">
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { Project } from 'types/project.type';

  const props = defineProps<{
    photos: Project["photos"],
  }>()
  // For photo carousel
  let currentPhotoId = ref(0);

</script>

<style scoped>
  .carousel-enter-active,
  .carousel-leave-active {
    transition: 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }

  .carousel-enter-from,
  .carousel-leave-to {
    transform: translateZ(100%);
    opacity: 0;
    transition: 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  }
</style>