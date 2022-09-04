<script setup>
import { ref, computed } from "vue";
defineEmits(["delete"]);
const prop = defineProps({
  histories: {
    type: Array,
    required: true,
  },
});
//Count type
const countEachType = computed(() => {
  //function count type in histories array
  let count = {
    main: 0,
    side: 0,
    dessert: 0,
    drink: 0,
    snack: 0,
  };
  prop.histories.forEach((i) => {
    if (i.type == "main") {
      count.main += 1;
    }
    if (i.type == "side") {
      count.side += 1;
    }
    if (i.type == "dessert") {
      count.dessert += 1;
    }
    if (i.type == "drink") {
      count.drink += 1;
    }
    if (i.type == "snack") {
      count.snack += 1;
    }
  });
  return count;
});
</script>

<template>
  <!-- History -->
  <!-- Topic and Count type -->
  <div class="m-8 h-fit w-10/12 justify-self-center mr-auto ml-auto">
    <div class="uppercase font-bold text-[#594432]">
      <p>Your history :</p>
      <ul>
        <li v-for="(value, prop) in countEachType" :key="prop" class="inline-flex">
          {{ prop }} : {{ value }} &nbsp;
        </li>
      </ul>
    </div>

    <!-- History List-->
    <div
      class="bg-[#9b8b6a] bg-opacity-60 h-80 w-full overflow-y-scroll p-4 mt-4 rounded-lg"
    >
      <ul>
        <li v-for="(food, index) in histories" :key="index" class="mt-2">
          <div class="bg-white rounded-lg shadow-lg h-16">
            <div class="inline-flex">
              <div class="mt-2 py-2 px-10">
                <p class="text-sm text-[#594432]">
                  &#8594; {{ index + 1 }} : {{ food.th_name }} ({{ food.cal }} kcal)
                </p>
                <p class="text-sm text-[#96938d]">
                  {{ food.en_name ? food.en_name : "No english name" }}
                </p>
              </div>
            </div>
            <div class="float-right">
              <div class="">
                <button
                  class="bg-white rounded-lg py-5 px-10 transition duration-500 hover:bg-gray-200"
                  @click="$emit('delete', food.id, food.th_name)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
