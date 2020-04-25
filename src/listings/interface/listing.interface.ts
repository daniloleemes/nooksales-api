import { Document } from 'mongoose';

export interface Listing extends Document {
    readonly owner: string;
    readonly item: string;
    readonly sellOnly: boolean;
    readonly tradeOnly: boolean;
    readonly itemsWanted: string[];
    readonly price: number;
    readonly status: string;
}