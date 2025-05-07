<script setup lang="ts">
import type { ItemProps } from './props';

const { item } = defineProps<ItemProps>();

</script>

<template>
    <div class="item" :class="{ 'active': item.isActive }" >
        {{ item.name }}
    </div>
</template>

<style scoped>
.item {
    max-height: 5rem;
    width: 5rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    word-wrap: break-word;
    text-wrap: balance;

    &:hover {
        cursor: pointer;
    }
}

.active {
    border-color: blue;
}
</style>
