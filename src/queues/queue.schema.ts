import * as mongoose from 'mongoose';

export const QueueSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectID,
    visitors: [mongoose.Schema.Types.ObjectID],
    line: [mongoose.Schema.Types.ObjectID],
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