<!--setup script help to import components-->
<script setup>
import EchoLogo from '@/assets/images/EchoLogo.png'
import { RouterLink, useRoute } from 'vue-router';

const isActive = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}

</script>

<style scoped>
/*
  This styles the navigation bar at the top of each page.
  It sets the background color to blue, and the border color to a lighter blue.
*/
/**the overflow-x-hidden is to hide the horizontal scroll bar on smaller screens */
nav {
  @apply bg-blue-700 border-b border-blue-500 overflow-x-hidden;
}

/*
  This sets the maximum width of the navigation bar to the width of the
  viewport, minus some padding on the left and right.
*/
nav > div {
  @apply mx-auto max-w-7xl px-2 sm:px-6 lg:px-8;
}

/*
  This sets the layout of the navigation bar to be a flexbox, with the
  elements inside it laid out horizontally.
*/
nav > div > div {
  @apply flex h-20 items-center justify-between;
}

/*
  This sets the layout of the left-hand side of the navigation bar to be a
  flexbox, with the elements inside it laid out horizontally. It also sets the
  width of the left-hand side to take up the full width of the navigation bar.
*/
nav > div > div > div:first-child {
  @apply flex flex-1 items-center justify-center md:justify-start;
}

/*
  This styles the link to the home page, which is the first link in the
  navigation bar. It sets the text color to white, and the background color to
  transparent. It also sets the font size and weight, and adds some padding
  around the text.
*/
nav > div > div > div:first-child > a {
  @apply flex flex-shrink-0 items-center mr-4 text-white space-x-4 ;
}

/*
  This styles the logo image, which is the first element inside the link to
  the home page. It sets the height and width of the image to 10px, and sets
  the alt text to "Echo Jobs". It also sets the justify property to the left.
*/
nav > div > div > div:first-child > a > img {
  @apply justify-start h-10 w-auto;
}
/*
  This styles the text inside the link to the home page. It sets the text
  color to white, and the font size and weight. It also adds some padding
  around the text, and sets the text to be hidden on small screens.
*/
nav > div > div > div:first-child > a > span {
  @apply hidden md:block text-white text-2xl font-bold ml-2;
}

/*
  This sets the layout of the right-hand side of the navigation bar to be a
  flexbox, with the elements inside it laid out horizontally. It also sets the
  width of the right-hand side to take up the full width of the navigation bar.
*/
nav > div > div > div:last-child {
  @apply md:ml-auto flex space-x-2 text-white bg-origin-padding ;
}

/*
  This styles the links to the other pages, which are the other elements inside
  the navigation bar. It sets the text color to white, and the background color
  to a darker blue on hover. It also sets the font size and weight, and adds
  some padding around the text.
*/
nav > div > div > div:last-child > a {
  @apply text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition duration-300;
}

.routtohome {
  @apply text-white;
  @apply rounded-md;
  @apply px-3;
  @apply py-2;
  @apply transition;
  @apply duration-300;

  &.active {
    @apply bg-blue-900;
  }

  &:hover {
    @apply hover:bg-green-900;
  }
}

</style>
<template>
  <nav class="bg-blue-700 border-b border-blue-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Left Section: Logo and Home Link -->
        <div class="flex items-center space-x-4">
          <!-- Logo -->
          <RouterLink class=" flex items-center" to="/">
            <img class="h-10 w-auto" :src="EchoLogo" alt="Echo Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">
              Echo Jobs
            </span>
          </RouterLink>

        </div>
        <!-- Right Section: Jobs and Add Job Links -->
        <div class="flex space-x-2">
          <!-- Home Link -->
          <RouterLink
            to="/"
            :class="[isActive('/') ? 'routtohome active' : 'routtohome', 'rounded-md', 'px-3', 'py-2', 'transition', 'duration-300']"
          >
            Home
          </RouterLink>
          <!-- Jobs Link -->
          <RouterLink
            to="/jobs"
            :class="[isActive('/jobs') ? 'routtohome active' : 'routtohome', 'rounded-md', 'px-3', 'py-2', 'transition', 'duration-300']"
          >
            Jobs
          </RouterLink>

          <RouterLink
            to="/jobs/add"
            :class="[isActive('/jobs/add') ? 'routtohome active' : 'routtohome', 'rounded-md', 'px-3', 'py-2', 'transition', 'duration-300']"
          >
            Add Job
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
