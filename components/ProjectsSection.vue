<template>
  <section id="projects" class="container mx-auto py-16 px-4 md:px-6 lg:px-8">
    <h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Featured Projects</h2>
    <p class="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
      Explore a selection of my best work, showcasing innovative solutions and technical expertise.
    </p>

    <!-- Projects Grid - Show only featured -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <div v-for="(project, index) in featuredProjects" :key="project.id"
        class="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col border border-border hover:border-primary/50 group animate-scale-in"
        :style="{ animationDelay: `${index * 0.1}s` }">

        <!-- Status Badge -->
        <div class="absolute top-4 right-4 z-10">
          <span v-if="project.status === 'completed'"
            class="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
            ✓ Completed
          </span>
          <span v-else-if="project.status === 'active'"
            class="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full animate-pulse">
            ● Active
          </span>
        </div>

        <NuxtImg :src="project.thumbnail" :alt="project.title" format="webp" loading="lazy" height="300"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-foreground mb-2">
            {{ project.title }}
          </h3>
          <p class="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
            {{ project.description }}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.techStack.slice(0, 3)" :key="tech"
              class="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
              {{ tech }}
            </span>
            <span v-if="project.techStack.length > 3"
              class="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
              +{{ project.techStack.length - 3 }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Projects Button -->
    <div class="text-center">
      <NuxtLink to="/projects"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all group">
        <span>View All Projects</span>
        <span class="i-lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"></span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  status: "completed" | "active" | "in-progress";
  techStack: string[];
  demoLink: string | null;
  githubLink: string | null;
  caseStudyLink: string | null;
  completionPercentage: number;
  startDate: string;
  endDate: string | null;
  featured: boolean;
}

const props = defineProps<{
  projects: Project[];
}>();

const featuredProjects = computed(() => {
  return props.projects.filter(p => p.featured).slice(0, 6);
});
</script>
