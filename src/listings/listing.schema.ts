import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectID,
    itemId: mongoose.Schema.Types.ObjectID,
    sellOnly: Boolean,
    tradeOnly: Boolean,
    itemsWanted: [mongoose.Schema.Types.ObjectID],
    price: Number
});