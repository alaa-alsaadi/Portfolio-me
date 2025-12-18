<template>
  <NuxtLayout name="dashboard">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-20 min-h-[60vh]">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6">Blog</h1>
        <p class="text-lg text-muted-foreground mb-8">
          Coming soon! I'll be sharing my thoughts and experiences here.
        </p>
        <NuxtLink to="/" class="px-6 py-3 bg-primary text-primary-foreground rounded-lg inline-block hover:opacity-90 transition-all">
          Return Home
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog - Alaa Abdulhussein',
  description: 'Coming soon - Blog posts by Alaa Abdulhussein',
});
</script>
