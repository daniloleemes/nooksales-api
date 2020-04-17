import { Document } from 'mongoose';

export interface Listing extends Document {
    readonly userId: string;
    readonly itemId: string;
    readonly sellOnly: boolean;
    readonly tradeOnly: boolean;
    readonly itemsWanted: string[];
    readonly price: number;
}