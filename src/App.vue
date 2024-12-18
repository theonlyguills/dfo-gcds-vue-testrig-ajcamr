<script setup>
import { ref, defineModel, onMounted } from 'vue';

function navigateToPage(event) {
  console.log("event", event);
}
</script>

<template>
  <div>
    <gcds-pagination
          display="list"
          label="pagination"
          lang="en"
          total-pages="100"
          current-page="10"
          @gcdsClick="navigateToPage"
        />

</div>
</template>

<style scoped></style>
