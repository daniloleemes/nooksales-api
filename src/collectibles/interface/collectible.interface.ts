import { Document } from 'mongoose';

export interface CollectibleActiveTimes extends Document{
    readonly startTime: number;
    readonly endTime: number;
}

export interface CollectibleMaterial extends Document {
    readonly count: number;
    readonly itemName: string;
}

export interface Collectible extends Document {
    readonly gameId: string;
    readonly name: string;
    readonly image: string;
    readonly obtainedFrom: string;
    readonly category: string;
    readonly catchPhrase: string;
    readonly museumPhrase: string;
    readonly house: string;
    readonly model: string;
    readonly rarity: string;
    readonly shadow: string;
    readonly size: string;
    readonly unlocksAfter: string;
    readonly weather: string;
    readonly uses: string;
    readonly buy: number;
    readonly nookMiles: number;
    readonly number: number;
    readonly sell: number;
    readonly variant: boolean;
    readonly customize: boolean;
    readonly dIY: boolean;
    readonly reorder: boolean;
    readonly vFX: boolean;
    readonly variants: string[];
    readonly activeMonthsNorth: number[];
    readonly activeMonthsSouth: number[];
    readonly activeTimes: CollectibleActiveTimes[];
    readonly materials: CollectibleMaterial[];
}