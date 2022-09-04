<script setup>
import { ref, onBeforeMount } from "vue";
import BaseNavbar from "../component/BaseNavbar.vue";
import MemberProfile from "../component/MemberProfile.vue";

const members = ref([]);
const getMembers = async () => {
  const res = await fetch("http://localhost:5000/members");
  if (res.status === 200) members.value = await res.json();
  else console.log("not found");
};

onBeforeMount(async () => {
  await getMembers();
});
</script>

<template>
  <div>
    <BaseNavbar />
    <div class="text-[#594432] ml-auto mr-auto">
      <br />
      <h1 class="font-bold text-center text-3xl">
        <span class="font-light"># </span>MEMBERS
      </h1>
      <br />
      <div>
        <MemberProfile :members="members" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
