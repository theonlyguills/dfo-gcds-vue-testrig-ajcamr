<script setup>
import { ref, defineModel } from 'vue';
import { onMounted } from 'vue';

const theModel = defineModel();
const values = ref();
const valuesLoaded = computed(() => {
  return values.value?.data?.lenght;
});

onMounted(async () => {
  await fetchValues();
});

const fetchValues = async () => {
  const response = await fetch('https://reqres.in/api/users?page=1', {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  values.value = await response.json();
};
</script>

<template>
  <div>
    <gcds-select
      v-model="theModel"
      select-id="nameId"
      name="Select Name"
      label="Select the name"
      default-value="Please select a name"
    >
      <option
        v-for="value in values.data"
        :key="value.id"
        :value="value.first_name"
      >
        {{ value.first_name }}
      </option>
    </gcds-select>

    <ul>
      <li v-for="value in values.data">{{ value.first_name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
