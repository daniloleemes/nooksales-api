import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema({
    userId: String,
    itemId: String,
    sellOnly: Boolean,
    tradeOnly: Boolean,
    itemsWanted: [String],
    price: Number
});