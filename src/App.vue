<script setup>
import { ref, defineModel, onMounted } from 'vue';

const theModel = defineModel();
const values = ref( [] );
let isLoaded = false;

onMounted(async () => {
  await fetchValues();
});

const fetchValues = async () => {
  const response = await fetch('https://reqres.in/api/users?page=1', {
    method: 'GET',
  });
  values.value = (await response.json()).data;
  isLoaded = true;
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
      v-if="isLoaded"
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

    <select
      id="nameId"
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
    </select>

</div>
</template>

<style scoped></style>
