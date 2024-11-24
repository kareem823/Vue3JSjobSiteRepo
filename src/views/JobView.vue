<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
 import BackButton from '@/components/BackButton.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';


const route = useRoute();
const router = useRouter();
const toast = useToast();

const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true,
})

//async needs to be used with axios functions
//async is An async function returns a Promise implicitly, 
//enabling the use of the await keyword within it to pause execution until
// the awaited Promise is resolved. 
const deleteJob = async () => {
  try {
    const confirmDelete = window.confirm('Do you want to delete this job?');
    if (confirmDelete) {
    await axios.delete(`/api/jobs/${jobId}`);
    toast.success('Job deleted successfully');

    //this redirects us back to the jobs page when the job is deleted
    router.push('/jobs');
    }
  }
  catch (error) {
    console.error('Error deleting job', error);
  toast.error('Job not deleted');
  }

}

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    state.job = response.data;
  } catch (error) {
    console.error('Error fetching job', error);
  } finally {
    state.isLoading = false;
  }
});



</script>


<template>

<BackButton/>
    <section v-if="!state.isLoading" >
      <div class="container" >
        <div >
          <main>
            <div>
              
              <div>{{ state.job.type }}</div>
              <h1 class="text-7xl">{{ state.job.title }}</h1>
              <div>
                <i class="pi pi-map-marker"></i>
                <p >{{ state.job.location }}</p>
              </div>
            </div>

            <div >
              <h3 >
                Job Description
              </h3>

              <p >
                {{ state.job.description }}

              </p>

              <h3 >Salary</h3>

              <p >
                {{ state.job.salary }} / Year</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div>
              <h3 >Company Info</h3>

              <h2 >    
                            {{ state.job.company.name }}
              </h2>

              <p >
                {{ state.job.company.description }}

              </p>

              <hr />

              <h3 >
                Contact Email:
              </h3>

              <p >
                {{ state.job.company.contactEmail }}
              </p>

              <h3 >Contact Phone:</h3>

              <p >
                {{ state.job.company.contactPhone }}
              </p>
            </div>

            <!-- Manage -->
            <div class="mt-6">
              <h3 >Manage Job</h3>
              <RouterLink
                  :to="'/jobs/edit/' + state.job.id"
                >Edit Job
            </RouterLink>
              
              <button @click="deleteJob()"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
            <!--show pinner while loding-->
            <div v-else class="text-center text-grey-500 py-6">
            <PulseLoader />
        </div>
</template>


<style scoped>

  .container {
    max-width: 1200px;
  }

  main > div {
    @apply bg-white p-6 rounded-lg shadow-md text-center md:text-left;
  }
  main > div > h1{
    @apply bg-white text-3xl font-bold mb-4;
  }

  main > div > div {
    @apply text-gray-500 mb-4 flex align-middle justify-center md:justify-start;
  }

  main > div > div > i {
    @layer fa-solid; 
    @layer fa-location-dot ;
    @apply text-lg text-orange-700 mr-2;
  }

  main > div > div > p {
    @apply text-orange-700;
  }

  main > div + div {
    @apply bg-white p-6 rounded-lg shadow-md mt-6;
  }

  main > div + div > h3 {
    @apply text-blue-800 text-lg font-bold mb-6;
  }

  main > div + div > p {
    @apply mb-4;
  }

  main > div + div > h2 {
    @apply text-2xl;
  }

  main > div + div > h3 {
    @apply text-xl;
  }

  main > div + div > hr {
    @apply my-4;
  }

  main > div + div > p {
    @apply my-2 bg-blue-100 p-2 font-bold;
  }

  aside > div {
    @apply bg-white p-6 rounded-lg shadow-md;
  }

  aside > div > h2 {
    @apply text-2xl;
  }

  aside > div > p {
    @apply my-2;
  }

  aside > div + div {
    @apply bg-white p-6 rounded-lg shadow-md mt-6;
  }

  aside > div + div > h3 {
    @apply text-xl font-bold mb-6;
  }

  aside > div + div > a {
  @apply bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full mt-4 block;
  /* @tailwind focus:outline-none focus:shadow-outline; */
}

  aside > div + div > button {
    @apply bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full
     mt-4 block;
    /* @tailwind focus:outline-none focus:shadow-outline; */
  }

</style>
