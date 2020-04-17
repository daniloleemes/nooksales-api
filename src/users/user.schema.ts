import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    discordId: String,
    nintendoFriendCode: String,
    twitter: String,
    password: String
})