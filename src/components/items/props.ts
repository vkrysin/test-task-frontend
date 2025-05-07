import type { Item } from '@/types';

type ItemWithState = Item & {
    isActive?: boolean;
};

export interface ItemContainerProps {
    items: ItemWithState[];
}

export interface ItemProps {
    item: ItemWithState;
}
