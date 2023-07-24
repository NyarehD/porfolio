<template>
  <nav>
    <div class="bg-priBg container mx-auto">
      <div class=" flex justify-between px-10 py-3">
        <div class="">
          <img src="~/assets/images/logo.png" alt="" class="h-12">
        </div>
        <div class="">
          <ul class=" flex justify-between space-x-6">
            <NavLink to="index">Home</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="about">About</NavLink>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
  // mix blend mode effect in nav bar
</style>