<template>
    <div class="min-h-screen flex flex-col">
        <!-- Navigation -->
        <DashboardNav />

        <!-- Main Content -->
        <main class="flex-1 pt-16">
            <slot />
        </main>

        <!-- Footer -->
        <DashboardFooter />
    </div>
</template>

<script setup lang="ts">
import DashboardNav from '~/components/DashboardNav.vue';
import DashboardFooter from '~/components/DashboardFooter.vue';
</script>
