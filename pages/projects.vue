<template>
    <NuxtLayout name="dashboard">
        <div class="min-h-screen py-24">
            <!-- Header Section -->
            <section class="container mx-auto px-4 md:px-6 lg:px-8 mb-16">
                <div class="text-center max-w-3xl mx-auto animate-slide-up">
                    <h1 class="text-5xl md:text-6xl font-bold text-foreground mb-6">
                        Crafting Digital Experiences
                    </h1>
                    <p class="text-lg text-muted-foreground">
                        Explore a curated selection of my work, showcasing innovative solutions and technical expertise
                        across various domains.
                    </p>
                </div>
            </section>

            <!-- All Projects Grid -->
            <section class="container mx-auto px-4 md:px-6 lg:px-8 mb-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(project, index) in projects" :key="project.id"
                        class="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col border border-border hover:border-primary/50 group animate-scale-in relative"
                        :style="{ animationDelay: `${index * 0.05}s` }">

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
                            <span v-else-if="project.status === 'in-progress'"
                                class="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                ⟳ In Progress
                            </span>
                        </div>

                        <img :src="project.thumbnail" :alt="project.title"
                            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="text-xl font-bold text-foreground mb-2">
                                {{ project.title }}
                            </h3>
                            <p class="text-sm text-muted-foreground mb-4 flex-grow">
                                {{ project.description }}
                            </p>

                            <!-- Tech Stack -->
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span v-for="tech in project.techStack.slice(0, 4)" :key="tech"
                                    class="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                                    {{ tech }}
                                </span>
                                <span v-if="project.techStack.length > 4"
                                    class="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                                    +{{ project.techStack.length - 4 }}
                                </span>
                            </div>

                            <!-- Links -->
                            <div class="flex gap-3 mt-auto pt-4 border-t border-border/50">
                                <a v-if="project.demoLink" :href="project.demoLink" target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-1 text-sm text-primary hover:underline">
                                    <span class="i-lucide-external-link w-4 h-4"></span>
                                    <span>Demo</span>
                                </a>
                                <a v-if="project.githubLink" :href="project.githubLink" target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex items-center gap-1 text-sm text-primary hover:underline">
                                    <span class="i-lucide-github w-4 h-4"></span>
                                    <span>Code</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- GitHub CTA Section -->
            <section class="container mx-auto px-4 md:px-6 lg:px-8">
                <div
                    class="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-12 text-center animate-scale-in">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl font-bold text-foreground mb-4">
                            Explore More Projects
                        </h2>
                        <p class="text-muted-foreground mb-8">
                            Curious about my other work? I have many more open-source projects and contributions waiting
                            for you to discover!
                        </p>
                        <a href="https://github.com/alaa-abdulhussein" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all group">
                            <span class="i-lucide-github w-5 h-5"></span>
                            <span>View My GitHub Profile</span>
                            <span
                                class="i-lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"></span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { projects } from '@/data/portfolioData';

useHead({
    title: 'Projects - Alaa Abdulhussein',
    meta: [
        {
            name: 'description',
            content: 'Explore my portfolio of web development projects, mobile apps, and IT solutions. Featuring Laravel, Vue.js, Flutter, and more.',
        },
        { property: 'og:title', content: 'Projects - Alaa Abdulhussein' },
        { property: 'og:description', content: 'Showcasing 23+ completed projects across web development, mobile apps, and IT infrastructure.' },
        { property: 'og:type', content: 'website' },
    ],
});
</script>
