<script setup>
import '@fortawesome/fontawesome-free/css/all.css';

</script>

<template>
    <section class="not-found-container">
        <!-- the <i> needed inline styling because of fontawesome -->
        <i style="color: #dcb92e; font-size: 5rem" class="fas fa-exclamation-triangle mb-4 animate-bounce"></i>
        <h1 class="not-found-title">404 Not Found</h1>
      <p class="not-found-message">This page does not exist</p>
      <RouterLink
        to="/"
        class="go-back-link"
        >Go Back</RouterLink
      >
    </section>
</template>

<style scoped>
.not-found-container {
  @apply text-center flex flex-col justify-center items-center h-96;
}


/*
This causes an error because of the fontawesome icon
.not-found-icon {
  @apply fas fa-exclamation-triangle fa-4x text-yellow-400 mb-4 text-7xl animate-bounce;
} */

.not-found-title {
  @apply text-6xl font-bold mb-4 text-orange-700;
}

.not-found-message {
  @apply text-xl mb-5;
}

.go-back-link {
  @apply text-white bg-blue-700 hover:bg-blue-900 rounded-md px-3 py-2 mt-4;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>

