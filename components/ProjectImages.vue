<template>
  <div class=" h-1/2 lg:h-auto bg-secBg lg:w-1/2 relative w-full">
    <Transition name="carousel" mode="out-in">
      <NuxtImg :src="`/projects-img/${photos[currentPhotoId]}`" :alt="photos[currentPhotoId]" sizes="xs:700px xl:800px"
        fit="cover" class=" object-contain h-full mx-auto select-none" />
    </Transition>
    <template v-if="props.photos.length > 1">
      <button class="top-1/2 left-5 hover:scale-105 absolute duration-300 -translate-y-full"
        @click.prevent="() => currentPhotoId > 0 && currentPhotoId--" v-show="currentPhotoId > 0">
        <ArrowButton class="bg-primary text-whity rotate-90" />
      </button>
      <button class="top-1/2 hover:scale-105 right-5 absolute duration-300 -translate-y-full"
        @click="() => currentPhotoId < props.photos.length - 1 && currentPhotoId++"
        v-show="currentPhotoId < props.photos.length - 1">
        <ArrowButton class="bg-primary text-whity -rotate-90" />
      </button>
      <div class="left-1/2 absolute bottom-0 flex -translate-x-1/2">
        <div v-for="(photo, i) in photos.length" :key="photo"
          class="hover:scale-[1.3] w-3 h-3 drop-shadow-md duration-300 m-2 ring-1 ring-primary"
          :class="{ 'bg-primary': i === currentPhotoId, 'bg-whity border border-primary cursor-pointer': i !== currentPhotoId }"
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

  // Reset state when props change
  watch(() => props.photos, () => {
    currentPhotoId.value = 0;
  });

</script>

<style scoped>
  .carousel-enter-active,
  .carousel-leave-active {
    transition: all 0.5s ease;
  }

  .carousel-enter-from,
  .carousel-leave-to {
    opacity: 0;
  }
</style>