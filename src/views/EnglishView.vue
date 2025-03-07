<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="font-[Book]">
    <div class="">
      <nav class="flex flex-row container mx-auto p-4">
        <ul class="grow flex flex-row">
          <li class="mr-3"></li>
        </ul>
        <RouterLink to="/"><img src="@/assets/se-flag.svg" alt="Swedish flag"></RouterLink>
      </nav>
    </div>

    <div class="h-lvh">
      <img src="@/assets/images/left-forest.png" class="absolute bottom-0 left-0 lg:max-w-7/12 -z-20 max-w-10/12 sm:max-w-9/12">
      <img src="@/assets/images/right-forest.png" class="absolute bottom-0 right-0 lg:max-w-7/12 -z-10 max-w-10/12 sm:max-w-9/12">

      <div class="container mx-auto p-4 text-center">
        <h1 class="text-ri-dark-green font-[Book] text-2xl">Welcome to celebrate our wedding together with us.</h1>
        <img src="@/assets/logos/Ri Logo - dark green.svg" class="mx-auto mt-4 max-w-9/12"/>
        <a class="bg-ri-light-green text-ri-dark-green px-6 py-4 rounded-full font-[Heavy] mt-4 inline-block" href="https://forms.gle/wtQT6D1VGi83dsRe8">RSVP Here</a>
      </div>
    </div>

    <div class="max-w-xl mx-auto p-4" style="margin-top: -4em">
      <h1 class="font-[Heavy] text-2xl text-ri-green my-2">Welcome</h1>
      <p>Warm welcome to our wedding! We are so happy that you want to join us and share this special day with us. If you have any questions, please feel free to contact us.</p>
      <br>
      <p><em>We're updating the website as we go, so check back later for the latest updates. We can't wait to share more with you soon!</em></p>


      <h1 class="font-[Heavy] text-2xl text-ri-green mb-2 mt-8">The Ceremony</h1>
      <p>The ceremony will take place at Elimkyrkan at 12 PM.</p>
      <p>Entrance from Fredsgatan 1, Sundsvall.</p>

      <h1 class="font-[Heavy] text-2xl text-ri-green mb-2 mt-8">The Reception</h1>
      <p>Later, we will continue with a reception at Hagakyrkan at 4 PM. Dinner will be served later in the evening.</p>
      <p>Hagavägen 21, Sundsvall.</p>

    </div>

  </main>
</template>
