<template>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in">
        <!-- Background Grid Pattern -->
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <!-- Animated Background Shapes -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Large Circle -->
            <div class="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
                style="animation-duration: 20s;"></div>
            <!-- Medium Circle -->
            <div class="absolute bottom-32 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
                style="animation-duration: 15s; animation-delay: -5s;"></div>
            <!-- Small Circle Top Left -->
            <div class="absolute top-40 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-float"
                style="animation-duration: 18s; animation-delay: -8s;"></div>
            <!-- Small Circle Bottom Right -->
            <div class="absolute bottom-20 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-float"
                style="animation-duration: 22s; animation-delay: -3s;"></div>

            <!-- Geometric Shapes -->
            <div
                class="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rotate-45 animate-spin-slow">
            </div>
            <div
                class="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rotate-12 animate-pulse-slow">
            </div>
        </div>

        <!-- Gradient Orbs -->
        <div class="absolute top-20 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div class="container mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                <!-- Left Side: Personal Info -->
                <div class="flex-1 text-center lg:text-left space-y-8 animate-slide-up">
                    <!-- Avatar & Availability Badge -->
                    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                        <div class="relative">
                            <NuxtImg :src="personalInfo.avatar" :alt="personalInfo.name"
                                width="128" height="128" format="webp" loading="eager"
                                class="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20 shadow-xl" />
                            <!-- Availability Badge -->
                            <div
                                class="absolute -bottom-2 -right-2 px-3 py-1 bg-green-500 dark:bg-green-600 text-white text-xs font-medium rounded-full shadow-lg flex items-center gap-1.5 animate-pulse-slow">
                                <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                Available
                            </div>
                        </div>

                        <div class="flex-1">
                            <h1
                                class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight animate-slide-up">
                                Hi, I'm <span
                                    class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{{ personalInfo.name }}</span>
                            </h1>
                            <p class="mt-3 text-xl md:text-2xl text-secondary-foreground font-medium">
                                {{ personalInfo.title }}
                            </p>
                        </div>
                    </div>

                    <!-- Description -->
                    <p class="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        {{ personalInfo.bio }}
                    </p>

                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Button variant="default" as="a" :href="personalInfo.cvDownloadLink" target="_blank"
                            class="w-full sm:w-auto">
                            <span class="i-lucide-download w-4 h-4 mr-2"></span>
                            Download CV
                        </Button>
                        <Button variant="outline" as="a" href="#contact" class="w-full sm:w-auto">
                            <span class="i-lucide-mail w-4 h-4 mr-2"></span>
                            Contact Me
                        </Button>
                    </div>

                    <!-- Social Links -->
                    <div class="flex items-center justify-center lg:justify-start gap-4">
                        <a v-for="link in personalInfo.socialLinks" :key="link.name" :href="link.url" target="_blank"
                            rel="noopener noreferrer"
                            class="p-3 rounded-lg bg-card hover:bg-accent border border-border hover:border-primary transition-all group"
                            :aria-label="link.name">
                            <span :class="link.icon"
                                class="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors"></span>
                        </a>
                    </div>
                </div>

                <!-- Right Side: Code Preview -->
                <div class="flex-1 w-full max-w-xl animate-scale-in">
                    <div class="bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                        <!-- Terminal Header -->
                        <div class="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
                            <div class="flex gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span class="text-xs text-muted-foreground ml-2 font-mono">developer.ts</span>
                        </div>

                        <!-- Code Content -->
                        <div class="p-6 font-mono text-sm">
                            <pre class="text-foreground"><code><span class="text-purple-500">const</span> <span class="text-blue-400">developer</span> <span class="text-white">=</span> {
  <span class="text-green-400">name</span><span class="text-white">:</span> <span class="text-amber-400">"{{ personalInfo.name }}"</span>,
  <span class="text-green-400">role</span><span class="text-white">:</span> <span class="text-amber-400">"{{ personalInfo.title }}"</span>,
  <span class="text-green-400">skills</span><span class="text-white">:</span> [
    <span class="text-amber-400">"Vue.js"</span>, 
    <span class="text-amber-400">"Nuxt.js"</span>, 
    <span class="text-amber-400">"Laravel"</span>,
    <span class="text-amber-400">"Flutter"</span>
  ],
  <span class="text-green-400">passion</span><span class="text-white">:</span> <span class="text-amber-400">"Building amazing experiences"</span>,
  <span class="text-green-400">available</span><span class="text-white">:</span> <span class="text-orange-400">true</span>
};</code></pre>
                        </div>

                        <!-- Stats Badges -->
                        <div class="px-6 pb-6 flex items-center gap-4 flex-wrap">
                            <div
                                class="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full flex items-center gap-2">
                                <span class="i-lucide-code w-4 h-4 text-primary"></span>
                                <span class="text-xs font-medium">{{ metrics.yearsExperience }}+ Years</span>
                            </div>
                            <div
                                class="px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full flex items-center gap-2">
                                <span class="i-lucide-star w-4 h-4 text-accent"></span>
                                <span class="text-xs font-medium">{{ metrics.githubStars }} GitHub Stars</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Metrics Display -->
            <MetricsDisplay :metrics="metrics" class="mt-20" />
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import MetricsDisplay from '~/components/MetricsDisplay.vue';

interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    socialLinks: { name: string; url: string; icon: string }[];
    cvDownloadLink: string;
    availability: string;
}

interface Metrics {
    yearsExperience: number;
    completedProjects: number;
    clientCollaborations: number;
    githubStars: number;
    coreTechnologies: string[];
    projectCompletionRate: number;
}

interface Props {
    personalInfo: PersonalInfo;
    metrics: Metrics;
}

defineProps<Props>();
</script>

<style scoped>
.bg-grid-pattern {
    background-image:
        linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
        linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
    background-size: 40px 40px;
}
</style>
