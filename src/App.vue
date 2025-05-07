<script setup lang="ts">
import { ref, computed } from 'vue';

import Item from '@/components/items/Item.vue';
import ItemsContainer from '@/components/items/ItemsContainer.vue';
import { useClientItems, MaX_ACTIVE_ITEMS } from './composables/useClientItems';

import shopItems from '@/data/items.json';

import type { Item as ItemType } from '@/types';

const { items, activeItems, addActiveItem, isItemActive } = useClientItems();

const selectedItem = ref<ItemType | null>(null);
const shopItemsWithState = computed(() => shopItems.map(item => ({
    ...item,
    isActive: item.id === selectedItem.value?.id,
})))
const itemsWithState = computed(() => items.value.map(item => ({
    ...item,
    isActive: isItemActive(item),
})))

function selectItem(item: ItemType) {
    if (selectedItem.value?.id === item.id) {
        selectedItem.value = null;
        return;
    }
    selectedItem.value = item;
}
</script>

<template>
    <div class="app-container">
        <header class="header">
            <ItemsContainer v-show="activeItems.length" :items="activeItems">
                <div>Selected: {{ activeItems.length }}/{{ MaX_ACTIVE_ITEMS }}</div>
            </ItemsContainer>
            <Item v-if="selectedItem" class="ml-auto" :item="selectedItem" />
        </header>

        <section class="main-container">
            <ItemsContainer :items="itemsWithState" @item-clicked="addActiveItem" />
            <ItemsContainer :items="shopItemsWithState" @item-clicked="selectItem" />
        </section>
    </div>
</template>

<style scoped>
.app-container {
    margin: 1rem;
    padding: 1rem;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
}

.main-container {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.header {
    display: flex;
    gap:  1rem;
}

.ml-auto {
    margin-left: auto;
}
</style>
