import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectID,
    itemId: mongoose.Schema.Types.ObjectID,
    itemsWanted: [mongoose.Schema.Types.ObjectID],
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    sellOnly: Boolean,
    tradeOnly: Boolean,
    price: Number
});