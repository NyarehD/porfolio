<template>
  <div class="pt-[56px] md:pt-[72px] h-screen flex md:flex-row flex-col">
    <div class="md:w-1/2 w-full h-full">
      <NuxtImg src="/portfolio-img.jpg" alt="Photo of Nyareh" sizes="xs:700px xl:800px" fit="cover"
        class="object-cover h-full" />
    </div>
    <div class="md:w-1/2 md:p-5 w-full h-full px-6">
      <div class="w-full my-2">
        <h1 class="text-primary mb-2 text-4xl text-center">About Me</h1>
        <p class=" mb-2 text-xl">My name is Nyareh and I am a developer who is confident in delivering websites, which are
          crafted with my skill and passions.
        </p>
      </div>
      <div class="mb-4">
        <h1 class="text-primary mb-2 text-3xl text-center">Technologies</h1>
        <h2 class="mb-2 text-xl">I am proficient in these technologies</h2>
        <div class="[&>*]:w-10 [&>*]:h-10 flex gap-x-3">
          <VueIcon />
          <NuxtIcon />
          <ReactIcon />
          <NextIcon />
          <LaravelIcon />
        </div>
      </div>
      <div class="mb-5">
        <h1 class="text-primary mb-2 text-4xl text-center">Contact me</h1>
        <ul class="md:flex-row flex flex-col gap-3 mb-1">
          <li class="group">
            <a href="mailto:nyarehdavid56@gmail.com" class="group-hover:text-secBg flex text-xl duration-300">
              <MailIcon class="fill-secBg group-hover:fill-priBg w-8 h-8 mr-2 duration-300" />
              nyarehdavid56@gmail.com
            </a>
          </li>
          <li class="group">
            <a href="tel:+959979818005" class="group-hover:text-secBg flex text-xl duration-300">
              <PhoneIcon class="fill-secBg group-hover:fill-priBg w-8 h-8 mr-2 duration-300" />
              +959979818005
            </a>
          </li>
        </ul>
        <ul class=" flex flex-row gap-3">
          <li>
            <a href="https://www.facebook.com/nyarehd" target="_blank">
              <FacebookIcon class="fill-secBg hover:fill-priBg w-10 h-10 duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/nyarehd" target="_blank">
              <TwitterIcon class="fill-secBg hover:fill-priBg w-10 h-10 duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/nyarehd" target="_blank">
              <GithubIcon class="fill-secBg hover:fill-priBg w-10 h-10 duration-300" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nyareh-david-433855205/" target="_blank">
              <LinkedinIcon class="fill-secBg hover:fill-priBg w-10 h-10 duration-300" />
            </a>
          </li>
        </ul>
        <div class="h-32 mx-auto mr-4 bg-red-600">
          <h1 class="text-whity text-3xl text-center">This website is still in development</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>