<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

</script>

<template>
    <section>
      <div class="container1">
        <RouterLink
          to="/jobs"
          class="text1"
        >
          <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </RouterLink>
      </div>
    </section>

</template>

<style scoped>

.container1 {
 @apply mx-auto px-4 sm:px-6 lg:px-8
}

.text1 {
 @apply text-blue-500 hover:text-blue-600 flex items-center
}
</style>