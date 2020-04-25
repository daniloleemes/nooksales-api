import * as mongoose from 'mongoose';

export const ListingSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    item: { type: mongoose.Schema.Types.ObjectID, ref: 'Collectible' },
    itemsWanted: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Collectible' }],
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    sellOnly: Boolean,
    tradeOnly: Boolean,
    price: Number
});