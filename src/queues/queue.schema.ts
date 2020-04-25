import * as mongoose from 'mongoose';

export const QueueSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    visitors: [{ type: mongoose.Schema.Types.ObjectID, ref: 'User' }],
    line: [{ type: mongoose.Schema.Types.ObjectID, ref: 'User' }],
    selfManageable: Boolean,
    maxQueueSize: Number,
    maxVisitors: Number,
    description: String,
    price: Number,
    status: {
        type: String,
        enum: ['ACTIVE', 'LOCKED', 'FULL', 'CLOSED'],
        default: 'ACTIVE'
    },
})