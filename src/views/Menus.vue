<script setup>
import BaseNavbar from "../component/BaseNavbar.vue";
import { onBeforeMount, ref } from "vue";
import MenuList from "../component/MenuList.vue";
import AddFoodForm from "../component/AddFoodForm.vue";
//All menu
const menus = ref([]);

const showAddFood = ref(false);
// GET all data from database
const getMenus = async () => {
  const res = await fetch("http://localhost:5000/menus");
  if (res.status == 200) {
    menus.value = await res.json();
  } else console.log("Error, cannot fetch data from database");
};
onBeforeMount(async () => await getMenus());

//POST add food to database
const addFood = async (food) => {
  const res = await fetch("http://localhost:5000/menus", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      th_name: food.th_name,
      en_name: food.en_name,
      imgURL: "",
      cal: food.cal,
      type: food.type,
    }),
  });
  if (res.status == 201) {
    const newAddFood = await res.json();
    menus.value.push(newAddFood);
    alert("Add food complete!");
  } else {
    alert("Error to add food!");
  }
  addForm.value = {};
};

//Current Add Food
let addForm = ref({});

//check before add food
const checkBeforeAdd = (food) => {
  addForm.value = food;
  console.log(food);
  if (food.th_name === undefined && food.en_name !== undefined) {
    alert("Please input thai name.");
  } else if (food.type == "") {
    alert("Please select your type of food.");
  } else if (food.th_name !== undefined && food.en_name === undefined) {
    food.en_name = "No english name";
    console.log(food);
    addFood(food);
  } else if (food.th_name === undefined && food.en_name === undefined) {
    alert("Please input thai name and eng name");
  } else {
    addFood(food);
  }
};
</script>

<template>
  <div>
    <BaseNavbar name="list" />
    <button
      class="ml-36 rounded-lg py-1 px-5 bg-[#594432] transition duration-500 ease-in-out hover:scale-110 shadow-lg"
      @click="showAddFood = !showAddFood"
    >
      <span class="text-sm font-semibold text-[#f2ede4]"
        >Don't have your food? Add here!</span
      >
    </button>
    <div v-if="showAddFood">
      <AddFoodForm @add="checkBeforeAdd" :currentAddFood="addForm" />
    </div>
    <MenuList :menus="menus" />
  </div>
</template>

<style></style>
