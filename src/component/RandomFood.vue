<script setup>
import { ref, computed } from "vue";
defineEmits(["random"]);
const prop = defineProps({
  listFood: {
    type: Array,
    required: true,
  },
  foodRandom: {
    type: String,
    required: true,
  },
});
const selectType = ref("all");
</script>

<template>
  <!-- Random Food -->
  <div class="flex justify-center mt-8 ml-auto mr-auto h-fit w-10/12">
    <div class="w-8/12 bg-[#FFFDFA] bg-opacity-70 m-3">
      <p class="m-8 font-bold text-lg uppercase text-[#594432]">Your result is :</p>
      <div v-if="foodRandom === ''">
        <div class="mx-16 mt-10">
          <div class="bg-[#594432] bg-opacity-60 rounded-lg h-80">
            <p class="text-[#F2ede4] font-thin text-center text-2xl p-36">
              RANDOM<span class="font-bold">FOOD</span>
            </p>
          </div>
        </div>
        <div class="flex mx-16 my-5 bg-white rounded-md">
          <div class="rounded-md bg-white w-9/12 p-3 ml-3 shadow-lg">Food name</div>
          <div
            class="font-bold rounded-t-md rounded-br-md bg-[#E0D7CC] bg-opacity-70 w-3/12 p-3 text-[#594432] text-center shadow-lg"
          >
            Kcal
          </div>
        </div>
      </div>
      <div v-else>
        <ul>
          <li v-for="(random, index) in listFood" :key="index">
            <div v-show="random.th_name == foodRandom">
              <div v-if="random.imgURL == ''">
                <div class="mx-16 mt-10">
                  <div class="bg-[#594432] bg-opacity-60 rounded-lg h-80">
                    <p class="text-[#F2ede4] font-regular text-center text-2xl p-36">
                      This menu have no image
                    </p>
                  </div>
                </div>
                <div class="flex mx-16 my-5 bg-white rounded-md">
                  <div class="rounded-md bg-white w-9/12 p-3 ml-3 shadow-lg">
                    {{ random.th_name }}
                  </div>
                  <div
                    class="font-bold rounded-t-md rounded-br-md bg-[#E0D7CC] bg-opacity-70 w-3/12 p-3 text-[#594432] text-center shadow-lg"
                  >
                    {{ random.cal }} Kcal
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="mx-16 mt-10">
                  <div class="bg-[#594432] bg-opacity-60 rounded-lg h-80">
                    <img
                      :src="random.imgURL"
                      :alt="random.en_name"
                      class="object-cover h-80 rounded-lg mx-auto"
                    />
                  </div>
                </div>
                <div class="flex mx-16 my-5 bg-white rounded-md">
                  <div class="rounded-md bg-white w-9/12 p-3 ml-3 pl-5 shadow-lg">
                    {{ random.th_name }}
                  </div>
                  <div
                    class="font-bold rounded-t-md rounded-br-md bg-[#E0D7CC] bg-opacity-70 w-3/12 p-3 text-[#594432] text-center shadow-lg"
                  >
                    {{ random.cal }} Kcal
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Select Type -->
    <div class="m-3 p-3 pl-24 w-4/12 bg-[#FFFDFA] bg-opacity-70 text-[#594432]">
      <p class="font-bold text-lg uppercase py-5">Category :</p>
      <div class="uppercase text-base space-y-8">
        <div class="inline-flex items-center">
          <input
            type="radio"
            value="main"
            v-model="selectType"
            class="form-radio h-6 w-6"
          />
          <span class="ml-10 text-lg font-light">Main</span>
        </div>
        <br />
        <div class="inline-flex items-center">
          <input
            type="radio"
            value="side"
            v-model="selectType"
            class="form-radio h-6 w-6"
          />
          <span class="ml-10 text-lg font-light">Side</span>
        </div>
        <br />
        <div class="inline-flex items-center">
          <input
            type="radio"
            value="dessert"
            v-model="selectType"
            class="form-radio h-6 w-6"
          />
          <span class="ml-10 text-lg font-light">Dessert</span>
        </div>
        <br />
        <div class="inline-flex items-center">
          <input
            type="radio"
            value="drink"
            v-model="selectType"
            class="form-radio h-6 w-6"
          />
          <span class="ml-10 text-lg font-light">Drink</span>
        </div>
        <br />
        <div class="inline-flex items-center">
          <input
            type="radio"
            value="snack"
            v-model="selectType"
            class="form-radio h-6 w-6"
          />
          <span class="ml-10 text-lg font-light">Snack</span>
        </div>
        <br />
        <div class="inline-flex items-center">
          <input
            type="radio"
            value="all"
            v-model="selectType"
            class="form-radio h-6 w-6"
            checked
          />
          <span class="ml-10 text-lg font-light">Random Food</span>
        </div>

        <!-- btn random food -->
        <div class="ml-10 pb-4">
          <button
            class="rounded-lg bg-[#594432] py-3 px-8 font-semibold text-white text-sm transition duration-500 hover:scale-110 shadow-lg"
            @click="$emit('random', selectType)"
          >
            LET'S RANDOM
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
