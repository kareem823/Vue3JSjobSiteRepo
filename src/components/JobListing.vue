<script setup>
import { defineProps, computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    job: Object,
});

const showFullDesc = ref(false);

const truncatedDesc = computed(() => {
    let description = props.job.description;
    if (!showFullDesc.value) {
        //In JavaScript, slice() and substring() are both used to extract a subset of characters from a string. 
        description = description.slice(0, 90) + '...';
    }
    return description;
});

const toggleFullDesc = () => {
    showFullDesc.value = !showFullDesc.value;
};

</script>

<template>
  <!-- Job Listing 1 -->
  <div class="job-listing">
    <div class="job-listing-content">
      <div class="job-type">
        <div class="">{{job.type}}</div>
        <h3 class="job-title">Senior Vue Developer</h3>
      </div>

      <div class="job-description">
        <div>
        {{ truncatedDesc }}
    </div>
        <button class="job-more" @click="toggleFullDesc">
            {{ showFullDesc ? 'Read Less' : 'Read More' }}
        </button>
      </div>

      <h3 class="job-salary">{{ job.salary }} / Year</h3>

      <div class="job-divider"></div>

      <div class="job-footer">
        <div class="job-location">
            <!-- need to get the font ausome -->
          <i class="locMarker pi pi-map-marker"></i>
          {{ job.location }}
        </div>
        <RouterLink :to="'/jobs/' + job.id" class="job-read-more">
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.locMarker {
    @apply  text-orange-600 
}

.job-more {
    @apply  hover:bg-blue-100 text-blue-900 px-4 py-2 rounded-lg text-center text-sm;
}

.job-listing {
  @apply bg-white rounded-xl shadow-md relative;
}

.job-listing-content {
  @apply p-4;
}

.job-type {
  @apply mb-6;
}

.job-title {
  @apply text-xl font-bold;
}

.job-description {
  @apply mb-5;
}

.job-salary {
  @apply text-blue-500 mb-2;
}

.job-divider {
  @apply border border-gray-100 mb-5;
}

.job-footer {
  @apply flex flex-col lg:flex-row justify-between mb-4;
}

.job-location {
  @apply text-orange-700 mb-3;
}

.job-read-more {
  @apply h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm;
}
</style>