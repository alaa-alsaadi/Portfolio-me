<template>
    <section id="achievements" class="container mx-auto py-16 px-4 md:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Certifications & Honors</h2>
        <p class="text-lg text-secondary-foreground mb-12 text-center max-w-2xl mx-auto">
            Highlights of my professional growth and recognized expertise.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(cert, index) in achievements.certifications" :key="cert.id"
                class="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 p-6 flex flex-col items-start border border-border hover:border-primary/50 transition-all duration-300 group animate-scale-in"
                :style="{ animationDelay: `${index * 0.1}s` }">
                <div
                    class="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <span class="i-lucide-award w-6 h-6"></span>
                </div>
                <h3 class="text-xl font-semibold text-foreground mb-2">{{ cert.title }}</h3>
                <p class="text-sm text-muted-foreground mb-2">{{ cert.issuer }}</p>
                <p class="text-sm text-muted-foreground mb-4">Issued: {{ cert.date }}</p>
                <Button v-if="cert.verificationUrl" variant="link" class="mt-auto text-primary-DEFAULT" as="a"
                    :href="cert.verificationUrl" target="_blank">View Credential</Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    verificationUrl: string;
    badge: string;
}

interface Award {
    id: string;
    title: string;
    description: string;
    date: string;
    icon: string;
}

interface Achievements {
    certifications: Certification[];
    awards: Award[];
    publications: any[];
    openSource: any[];
}

interface Props {
    achievements: Achievements;
}

defineProps<Props>();
</script>
