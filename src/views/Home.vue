<script setup>
import { ref, onBeforeMount } from "vue";
import BaseNavbar from "../component/BaseNavbar.vue";
import RandomFood from "../component/RandomFood.vue";
import History from "../component/History.vue";
//All menu
const menus = ref([]);

// GET all data from database
const getMenus = async () => {
  const res = await fetch("http://localhost:5000/menus");
  if (res.status == 200) {
    menus.value = await res.json();
  } else console.log("Error, cannot fetch data from database");
};
onBeforeMount(async () => await getMenus());

//All History
const histories = ref([]);

//GET HISTORY
const getHistory = async () => {
  const res = await fetch("http://localhost:5000/histories");
  if (res.status == 200) {
    histories.value = await res.json();
  } else console.log("Error, cannot fetch data from database");
};
onBeforeMount(async () => await getHistory());

//delete history
const alertDeleteHistory = (id, name) => {
  let text = `Do you want to delete story: ${name}`;
  if (confirm(text) == true) {
    deleteHistory(id);
  } else {
    text = "You canceled!";
  }
};
const deleteHistory = async (id) => {
  const res = await fetch(`http://localhost:5000/histories/${id}`, {
    method: "DELETE",
  });
  if (res.status == 200) {
    histories.value = histories.value.filter((his) => his.id != id);
    console.log("delete successfully");
  } else console.log("error, cannot delete");
};

// POST IN HISTORY
const addHistory = async (random) => {
  const res = await fetch("http://localhost:5000/histories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      th_name: random.th_name,
      en_name: random.en_name,
      imgURL: random.imgURL,
      cal: random.cal,
      type: random.type,
    }),
  });
  if (res.status == 201) {
    console.log("ADD TO HISTORY");
    histories.value.push(random);
  } else {
    console.log("ERROR , CANNOT ADD TO HISTORY");
  }
};

let randNum = ref(0);
const randomNumber = () => {
  //funtion to random number for use with randomdom food
  let outOfBound = false;
  const rand = Math.floor(Math.random() * menus.value.length);
  outOfBound = rand > menus.value.length || rand < 0 ? true : false;
  outOfBound ? randomNumber() : (randNum.value = rand);
};

let foodRandom = ref(""); // attribute use for stroe name of randomfood to show in html
const randomFood = (type) => {
  //function for random food in listFood and push in histories
  if (type != "all") {
    // base select type is 'all'
    do {
      randomNumber();
    } while (menus.value[randNum.value].type !== type);
  } else {
    randomNumber();
  }
  foodRandom.value = menus.value[randNum.value].th_name;
  addHistory(menus.value[randNum.value]);
};
</script>

<template>
  <div>
    <BaseNavbar name="Random" />
    <RandomFood :listFood="menus" :foodRandom="foodRandom" @random="randomFood" />
    <History :histories="histories" @delete="alertDeleteHistory" />
  </div>
</template>

<style lang="scss" scoped></style>
