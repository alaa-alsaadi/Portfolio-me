<template>
  <section class="container mx-auto py-16 px-4 md:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-foreground mb-4 text-center">My Activity</h2>
    <p class="text-lg text-secondary-foreground mb-12 text-center max-w-2xl mx-auto">
      Overview of my project activity throughout the year.
    </p>

    <div class="bg-card p-6 rounded-lg shadow-lg">
      <h3 class="text-xl font-semibold text-foreground mb-4">Projects Completed per Month</h3>
      <div class="grid grid-cols-6 sm:grid-cols-12 gap-2 items-end h-48">
        <div v-for="item in activity" :key="item.month" class="flex flex-col items-center justify-end h-full">
          <div
            class="w-full rounded-t-sm bg-primary-DEFAULT transition-all duration-300 ease-out"
            :style="{ height: (item.projects / maxProjects) * 100 + '%', minHeight: '5%' }"
          ></div>
          <p class="text-xs text-muted-foreground mt-1">{{ item.month }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ActivityItem {
  month: string;
  projects: number;
}

interface Props {
  activity: ActivityItem[];
}

const props = defineProps<Props>();

const maxProjects = computed(() => {
  return Math.max(...props.activity.map(item => item.projects));
});
</script>

