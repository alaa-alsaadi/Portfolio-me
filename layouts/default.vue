<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-background border-b border-border p-4 sticky top-0 z-50">
      <nav class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="text-lg font-bold text-foreground">My Portfolio</NuxtLink>
        <div class="space-x-4">
          <NuxtLink to="#projects" class="text-secondary-foreground hover:text-primary-DEFAULT">Projects</NuxtLink>
          <NuxtLink to="#experience" class="text-secondary-foreground hover:text-primary-DEFAULT">Experience</NuxtLink>
          <NuxtLink to="#achievements" class="text-secondary-foreground hover:text-primary-DEFAULT">Achievements
          </NuxtLink>
          <NuxtLink to="#contact" class="text-secondary-foreground hover:text-primary-DEFAULT">Contact</NuxtLink>
        </div>
      </nav>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-background border-t border-border p-4 text-center text-muted-foreground">
      &copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.
    </footer>
  </div>
</template>
