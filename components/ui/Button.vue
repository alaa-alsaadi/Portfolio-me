<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { buttonVariants, cn } from './utils'

interface Props extends /* @vue-ignore */ PrimitiveProps {
    variant?: VariantProps<typeof buttonVariants>['variant']
    size?: VariantProps<typeof buttonVariants>['size']
    asChild?: boolean
}

withDefaults(defineProps<Props>(), {
    variant: 'default',
    size: 'default',
    asChild: false,
})
</script>

<template>
  <Primitive
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </Primitive>
</template>
