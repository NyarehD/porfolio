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
      name: "Old Portfolio",
      description: "The old portfolio website of Nyareh",
      language: ["HTML", "CSS", "SCSS", "JS"],
      libraryFramework: ["Bootstrap", "jQuery"],
      link: "https://nyarehd.github.io/portfolio",
      github: "https://github.com/NyarehD/portfolio",
      photos: ["portfolio-1.png", "portfolio-2.png", "portfolio-mobile-1.png", "portfolio-mobile-2.png"]
    },
    {
      id: 1,
      name: "Prismatic Next",
      description: "Full stack application with NEXT.js, with Prisma to get data from PlanetScale, a serverless database",
      language: ["HTML", "CSS", "JS", "TS"],
      libraryFramework: ["Tailwind", "React", "Next.js", "Daisy UI", "Prisma", "PlanetScale", "Testing"],
      github: "https://github.com/NyarehD/prismatic-next",
      link: "https://prismatic-next-gmeytrbs8-nyarehd.vercel.app",
      photos: ["prismatic-next-1.png", "prismatic-next-2.png", "prismatic-next-3.png"]
    },
    {
      id: 2,
      name: "Lalable",
      description: "A social media website, with Laravel",
      language: ["HTML", "CSS", "JS", "PHP"],
      libraryFramework: ["Tailwind", "Laravel", "Vue", "Inertia"],
      github: "https://github.com/NyarehD/lalable",
      photos: ["lalable-1.png", "lalable-2.png", "lalable-3.png", "lalable-4.png", "lalable-5.png"]
    },
    {
      id: 2,
      name: "PokeDex",
      description: "A pokemon database with Pokemon Api",
      language: ["HTML", "CSS", "JS", "SASS"],
      libraryFramework: ["Vue", "Tailwind", "Pinia", "Vue-router", "VueUse"],
      github: "https://github.com/NyarehD/Pokedex",
      link: "https://nyarehd.github.io/Pokedex/",
      photos: ["pokedex-1.png", "pokedex-2.png", "pokedex-3.png", "pokedex-4.png", "pokedex-mobile-1.png", "pokedex-mobile-2.png"]
    },
    {
      id: 4,
      name: "Marketing Website",
      description: "A mock project to apply all the knowledge obtained during SWD class",
      language: ["HTML", "CSS", "JS"],
      libraryFramework: ["Bootstrap", "FontAwesome", "jQuery", "slick.js", "waypoint.js"],
      link: "https://nyarehd.github.io/marketing/",
      github: "https://github.com/NyarehD/marketing",
      photos: ["marketing-1.png", "marketing-2.png", "marketing-3.png", "marketing-4.png", "marketing-mobile-1.png", "marketing-mobile-2.png", "marketing-mobile-3.png",]
    },
    {
      id: 3,
      name: "Calculator",
      description: "A calculator project written with vanilla Javascript",
      language: ["HTML", "CSS", "JS"],
      libraryFramework: [],
      link: "https://nyarehd.github.io/Calculator",
      github: "https://github.com/NyarehD/Calculator",
      photos: ["calculator-1.png", "calculator-2.png"]
    },


  ]


</script>

<style lang="scss" scoped></style>