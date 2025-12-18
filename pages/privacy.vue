<template>
  <NuxtLayout name="dashboard">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-20 min-h-[60vh]">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-lg text-muted-foreground mb-4">
            Last updated: {{ new Date().getFullYear() }}
          </p>
          <p>
            Your privacy is important to us. This privacy policy explains how we handle your personal information.
          </p>
          <!-- Placeholder content -->
          <h3>Information Collection</h3>
          <p>We do not collect any personal information unless you voluntarily provide it via the contact form.</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - Alaa Abdulhussein',
  description: 'Privacy Policy for Alaa Abdulhussein Portfolio',
});
</script>
