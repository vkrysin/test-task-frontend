import { ref, onMounted } from 'vue';

import type { Item } from '@/types';

import clientItems from '@/data/clientItems.json';

const items = ref<Item[]>([]);
export const MaX_ACTIVE_ITEMS = 6;

export function useClientItems() {
    const activeItems = ref<Item[]>([]);

    onMounted(() => {
        getItems();
    });

    function getItems() {
        items.value = clientItems;
    }

    function toggleItemActiveState(item: Item) {
        console.log('toggleItemActiveState', item, activeItems.value);
        
        if (activeItems.value.length >= MaX_ACTIVE_ITEMS || activeItems.value.some((i) => i.id === item.id)) {
            activeItems.value = activeItems.value.filter((i) => i.id !== item.id);
            return;
        }
        activeItems.value.push(item);
    }

    function isItemActive(item: Item) {
        return activeItems.value.some((i) => i.id === item.id);
    }

    function removeActiveItem(item: Item) {
        activeItems.value = activeItems.value.filter((i) => i.id !== item.id);
    }

    return {
        items,
        activeItems,
        addActiveItem: toggleItemActiveState,
        removeActiveItem,
        isItemActive,
    };
}
