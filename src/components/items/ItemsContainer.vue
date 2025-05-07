<script setup lang="ts">
import Item from '@/components/items/Item.vue';

import type { Item as ItemType } from '@/types';
import type { ItemContainerProps } from './props';


const emit = defineEmits<{
    itemClicked: [ItemType];
}>();


const { items = [] } = defineProps<ItemContainerProps>();

</script>

<template>
    <div class="container">
        <div class="items">
            <Item v-for="item in items" :key="item.id" :item="item" @click="emit('itemClicked', item)" />
        </div>
        <slot />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.items {
    padding: 0.5rem;
    max-width: 25rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    border: 1px solid black
}
</style>
