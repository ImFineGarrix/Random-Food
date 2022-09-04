<script setup>
import { ref, computed } from "vue";
defineEmits(["add"]);
const prop = defineProps({
  currentAddFood: {
    type: Object,
    default: {},
  },
});
const types = ref("");
const food = computed(() => {
  return {
    th_name: prop.currentAddFood.th_name,
    en_name: prop.currentAddFood.en_name,
    imgUrl: "",
    cal: prop.currentAddFood.cal,
    type: types.value,
  };
});
</script>

<template>
  <div class="ml-48 space-x-3 font-poppin">
    Thai Name :
    <input
      type="text"
      v-model="food.th_name"
      class="rounded-lg shadow-lg my-3 mx-3 px-5 py-1 justify-self-center w-50"
      placeholder="Ex. ไก่ทอด"
    />
    English Name :
    <input
      type="text"
      v-model="food.en_name"
      class="rounded-lg shadow-lg my-3 mx-3 px-5 py-1 justify-self-center w-50"
      placeholder="Ex. Fired Chicken"
    />
    <br />
    Calories (Approximately) :
    <input
      type="number"
      v-model="food.cal"
      class="rounded-lg shadow-lg my-3 mx-3 px-5 py-1 justify-self-center w-24"
      placeholder="Ex. 130"
    />
    Type :
    <select
      v-model="food.type"
      class="bg-white border border-gray-300 rounded-md shadow-sm px-5 py-1"
    >
      <option value="" disabled>Select your type</option>
      <option value="main">MAIN</option>
      <option value="side">SIDE</option>
      <option value="dessert">DESSERT</option>
      <option value="drink">DRINK</option>
      <option value="snack">SNACK</option>
    </select>
    <button
      class="rounded-lg py-1 px-5 ml-2 bg-[#594432] transition duration-500 ease-in-out hover:scale-110 shadow-lg"
      @click="$emit('add', food)"
    >
      <span class="text-sm font-semibold text-[#f2ede4]">ADD NEW</span>
    </button>
    <br />
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
