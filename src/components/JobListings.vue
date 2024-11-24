<script setup>
import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
import { reactive, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.error('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});

</script>

<template > 

<section >
    <div class="jonContainer">
        <h2 >
            Browse Jobs
        </h2>

        <!--show pinner while loding-->
        <div v-if="state.isLoading" class="text-center text-grey-500 py-6">
            <PulseLoader />
        </div>


<!--show job listing when done loading-->
    <div v-else class="gridContainer">
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" 
        :key="job.id" 
        :job="job"/>
        
    </div>

    </div>
</section>

<section v-if="showButton" class="viewJobs">
      <RouterLink
        to="/jobs"
        class="viewButton"
        >View All Jobs</RouterLink
      >
    </section>

</template>

<style scoped>

.viewButton {
    @apply block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700
}

.viewJobs {
    @apply bg-white m-auto max-w-lg my-5 px-6 items-center
}

/* Add your styles here */
section {
    @apply bg-blue-50 px-4 py-5 
}

h2 {
    @apply text-3xl font-bold text-blue-500 mb-6 text-center
}

.jonContainer {
    @apply container lg:container m-auto
}

.gridContainer {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6
}

</style>