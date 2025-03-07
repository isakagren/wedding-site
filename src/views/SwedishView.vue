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
        <RouterLink to="/en"><img src="@/assets/en-flag.svg" alt="English flag"></RouterLink>
      </nav>
    </div>

    <div class="h-lvh">
      <img src="@/assets/images/left-forest.png" class="absolute bottom-0 left-0 lg:max-w-7/12 -z-20 max-w-10/12 sm:max-w-9/12">
      <img src="@/assets/images/right-forest.png" class="absolute bottom-0 right-0 lg:max-w-7/12 -z-10 max-w-10/12 sm:max-w-9/12">

      <div class="container mx-auto p-4 text-center">
        <h1 class="text-ri-dark-green font-[Book] text-2xl">Välkommen att fira vårt bröllop tillsammans med oss.</h1>
        <img src="@/assets/logos/Ri Logo - dark green.svg" class="mx-auto mt-4 max-w-9/12"/>
        <a class="bg-ri-light-green text-ri-dark-green px-6 py-4 rounded-full font-[Heavy] mt-4 inline-block" href="https://forms.gle/wtQT6D1VGi83dsRe8">Svara på inbjudan</a>
      </div>
    </div>

    <div class="max-w-xl mx-auto p-4" style="margin-top: -4em">
      <h1 class="font-[Heavy] text-2xl text-ri-green my-2">Välkommen</h1>
      <p>Varmt välkommen att fira vårat bröllop! Vi är så glada att du vill vara med och dela denna speciella dag med oss. Mer information kommer fyllas på här så småningom. Finns det några funderingar så får ni gärna kontakta oss.</p>
      <br>
      <p><em>Vi uppdaterar hemsidan allt eftersom, så kika gärna in igen lite senare för att se de senaste nyheterna. Vi ser fram emot att dela mer med er snart!</em></p>

      <h1 class="font-[Heavy] text-2xl text-ri-green mb-2 mt-8">Vigseln</h1>
      <p>Vigseln kommer vara i Elimkyrkan klockan 12.</p>
      <p>Entré från Fredsgatan 1, Sundsvall.</p>


      <h1 class="font-[Heavy] text-2xl text-ri-green mb-2 mt-8">Festen</h1>
      <p>Senare fortsätter vi med en fest i Hagakyrkan klockan 16. Middag kommer serveras senare under kvällen.</p>
      <p>Hagavägen 21, Sundsvall.</p>

    </div>

  </main>
</template>
