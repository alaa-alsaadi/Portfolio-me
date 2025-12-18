<template>
    <nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div class="container mx-auto px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo Section - Left -->
                <NuxtLink to="/" class="flex items-center gap-3 group">
                    <!-- Modern Logo -->
                    <div class="relative flex items-center justify-center w-10 h-10 group-hover:scale-105 transition-all duration-300">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary">
                            <path d="M20 5L33.8564 12.5V27.5L20 35L6.14359 27.5V12.5L20 5Z" fill="url(#logo_gradient)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                            <defs>
                                <linearGradient id="logo_gradient" x1="20" y1="5" x2="20" y2="35" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stop-color="currentColor" stop-opacity="0.2"/>
                                    <stop offset="100%" stop-color="currentColor" stop-opacity="0.05"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <span class="absolute text-foreground font-bold font-heading text-lg tracking-wider">A</span>
                    </div>
                    <div class="hidden sm:block">
                        <span class="font-bold text-base text-foreground tracking-tight">Alaa Abdulhussein</span>
                    </div>
                </NuxtLink>

                <!-- Center Navigation - Desktop -->
                <div class="hidden md:flex items-center gap-1">
                    <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href"
                        class="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all">
                        {{ item.label }}
                    </NuxtLink>
                </div>

                <!-- Right Actions -->
                <div class="flex items-center gap-2">
                    <!-- Theme Toggle -->
                    <button @click="toggleTheme" class="p-2.5 rounded-lg hover:bg-accent/10 transition-all"
                        aria-label="Toggle theme">
                        <Transition name="theme-fade" mode="out-in">
                            <span v-if="isDark" key="sun" class="i-lucide-sun w-5 h-5 text-primary"></span>
                            <span v-else key="moon" class="i-lucide-moon w-5 h-5 text-primary"></span>
                        </Transition>
                    </button>

                    <!-- CTA Button (Desktop) -->
                    <NuxtLink to="#contact"
                        class="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-all">
                        <span>Contact</span>
                    </NuxtLink>

                    <!-- Mobile Menu Toggle -->
                    <button @click="mobileMenuOpen = !mobileMenuOpen"
                        class="md:hidden p-2.5 rounded-lg hover:bg-accent/10 transition-all group" aria-label="Toggle menu">
                        <div class="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                            <span class="w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left" :class="{ 'rotate-45 translate-x-1': mobileMenuOpen }"></span>
                            <span class="w-3/4 h-0.5 bg-foreground rounded-full transition-all duration-300 ml-auto group-hover:w-full" :class="{ 'opacity-0 translate-x-full': mobileMenuOpen }"></span>
                            <span class="w-full h-0.5 bg-foreground rounded-full transition-all duration-300 origin-left" :class="{ '-rotate-45 translate-x-1': mobileMenuOpen }"></span>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <Transition name="mobile-slide">
                <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-border/30">
                    <div class="space-y-1">
                        <NuxtLink v-for="item in navItems" :key="item.href" :to="item.href"
                            class="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                            @click="mobileMenuOpen = false">
                            <span :class="item.icon" class="w-4 h-4 text-primary"></span>
                            <span>{{ item.label }}</span>
                        </NuxtLink>
                    </div>

                    <!-- Mobile CTA -->
                    <div class="mt-4 px-4">
                        <NuxtLink to="#contact"
                            class="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                            @click="mobileMenuOpen = false">
                            <span class="i-lucide-send w-4 h-4"></span>
                            <span>Get In Touch</span>
                        </NuxtLink>
                    </div>
                </div>
            </Transition>
        </div>

        <!-- Progress Bar -->
        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-border/30">
            <div class="h-full bg-primary transition-all duration-150" :style="{ width: scrollProgress + '%' }"></div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { personalInfo } from '~/data/portfolioData';

const navItems = [
    { label: 'Home', href: '/', icon: 'i-lucide-home' },
    { label: 'Projects', href: '#projects', icon: 'i-lucide-briefcase' },
    { label: 'Skills', href: '#skills', icon: 'i-lucide-code-2' },
    { label: 'Experience', href: '#experience', icon: 'i-lucide-trophy' },
    { label: 'Contact', href: '#contact', icon: 'i-lucide-mail' },
];

const mobileMenuOpen = ref(false);
const isDark = ref(true);
const scrollProgress = ref(0);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

const updateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollableHeight = documentHeight - windowHeight;
    const progress = (scrollTop / scrollableHeight) * 100;
    scrollProgress.value = Math.min(100, Math.max(0, progress));
};

onMounted(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        isDark.value = false;
        document.documentElement.classList.remove('dark');
    } else {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    }

    // Scroll progress
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    // Close mobile menu on escape
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && mobileMenuOpen.value) {
            mobileMenuOpen.value = false;
        }
    };
    window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollProgress);
});
</script>

<style scoped>
/* Theme Toggle Fade */
.theme-fade-enter-active,
.theme-fade-leave-active {
    transition: all 0.2s ease;
}

.theme-fade-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.theme-fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
}

/* Mobile Menu Slide */
.mobile-slide-enter-active,
.mobile-slide-leave-active {
    transition: all 0.3s ease;
}

.mobile-slide-enter-from,
.mobile-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
