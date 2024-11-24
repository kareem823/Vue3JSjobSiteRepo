<script setup></script>

<style scoped>
    /* Developers and Employers */
    section {
      @apply bg-gray-50 py-4;
    }

    .container-xl {
      @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
    }

    .grid-app {
      @apply grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg;
    }

     .backgroundGreen {
       @apply bg-green-100 p-6 rounded-lg shadow-md text-center py-2; 
    }  
 
    .backgroundBlue {
      @apply bg-blue-100 p-5 rounded-lg shadow-md text-center;
    }
    h2 {
      @apply text-2xl font-bold;
    }

    p {
      @apply mt-2 mb-4;
    }

    a {
      @apply inline-block  bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700;
    }

     .midBlue {
      @apply bg-blue-800 text-white rounded-lg px-4 py-2  hover:bg-blue-600;
    } 
    @media (max-width: 768px) {
      .grid-app {
        grid-template-columns: 1fr;
      }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      .grid-app {
        grid-template-columns: 1fr 1fr;
      }
    }
</style>

<script setup>


</script>

<template>

    <!-- Developers and Employers -->
    <section>
      <div>
        <div class="grid-app">
          <div class="backgroundBlue">
            <h2>For Developers</h2>
            <p>
              Browse our Vue jobs and start your career today
            </p>
            <RouterLink to="/jobs">
              Browse Jobs
            </RouterLink>
          </div>
          <div class="backgroundGreen">
            <h2>For Employers</h2>
            <p>
              List your job to find the perfect developer for the role
            </p>
            <RouterLink to="/jobs/add" class="midBlue">
              Add Job
            </RouterLink>
          </div>
        </div>
      </div>
    </section>  
</template>

