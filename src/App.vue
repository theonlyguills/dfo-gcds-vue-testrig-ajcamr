<script setup>
import { ref, defineModel, onMounted } from 'vue';

const theModel = defineModel();
const values = ref( [] );

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
  const received = await response.json();
  values.value = received.data;
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
        v-for="value in values"
        :key="value.id"
        :value="value.first_name"
      >
        {{ value.first_name }}
      </option>
    </gcds-select>

    <ul>
      <li v-for="value in values">{{ value.first_name }}</li>
    </ul>

</div>
</template>

<style scoped></style>
