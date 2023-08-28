<template>
  <div class="pt-[56px] md:pt-[72px] h-screen flex md:flex-row flex-col">
    <div class="md:w-1/2 w-full h-full">
      <NuxtImg src="/portfolio-img.jpg" alt="Photo of Nyareh" sizes="xs:700px xl:800px" fit="cover"
        class="object-cover h-full" />
    </div>
    <div class="md:w-1/2 w-full h-full">
      <div class="md:p-5 w-full px-6 m-0">
        <h1 class="text-primary mb-2 text-4xl text-center">About Me</h1>
        <p class=" mb-2 text-xl">My name is Nyareh and I am a developer who is confident in delivering websites, which are
          crafted with my skill and passions.
        </p>
        <p class="text-xl">I'm proficient in front-end technologies such as Vue, React, Next and Nuxt. Laravel for the
          backend.</p>
      </div>
      <div class="mb-5">
        <h1 class="text-primary mb-2 text-4xl text-center">Contact me</h1>
        <ul class="flex flex-row gap-3">
          <li class="group">
            <a href="mailto:nyarehdavid56@gmail.com" class="group-hover:text-ternary flex duration-300">
              <MailIcon class="fill-secBg group-hover:fill-secondary w-8 h-8 mr-2 duration-300" />
              nyarehdavid56@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+959979818005" class="flex">
              <PhoneIcon class="fill-secBg w-8 h-8 mr-2" />
              +959979818005
            </a>
          </li>
        </ul>
        <ul class=" flex flex-row gap-3">
          <li>
            <a href="https://www.facebook.com/nyarehd" target="_blank">
              <FacebookIcon class="fill-secBg w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/nyarehd" target="_blank">
              <TwitterIcon class="fill-secBg w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/nyarehd" target="_blank">
              <GithubIcon class="fill-secBg w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nyareh-david-433855205/" target="_blank">
              <LinkedinIcon class="fill-secBg w-8 h-8" />
            </a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>