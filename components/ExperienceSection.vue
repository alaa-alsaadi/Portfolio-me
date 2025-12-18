<template>
  <section id="experience" class="container mx-auto py-24 px-4 md:px-6 lg:px-8 overflow-hidden">
    <div class="flex flex-col lg:flex-row gap-16 items-start">
      <!-- Left side: Experience Timeline & Accordion -->
      <div class="w-full lg:w-3/5">
        <div class="space-y-4 mb-12 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Professional <span class="text-primary italic">Journey</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Click on a role to view detailed achievements and responsibilities.
          </p>
        </div>

        <div class="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border/50 before:to-transparent">
          <div v-for="(item, index) in experience" :key="item.id" 
            class="relative flex items-start justify-between md:justify-normal group animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }">
            
            <!-- Icon/Indicator -->
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-md group-hover:bg-primary group-hover:border-primary transition-all duration-300 z-10 shrink-0 mt-6 md:mt-8">
              <span class="i-lucide-briefcase w-5 h-5 group-hover:text-white transition-colors duration-300"></span>
            </div>

            <!-- Content Card (Accordion) -->
            <div class="w-[calc(100%-4rem)] ml-6 md:ml-12 w-full">
              <button 
                @click="toggleItem(item.id)"
                class="w-full text-left p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 group/btn"
                :class="{'ring-2 ring-primary/20 bg-accent/5': expandedIds.includes(item.id)}"
              >
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div class="space-y-1">
                    <span class="text-xs font-bold text-primary tracking-widest uppercase">{{ item.period }}</span>
                    <h3 class="text-xl font-bold text-foreground group-hover/btn:text-primary transition-colors flex items-center gap-2">
                      {{ item.role }}
                      <span class="i-lucide-chevron-down w-5 h-5 transition-transform duration-300" :class="{'rotate-180': expandedIds.includes(item.id)}"></span>
                    </h3>
                    <p class="text-md font-medium text-secondary-foreground flex items-center gap-2">
                       {{ item.company }}
                    </p>
                  </div>
                  <div class="flex gap-2 flex-wrap">
                    <span v-for="tag in (item as any).technologies?.slice(0, 3)" :key="tag" class="px-2 py-1 rounded-md bg-muted text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Collapsible Details -->
                <transition
                  enter-active-class="transition-all duration-300 ease-out"
                  leave-active-class="transition-all duration-200 ease-in"
                  enter-from-class="max-h-0 opacity-0 transform -translate-y-2"
                  enter-to-class="max-h-[500px] opacity-100 transform translate-y-0"
                  leave-from-class="max-h-[500px] opacity-100 transform translate-y-0"
                  leave-to-class="max-h-0 opacity-0 transform -translate-y-2"
                >
                  <div v-if="expandedIds.includes(item.id)" class="mt-6 pt-6 border-t border-border/50">
                    <ul class="space-y-4">
                      <li v-for="desc in item.description" :key="desc" class="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                        <span class="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                        {{ desc }}
                      </li>
                    </ul>
                    
                    <div v-if="(item as any).achievements" class="mt-6 space-y-3">
                      <p class="text-xs font-bold text-foreground uppercase tracking-widest">Key Achievements</p>
                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div v-for="ach in (item as any).achievements" :key="ach" class="p-3 rounded-lg bg-accent/5 border border-primary/10 flex gap-3 items-center">
                          <span class="i-lucide-check-circle-2 w-4 h-4 text-primary shrink-0"></span>
                          <span class="text-xs text-secondary-foreground font-medium">{{ ach }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side: New 3D Visual Element (Abstract Floating Nodes) -->
      <div class="w-full lg:w-2/5 sticky top-32 group hidden lg:block">
        <div class="relative h-[600px] w-full flex items-center justify-center perspective-container">
          <!-- Main 3D Composition -->
          <div class="relative w-80 h-80 preserve-3d animate-float-complex">
             <!-- Outer Shell Nodes -->
             <div v-for="i in 12" :key="'node-'+i" 
                class="absolute w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] animate-pulse"
                :style="getNodeStyle(i)">
             </div>
             
             <!-- Connection Lines (SVG) -->
             <svg class="absolute inset-0 w-full h-full preserve-3d" viewBox="0 0 320 320">
               <circle cx="160" cy="160" r="140" fill="none" stroke="currentColor" stroke-width="0.5" class="text-primary/20 opacity-50" />
               <circle cx="160" cy="160" r="100" fill="none" stroke="currentColor" stroke-width="0.5" class="text-primary/30 opacity-70" />
               <line x1="80" y1="160" x2="240" y2="160" stroke="currentColor" stroke-width="0.5" class="text-primary/40" />
               <line x1="160" y1="80" x2="160" y2="240" stroke="currentColor" stroke-width="0.5" class="text-primary/40" />
             </svg>

             <!-- Center Orb -->
             <div class="absolute inset-20 rounded-full bg-gradient-to-tr from-primary to-accent blur-md opacity-30 animate-pulse"></div>
             <div class="absolute inset-24 rounded-full bg-background border border-primary/40 shadow-2xl flex items-center justify-center backdrop-blur-xl">
               <div class="text-center">
                 <span class="i-lucide-layers text-primary w-12 h-12 mb-2"></span>
                 <p class="text-[10px] font-bold text-primary tracking-widest uppercase">Expertise</p>
               </div>
             </div>
          </div>

          <!-- Decorative Floating Elements -->
          <div v-for="i in 5" :key="'decor-'+i"
            class="absolute p-3 rounded-xl glass border border-white/10 shadow-xl animate-float"
            :style="getDecorStyle(i)">
            <span :class="getDecorIcon(i)" class="w-5 h-5 text-primary"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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

const expandedIds = ref<string[]>([]);

const toggleItem = (id: string) => {
  if (expandedIds.value.includes(id)) {
    expandedIds.value = expandedIds.value.filter(i => i !== id);
  } else {
    // Keep only one expanded at a time (Accordion behavior)
    expandedIds.value = [id];
  }
};

const getNodeStyle = (i: number) => {
  const angle = (i / 12) * Math.PI * 2;
  const radius = 140;
  const x = Math.cos(angle) * radius + 160;
  const y = Math.sin(angle) * radius + 160;
  const z = Math.sin(angle * 2) * 50;
  return {
    left: `${x - 8}px`,
    top: `${y - 8}px`,
    transform: `translateZ(${z}px)`,
    animationDelay: `${i * 0.2}s`
  };
};

const getDecorStyle = (i: number) => {
  const positions = [
    { top: '10%', right: '10%', delay: '0s' },
    { bottom: '20%', left: '0%', delay: '1.5s' },
    { top: '40%', left: '10%', delay: '3s' },
    { bottom: '5%', right: '15%', delay: '4.5s' },
    { top: '15%', left: '25%', delay: '2s' }
  ];
  return { ...positions[i-1], animationDelay: positions[i-1].delay };
};

const getDecorIcon = (i: number) => {
  const icons = ['i-lucide-code', 'i-lucide-database', 'i-lucide-globe', 'i-lucide-cpu', 'i-lucide-shield'];
  return icons[i-1];
};
</script>

<style scoped>
.perspective-container {
  perspective: 2000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

@keyframes float-complex {
  0%, 100% { transform: rotateY(0deg) translateY(0); }
  50% { transform: rotateY(180deg) translateY(-30px); }
}

.animate-float-complex {
  animation: float-complex 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}
</style>
