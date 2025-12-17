<template>
  <section id="experience" class="container mx-auto py-16 px-4 md:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Experience</h2>
    <p class="text-lg text-secondary-foreground mb-12 text-center max-w-2xl mx-auto">
      My professional journey and key milestones.
    </p>

    <div class="space-y-8">
      <div v-for="(item, index) in experience" :key="item.id" class="flex items-start gap-4 group animate-slide-up"
        :style="{ animationDelay: `${index * 0.1}s` }">
        <div
          class="w-12 h-12 flex-shrink-0 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg group-hover:shadow-primary/50 transition-all group-hover:scale-110">
          <span class="i-lucide-briefcase w-6 h-6"></span>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-foreground">{{ item.role }}</h3>
          <p class="text-md text-secondary-foreground">{{ item.company }}</p>
          <p class="text-sm text-muted-foreground">{{ item.period }}</p>
          <ul class="list-disc list-inside text-base text-muted-foreground mt-2">
            <li v-for="desc in item.description" :key="desc">{{ desc }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface Props {
  experience: ExperienceItem[];
}

defineProps<Props>();
</script>
