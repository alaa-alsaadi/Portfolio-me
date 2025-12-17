<template>
    <section id="contact" class="container mx-auto py-16 px-4 md:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-foreground mb-4 text-center animate-slide-up">Contact & Availability</h2>
        <p class="text-lg text-secondary-foreground mb-12 text-center max-w-2xl mx-auto">
            I'm currently <span class="text-primary-DEFAULT">{{ personalInfo.availability }}</span>. Feel free to reach
            out!
        </p>

        <div
            class="max-w-xl mx-auto bg-card/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-border animate-scale-in">
            <form class="space-y-6" @submit.prevent="submitForm">
                <div>
                    <label for="name" class="block text-sm font-medium text-foreground">Name</label>
                    <input type="text" id="name" name="name"
                        class="mt-1 block w-full bg-input border-border rounded-md shadow-sm p-3 text-foreground focus:ring-primary-DEFAULT focus:border-primary-DEFAULT" />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium text-foreground">Email</label>
                    <input type="email" id="email" name="email"
                        class="mt-1 block w-full bg-input border-border rounded-md shadow-sm p-3 text-foreground focus:ring-primary-DEFAULT focus:border-primary-DEFAULT" />
                </div>
                <div>
                    <label for="message" class="block text-sm font-medium text-foreground">Message</label>
                    <textarea id="message" name="message" rows="5"
                        class="mt-1 block w-full bg-input border-border rounded-md shadow-sm p-3 text-foreground focus:ring-primary-DEFAULT focus:border-primary-DEFAULT"></textarea>
                </div>
                <Button type="submit" class="w-full">Send Message</Button>
            </form>

            <div class="mt-8 text-center">
                <p class="text-md text-secondary-foreground">You can also find me on:</p>
                <div class="mt-4 flex justify-center space-x-6">
                    <a v-for="link in personalInfo.socialLinks" :key="link.name" :href="link.url" target="_blank"
                        class="text-secondary-foreground hover:text-primary-DEFAULT transition-colors">
                        <span :class="link.icon" class="w-8 h-8"></span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';

interface PersonalInfo {
    name: string;
    title: string;
    specialization?: string;
    socialLinks: { name: string; url: string; icon: string }[];
    cvDownloadLink: string;
    availability: string;
}

interface Props {
    personalInfo: PersonalInfo;
}

defineProps<Props>();

const submitForm = () => {
    // Handle form submission logic here
    console.log('Form submitted!');
};
</script>
