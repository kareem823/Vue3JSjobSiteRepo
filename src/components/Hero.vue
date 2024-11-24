
<script setup>
import { defineProps } from 'vue';
import { ref } from 'vue';

defineProps({
    // Define the title as an object so that so that we can also have a defult prop
    title: {
        type: String,
        default: 'Become an Echo JS Employee',
    },
    //create a subtitle object
    subtitle: {
        type: String,
        default: 'Find the Job the job for you!',
    }

})

</script>


<style scoped>
section {
  @apply bg-blue-700 py-20 mb-4 items-center;
}

div {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center;
}

.center-txt {
  @apply text-center;
}

h1 {
  @apply text-4xl font-extrabold text-white sm:text-5xl md:text-6xl;
}

p {
  @apply my-4 text-xl text-white;
}
</style>

<template>
    
    <section>
      <div>
        <div class="center-txt">
          <h1>
            {{ title }}
          </h1>
          <p>
            {{ subtitle }}
          </p>
        </div>
      </div>
    </section>

</template>
