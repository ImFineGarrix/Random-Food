<script setup>
defineProps({
  menus: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="w-10/12 ml-auto mr-auto">
      <br />
      <ul class="overflow-y-scroll w-full h-[400px] p-2 shadow-lg rounded-lg bg-white">
        <li
          class="flex flex-row border-b-2 py-1"
          v-for="(menu, index) in menus"
          :key="index"
        >
          <ul class="pl-3">
            <li>
              <p class="pl-3 text-md">
                &#8594; {{ index + 1 }} : {{ menu.th_name }} ({{ menu.cal }}
                kcal)
              </p>
            </li>
            <li>
              <h5 class="pl-3 text-sm text-gray-500">
                {{ menu.en_name ? menu.en_name : "No english name" }}
              </h5>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
