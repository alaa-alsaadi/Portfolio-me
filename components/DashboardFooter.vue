<template>
    <footer class="bg-background border-t border-border mt-32">
        <div class="container mx-auto px-4 md:px-6 lg:px-8 py-12">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <!-- About Section -->
                <div class="md:col-span-2">
                    <div class="flex items-center gap-3 mb-4">
                        <NuxtImg :src="personalInfo.avatar" alt="Alaa Abdulhussein" width="48" height="48" format="webp"
                            class="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h3 class="font-bold text-lg">Alaa Abdulhussein</h3>
                            <p class="text-sm text-muted-foreground">Full Stack Developer</p>
                        </div>
                    </div>
                    <p class="text-sm text-muted-foreground max-w-md">
                        Passionate about creating amazing digital experiences with modern web technologies.
                        Available for freelance projects and collaborations.
                    </p>

                    <!-- Social Links -->
                    <div class="flex items-center gap-4 mt-6">
                        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                            rel="noopener noreferrer" class="p-2 rounded-lg hover:bg-accent transition-colors"
                            :aria-label="social.name">
                            <span :class="social.icon" class="w-5 h-5"></span>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.href">
                            <NuxtLink :to="link.href"
                                class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h4 class="font-semibold mb-4">Get in Touch</h4>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-3">
                            <span class="i-lucide-mail w-5 h-5 text-primary mt-0.5"></span>
                            <a href="mailto:contact@munafio.com"
                                class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                contact@gmail.com
                            </a>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="i-lucide-map-pin w-5 h-5 text-primary mt-0.5"></span>
                            <span class="text-sm text-muted-foreground">Iraq</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="i-lucide-clock w-5 h-5 text-primary mt-0.5"></span>
                            <span class="text-sm text-muted-foreground">UTC+3</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-border">
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p class="text-sm text-muted-foreground text-center md:text-left">
                        © {{ new Date().getFullYear() }} Alaa Abdulhussein. All rights reserved.
                    </p>

                    <div class="flex items-center gap-6">
                        <NuxtLink to="/privacy"
                            class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Privacy Policy
                        </NuxtLink>
                        <NuxtLink to="/terms"
                            class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Terms of Service
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Back to Top Button -->
            <button v-show="showBackToTop" @click="scrollToTop"
                class="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all z-40"
                aria-label="Back to top">
                <span class="i-lucide-arrow-up w-5 h-5"></span>
            </button>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { personalInfo } from '~/data/portfolioData';

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/munafio', icon: 'i-lucide-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/munafio', icon: 'i-lucide-linkedin' },
    { name: 'Instagram', url: 'https://instagram.com/munafio', icon: 'i-lucide-instagram' },
    { name: 'YouTube', url: 'https://youtube.com/munafio', icon: 'i-lucide-youtube' },
];

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
];

const showBackToTop = ref(false);

const handleScroll = () => {
    showBackToTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
