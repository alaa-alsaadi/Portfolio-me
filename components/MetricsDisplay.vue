<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Years of Experience -->
    <div
      class="group relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up"
      style="animation-delay: 0.1s">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{{ metrics.yearsExperience }}+</h4>
          <p class="text-sm text-muted-foreground mt-1.5">Years of Experience</p>
        </div>
        <div class="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
          <span class="i-lucide-award w-8 h-8 text-blue-500"></span>
        </div>
      </div>
    </div>

    <!-- Completed Projects -->
    <div
      class="group relative overflow-hidden bg-gradient-to-br from-green-500/10 to-green-600/5 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up"
      style="animation-delay: 0.2s">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{{ metrics.completedProjects }}+</h4>
          <p class="text-sm text-muted-foreground mt-1.5">Completed Projects</p>
        </div>
        <div class="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
          <span class="i-lucide-check-circle w-8 h-8 text-green-500"></span>
        </div>
      </div>
    </div>

    <!-- Client Collaborations -->
    <div
      class="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up"
      style="animation-delay: 0.3s">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{{ metrics.clientCollaborations }}+
          </h4>
          <p class="text-sm text-muted-foreground mt-1.5">Client Collaborations</p>
        </div>
        <div class="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
          <span class="i-lucide-users w-8 h-8 text-purple-500"></span>
        </div>
      </div>
    </div>

    <!-- GitHub Stars -->
    <div
      class="group relative overflow-hidden bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up"
      style="animation-delay: 0.4s">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">
            {{ metrics.githubStars.toLocaleString() }}
          </h4>
          <p class="text-sm text-muted-foreground mt-1.5">GitHub Stars</p>
        </div>
        <div class="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
          <span class="i-lucide-star w-8 h-8 text-yellow-500"></span>
        </div>
      </div>
    </div>

    <!-- Core Technologies -->
    <div
      class="group relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up"
      style="animation-delay: 0.5s">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{{ metrics.coreTechnologies.length }}+
          </h4>
          <p class="text-sm text-muted-foreground mt-1.5">Core Technologies</p>
        </div>
        <div class="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
          <span class="i-lucide-cpu w-8 h-8 text-orange-500"></span>
        </div>
      </div>
    </div>

    <!-- Project Completion Rate -->
    <div
      class="group relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-pink-600/5 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all hover:transform hover:scale-105 cursor-pointer animate-slide-up"
      style="animation-delay: 0.6s">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{{ metrics.projectCompletionRate }}%
          </h4>
          <p class="text-sm text-muted-foreground mt-1.5">Success Rate</p>
        </div>
        <div class="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors">
          <span class="i-lucide-trending-up w-8 h-8 text-pink-500"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Metrics {
  yearsExperience: number;
  completedProjects: number;
  clientCollaborations: number;
  githubStars: number;
  coreTechnologies: string[];
  projectCompletionRate: number;
}

interface Props {
  metrics: Metrics;
}

defineProps<Props>();
</script>
