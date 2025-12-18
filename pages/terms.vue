<template>
  <NuxtLayout name="dashboard">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-20 min-h-[60vh]">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Terms of Service</h1>
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-lg text-muted-foreground mb-4">
            Last updated: {{ new Date().getFullYear() }}
          </p>
          <p>
            By accessing this website, you agree to be bound by these restrictions.
          </p>
          <!-- Placeholder content -->
          <h3>Usage</h3>
          <p>The content on this portfolio is for informational purposes only.</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service - Alaa Abdulhussein',
  description: 'Terms of Service for Alaa Abdulhussein Portfolio',
});
</script>
