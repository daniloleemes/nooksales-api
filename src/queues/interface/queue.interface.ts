import { Document } from 'mongoose';

export interface Queue extends Document {
    readonly owner: string;
    readonly description: string;
    readonly status: string;
    readonly line: string[];
    readonly visitors: string[];
    readonly maxQueueSize: number;
    readonly maxVisitors: number;
    readonly price: number;
    readonly selfManageable: boolean;
}