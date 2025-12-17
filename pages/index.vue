<template>
  <NuxtLayout name="dashboard">
    <!-- Hero Section -->
    <HeroSection :personal-info="personalInfo" :metrics="metrics" />

    <!-- Skills Section -->
    <section id="skills" class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies I work with to build amazing digital experiences
        </p>
      </div>
      <SkillsVisualization />
    </section>

    <!-- Projects Section -->
    <section id="projects" class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <ProjectsSection :projects="projects" />
    </section>

    <!-- Experience Section -->
    <section id="experience">
      <ExperienceSection :experience="experience" />
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <AchievementsSection :achievements="achievements" />
    </section>

    <!-- Contact Section -->
    <ContactSection :personal-info="personalInfo" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import ExperienceSection from '~/components/ExperienceSection.vue';
import AchievementsSection from '~/components/AchievementsSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import SkillsVisualization from '~/components/SkillsVisualization.vue';

// Import portfolio data
import { personalInfo, metrics, projects, skills, experience, achievements } from '~/data/portfolioData';

// Set page metadata
useHead({
  title: 'Alaa Abdulhussein - Full Stack Developer',
  meta: [
    {
      name: 'description',
      content: 'A passionate full-stack software developer and UI/UX designer based in Iraq with 8+ years of experience in building amazing digital experiences.'
    },
    { property: 'og:title', content: 'Alaa Abdulhussein - Portfolio' },
    { property: 'og:description', content: 'Full Stack Developer & UI/UX Designer' },
    { property: 'og:type', content: 'website' },
  ],
  htmlAttrs: {
    lang: 'en'
  }
});
</script>
