<script setup></script>
<template>
  <div class="font-poppin mb-3">
    <!-- Topic -->
    <div class="mt-10 ml-36 text-[#594432] inline-flex">
      <div>
        <p class="text-5xl py-2 w-max font-thin uppercase">
          Random
          <span class="font-bold text-5xl py-2">FOOD</span>
        </p>
      </div>
      <div class="ml-[600px] mt-7 router w-max font-bold text-[#ab9885] text-xl">
        <router-link class="p-3 navbar-active" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="p-3 navbar-active" :to="{ name: 'Menus' }">Menu</router-link>
        <router-link class="p-3 navbar-active" :to="{ name: 'About' }"
          >About us</router-link
        >
      </div>
    </div>
    <hr class="ml-36 my-5 border-[#594432] w-[1255px] rounded-lg" />
  </div>
</template>

<style scoped>
.navbar-active:hover {
  color: #594432;
  transition: 0.5s;
  text-decoration: underline;
}
.router-link-active {
  color: #594432;
  text-decoration: underline;
}
</style>
