<template>
  <div class="vh-100 d-flex flex-column justify-content-center py-5 no-scroll">
    <div class="mx-auto w-100" style="max-width: 400px;">
      <NuxtLink to="/" class="h6 d-block text-decoration-none">
        <i class="fas fa-arrow-left me-2"></i>
      </NuxtLink>
      <div class="bg-white py-4 px-3 shadow rounded">
        <NuxtPage/>
      </div>
    </div>
  </div>
</template>

<style>
.no-scroll {
  overflow: hidden;
}
</style>