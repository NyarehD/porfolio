<template>
  <div class=" pt-[56px] md:pt-[72px] h-screen">
    <div class=" lg:flex-row flex flex-col w-full h-full overflow-auto">
      <ProjectImages :photos="projects[currentId].photos" />
      <div class="bg-whity snap-mandatory snap-y lg:w-1/2 lg:max-h-full lg:h-full h-1/2 z-10 overflow-auto">
        <ProjectInfo v-for="(project, i) in  projects " :project="project" :key="i" @current-id="id => currentId = id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Project } from 'types/project.type';

  let currentId = ref<number>(1);

  const projects: Project[] = [
    {
      id: 0,
      name: "Portfolio",
      description: "Portfolio Website of Nyareh",
      language: ["HTML", "CSS", "SCSS", "JS"],
      libraryFramework: ["Bootstrap", "jQuery"],
      link: "https://nyarehd.github.io/portfolio",
      github: "https://github.com/NyarehD/portfolio",
      photos: ["portfolio-1.png", "portfolio-2.png", "portfolio-mobile-1.png", "portfolio-mobile-2.png"]
    },
    {
      id: 1,
      name: "Calculator",
      description: "A calculator project written with vanilla Javascript",
      language: ["HTML", "CSS", "JS"],
      libraryFramework: [],
      link: "https://nyarehd.github.io/Calculator",
      github: "https://github.com/NyarehD/Calculator",
      photos: ["tst.png", "test.png"]
    },
    {
      id: 2,
      name: "Test",
      description: "tesing is script",
      language: ["HTML", "CSS"],
      libraryFramework: ["Bootstrap", "Vue"],
      link: "slkdfja;sldfj.com",
      photos: ["tst.png", "test.png", "bwahaha.png"]
    },
    {
      id: 3,
      name: "Test",
      description: "tesing is script",
      language: ["HTML", "CSS"],
      libraryFramework: ["Bootstrap", "Vue"],
      link: "slkdfja;sldfj.com",
      photos: ["tst.png", "test.png", "Bootstrap", "Vue"]
    },
    {
      id: 4,
      name: "Test",
      description: "tesing is script",
      language: ["HTML", "CSS"],
      libraryFramework: ["Bootstrap", "Vue"],
      link: "slkdfja;sldfj.com",
      photos: ["tst.png", "test.png", "tst.png", "test.png"]
    },
    {
      id: 5,
      name: "Test",
      description: "tesing is script",
      language: ["HTML", "CSS"],
      libraryFramework: ["Bootstrap", "Vue"],
      link: "slkdfja;sldfj.com",
      photos: ["tst.png", "test.png"]
    },
    {
      id: 6,
      name: "Test",
      description: "tesing is script",
      language: ["HTML", "CSS"],
      libraryFramework: ["Bootstrap", "Vue"],
      link: "slkdfja;sldfj.com",
      photos: ["tst.png", "test.png", "Bootstrap", "Vue"]
    },
    {
      id: 7,
      name: "Test",
      description: "tesing is script",
      language: ["HTML", "CSS"],
      libraryFramework: ["Bootstrap", "Vue"],
      link: "slkdfja;sldfj.com",
      photos: ["tst.png", "test.png"]
    },
    {
      id: 8,
      name: "Test",
      description: "tesing is script",
      language: ["HTML", "CSS"],
      libraryFramework: ["Bootstrap", "Vue"],
      link: "slkdfja;sldfj.com",
      photos: ["tst.png", "test.png"]
    }
  ]


</script>

<style lang="scss" scoped></style>