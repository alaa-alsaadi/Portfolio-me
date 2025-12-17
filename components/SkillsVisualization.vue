<template>
  <section class="py-8">
    <h2
      class="bg-gradient-to-t from-dark-1 to-dark-4 dark:from-[#9d9d9d] dark:to-white inline-block text-transparent bg-clip-text text-[2rem] text-xl mb-6">
      Knowledge
    </h2>
    <div class="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden">
      <div class="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
        <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
          <img v-for="skill in skills" :key="skill.name" :alt="skill.name" :src="skill.img" width="70" height="70"
            class="w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-4 grayscale transition-all duration-300 hover:grayscale-0 opacity-50 hover:opacity-100"
            loading="lazy" decoding="async" style="color: transparent" />
        </div>
        <div class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row" aria-hidden="true">
          <img v-for="skill in skills" :key="'dup-' + skill.name" :alt="skill.name" :src="skill.img" width="70"
            height="70"
            class="w-[40px] h-[40px] md:w-[70px] md:h-[70px] mx-4 grayscale transition-all duration-300 hover:grayscale-0 opacity-50 hover:opacity-100"
            loading="lazy" decoding="async" style="color: transparent" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '~/data/portfolioData';
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
