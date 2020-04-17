import * as mongoose from 'mongoose';

export const Listing = new mongoose.Schema({
    userId: String,
    itemId: String,
    sellOnly: Boolean,
    tradeOnly: Boolean,
    itemsWanted: [String],
    price: Number
});